interface NamesApi {
  "name-USen": string;
}

interface AvailabilityApi {
  "month-array-northern": number[];
  "month-array-southern": number[];
  "time-array": number[];
  location: string;
  rarity: string;
  isAllYear: boolean;
}

export interface FishApi {
  id: number;
  "file-name": string;
  name: NamesApi;
  availability: AvailabilityApi;
  price: number;
  shadow: string;
  "price-cj": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
}

export interface BugApi {
  id: number;
  "file-name": string;
  name: NamesApi;
  availability: AvailabilityApi;
  price: number;
  "price-flick": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
}

export interface SeaCreatureApi {
  id: number;
  "file-name": string;
  name: NamesApi;
  availability: AvailabilityApi;
  price: number;
  "price-flick": number;
  "catch-phrase": string;
  "museum-phrase": string;
  image_uri: string;
  icon_uri: string;
}

export interface VillagerApi {
    id: number;
    "file-name": string;
    name: NamesApi;
    "personality": string;
    "birthday-string": string;
    "birthday": string;
    "species": string;
    "gender": string;
    "subtype": string;
    "hobby": string;
    "catch-phrase": string;
    "icon_uri": string;
    "image_uri": string;
    "bubble-color": string;
    "text-color": string;
    "saying": string;
}
