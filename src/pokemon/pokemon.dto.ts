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
}