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