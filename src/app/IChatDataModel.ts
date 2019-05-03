export interface IChatDateModel {
    id?: number;
    nextQues?: string;
    prevQues?: string;
    responseType?: string;
    inputType?: string;
    options?: Array<string>;
    isComplete?: boolean;
    userResponse?: string;
}
