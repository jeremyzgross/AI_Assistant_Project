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
exports.test = void 0;
const test_1 = require("../1_Models/test");
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, test_1._test)();
    if (res.status(400)) {
        res.send('db connected code 400');
    }
    else {
        res.send('db connection error');
    }
});
exports.test = test;
