// // controllers/plantController.js
// const Plant = require("../models/Plant");
// const addPlant = async (req, res) => {
//     try {
//         const { name, diseaseDescription, remedies, weather } = req.body;
//         const image = req.file ? req.file.path : "";
//         const plant = new Plant({ name, image, diseaseDescription, remedies, weather });
//         await plant.save();
//         res.status(201).json(plant);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// const getPlants = async (req, res) => {
//     try {
//         const plants = await Plant.find();
//         res.status(200).json(plants);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// module.exports = { addPlant, getPlants };
const Plant = require("../models/Plant");

const addPlant = async (req, res) => {
    try {
        const { name, diseaseDescription, remedies, weather } = req.body;
        const image = req.file ? req.file.path : "";
        const plant = new Plant({ name, image, diseaseDescription, remedies, weather });
        await plant.save();
        res.status(201).json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addPlant, getPlants };

