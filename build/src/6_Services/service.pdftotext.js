"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdfParseService = void 0;
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const fs_1 = __importDefault(require("fs"));
//PDF Parser
const pdfParseService = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Checking file path:', filePath);
    try {
        if (fs_1.default.existsSync(filePath)) {
            console.log('File exists, reading...');
            try {
                const dataBuffer = yield fs_1.default.promises.readFile(filePath);
                console.log('Buffer loaded, parsing PDF...');
                const data = yield (0, pdf_parse_1.default)(dataBuffer);
                console.log('Parsed PDF Text:', data.text);
                return data.text;
            }
            catch (error) {
                console.error('Error reading file:', error);
            }
        }
        else {
            console.error('File does not exist at:', filePath);
        }
    }
    catch (error) {
        console.error('Error accessing file:', error);
    }
});
exports.pdfParseService = pdfParseService;
