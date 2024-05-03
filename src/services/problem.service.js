const { sanitizeMarkdown } = require("../utils");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // 1. sanitize the markdown for discription
            problemData.description = sanitizeMarkdown(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            throw error; 
        }

    }
}


module.exports = ProblemService;