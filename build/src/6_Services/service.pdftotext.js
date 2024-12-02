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
// export const pdfToTextService = async () => {
//   try {
//     const filePath = path.join(
//       os.homedir(),
//       'AI Projects',
//       'AI_Assistant_Project',
//       'src',
//       'upload',
//       'JeremyGross_DI_UNI_CV.pdf'
//     );
//     const text = await pdfToText(filePath, {
//       popplerFullPath: '/usr/local/Cellar/poppler/21.12.0/bin/pdftocairo'
//     });
//     console.log('PDF text:', text);
//     // return text
//   } catch (error) {
//     console.error('Error converting PDF to text:', error)
//   }
// }
const pdfParseService = () => __awaiter(void 0, void 0, void 0, function* () {
    // const filePath = path.join(
    //   os.homedir(),
    //   'Downloads',
    //   'JeremyGross_DI_UNI_CV.pdf'
    // )
    const filePath = '/Users/jeremygross/Downloads/JeremyGross_DI_UNI_CV.pdf';
    try {
        if (fs_1.default.existsSync(filePath)) {
            console.log('File exists');
            const dataBuffer = yield fs_1.default.promises.readFile(filePath);
            const data = yield (0, pdf_parse_1.default)(dataBuffer);
            console.log(data.text);
        }
        else {
            console.log('File does not exist');
            throw new Error('PDF file not found or could not be read.');
        }
    }
    catch (error) {
        console.error('Error converting PDF to text:', error);
    }
});
exports.pdfParseService = pdfParseService;
