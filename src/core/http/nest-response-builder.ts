import { NestResponse } from "./nest-response";

export class NestResponseBuilder {
    private response: NestResponse = {
        id: 0,
        forms: {
            name: ""
        },
        sprites: {
            front_default: "",
        },
        abilities: {},
        stats: [
            { base_stats: "" }],
    }

    public useBody(body: any) {
        console.log(body)
        this.response.id = body.id;
        this.response.forms = body.forms;
        this.response.sprites = body.sprites;
        this.response.abilities = body.abilities;
        this.response.stats = body.stats;
        return this;
    }

    public build() {
        return new NestResponse(this.response);
    }
}