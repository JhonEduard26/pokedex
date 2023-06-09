import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=494';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async runSeed() {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();

      const pokemons = results.map(({ url, name }) => {
        const no = url.split('/')[6];
        return {
          no,
          name,
        };
      });
      this.pokemonModel.insertMany(pokemons, { ordered: true });
      return `Seeded ${pokemons.length} pokemons`;
    } catch (error) {
      console.log(error);
    }
  }
}
