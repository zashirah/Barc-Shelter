const db = require("../db/connection");
const Appplicant = require("../models/applicant");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const applicants = [
    {
      name: "Zach",
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
      yardIndicator: true,
      fenceIndicator: true,
      windowScreenIndicator: false,
      currentlyOwnPetIndicator: true,
      email: "zachshirah01@gmail.com",
      appointment: "2020-08-28T14:00:00",
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
