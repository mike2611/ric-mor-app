import { Location } from "./location";
import { Origin } from "./origin";

export interface Character {
  id: number;
  name: string;
  created: Date;
  episode: string[];
  gender: string;
  image: string;
  location: Location;
  origin: Origin;
  species: string;
  status: string;
  url: string;
}
