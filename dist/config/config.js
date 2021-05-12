"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT || 57898;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const APP_NAME = process.env.APP_NAME || 'DJIM Paspor Online API';
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    app: APP_NAME
};
exports.default = {
    server: SERVER
};
