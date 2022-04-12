import { Get, HttpServer, HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs/internal/Observable";
import { filter, map } from "rxjs/operators";
import { Pokemon } from "./pokemon.entity";
import { AxiosResponse } from 'axios';
import { PokemonDTO } from "./pokemon.dto";

@Injectable()
export class PokemonService{
    constructor(private httpService: HttpService){}

    findAll(): Observable<AxiosResponse<Pokemon[]>> {
        return this.httpService.get('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10').pipe(map(response => response.data))
        
    }
    findById(id: number): Observable<AxiosResponse<PokemonDTO>> {
        return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map(response => response.data))
    }
    findByName(name: string): Observable<AxiosResponse<Pokemon>> {
        return this.httpService
                    .get(`https://pokeapi.co/api/v2/${name}`)
                    .pipe(
                        map(response => response.data)
                    )
    }

}