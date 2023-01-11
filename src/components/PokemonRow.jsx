import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>
          More Information!
        </Button>
      </td>
    </tr>
  );
};

PokemonRow.prototype = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
