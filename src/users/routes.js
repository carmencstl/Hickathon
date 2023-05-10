const { Router } = require('express');
const controller =  require('./controller');

const router = Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUsersById);
router.post("/", controller.addUsers);
router.delete("/:id", controller.removeUsers);
router.put("/:id", controller.updateUsers);

module.exports = router;