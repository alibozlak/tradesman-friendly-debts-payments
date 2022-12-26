export interface CreateWholesalerPaymentRequest {
    wholesalerId : number;
    paymentAmount : number;
    date : Date;
    description : string;
}