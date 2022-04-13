import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { Pokemon } from "./pokemon.entity";
import { AxiosResponse } from 'axios';
import { PokemonDTO } from "./dto/pokemon.dto";
import { PokemonListDTO } from "./dto/pokemonList.dto";

@Injectable()
export class PokemonService{
    constructor(private httpService: HttpService){}

    findAll(): Observable<AxiosResponse<PokemonListDTO>> {
        const pokes = this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10').pipe(map(response => response.data.results))
        return pokes
    }
    findById(id: number): Observable<AxiosResponse<PokemonDTO>> {
        const poke = this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data))
                    
        const name = this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data.forms))
        const sprites = this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data.sprites.front_default))
        const abilities = this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data.abilities))
        const stats = this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data.stats.base_stats))

        return poke
    }
    findByName(name: string): Observable<AxiosResponse<Pokemon>> {
        return this.httpService
                    .get(`https://pokeapi.co/api/v2/${name}`)
                    .pipe(
                        map(response => response.data)
                    )
    }

}