import question from "./question";
import answer from "./answer";

const initRouters = (app) => {
    const initLink = "/api/v1";

    app.use(`${initLink}/question`, question);
    app.use(`${initLink}/answer`, answer);
};

module.exports = initRouters;
