const Job = require("../models/job.model");
const asyncHandle = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllJobs = asyncHandle(async (req, res, next) => {
    const jobs = await Job.find();
    res.status(200).json({
        success: true,
        count: jobs.length,
        data: jobs,
    });
});

exports.getAllById = asyncHandle(async (req,res,next)=>{
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        return next(new ErrorResponse(`No job found with id ${id}!`, 404));
    }
    res.status(200).json({
        success: true,
        data: job,
    });
});

exports.createJob = asyncHandle(async (req, res, next) => {
    const { title, description, location, category, jobId } = req.body;

    if(!title || !description || !location || !category || !jobId){
        return next(new ErrorResponse('Please provide all fields', 400));
    }

    const job = await Job.create({ title, description, location, category, jobId });
    res.status(201).json({
        success: true,
        data: job,
    });
});

exports.updateJob = asyncHandle(async (req, res, next) => {
    const { id } = req.params;

    const job = await Job.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!job) {
        return next(new ErrorResponse(`No job found with id ${id}!`, 404));
    }

    res.status(200).json({
        success: true,
        data: job,
    });
});

exports.deleteJob = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        return next(new ErrorResponse(`No job found with id ${id}!`, 404));
    }
    await job.deleteOne();
    res.status(200).json({
        success: true,
        message: `Job with id ${id} successfully deleted!`,
    });
});