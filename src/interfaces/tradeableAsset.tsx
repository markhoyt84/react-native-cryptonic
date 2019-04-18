export class TradeableAsset {
    altname: string;
    aclass_base: string;
    base: string;
    aclass_quote: string;
    quote: string;
    lot: string;
    pair_decimals: number;
    lot_decimals: number;
    lot_multiplier: number;
    leverage_buy: [];
    leverage_sell: [];
    fees: [];
    fee_volume_currency: string;
    margin_call: number;
    margin_stop: number;
    marketData: [];

    constructor(data: any) {
        let parsedObject = JSON.parse(data);
        let keys = Object.keys(parsedObject);
        for (let i = 0; i < keys.length; i++) {
            this[keys[i]] = parsedObject[keys[i]];
        }
    }
}
