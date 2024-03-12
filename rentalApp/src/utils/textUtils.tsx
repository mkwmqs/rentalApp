export const textToInteger = (t: string) : number =>{
    return parseInt( (t?.toString() || '0').replace(/\D/g, "")) || 0;
}

export const integerToTextWithSeparators = (n: number|string, separator: string = '.'): string =>{
    const numericValue:string = typeof n === 'number' ? n.toString() : n;
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}