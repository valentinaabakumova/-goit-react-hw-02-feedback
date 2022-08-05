import Interface from './Interface';
import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapp>
      <Interface />
    </Wrapp>
  );
};

const Wrapp = styled.div`
  border: 1px solid black;
  margin: 50px 50px;
  padding: 10px 10px;
`;
