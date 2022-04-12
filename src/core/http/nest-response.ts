export class NestResponse {
    
    id: number;
    forms: {
        name: string
    };
    sprites: {
        front_default: string,
    };
    abilities: Object;
    stats: [
        { base_stats: string }
    ];

    constructor(res: NestResponse) {
        Object.assign(this, res);
    }
}