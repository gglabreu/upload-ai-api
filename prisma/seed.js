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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.prompt.deleteMany()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.prompt.create({
                            data: {
                                title: "Título YouTube",
                                template: "Seu papel \u00E9 gerar tr\u00EAs t\u00EDtulos para um v\u00EDdeo do YouTube.\n\nAbaixo voc\u00EA receber\u00E1 uma transcri\u00E7\u00E3o desse v\u00EDdeo, use essa transcri\u00E7\u00E3o para gerar os t\u00EDtulos.\nAbaixo voc\u00EA tamb\u00E9m receber\u00E1 uma lista de t\u00EDtulos, use essa lista como refer\u00EAncia para os t\u00EDtulos a serem gerados.\n\nOs t\u00EDtulos devem ter no m\u00E1ximo 60 caracteres.\nOs t\u00EDtulos devem ser chamativos e atrativos para maximizar os cliques.\n\nRetorne APENAS os tr\u00EAs t\u00EDtulos em formato de lista como no exemplo abaixo:\n'''\n- T\u00EDtulo 1\n- T\u00EDtulo 2\n- T\u00EDtulo 3\n'''\n\nTranscri\u00E7\u00E3o:\n'''\n{transcription}\n'''".trim(),
                            },
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.prompt.create({
                            data: {
                                title: "Descrição YouTube",
                                template: "Seu papel \u00E9 gerar uma descri\u00E7\u00E3o sucinta para um v\u00EDdeo do YouTube.\n  \nAbaixo voc\u00EA receber\u00E1 uma transcri\u00E7\u00E3o desse v\u00EDdeo, use essa transcri\u00E7\u00E3o para gerar a descri\u00E7\u00E3o.\n\nA descri\u00E7\u00E3o deve possuir no m\u00E1ximo 80 palavras em primeira pessoa contendo os pontos principais do v\u00EDdeo.\n\nUse palavras chamativas e que cativam a aten\u00E7\u00E3o de quem est\u00E1 lendo.\n\nAl\u00E9m disso, no final da descri\u00E7\u00E3o inclua uma lista de 3 at\u00E9 10 hashtags em letra min\u00FAscula contendo palavras-chave do v\u00EDdeo.\n\nO retorno deve seguir o seguinte formato:\n'''\nDescri\u00E7\u00E3o.\n\n#hashtag1 #hashtag2 #hashtag3 ...\n'''\n\nTranscri\u00E7\u00E3o:\n'''\n{transcription}\n'''".trim(),
                            },
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
