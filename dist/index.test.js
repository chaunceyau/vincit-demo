"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var index_1 = require("./index");
it("calculate the strongest signal strength", function () {
    expect(index_1.calculateTowerPhonePairWithBestStrength(constants_1.PHONES, constants_1.TOWERS)).toEqual({
        phone: { x: 2, y: 4, id: 1 },
        tower: { x: 3, y: 7, R: 17, id: "A" },
        signalStrength: -75.8232429714283,
    });
});
