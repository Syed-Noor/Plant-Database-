// // routes/plantRoutes.js
// const express = require("express");
// const multer = require("multer");
// const { addPlant, getPlants } = require("../controllers/plantController");
// const router = express.Router();
// const upload = multer({ dest: "uploads/" });
// router.post("/data", upload.single("image"), addPlant);
// router.get("/retrivedata", getPlants);
// module.exports = router;
// const express = require("express");
// const multer = require("multer");
// const { addPlant, getPlants } = require("../controllers/plantController");
// // const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // Use memory storage for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// router.post("/data",  upload.single("image"), addPlant); // Protected
// router.get("/retrievedata", getPlants); // Only return user's plants

// module.exports = router;

const express = require("express");
const multer = require("multer");
const { addPlant, getPlants } = require("../controllers/plantController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// No authentication required
router.post("/data", upload.single("image"), addPlant);
router.get("/retrivedata", getPlants);

module.exports = router;
