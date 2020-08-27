const db = require("../db/connection");
const Appplicant = require("../models/applicant");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const applicants = [
    {
      applicantName: "James",
      dateOfBirth: "1996-03-22",
      address: "111 Steve Ave SW",
      cityState: "Atlanta, GA",
      mobile: "7707787387",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: "Yes",
      houseIndicator: "Yes",
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "james@gmail.com",
      appointment: "2020-08-29T14:00:00",
    },
    {
      applicantName: "Miles",
      dateOfBirth: "1996-03-22",
      address: "111 Steve Ave SW",
      cityState: "Atlanta, GA",
      mobile: "7707787387",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: "Yes",
      houseIndicator: "Yes",
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "james@gmail.com",
      appointment: "2020-09-01T14:00:00",
    },
    {
      applicantName: "Sally",
      dateOfBirth: "1996-03-22",
      address: "111 Steve Ave SW",
      cityState: "Atlanta, GA",
      mobile: "7707787387",
      employmentLength: "1 year",
      yearlyIncome: "$70,000",
      apartmentIndicator: "Yes",
      houseIndicator: "Yes",
      yardIndicator: "Yes",
      fenceIndicator: "Yes",
      windowScreenIndicator: "Yes",
      currentlyOwnPetIndicator: "Yes",
      email: "james@gmail.com",
      appointment: "2020-09-01T14:00:00",
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
