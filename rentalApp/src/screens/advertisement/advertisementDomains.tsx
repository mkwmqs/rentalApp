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

export interface AdComponentContent {
  code: number,
  text: string,
  image?: ImageSourcePropType 
};

export interface AdComponent{
  code: number,
  title: string,
  texts: AdComponentContent[],
};


export interface AdVehicle{
  make: string,
  model: string,
  plate: string,
  yearBuilt: number,
  color: string,
  type: number
};

export interface AdPicture {
  base64: string,
  uri: string,
  questionCode: number,
  choiceCode: string,
  sourceType: number //1-library, 2-camera
};


export interface AdFareEstimates{
  averageFareBibipi: number, 
  averageFareLargeRenters: number, 
  basicFare: number, 
  serviceFee: number, 
  netPrice: number, 
  netProceeds: number
}
