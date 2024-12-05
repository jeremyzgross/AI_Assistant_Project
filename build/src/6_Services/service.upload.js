"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.upload = (0, multer_1.default)({
    dest: '/Users/jeremyzgross/AI Projects/AI_Assistant_Project/src/upload/',
    limits: { fileSize: 1000 * 1024 * 1024 },
});
