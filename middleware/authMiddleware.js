// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

//     try {
//         const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
//         req.user = decoded; // Store user ID in request
//         next();
//     } catch (error) {
//         res.status(400).json({ error: "Invalid token" });
//     }
// };

// module.exports = authMiddleware;
