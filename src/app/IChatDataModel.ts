export interface IChatDateModel {
    userId?: number;
    questionId?: number;
    nextQues?: string;
    prevQues?: string;
    responseType?: string;
    inputType?: string;
    options?: Array<string>;
    isComplete?: boolean;
    userResponse?: string;
}
