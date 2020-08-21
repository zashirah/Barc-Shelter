const db = require("../db/connection");
const Pet = require("../models/pets");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const pets = [
    {
      type: "cat",
      name: "Cat 001",
      age: 2, // in years or months
      sex: "female",
      breed: "lab",
      bioPersonality: "cat that thinks it's a lab",
      images: [
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      ],
    },
  ];

  await Pet.insertMany(pets);
  console.log("Created pets!");
};
const run = async () => {
  await main();
  db.close();
};

run();