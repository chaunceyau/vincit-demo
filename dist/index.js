"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTowerPhonePairWithBestStrength = void 0;
var constants_1 = require("./constants");
function calculateSignalStrength(radius, strength) {
    return -113 - 40 * Math.log10(radius / strength);
}
// phone1: x = 2, y = 4; towerA: x = 4, y = 2
function calculateDistanceBetweenPoints(pointA, pointB) {
    var deltaX = Math.abs(pointA.x - pointB.x);
    var deltaY = Math.abs(pointA.y - pointB.y);
    return Math.sqrt((deltaX ^ 2) + (deltaY ^ 2));
}
function calculateTowerPhonePairWithBestStrength(phones, towers) {
    var strongestPair = null;
    for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
        var phone = phones_1[_i];
        for (var _a = 0, towers_1 = towers; _a < towers_1.length; _a++) {
            var tower = towers_1[_a];
            var radius = calculateDistanceBetweenPoints({ x: tower.x, y: tower.y }, { x: phone.x, y: phone.y });
            var signalStrength = calculateSignalStrength(radius, tower.R);
            if (!strongestPair ||
                Math.abs(signalStrength) < Math.abs(strongestPair.signalStrength)) {
                strongestPair = {
                    phone: phone,
                    tower: tower,
                    signalStrength: signalStrength,
                };
            }
        }
    }
    return strongestPair;
}
exports.calculateTowerPhonePairWithBestStrength = calculateTowerPhonePairWithBestStrength;
var strongestSignal = calculateTowerPhonePairWithBestStrength(constants_1.PHONES, constants_1.TOWERS);
console.log(strongestSignal);
