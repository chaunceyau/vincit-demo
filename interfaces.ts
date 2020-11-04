export interface Coordinates {
  x: number;
  y: number;
}

export interface TowerInformation extends Coordinates {
  id: string;
  R: number;
}

export interface PhoneInformation extends Coordinates {
  id: number;
}
