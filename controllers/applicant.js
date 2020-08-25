const Applicant = require("../models/applicant");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const applicant = await Applicant.findById(id);
    if (applicant) {
      return res.json(applicant);
    }
    res.status(404).json({ message: "Applicant not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createApplicant = async (req, res) => {
  try {
    const applicant = await new Applicant(req.body);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateApplicant = async (req, res) => {
  const { id } = req.params;
  await Applicant.findByIdAndUpdate(id, req.body, { new: true }, (error, applicant) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!applicant) {
      return res.status(404).json({ message: "Applicant not found!" });
    }
    res.status(200).json(applicant);
  });
};

const deleteApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Applicant.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Applicant deleted");
    }
    throw new Error("Applicant not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApplicant,
  getApplicants,
  getApplicant,
  updateApplicant,
  deleteApplicant,
};
