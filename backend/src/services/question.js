import db from "../models";

export const getAllQuestion = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Question.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                // include: [
                //     {
                //         model: db.Answer,
                //         as: "question",
                //         attributes: {
                //             exclude: ["createdAt", "updatedAt"],
                //         },
                //     },
                // ],
                
            });
            const questions = response.map((item) => item.toJSON());
            resolve({
                success: true,
                data: questions,
            });
        } catch (error) {
            reject(error);
        }
    });