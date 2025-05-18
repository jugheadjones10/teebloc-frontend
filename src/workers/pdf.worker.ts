import { expose } from "comlink";
import { createElement } from "react";
import { DownloadType } from "../components/MyWorksheets/pdfDownloadButton";
import "./workerShim";

// The worker function accepts the questions data (or any props needed by PDFDocument),
// creates the PDF document, converts it to a blob, and returns a blob URL.
const renderPDF = async (questionsData: any, downloadType: DownloadType) => {
  const { pdf } = await import("@react-pdf/renderer");
  const { PDFDocument } = await import("../components/MyWorksheets/pdf");

  // Create the PDF document element from your PDFDocument component
  const blob = await pdf(
    createElement(PDFDocument, { questionsData, downloadType })
  ).toBlob();

  // Create and return a URL for the blob so that it can be downloaded/opened.
  return URL.createObjectURL(blob);
};

// Expose the renderPDF function to the main thread.
expose({ renderPDF });
