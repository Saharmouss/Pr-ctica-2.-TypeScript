"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(type, address) {
        this.type = type;
        this.address = address;
    }
    Mail.prototype.getType = function () {
        return this.type;
    };
    Mail.prototype.getAddress = function () {
        return this.address;
    };
    Mail.prototype.setType = function (type) {
        this.type = type;
    };
    Mail.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Mail;
}());
exports.Mail = Mail;
exports.default = Mail;
