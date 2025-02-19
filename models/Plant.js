// const mongoose = require("mongoose");
// const plantSchema = new mongoose.Schema({
//     name: String,
//     image: String,
//     diseaseDescription: String,
//     remedies: String,
//     weather: String
// });
// module.exports = mongoose.model("Plant", plantSchema);
const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }, // Stores Cloudinary URL
    diseaseDescription: { type: String },
    remedies: { type: String },
    weather: { type: String },
    
});

module.exports = mongoose.model("Plant", plantSchema);
