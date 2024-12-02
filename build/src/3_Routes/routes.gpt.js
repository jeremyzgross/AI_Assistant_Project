"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controller_gpt_1 = require("../2_Controllers/controller.gpt");
exports.router = express_1.default.Router();
exports.router.post('/gpt', controller_gpt_1.gpt);
