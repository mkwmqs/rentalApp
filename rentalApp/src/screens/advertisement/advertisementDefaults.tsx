import { Question } from "./advertisementDomains";


import budgetCar from '../../../../assets/budgetCar.png';
import moto from '../../../../assets/moto.png';
import sportsCar from '../../../../assets/sportsCar.png';
import classicCar from '../../../../assets/classicCar.png';
import luxCar from '../../../../assets/luxCar.png';
import suvCar from '../../../../assets/SuvCar.png';
import { ImageSourcePropType } from "react-native";
import { QUESTION_RENTAL_FREQUENCY, QUESTION_VEHICLE_TYPE_REGISTRATION, QUESTION_VEHYCLE_TYPE_SIMULATION, QUESTION_VEHICLE_COST, QUESTION_VEHICLE_KM, SCREEN_AD_INTRODUCTION, SCREEN_AD_PROFILE_FIRST_STEP, SCREEN_AD_PROFILE_INTRODUCTION, SCREEN_AD_SIMULATION, SCREEN_AD_VEHICLE_SELECTION, VEHICLE_TYPE_AUTO, VEHICLE_TYPE_MOTO, SCREEN_AD_VEHICLE_DETAILS, QUESTION_VEHICLE_TRANSMISSION_TYPE, QUESTION_VEHICLE_DETAILS, QUESTION_VEHICLE_SEATS_CAPACITY, QUESTION_VEHICLE_DOORS_TOTAL, QUESTION_VEHICLE_CONDITION, QUESTION_VEHICLE_CONDITION_DETAILS, SCREEN_AD_COVER, QUESTION_RENTAL_MOTIVATION, QUESTION_OWNER_USAGE_FREQUENCY, QUESTION_INTENDED_RENTAL_FREQUENCY, SCREEN_AD_BEHAVIOUR_QUESTIONS, QUESTION_NOTICE_PERIOD, SCREEN_AD_NOTICE, SCREEN_AD_NOTICE_PERIOD, SCREEN_AD_LENGTH, QUESTION_MIN_SHARING_PERIOD, QUESTION_MAX_SHARING_PERIOD, SCREEN_AD_ADD_ONS, QUESTIONS_ADD_ONS, SCREEN_AD_PICTURES_INTRODUCTION, SCREEN_AD_PICTURES_INSERTION, QUESTIONS_AD_PICTURES_INSERTION } from "./advertisementParameters";
import { getQuestionByCode } from "./adverstisementService";


//isolating array below as its used more than once
const vehicleTypeChoices = [
    {code: '1', text: 'Popular', image: require('../../../assets/budgetCar.png') as ImageSourcePropType,},
    {code: '2', text: 'Moto', image: require('../../../assets/moto.png') as ImageSourcePropType,},
    {code: '3', text: 'Esportivo', image: require('../../../assets/sportsCar.png') as ImageSourcePropType,},
    {code: '4', text: 'Clássico', image: require('../../../assets/classicCar.png') as ImageSourcePropType},
    {code: '5', text: 'Luxuoso', image: require('../../../assets/luxCar.png') as ImageSourcePropType},
    {code: '6', text: 'SUV', image: require('../../../assets/SuvCar.png') as ImageSourcePropType},
];

////////////////////////////
//      adQuestions
////////////////////////////

export const adQuestions: Question[] = [
    {
        code: QUESTION_VEHYCLE_TYPE_SIMULATION,
        title: 'Escolha o tipo:',
        choices: vehicleTypeChoices
    },
    {
        code: QUESTION_RENTAL_FREQUENCY,
        title: 'Qual a frequência que você deseja compartilhar o seu veículo na semana?',
        choices: [
            {code: '1', text: '1 dia qualquer'},
            {code: '2', text: '2 dia quaisquer'},
            {code: '3', text: '3 dias quaisquer'},
            {code: '4', text: 'Todos os dias úteis'},
            {code: '5', text: 'Todos os dias'},
            {code: '6', text: 'Todos os finais de semana'}
        ]
    },
    {
        code: QUESTION_VEHICLE_COST,
        title: 'Qual o valor estimado do seu veículo?',
        subtitle: 'Nesta simulação, a diária do compartilhamento é estimada pelo valor total do veículo',
        choices:[]

    },
    { 
        code: QUESTION_VEHICLE_TYPE_REGISTRATION,
        title: 'Clique no tipo de carro que melhor se enquadra com o seu',
        choices: vehicleTypeChoices
    },
    {
        code: QUESTION_VEHICLE_KM,
        title: 'Quilometragem na data:',
        choices: [
            {code: '1', text: '0 - 5.000 KM'},
            {code: '2', text: '5.000 - 10.000 KM'},
            {code: '3', text: '10.000 - 50.000 KM'},
            {code: '4', text: '50.000 - 100.000 KM'},
            {code: '5', text: '100.000 - 300.000 KM'},
            {code: '6', text: 'acima de 300.000 KM'},
        ]
    },
    {
        code: QUESTION_VEHICLE_TRANSMISSION_TYPE,
        title: 'Tipo de transmissão',
        choices: [
            {code: '1', text: 'Manual'},
            {code: '2', text: 'Automática'},
        ]
    },
    {
        code: QUESTION_VEHICLE_SEATS_CAPACITY,
        title: 'Número de assentos',
        choices: []
    },    
    {
        code: QUESTION_VEHICLE_DOORS_TOTAL,
        title: 'Número de portas',
        choices: []
    },    
    {
        code: QUESTION_VEHICLE_CONDITION,
        title: 'Estado do veículo',
        choices: [
            {code: '1', text: 'Ótimo'},
            {code: '2', text: 'Bom'},
            {code: '3', text: 'Ruim'}
        ]
    },    
    {
        code: QUESTION_VEHICLE_CONDITION_DETAILS,
        title: 'Detalhe do estado do veículo',
        choices: []
    },    
    {
        code: QUESTION_RENTAL_MOTIVATION,
        title: 'Qual o seu interesse financeiro ao compartilhar o veículo na Bibipi?',
        choices: [
            {code: '1', text: 'Ter uma renda primária'},
            {code: '2', text: 'Gerar uma renda extra'},
            {code: '3', text: 'Cobrir os gastos do seu veículo'},
            {code: '4', text: 'Expandir um negócio'},
        ]
    },       
    {
        code: QUESTION_OWNER_USAGE_FREQUENCY,
        title: 'Qual a frequência que este veículo é utilizado por você ou sua família?',
        choices: [
            {code: '1', text: 'Nunca'},
            {code: '2', text: 'Raramente, uma vez por semana ou menos'},
            {code: '3', text: 'Até 3 dias por semana'},
            {code: '4', text: 'Até 6 dias por semana'},
            {code: '5', text: 'Todos os dias'},
        ]
    },    
    {
        code: QUESTION_INTENDED_RENTAL_FREQUENCY,
        title: 'Qual a frequência que você deseja compartilhar o seu veículo?',
        choices: [
            {code: '1', text: 'Ainda não sei'},
            {code: '2', text: 'Raramente, algumas vezes por mês'},
            {code: '3', text: 'Em torno de 15 dias por mês'},
            {code: '4', text: 'Frequentemente, mais de 15 dias por mês'},
            {code: '5', text: 'Sempre'},
        ]
    },    
    {
        code: QUESTION_NOTICE_PERIOD,
        title: 'Aviso Prévio',
        subtitle: 'Você poderá selecionar qual a antecedência que precisa para ser lembrado antes do início do compartilhamento',
        choices: [
            {code: '1', text: '1 hora'},
            {code: '2', text: '2 horas'},
            {code: '3', text: '3 horas (recomendado)'},
            {code: '4', text: '6 horas'},
            {code: '5', text: '12 horas'},
            {code: '6', text: '1 dia'},
        ]
    },   
    {
        code: QUESTION_MIN_SHARING_PERIOD,
        title: 'Duração mínima do compartilhamento',
        subtitle: 'Você poderá selecionar a quantidade mínima de dias para compartilhar o seu veículo',
        choices: [
            {code: '1', text: '1 dia'},
            {code: '2', text: '2 dias'},
            {code: '3', text: '3 dias'},
            {code: '4', text: '5 dias'},
            {code: '5', text: '1 dia de domingo a quinta e 2 dias na sexta ou sábado'},
        ]
    },    
    {
        code: QUESTION_MAX_SHARING_PERIOD,
        title: 'Duração máxima do compartilhamento',
        subtitle: 'Você poderá selecionar a quantidade máxima de dias para compartilhar o seu veículo',
        choices: [
            {code: '1', text: '5 dias'},
            {code: '2', text: '1 semana'},
            {code: '3', text: '2 semanas'},
            {code: '4', text: '1 mês'},
            {code: '5', text: '3 meses'},
            {code: '6', text: 'Sem restrição'},
        ]
    },       
    {
        code: QUESTIONS_ADD_ONS,
        title: '',
        choices: [
            {code: '1', text: 'Entrega em local diferente'},
            {code: '2', text: 'Certificado de inspeção'},
            {code: '3', text: 'Bebê conforto'},
            {code: '4', text: 'Assento de elevação'},
            {code: '5', text: 'Cadeirinha para criança'},
            {code: '6', text: 'Controle remoto do carro'},
            {code: '7', text: 'Alarme de segurança'},
            {code: '8', text: 'Localizador'},
        ]
    },   
    {
        code: QUESTIONS_AD_PICTURES_INSERTION,
        title: '',
        choices: [
            //{code: '1', text: 'Foto de capa'},
            {code: '2', text: 'Foto de frente'},
            {code: '3', text: 'Foto da traseira'},
            {code: '4', text: 'Foto da lateral esquerda'},
            {code: '5', text: 'Foto da lateral direita'},
            {code: '6', text: 'Foto do interior'},
            {code: '7', text: 'Foto do painel'},
            {code: '8', text: 'Foto da diagonal esquerda'},
            {code: '9', text: 'Foto da diagonal direita'},
        ]
    },   


    
];


////////////////////////////
//    mocks
////////////////////////////


export const adOwnedVehicles = [
    {make: 'BMW', model: '530i NA71', plate: 'ABC-1A11',yearBuilt: 2015, color: 'Preto', type: VEHICLE_TYPE_AUTO},
    {make: 'GM',  model: 'Cobalt', plate: 'ABC-1A12', yearBuilt: 2001, color: 'Prata', type: VEHICLE_TYPE_AUTO},
    {make: 'FIAT', model: 'Palio', plate: 'ABC-1A13', yearBuilt: 2015, color: 'Verde', type: VEHICLE_TYPE_AUTO},
    {make: 'CB', model: '400', plate: 'ABC-1A14', yearBuilt: 1985, color: 'Prata', type: VEHICLE_TYPE_MOTO}
];

////////////////////////////
//      adScreens
////////////////////////////

export const adScreens = [
    {
        code: SCREEN_AD_INTRODUCTION, //1
        title: 'Ad Introduction',
        texts: [
            {code: 1, text: 'Seja um Hoster você também'},
            {code: 2, text: 'Junte-se aos nossos anfitriões que podem ganhar mais de R$ 11.000* por mês por carro na Bibipi.'},
            {code: 3, text: '*Este valor é uma projeção para um veículo compartilhado por 22 dais por mês, com uma diária de R$ 500,00, para um veículo avaliado em R$ 180.000,00.'},            
            {code: 10, text: '4 motivos para você se juntar a nós'},
            {code: 11, text: 'Gerar uma nova receita'},
            {code: 12, text: 'Ajudar a cobrir as despesas do meu veículo'},
            {code: 13, text: 'Criar uma frota de veículos para aluguel'},
            {code: 14, text: 'Ajudar a pagar o financiamento do meu veículo'},
            {code: 20, text: 'Como funciona?'},
            {code: 21, text: 'Grátis para expor o seu veículo e você pode definir o preço, disponibilidade e regras. Fácil de usar e você recebe em até 30 dias após o compartilhamento. Estamos aqui para lhe ajudar a ter uma ótima experiência.'},
            {code: 30, text: 'Você está coberto'},
            {code: 31, text: 'Contamos com a parceria da asseguradora Ubiner seguros.'},
            {code: 40, text: 'Nós protegemos você e seu Veículo'},
            {code: 41, text: 'Desde a seleção dos Renters até o suporte durante 24 horas por dia, 7 dias por semana, você poderá contar com o nosso apoio. Você poderá compartilhar o seu veículo com confiança.'},
            {code: 50, text: 'Neste compartilhamento estão inclusos:'},
            {code: 51, text: 'Seguro para o veículo'},
            {code: 52, text: 'Cobertura para terceiros'},
            {code: 53, text: 'Taxa de compartilhamento'},
            {code: 54, text: 'Taxa de limpeza'},
            {code: 55, text: 'Taxa de devolução'},
            {code: 56, text: 'Motorista adicional'},
            {code: 100, text: 'Saiba mais'},
            {code: 101, text: 'Eu quero ganhar dinheiro com o meu veículo'},
        ]
    },
    {
        code: SCREEN_AD_SIMULATION, //2
        title: 'Ad Simulation',
        texts: [
            {code: 1, text: 'Simule como ganhar dinheiro com seu veículo'},
            {code: 2, text: 'Estimativa'},
            {code: 3, text: '{sharingFrequency} compartilhamentos a {currency} {dailyCost} por dia'},
            {code: 4, text: '(Renda mensal estimada)'},
            {code: 100, text: 'Anuncie Seu Veículo'},
            
        ]
    },
    {
        code: SCREEN_AD_PROFILE_INTRODUCTION, //4
        title: 'Ad Profile Introduction',
        texts: [
            {code: 1, text: 'É muito prático e simples anunciar na Bibipi'},
            {code: 2, text: 'Nós criamos um passo a passo para te ajudar na publicação do seu anúncio'},
            {code: 20, text: '1. Defina o Perfil do seu Anúncio'},
            {code: 21, text: 'Te ajudaremos a construir um anúncio que conquistará a maior quantidade de pessoas interessadas no seu veículo.'},
            {code: 22, image: require('../../../assets/outlined-car-small.png'), text:''},
            {code: 30, text: '2. Preço e Publicação'},
            {code: 31, text: 'Nossa experiência vai te guiar para que você possa definir o melhor preço e deixe a sua publicação mais atraente.'},
            {code: 32, image: require('../../../assets/hands-touching-keys.png'), text:''},
            {code: 100, text: 'Continuar'}

        ]
    },
    {
        code: SCREEN_AD_PROFILE_FIRST_STEP, //5
        title: 'Ad Profile First Step',
        texts: [
            {code: 1, text: '1º passo'},
            {code: 11, image: require('../../../assets/outlined-car-medium.png'), text:''},
            {code: 20, text: 'Defina o Perfil do seu Anúncio'},
            {code: 21, text: 'A seguir você escolherá o tipo de veículo, a marca, a quilometragem e o ano.'},
            {code: 22, text: 'Estas informações irão nos ajudar a atrair a pessoa certa para o seu veículo'},
            {code: 100, text: 'Continuar'}
        ]
    },

    {
        code: SCREEN_AD_VEHICLE_SELECTION, //6
        title: 'Ad Vehicle Selection',
        texts: [
            {code: 1, text: 'Selecione o veículo que você quer compartilhar'},
            {code: 21, text: 'Automóvel'},
            {code: 22, text: 'Moto'},
            {code: 31, text: 'Placa'},
            {code: 32, text: 'Ano'},
            {code: 33, text: 'Cor'},
            {code: 100, text: 'Continuar'}
        ]
    },
    {
        code: SCREEN_AD_VEHICLE_DETAILS, //7
        title: 'Ad Vehicle Details',
        texts: [
            {code: 1, text: 'Detalhes do carro'},
            {code: 21, text: 'Esclareça o estado do veículo'},
            {code: 100, text: 'Confirme os dados'}
        ]
    },
    {
        code: SCREEN_AD_COVER, //8
        title: 'Ad Screen Cover',
        texts: [
            {code: 1, image: require('../../../assets/ad-img-cover.png'), text:''},
            {code: 2, text: 'Seu veículo está apto para ser compartilhado.'},
            {code: 3, text: 'Valorize Seu Veículo'},
            {code: 4, text: 'Adicione agora algumas características que o seu veículo possui. Nós criamos um passo a passo bem simples para te ajudar como seu veículo se destaque.'},
            {code: 100, text: 'Continuar'},
        ]
    },
    {
        code: SCREEN_AD_BEHAVIOUR_QUESTIONS, //9
        title: 'Ad Behaviour Questions',
        texts: [
            {code: 100, text: 'Continuar'},
        ]
    },
    {
        code: SCREEN_AD_NOTICE_PERIOD, //10
        title: 'Ad Notice Period',
        texts: [
            {code: 1, text: 'Aviso Prévio'},
            {code: 100, text: 'Continuar'},
        ]
    },          
    {
        code: SCREEN_AD_LENGTH, //11
        title: 'Ad Length',
        texts: [
            {code: 100, text: 'Continuar'},
        ]
    },
    {
        code: SCREEN_AD_ADD_ONS, //12
        title: 'Ad Add-ons',
        texts: [
            {code: 1, text: 'Quanto mais serviços você oferecer aos Renters, mais pessoas você conquistará e mais dinheiro você irá ganhar.'},
            {code: 2, text: 'Você poderá selecionar mais de um serviço relacionado a seguir.'},
            {code: 100, text: 'Continuar'},
        ]
    },
    {
        code: SCREEN_AD_PICTURES_INTRODUCTION, //13
        title: 'Ad Pictures Introduction',
        texts: [
            {code: 1, text: 'Juntos Vamos Produzir as Melhores Fotos do Seu Veículo'},
            {code: 21, text: 'Este passo é muito importante. A qualidade das fotos que vamos tirar será fundamental para conquistarmos novos Renters para o seu veículo.'},
            {code: 22, text: 'Depois de muitos estudos nós vamos te guiar para que você obtenha os melhores ângulos com as melhores posições para que a sua foto seja um sucesso.'},
            {code: 23, text: 'Para te ajudar na próxima tela iremos te mostrar como as suas fotos devem ficar em todo o processo de tirar as fotos.'},
            {code: 100, text: 'Continuar'},
        ]
    },    
    {
        code: SCREEN_AD_PICTURES_INSERTION, //14
        title: 'Ad Pictures Insertion',
        texts: [
            {code: 1, text: 'Vamos incluir as fotos do seu veículo'},
            {code: 20, image: require('../../../assets/eye-small.png'), text:''},
            {code: 100, text: 'Continuar'},
        ]
    },    
];