import { ImageSourcePropType } from "react-native";

export interface Choice {
    code: string, //answers array will be generic to apply also to non multiple choices question scheme
    text: string,
    image?: ImageSourcePropType,
  };
  
export interface Question {
    code: number,
    title: string,
    subtitle?: string,
    choices: Choice[],
  };

export interface AdContent {
    code: number,
    text: string,
    image?: ImageSourcePropType 
};

export interface AdScreen{
    code: number,
    title: string,
    texts: AdContent[],

};

export interface AdVehicle{
  make: string,
  model: string,
  plate: string,
  yearBuilt: number,
  color: string,
  type: number
};




