import { ImageSourcePropType } from "react-native";
import { getMonthlyAverageBusinessDaysCount, getMonthlyAverageWeekendDaysCount } from "../../utils/dateUtils";
import { textToInteger } from "../../utils/textUtils";
import { adOwnedVehicles, adQuestions, adScreens } from "./advertisementDefaults";
import { AdScreen, AdContent, Question, AdVehicle } from "./advertisementDomains";
import { ERROR_MESSAGE_ADTEXTS_NOTFOUND_DB, ERROR_MESSAGE_ADTEXTS_NOTFOUND_DEFAULTS, ERROR_MESSAGE_FETCH_QUESTIONS_DB, ERROR_MESSAGE_FETCH_QUESTIONS_DEFAULTS, FARE_RATIO_VEHICLE_COST } from "./advertisementParameters"

const url = 'https://bibipi.com/api/';
const IS_SEARCH_REMOTE_QUESTIONS = false;
const IS_SEARCH_REMOTE_ADTEXTS = false;


export const fetchQuestionData = async (questionsCodes: number[]): Promise<Question[]> => {
    if(!IS_SEARCH_REMOTE_QUESTIONS){
        return fetchQuestionDataDefaults(questionsCodes);
    }
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ questionsCodes }),
        });
        if (!response.ok){
            console.log(ERROR_MESSAGE_FETCH_QUESTIONS_DB);
            return fetchQuestionDataDefaults(questionsCodes);
        }
        return response.json();
    } catch (error){
        console.log(ERROR_MESSAGE_FETCH_QUESTIONS_DB);
        return fetchQuestionDataDefaults(questionsCodes);
    }

};

export const fetchQuestionDataDefaults = (questionsCodes: number[]) : Promise<Question[]> =>{
    console.log('questions codes to be fetched: ' + questionsCodes);
    return new Promise((resolve, reject) => {
        const defaultData = adQuestions.filter((item) => questionsCodes.includes(item.code));
        if (defaultData.length !== questionsCodes.length){
            const unfoundQuestionsCodes = questionsCodes.filter((code) => !defaultData.some((item) => item.code === code));
            resolve([]);
        }
        resolve(defaultData);
    });
};



export const fetchAdTextData = async (screenCode: number): Promise<AdContent[]> => {
    console.log(' screen code: ' + screenCode);
    if(!IS_SEARCH_REMOTE_ADTEXTS){
        return fetchAdTextDataDefaults(screenCode);
    }
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ screenCode }),
        });
        if (!response.ok){
            console.log(ERROR_MESSAGE_ADTEXTS_NOTFOUND_DB);
            return fetchAdTextDataDefaults(screenCode);
        }
        return response.json();
    } catch (error){
        console.log(ERROR_MESSAGE_ADTEXTS_NOTFOUND_DB);
        return fetchAdTextDataDefaults(screenCode);
    }

};

export const fetchAdTextDataDefaults = (screenCode: number) : Promise<AdContent[]> =>{
    return new Promise((resolve, reject) => {
        const screen:AdScreen | undefined = adScreens.find((item) => screenCode === item.code);
        if(screen && screen.texts?.length > 0){
            resolve(screen.texts);
        } else {
            console.log(ERROR_MESSAGE_ADTEXTS_NOTFOUND_DEFAULTS(screenCode));
            resolve([]);
        }
    });
};


export const fetchOwnedVehicles = (type: number) : Promise<AdVehicle[]> =>{
    //mkw
    //todo THIS IS A MOCK!!!!!!!
    return new Promise((resolve, reject) => {
        resolve (adOwnedVehicles.filter(item => item.type === type));
    });
};

export const getQuestionByCode = (questions: Question[], questionCode: number) : Question =>{
    return questions.find(item => item.code === questionCode);
}

export const getQuestionTitleByCode = (questions: Question[], questionCode: number) : string =>{
    return questions.find(item => item.code === questionCode)?.title;
}

export const getQuestionSubTitleByCode = (questions: Question[], questionCode: number) : string =>{
    return questions.find(item => item.code === questionCode)?.subtitle;
}

export const getAdTextByCode = (texts: AdContent[], textCode: number) : string =>{
    return texts.find(item => item.code === textCode)?.text;
}

export const getAdImageByCode = (texts: AdContent[], textCode: number) : ImageSourcePropType =>{
    return texts.find(item => item.code === textCode)?.image;
}

export const calculateDailyFareFromVehicleCost = (vehicleCost: string): number => {
    const calc = textToInteger(vehicleCost) * FARE_RATIO_VEHICLE_COST;
    return Math.round(calc);
}


export const calculateMonthlyDaysByRentalFrequency = (answerCode: string):number => {
    let numberOfMonthlyDays: number = 0;
    switch(answerCode){
        case '1':
            numberOfMonthlyDays = 365 / 12 / 7;
            break;
        case '2':
            numberOfMonthlyDays = (365 / 12 / 7) * 2;
            break;
        case '3':
            numberOfMonthlyDays = (365 / 12 / 7) * 3;
            break;
        case '4':
            numberOfMonthlyDays = getMonthlyAverageBusinessDaysCount();
            break;
        case '5':
            numberOfMonthlyDays = 30;
            break;
        case '6':
            numberOfMonthlyDays = getMonthlyAverageWeekendDaysCount(); 
            break;
    }
    return numberOfMonthlyDays;
}
