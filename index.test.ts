import { PHONES, TOWERS } from "./constants";
import { calculateTowerPhonePairWithBestStrength } from "./index";

it("calculate the strongest signal strength", () => {
  expect(calculateTowerPhonePairWithBestStrength(PHONES, TOWERS)).toEqual({
    phone: { x: 2, y: 4, id: 1 },
    tower: { x: 3, y: 7, R: 17, id: "A" },
    signalStrength: -75.8232429714283,
  });
});
