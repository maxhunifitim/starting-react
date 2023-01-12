import useStore from "../store";

import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
`;

const PokemonFilter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) => setFilter(evt.target.value)}
    />
  );
};

export default PokemonFilter;
