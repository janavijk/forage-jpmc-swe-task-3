// DataManipulator.ts
import { ServerRespond } from './DataStreamer';

export class DataManipulator {
    static generateRow(serverResponds: ServerRespond[]): any {
        const stockABC = serverResponds[0];
        const stockDEF = serverResponds[1];

        // Compute prices
        const price_abc = stockABC.top_ask.price;
        const price_def = stockDEF.top_ask.price;

        // Calculate ratio
        const ratio = price_abc / price_def;

        // Set upper and lower bounds
        const upper_bound = 1.05; // Example value
        const lower_bound = 0.95; // Example value

        // Determine if an alert should be triggered
        const trigger_alert = ratio > upper_bound || ratio < lower_bound ? ratio : undefined;

        return {
            stock: 'ABC/DEF', // Use a string to identify the stock pair
            price_abc,
            price_def,
            ratio,
            upper_bound,
            lower_bound,
            trigger_alert,
            timestamp: new Date(), // Assuming you want to log the current time
        };
    }
}
