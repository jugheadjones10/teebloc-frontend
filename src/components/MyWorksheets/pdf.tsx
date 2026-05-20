import {
  ClipPath,
  Defs,
  Document,
  G,
  Image,
  Link,
  Page,
  Path,
  Rect,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import { DownloadType } from "./pdfDownloadButton";

const TEEBLOC_URL = "https://teebloc.com";

// Number of MCQ text answers to show per row in the multi-column grid
const MCQ_COLUMNS = 5;

const LOGO_SIZE = 36;
const QUESTION_IMAGE_WIDTH = 400;
const QUESTION_IMAGE_MAX_HEIGHT = 680;

function TeeblocIcon({ size = LOGO_SIZE }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 282 282">
      <Rect width="282" height="282" rx="32" ry="32" fill="#38B6FF" />
      <Rect x="110.875" y="54" width="65.625" height="175" rx="21" ry="21" fill="white" />
      <Path
        d="M194 54V68C194 79.598 203.402 89 215 89H229V98.625C229 110.223 219.598 119.625 208 119.625H75C63.402 119.625 54 110.223 54 98.625V75C54 63.402 63.402 54 75 54H194Z"
        fill="white"
      />
      <G clipPath="url(#clip0_15_222)">
        <Path d="M194 54L229 89H194V54Z" fill="#184F6E" />
      </G>
      <Defs>
        <ClipPath id="clip0_15_222">
          <Path
            d="M194 54H229V89H202.75C197.918 89 194 85.0825 194 80.25V54Z"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function Header() {
  return (
    <View style={styles.header} fixed>
      <Link src={TEEBLOC_URL} style={styles.headerLink}>
        <View style={styles.headerLogoRow}>
          <TeeblocIcon />
          <Text style={styles.headerText}>Teebloc</Text>
        </View>
      </Link>
    </View>
  );
}

function WorksheetTitle({ title }: { title?: string }) {
  const headerTitle = title?.trim();
  if (!headerTitle) return null;

  return (
    <View style={styles.worksheetTitleContainer}>
      <Text style={styles.worksheetTitle}>{headerTitle}</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Link src={TEEBLOC_URL} style={styles.footerLink}>
        <Text style={styles.footerText}>teebloc</Text>
      </Link>
    </View>
  );
}

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 40,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 4,
  },
  headerLink: {
    textDecoration: "none",
  },
  headerLogoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  worksheetTitleContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    width: "100%",
    minHeight: LOGO_SIZE,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  worksheetTitle: {
    width: "90%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerLink: {
    textDecoration: "none",
  },
  footerText: {
    fontSize: 10,
    color: "#38B6FF",
    fontWeight: "bold",
  },
  questionContainer: {
    marginTop: 20,
    borderBottom: "1px solid black",
  },
  questionImageContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  questionNumber: {
    position: "absolute",
    fontSize: 30,
    left: -30,
  },
  questionImage: {
    // Using width: "70%" sometimes causes the PDF rendering to take infinitely long.
    // width: "70%",
    width: QUESTION_IMAGE_WIDTH,
    maxHeight: QUESTION_IMAGE_MAX_HEIGHT,
  },
  answersPage: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 40,
  },
  answersTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  answerContainer: {
    marginBottom: 20,
  },
  answerImageContainer: {
    flexDirection: "column",
    borderBottom: "1px solid black",
  },
  answerNumber: {
    fontSize: 30,
  },
  answerImage: {
    width: 400,
    marginBottom: 20,
  },
  // MCQ text answer styles
  mcqRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  mcqCell: {
    width: `${100 / MCQ_COLUMNS}%`,
    fontSize: 30,
    paddingVertical: 2,
  },
});

export function PDFDocument({
  questionsData,
  downloadType,
  worksheetTitle,
}: {
  questionsData: any;
  downloadType: DownloadType;
  worksheetTitle?: string;
}) {
  if (!questionsData) return null;

  const questions: any[] = JSON.parse(JSON.stringify(questionsData.questions));

  // Add metadata to the sortedQuestions: for the images, add image_url in the form of
  // https://equally-clean-dogfish.ngrok-free.app/images/question/{questionimgid}
  // sortedQuestions.forEach((question) => {
  //   question.questionimgs.forEach((questionImage) => {
  //     questionImage.image_url = `${
  //       import.meta.env.VITE_BACKEND_API
  //     }/images/question/${questionImage.questionimgid}`;
  //   });
  // });

  return (
    <Document>
      {(downloadType === DownloadType.FULL ||
        downloadType === DownloadType.QUESTIONS_ONLY) && (
        <Page size="A4" style={styles.page}>
          <Header />
          <WorksheetTitle title={worksheetTitle} />
          {questions.map((question: any, questionIndex: number) =>
            question.questionimgs
              .sort((a: any, b: any) => {
                const regex = /Q(\d+)-(\d+)\./;
                const aMatch = a.questionimgname.match(regex);
                const bMatch = b.questionimgname.match(regex);
                if (aMatch && bMatch) {
                  return aMatch[2] - bMatch[2];
                } else {
                  return 0;
                }
              })
              .map((questionImage: any, index: number) => (
                <View
                  key={questionImage.questionimgid}
                  style={{
                    ...styles.questionImageContainer,
                    ...(index === 0 && { marginTop: 20 }),
                    ...(index === question.questionimgs.length - 1 && {
                      borderBottom: "1px solid black",
                      paddingBottom: 20,
                    }),
                  }}
                >
                  <Image
                    src={`${import.meta.env.VITE_BACKEND_API}/images/question/${
                      questionImage.questionimgid
                    }`}
                    style={styles.questionImage}
                  />
                  <Text style={styles.questionNumber}>
                    {index === 0 ? questionIndex + 1 : ""}
                  </Text>
                </View>
              ))
          )}
          <Footer />
        </Page>
      )}

      {(downloadType === DownloadType.FULL ||
        downloadType === DownloadType.ANSWERS_ONLY) && (
        <Page size="A4" style={styles.answersPage}>
          <Header />
          <WorksheetTitle title={worksheetTitle} />
          <Text style={styles.answersTitle}>Answers</Text>

          {(() => {
            const elements: React.ReactNode[] = [];
            let mcqBatch: { index: number; answer: string }[] = [];

            const flushMcqBatch = () => {
              if (mcqBatch.length === 0) return;
              const rows: { index: number; answer: string }[][] = [];
              for (let i = 0; i < mcqBatch.length; i += MCQ_COLUMNS) {
                rows.push(mcqBatch.slice(i, i + MCQ_COLUMNS));
              }
              rows.forEach((row, rowIdx) => (
                elements.push(
                  <View key={`mcq-row-${mcqBatch[0].index}-${rowIdx}`} style={styles.mcqRow}>
                    {row.map((item) => (
                      <Text key={`mcq-${item.index}`} style={styles.mcqCell}>
                        {item.index}. ({item.answer})
                      </Text>
                    ))}
                  </View>
                )
              ));
              mcqBatch = [];
            };

            questions.forEach((question: any, questionIndex: number) => {
              const qNum = questionIndex + 1;

              if (question.answerimgs.length > 0) {
                flushMcqBatch();

                const sortedAnswerImgs = question.answerimgs.sort((a: any, b: any) => {
                  const regex = /Q(\d+)-(\d+)\./;
                  const aMatch = a.answerimgname.match(regex);
                  const bMatch = b.answerimgname.match(regex);
                  if (aMatch && bMatch) {
                    return aMatch[2] - bMatch[2];
                  }
                  return 0;
                });

                elements.push(
                  <View key={question.id} style={styles.answerContainer}>
                    {sortedAnswerImgs.map((answerImage: any, index: number) => (
                      <View
                        key={answerImage.answerimgid}
                        style={styles.answerImageContainer}
                      >
                        <Text style={styles.answerNumber}>
                          {index === 0 ? qNum : ""}
                        </Text>
                        <Image
                          src={`${import.meta.env.VITE_BACKEND_API}/images/answer/${
                            answerImage.answerimgid
                          }`}
                          style={[
                            styles.answerImage,
                            {
                              width: question.paper.paper === 1 ? "40%" : "70%",
                            },
                          ]}
                        />
                      </View>
                    ))}
                  </View>
                );
              } else if (question.mcqanswer) {
                mcqBatch.push({ index: qNum, answer: question.mcqanswer });
              }
            });

            flushMcqBatch();

            return elements;
          })()}
          <Footer />
        </Page>
      )}
    </Document>
  );
}
