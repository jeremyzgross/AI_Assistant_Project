"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const test_1 = require("../2_Controllers/test");
exports.router = express_1.default.Router();
exports.router.get('/test', test_1.test);
