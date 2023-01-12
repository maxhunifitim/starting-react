import React from "react";
import useStore from "../store";

import PokemonType from "../PokemonType";

const PokemonInfo = () => {
  const selectedPokemon = useStore((state) => state.selectedPokemon);

  return selectedPokemon ? (
    <div>
      <h1> {selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.prototype = PokemonType;

export default PokemonInfo;
