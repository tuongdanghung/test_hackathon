// import { notAuth } from "./handleErrors";

export const isAdmin = (req, res, next) => {
    // check xem account có phải admin hay không
    const { role } = req.user;
    if (role !== "R1") return notAuth("Require role Admin", res);
    next();
};
