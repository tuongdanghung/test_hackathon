import * as services from "../services";

export const getAllAnswer = async (req, res) => {
    try {
        const response = await services.getAllAnswer();
        return res.status(200).json(response);
    } catch (error) {
        // return internalServerError(res);
    }
};
