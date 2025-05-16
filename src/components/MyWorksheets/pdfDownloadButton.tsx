import { wrap } from "comlink";
import { GET_QUESTIONS_BY_ID } from "../Cart/data";
import Worker from "../../workers/pdf.worker?worker";
import { useState } from "react";
import { useLazyQuestionsQuery } from "./helpers";
import { ChevronDownIcon } from "@heroicons/react/solid";

export enum DownloadType {
  FULL,
  ANSWERS_ONLY,
  QUESTIONS_ONLY,
}

/**
 * A top-level component that handles dispatching the PDF job to the worker.
 * This component manages its own worker instance.
 */
export default function PDFDownloadButton({
  worksheet,
  client,
}: {
  worksheet: any;
  client: any;
}) {
  const [loading, setLoading] = useState(false);

  const DownloadButton = ({
    text,
    downloadType,
    btnClassName,
    btnTextClassName,
    style,
  }: {
    text: string;
    downloadType: DownloadType;
    btnClassName: string;
    btnTextClassName: string;
    style: React.CSSProperties;
  }) => {
    return (
      <button
        type="button"
        className={`btn ${btnClassName}`}
        style={style}
        onClick={() => handleDownload(downloadType)}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner"></span> Loading
          </>
        ) : (
          <span className={btnTextClassName}>{text}</span>
        )}
      </button>
    );
  };

  const handleDownload = async (downloadType: DownloadType) => {
    setLoading(true);

    let worker: Worker | null = null;
    try {
      const result = await useLazyQuestionsQuery(
        client,
        GET_QUESTIONS_BY_ID,
        {
          ids: worksheet.worksheets_to_questions.map(
            (wtq: any) => wtq.question_id
          ),
        },
        worksheet.worksheets_to_questions.length
      );
      if (result.data) {
        // Instantiate a new worker for this download
        worker = new Worker();
        const pdfWorker = wrap(worker);
        // Pass questionsOnly parameter to the worker
        const url: string = await pdfWorker.renderPDF(
          result.data,
          downloadType
        );

        const pdfWindow = window.open(url, "_blank");
        pdfWindow?.focus();
        if (pdfWindow) {
          const interval = setInterval(() => {
            if (pdfWindow.closed) {
              // Terminate the worker once the new tab (PDF preview) is closed.
              worker?.terminate();
              clearInterval(interval);
              console.log("Worker terminated as PDF tab has been closed.");
            }
          }, 1000); // Check every second; adjust as necessary.
        } else {
          console.error("Failed to open the PDF tab.");
          // Terminate the worker if you can't show the PDF.
          worker.terminate();
        }
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row">
      <DownloadButton
        text="Download worksheet"
        downloadType={DownloadType.FULL}
        btnClassName="btn-primary"
        btnTextClassName=""
        style={{
          borderRadius: "0.5rem 0 0 0.5rem",
          borderRight: "#a0a0a0 solid 1px",
        }}
      />
      {/* Dropdown toggle */}
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-primary"
          style={{ borderRadius: "0 0.5rem 0.5rem 0" }}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu z-[1] p-2 shadow bg-base-100 rounded-box"
        >
          <li>
            <DownloadButton
              text="Download answers only"
              downloadType={DownloadType.ANSWERS_ONLY}
              btnClassName="w-[200px] bg-base-100 border-none"
              btnTextClassName="pt-2"
              style={{}}
            />
          </li>
          <li>
            <DownloadButton
              text="Download questions only"
              downloadType={DownloadType.QUESTIONS_ONLY}
              btnClassName="w-[200px] bg-base-100 border-none"
              btnTextClassName="pt-2"
              style={{}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
