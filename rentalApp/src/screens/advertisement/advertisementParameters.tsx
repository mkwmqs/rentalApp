export const FARE_RATIO_VEHICLE_COST = 0.01;
export const CURRENCY_DISPLAY = 'R$';

//screens codes
export const SCREEN_AD_INTRODUCTION = 1;
export const SCREEN_AD_SIMULATION = 2;
export const SCREEN_AD_FAQ = 3;
export const SCREEN_AD_PROFILE_INTRODUCTION = 4;
export const SCREEN_AD_PROFILE_FIRST_STEP = 5;
export const SCREEN_AD_VEHICLE_SELECTION = 6;
export const SCREEN_AD_VEHICLE_DETAILS = 7;
export const SCREEN_AD_COVER = 8;
export const SCREEN_AD_BEHAVIOUR_QUESTIONS = 9;
export const SCREEN_AD_NOTICE_PERIOD = 10;
export const SCREEN_AD_LENGTH = 11;
export const SCREEN_AD_ADD_ONS = 12;
export const SCREEN_AD_PICTURES_INTRODUCTION = 13;
export const SCREEN_AD_PICTURES_INSERTION = 14;

//questions - adSimulation
export const QUESTION_VEHYCLE_TYPE_SIMULATION = 101;
export const QUESTION_RENTAL_FREQUENCY = 102;
export const QUESTION_VEHICLE_COST = 103;

//questions - adVehicleSelection
export const QUESTION_RENTAL_PLATE = 201;

//questions - adVehicleDetails
export const QUESTION_VEHICLE_TYPE_REGISTRATION = 301;
export const QUESTION_VEHICLE_KM = 302;
export const QUESTION_VEHICLE_TRANSMISSION_TYPE = 303;
export const QUESTION_VEHICLE_SEATS_CAPACITY = 304;
export const QUESTION_VEHICLE_DOORS_TOTAL = 305;
export const QUESTION_VEHICLE_CONDITION = 306;
export const QUESTION_VEHICLE_CONDITION_DETAILS = 307;

//questions - adBehaviourQuestions
export const QUESTION_RENTAL_MOTIVATION = 401;
export const QUESTION_OWNER_USAGE_FREQUENCY = 402;
export const QUESTION_INTENDED_RENTAL_FREQUENCY = 403;

//questions - adNoticePeriod
export const QUESTION_NOTICE_PERIOD = 501;

//questions - adIntendedLength
export const QUESTION_MIN_SHARING_PERIOD = 601;
export const QUESTION_MAX_SHARING_PERIOD = 602;

//questions - adAddOns
export const QUESTIONS_ADD_ONS = 701;

//questions - adPictureInsertion
export const QUESTIONS_AD_PICTURES_INSERTION = 801;

//answers used as parameters to events - refers to answers code that are passed as parameters
//even defaults file should point to these consts whenever applicable!
export const BAD_CONDITION_VEHICLE_ANSWER = '3';


//vehicle types
export const VEHICLE_TYPE_AUTO = 1;
export const VEHICLE_TYPE_MOTO = 2;

//misc
export const RADIO_BUTTON_FORMAT_BALL = 'ball';
export const RADIO_BUTTON_FORMAT_SQUARE = 'square'; 



export const ERROR_MESSAGE_FETCH_QUESTIONS_DB = (question: string) => 'Erro ao consultar o banco de dados para questão: ' + question;
export const ERROR_MESSAGE_FETCH_QUESTIONS_DEFAULTS = (question: string) => 'Erro ao consultar base de questões padrões: ' + question;
export const ERROR_MESSAGE_QUESTION_WITHOUT_CHOICES = (question: string) => 'Questão cadastrada sem opções respostas: ' + question;
export const ERROR_MESSAGE_ADTEXTS_NOTFOUND_DB = 'Erro ao buscar dados da tela no banco de dados';
export const ERROR_MESSAGE_ADTEXTS_NOTFOUND_DEFAULTS = (screenCode: number) => 'Erro ao gerar dados estáticos da tela ' + screenCode;
export const ERROR_MESSAGE_NO_VEHICLE_FOUND = 'Erro ao buscar veículos do hoster';
export const ERROR_MULTIPLE_CHOICE_JUSTIFICATION_BICOLUMNS_NOT_ALLOWED = 'Componente MultipleChoiceQuestion não permite receber ao mesmo tempo os argumentos justification e sharedColumns';
export const ERROR_MULTIPLE_CHOICE_JUSTIFICATION_PROPERTIES_INCOMPLETE = 'Componente MultipleChoiceQuestion. Ambas as propriedades justification precisam ser enviadas, ou nenhuma delas';