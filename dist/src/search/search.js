"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chackauth_1 = __importDefault(require("../Middleware/chackauth"));
const search_control_1 = __importDefault(require("./search.control"));
const route = (0, express_1.default)();
route.get("/", chackauth_1.default, search_control_1.default.serch);
exports.default = route;
//# sourceMappingURL=search.js.map