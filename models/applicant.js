const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Applicant = new Schema({
  applicantName: String,
  dateOfBirth: Date,
  address: String,
  aptNum: String,
  cityState: String,
  phone: String,
  mobile: String,
  hearAboutUs: String,
  employer: String,
  position: String,
  workSchedule: String,
  employmentLength: String,
  yearlyIncome: String,
  apartmentIndicator: Boolean,
  houseIndicator: Boolean,
  homeTypeOther: String,
  yardIndicator: String,
  fenceIndicator: String,
  windowScreenIndicator: String,
  currentlyOwnPetIndicator: String,
  email: String,
  appointment: Date,
});

module.exports = mongoose.model("applicants", Applicant);
