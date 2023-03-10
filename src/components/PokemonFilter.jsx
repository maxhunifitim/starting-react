import store from "../store";
import { observer } from "mobx-react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
`;

const PokemonFilter = () => (
  <Input
    type="text"
    value={store.filter}
    onChange={(evt) => store.setFilter(evt.target.value)}
  />
);

export default observer(PokemonFilter);
