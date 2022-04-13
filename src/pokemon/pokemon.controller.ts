import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { PokemonDTO } from "./dto/pokemon.dto";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController {

    constructor(private pokemonService: PokemonService){}

    @Get()
    async getAll(){
        let pokemons = this.pokemonService.findAll();
        return pokemons
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    getOne(@Param('id') id:number){
        let poke = this.pokemonService.findById(id)
        // new NestResponseBuilder().useBody(poke).build()
        return poke
    }

    @Get(':name')
    getByName(@Param('name') name:string){
        return this.pokemonService.findByName(name)
    }
}