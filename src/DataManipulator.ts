import { ServerRespond } from './DataStreamer';

export interface Row {
      price_abc:number,
      price_def:number,
      ratio:number,
      timestamp:Date,
      upper_bound:number,
      lower_bound:number,
      trigger_alert:number|undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    return serverResponds.map((el: any) => {
      return {
        price_abc:priceABC,
        price_def:priceDEF,
        ratio,
        timestamp:serverRespond[0].timestamp > servereRsepond[1].timestamp ?serverRespond[0].timestamp : servereRsepond[1].timestamp,
        upper_bound:upperbound,
        lower_bound:lowerbound,
        trigger_alert:(ratio  > upperbound || ratio <lowerbound)? ratio : undefined,
      };
    })
  }
}
