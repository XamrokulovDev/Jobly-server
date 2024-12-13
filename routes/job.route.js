const { Router } = require("express");
const router = Router();
const {
    getAllJobs,
    getAllById,
    createJob,
    updateJob,
    deleteJob,
} = require("../controllers/job.controller");

// GET all jobs 
router.get("/", getAllJobs);
// GET by id job
router.get("/:id", getAllById);
// POST create job
router.post("/create", createJob);
// PUT update job
router.put("/update/:id", updateJob);
// DELETE delete job 
router.delete("/delete/:id", deleteJob);

module.exports = router;