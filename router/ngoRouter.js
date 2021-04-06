const router = require ("express").Router();
const ngoController =require("../controllers/ngoController");

router.get("./", ngoController.allNgos);
router.get("/:id", ngoController.getNgo);
router.post("/", ngoController.createNgo);
router.patch("/:id", ngoController.updateNgo);
router.delete("/:id", ngoController.deleteNgo);

module.export = router;