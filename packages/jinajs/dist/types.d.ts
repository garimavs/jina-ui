export declare type Base64URI = `data:${string}`;
export declare type AnyObject = {
    [key: string]: any;
};
export declare type RawDocumentData = Base64URI | string | File;
export declare type SimpleQuery = {
    data: string | Base64URI;
    mimeType: string;
};
export declare type SimpleResult = {
    data: string | Base64URI;
    score: number;
    mimeType: string;
};
export declare type SimpleResults = SimpleResult[];
export declare type SimpleQueries = SimpleQuery[];
export declare type SimpleResponse = {
    queries: SimpleQueries;
    results: SimpleResults[];
};
export declare type BaseURL = `http://${string}` | `https://${string}`;
export declare type RequestSerializer<IRequest> = (documents: RawDocumentData[]) => Promise<IRequest> | IRequest;
export declare type ResponseSerializer<IResponse> = (response: IResponse) => SimpleResponse;
