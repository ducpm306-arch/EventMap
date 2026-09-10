"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMessage = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["SUCCESS"] = 200] = "SUCCESS";
    HttpStatus[HttpStatus["ERROR"] = 400] = "ERROR";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
var HttpMessage;
(function (HttpMessage) {
    HttpMessage["SUCCESS"] = "Th\u00E0nh c\u00F4ng";
    HttpMessage["ERROR"] = "L\u1ED7i";
})(HttpMessage || (exports.HttpMessage = HttpMessage = {}));
//# sourceMappingURL=globalEnum.js.map