import * as services from "../services";

export const getAllQuestion = async (req, res) => {
    try {
        const response = await services.getAllQuestion();
        return res.status(200).json(response);
    } catch (error) {
        // return internalServerError(res);
    }
};