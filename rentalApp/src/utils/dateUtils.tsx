import { addDays, eachWeekendOfYear } from "date-fns";

function getWeekendDaysCount(year: number) {
    return Array.from(eachWeekendOfYear(new Date(year, 0, 1))).length;
 }
  
  
  export function getMonthlyAverageWeekendDaysCount(year?: number): number {
    year = year ?? new Date().getFullYear();
    return getWeekendDaysCount(year) / 12;
  }
  

  export function isWeekday(day: Date): boolean {
    const dayOfWeek = day.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  }

  
  export function getEasterDate(year: number): Date {
	var f = Math.floor,
		// Golden Number - 1
		G = year % 19,
		C = f(year / 100),
		// related to Epact
		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
		// number of days from 21 March to the Paschal full moon
		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
		// weekday for the Paschal full moon
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		// number of days from 21 March to the Sunday on or before the Paschal full moon
		L = I - J,
		month = 3 + f((L + 40)/44),
		day = L + 28 - 31 * f(month / 4);

    return new Date(year, month - 1, day);
}

export function getCarnivalDate(year: number): Date {
    const easterDate = getEasterDate(year);
    const carnivalDate = new Date(easterDate);
    carnivalDate.setDate(easterDate.getDate() - 47);
     return carnivalDate;
}

export function getGoodFridayDate(year: number): Date {
    const easterDate = getEasterDate(year);
    const goodFridayDate = addDays(easterDate, -2); // Good Friday is two days before Easter
    return goodFridayDate;
  }

export function getCorpusChristiDate(year: number): Date {
    const easterDate = getEasterDate(year);
    const corpusChristiDate = addDays(easterDate, 60); 
    return corpusChristiDate;
}

export function getCurrentYear(): number{
    return new Date().getFullYear();
}


export function isHoliday(day: Date): boolean {
    const currentYear = new Date().getFullYear();
    const holidays: Date[] = [
    new Date(day.getFullYear(), 0, 1), // New Year's Day
    getCarnivalDate(currentYear), //Carnival
    getGoodFridayDate(currentYear), //Good Friday,
    getCorpusChristiDate(currentYear), //Corpus Christi
    new Date(day.getFullYear(), 3, 21), // Tiradentes' Day
    new Date(day.getFullYear(), 4, 1), // Labor Day
    new Date(day.getFullYear(), 8, 7), // Independence Day
    new Date(day.getFullYear(), 9, 12), // Nsa Sra Aparecida Day
    new Date(day.getFullYear(), 10, 2), // All Souls' Day
    new Date(day.getFullYear(), 10, 15), // Brazil Republic Day
    new Date(day.getFullYear(), 10, 20), // Consciencia Negra Day
    new Date(day.getFullYear(), 11, 25), // Christmas Day
 ];
  
    return holidays.some(holiday => holiday.getTime() === day.getTime());
  }


  export function getMonthlyAverageBusinessDaysCount(year?: number): number {

    year = year ?? new Date().getFullYear();
    const firstDay = new Date(year, 0, 1);
    const lastDay = new Date(year, 11, 31);
    let businessDayCount = 0;
  
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
        if (isWeekday(day) && !isHoliday(day)) {
            businessDayCount++;
        }
    }
    const monthlyAverageBusinessDays = businessDayCount / 12;
    return monthlyAverageBusinessDays;
  }
