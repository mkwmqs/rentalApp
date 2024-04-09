import { CURRENCY_DISPLAY, ERROR_UTIL_INVALID_INPUT_NUMBER } from "../screens/advertisement/advertisementParameters";

export const textToInteger = (t: string) : number =>{
    return parseInt( (t?.toString() || '0').replace(/\D/g, "")) || 0;
}

export const integerToTextWithSeparators = (n: number|string, separator: string = '.'): string =>{
    const numericValue:string = typeof n === 'number' ? n.toString() : n;
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const formatNumberToDeviceSettings = (input: string | number, decimalPlaces: number): string => {
    //WARN: any separator found in input will be considered decimal separator.
    // therefore it may have only one separator no matter if dot or comma

    if (typeof input === 'string'){
        const dotCount = (input.match(/\./g) || []).length; // Count dots
        const commaCount = (input.match(/,/g) || []).length; // Count commas
        if (dotCount + commaCount > 1) {
            console.error(ERROR_UTIL_INVALID_INPUT_NUMBER);
            input = 0;
        }
    }
    const normalizedInput = typeof input === 'string' ? input.replace(',', '.') : input.toString();
    const number = parseFloat(normalizedInput);
    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }); 
    return formatter.format(number);
};

export const formatToMoney = (input: string | number): string => {
    const money = formatNumberToDeviceSettings(input, 2);
    return CURRENCY_DISPLAY + ' ' + money;
}