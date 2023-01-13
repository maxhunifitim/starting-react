import React from "react";
import { observer } from "mobx-react";

import store from "../store";

import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h1> {store.selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(store.selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{store.selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.prototype = PokemonType;

export default observer(PokemonInfo);
