const { Router } = require("express");
const controllers = require("../controllers/applicant");

const router = Router();

router.get("/applicants", controllers.getApplicants);
router.get("/applicants/:id", controllers.getApplicant);
router.post("/applicants", controllers.createApplicant);
router.put("/applicants/:id", controllers.updateApplicant);
router.delete("/applicants/:id", controllers.deleteApplicant);

module.exports = router;
