"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_test_1 = require("./3_Routes/routes.test");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
// CORS Configuration
app.use((0, cors_1.default)()); // Allow requests from all origins
// Middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Routes
app.use('/api', routes_test_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
