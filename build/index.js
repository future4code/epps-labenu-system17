"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const addStudent_1 = __importDefault(require("./endpoints/addStudent"));
const addTeacher_1 = __importDefault(require("./endpoints/addTeacher"));
const createClass_1 = __importDefault(require("./endpoints/createClass"));
const createStudent_1 = __importDefault(require("./endpoints/createStudent"));
const createTeacher_1 = __importDefault(require("./endpoints/createTeacher"));
const getAge_1 = __importDefault(require("./endpoints/getAge"));
app_1.default.put("/", addStudent_1.default);
app_1.default.put("/", addTeacher_1.default);
app_1.default.put("/create-student", createStudent_1.default);
app_1.default.put("/create-teacher", createTeacher_1.default);
app_1.default.post("/create-class", createClass_1.default);
app_1.default.get("/get-age/:id", getAge_1.default);
//# sourceMappingURL=index.js.map