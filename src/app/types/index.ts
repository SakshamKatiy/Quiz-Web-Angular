export interface Quiz{
    id:number;
    name:string;
    code : string;
    questions:number[];
}

export interface Question{
    id:number;
    content:string;
    marks:number;
    negativeMarks : number;
    options:Option[];
}

export interface Option{
id:string;
content:string;
isCorrect:boolean;
}

export interface QuizResult{
    id:number;
    name:string;
    score:number;
    percentage:number,
    correct:number;
    isCorrect:number;
    unAttempt:number;
    response:{questionId:number;answerOptionId:string}[];
}