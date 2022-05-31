import { Character } from "./character";

export interface RequestInfo {
  characters: Character[];
  nextAvailable: boolean;
}
