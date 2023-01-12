import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) =>
        dispatch({
          type: "SET_FILTER",
          payload: evt.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
