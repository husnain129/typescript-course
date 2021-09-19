"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (date) {
    var _date = date.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(_date[2], _date[1], _date[0]);
};
exports.dateStringToDate = dateStringToDate;
