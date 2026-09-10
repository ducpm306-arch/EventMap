export declare class ResponseData<D> {
    data: D | D[] | null;
    statusCode: number;
    message: string;
    constructor(data: D | D[] | null, statusCode: number, message: string);
}
