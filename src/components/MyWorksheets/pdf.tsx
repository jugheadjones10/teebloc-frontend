import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { DownloadType } from "./pdfDownloadButton";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
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
    width: 400,
  },
  answersPage: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
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
    position: "absolute",
    fontSize: 30,
  },
  answerImage: {
    marginLeft: 50,
    width: 400,
    marginBottom: 20,
  },
});

export function PDFDocument({ questionsData, downloadType }) {
  if (!questionsData) return null;

  let questions = JSON.parse(JSON.stringify(questionsData.questions));
  const sortedQuestions = questions.sort((a, b) => {
    return parseInt(a.paper.paper) - parseInt(b.paper.paper);
  });
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
          {sortedQuestions.map((question, questionIndex) =>
            question.questionimgs
              .sort((a, b) => {
                const regex = /Q(\d+)-(\d+)\./;
                const aMatch = a.questionimgname.match(regex);
                const bMatch = b.questionimgname.match(regex);
                if (aMatch && bMatch) {
                  return aMatch[2] - bMatch[2];
                } else {
                  return 0;
                }
              })
              .map((questionImage, index) => (
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
        </Page>
      )}

      {(downloadType === DownloadType.FULL ||
        downloadType === DownloadType.ANSWERS_ONLY) && (
        <Page size="A4" style={styles.answersPage}>
          <Text style={styles.answersTitle}>Answers</Text>

          {sortedQuestions.map((question, questionIndex) => (
            <View key={question.id} style={styles.answerContainer}>
              {question.answerimgs
                .sort((a, b) => {
                  const regex = /Q(\d+)-(\d+)\./;
                  const aMatch = a.answerimgname.match(regex);
                  const bMatch = b.answerimgname.match(regex);
                  if (aMatch && bMatch) {
                    return aMatch[2] - bMatch[2];
                  } else {
                    return 0;
                  }
                })
                .map((answerImage, index) => (
                  <View
                    wrap={false}
                    key={answerImage.answerimgid}
                    style={styles.answerImageContainer}
                  >
                    <Text style={styles.answerNumber}>
                      {index === 0 ? questionIndex + 1 : ""}
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
          ))}
        </Page>
      )}
    </Document>
  );
}
