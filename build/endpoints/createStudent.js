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
const insertStudent_1 = __importDefault(require("../data/insertStudent"));
function createStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body.nome ||
                !req.body.email ||
                !req.body.data_nasc ||
                !req.body.turma_id)
                res.status(400).send("Campos obrigatorios");
            yield insertStudent_1.default(req.body.nome, req.body.email, req.body.data_nasc, req.body.turma_id);
        }
        catch (error) {
            res.status(500).send({ message: error.message || error.sqlMessage });
        }
    });
}
exports.default = createStudent;
//# sourceMappingURL=createStudent.js.map