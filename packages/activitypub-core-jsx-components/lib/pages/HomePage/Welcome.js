"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
const react_1 = __importDefault(require("react"));
function Welcome({ actor, headingLevel }) {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { role: "heading", "aria-level": headingLevel },
            "Welcome, @",
            actor.preferredUsername));
}
exports.Welcome = Welcome;
//# sourceMappingURL=Welcome.js.map