import db from "../models";

export const getAllAnswer = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Answer.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "questionId"],
        },
        include: [
          {
            model: db.Question,
            as: "question",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      const answers = response.map((item) => item.toJSON());
      var selectedQuestions = [];

      answers.forEach(function (item) {
        var questionId = item.question.id;

        // Tìm câu hỏi có questionId trong mảng selectedQuestions
        var existingQuestion = selectedQuestions.find(function (question) {
          return question.id === questionId;
        });

        if (existingQuestion) {
          // Nếu đã tồn tại câu hỏi, thêm đáp án vào câu hỏi đó
          existingQuestion.answers.push({
            id: item.id,
            answer: item.answer,
            result: item.result,
          });
        } else {
          var newQuestion = {
            id: questionId,
            question: item.question.question,
            answers: [
              {
                id: item.id,
                answer: item.answer,
                result: item.result,
              },
            ],
          };
          selectedQuestions.push(newQuestion);
        }
      });
      resolve({
        success: true,
        data: selectedQuestions,
      });
    } catch (error) {
      reject(error);
    }
  });
