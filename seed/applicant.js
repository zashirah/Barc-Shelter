const db = require("../db/connection");
const Appplicant = require("../models/applicant");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const applicants = [
    {
      applicantName: "Zach",
      dateOfBirth: "1994-08-21",
      address: "1372 Hartford Ave SW",
      // aptNum: String,
      cityState: "Atlanta, GA",
      // phone: "7707787387",
      mobile: "7707787387",
      // hearAboutUs: String,
      employer: "Cox",
      position: "Analyst",
      workSchedule: "9-5; M-F",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: false,
      houseIndicator: true,
      // homeTypeOther: String,
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "zachshirah01@gmail.com",
      appointment: "2020-07-29T14:00:00",
    },
    {
      applicantName: "Zach",
      dateOfBirth: "1994-08-21",
      address: "1372 Hartford Ave SW",
      // aptNum: String,
      cityState: "Atlanta, GA",
      // phone: "7707787387",
      mobile: "7707787387",
      // hearAboutUs: String,
      employer: "Cox",
      position: "Analyst",
      workSchedule: "9-5; M-F",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: false,
      houseIndicator: true,
      // homeTypeOther: String,
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "zachshirah01@gmail.com",
      appointment: "2020-09-16T14:00:00",
    },
    {
      applicantName: "Zach",
      dateOfBirth: "1994-08-21",
      address: "1372 Hartford Ave SW",
      // aptNum: String,
      cityState: "Atlanta, GA",
      // phone: "7707787387",
      mobile: "7707787387",
      // hearAboutUs: String,
      employer: "Cox",
      position: "Analyst",
      workSchedule: "9-5; M-F",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: false,
      houseIndicator: true,
      // homeTypeOther: String,
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "zachshirah01@gmail.com",
      appointment: "2020-08-27T12:00:00",
    },
    {
      applicantName: "Zach",
      dateOfBirth: "1994-08-21",
      address: "1372 Hartford Ave SW",
      // aptNum: String,
      cityState: "Atlanta, GA",
      // phone: "7707787387",
      mobile: "7707787387",
      // hearAboutUs: String,
      employer: "Cox",
      position: "Analyst",
      workSchedule: "9-5; M-F",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: false,
      houseIndicator: true,
      // homeTypeOther: String,
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "zachshirah01@gmail.com",
      appointment: "2020-09-01T16:00:00",
    },
  ];

  await Appplicant.insertMany(applicants);
  console.log("Created applicants!");
};
const run = async () => {
  await main();
  db.close();
};

run();
