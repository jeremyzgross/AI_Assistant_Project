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
const model_test_1 = require("../1_Models/model.test");
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId = 'test_user_id', sessionNumber = 1 } = req.body;
    try {
        const result = yield (0, model_test_1._test)(userId, sessionNumber);
        if (result) {
            res.status(200).send('User session added successfully');
        }
    }
    catch (error) {
        res.status(500).send('Error adding user session');
    }
});
exports.test = test;
