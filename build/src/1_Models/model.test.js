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
exports._test = void 0;
const config_1 = __importDefault(require("../0_Config/config"));
// export const _test = async () => {
//   try {
//     await db.raw('SELECT 1')
//   } catch (error) {
//     // Type assertion to ensure error is of type Error
//     if (error === '404') {
//       console.log('db connection error')
//     } else {
//       console.error('Database connection established')
//       console.log('db connected')
//     }
//   }
// }
const _test = (userId, sessionNumber) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield config_1.default.raw(`INSERT INTO user_sessions(user_id, session_date, session_number) VALUES('${userId}', NOW(), ${sessionNumber}) RETURNING session_date`);
        console.log('User session added:', result);
        return result;
    }
    catch (error) {
        console.error('Error adding user session', error);
        throw error;
    }
});
exports._test = _test;
