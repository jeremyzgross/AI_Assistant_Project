"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
// const uploadPath = '/Users/jeremyzgross/AI Projects/AI_Assistant_Project/src/upload/'
exports.upload = (0, multer_1.default)({
    dest: 'upload/',
    limits: { fileSize: 1000 * 1024 * 1024 },
});
const deleteFile = (uploadPath) => {
    fs_1.default.unlinkSync(uploadPath);
};
exports.deleteFile = deleteFile;
