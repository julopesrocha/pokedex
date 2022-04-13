import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

export class PokemonDTO {

    id: number;
    forms: {
        name: string
    };
    sprites: {
        front_default:  string;
    };
    abilities: Array<Object>;
    stats: [
        { base_stats: string }
    ];

    constructor(res: Observable<AxiosResponse>) {
        Object.assign(this, res);
    }
}