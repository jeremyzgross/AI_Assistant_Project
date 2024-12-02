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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpt = void 0;
const service_gpt_1 = require("../6_Services/service.gpt");
const gpt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { prompt } = req.body;
    try {
        const response = yield (0, service_gpt_1.AICallTest)(prompt);
        res.json({ prompt, response });
        console.log('GPT request', prompt);
        console.log('GPT response', response);
    }
    catch (error) {
        res.status(500).send('Error calling GPT');
        console.error('Error calling GPT', error);
    }
});
exports.gpt = gpt;
