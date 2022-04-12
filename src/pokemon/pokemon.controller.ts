import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { PokemonDTO } from "./pokemon.dto";
import { Pokemon } from "./pokemon.entity";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController {

    constructor(private pokemonService: PokemonService){}

    @Get()
    async getAll(){
        let pokemons = this.pokemonService.findAll();
        // new NestResponseBuilder()
        //             .useBody(pokemons)
        //             .build();
        return pokemons;
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    getOne(@Param('id') id:number){
        return this.pokemonService.findById(id)
    }

    @Get(':name')
    getByName(@Param('name') name:string){
        return this.pokemonService.findByName(name)
    }
}