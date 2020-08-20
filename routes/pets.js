const { Router } = require("express");
const controllers = require("../controllers/pets");

const router = Router();

router.get("/pets", controllers.getPets);
router.get("/pets/:id", controllers.getPet);
router.post("/pets", controllers.createPet);
router.put("/pets/:id", controllers.updatePet);
router.delete("/pets/:id", controllers.deletePet);

module.exports = router;
