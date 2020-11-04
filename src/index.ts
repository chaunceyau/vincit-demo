import { PHONES, TOWERS } from "./constants";
import {
  PhoneInformation,
  TowerInformation,
  Coordinates,
  PhoneTowerPair,
} from "./interfaces";

function calculateSignalStrength(radius: number, strength: number): number {
  return -113 - 40 * Math.log10(radius / strength);
}

// phone1: x = 2, y = 4; towerA: x = 4, y = 2
function calculateDistanceBetweenPoints(pointA: Coordinates, pointB: Coordinates): number {
  const deltaX = Math.abs(pointA.x - pointB.x);
  const deltaY = Math.abs(pointA.y - pointB.y);
  return Math.sqrt((deltaX ^ 2) + (deltaY ^ 2));
}

function calculateTowerPhonePairWithBestStrength(
  phones: PhoneInformation[],
  towers: TowerInformation[]
) {
  let strongestPair: PhoneTowerPair | undefined;

  for (const phone of phones) {
    for (const tower of towers) {
      const radius = calculateDistanceBetweenPoints(
        { x: tower.x, y: tower.y },
        { x: phone.x, y: phone.y }
      );
      const signalStrength = calculateSignalStrength(radius, tower.R);
      if (
        !strongestPair ||
        Math.abs(signalStrength) < Math.abs(strongestPair.signalStrength)
      ) {
        strongestPair = {
          phone,
          tower,
          signalStrength,
        };
      }
    }
  }

  return strongestPair;
}

const strongestSignal = calculateTowerPhonePairWithBestStrength(PHONES, TOWERS);
console.log(strongestSignal);

export { calculateTowerPhonePairWithBestStrength };
