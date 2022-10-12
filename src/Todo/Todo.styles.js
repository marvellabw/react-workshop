import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #f1f5f8;
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h1 {
    transform: rotate(2deg);
    padding: 0.2rem 1.2rem;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    background-color: #fdcb6e;
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  font-family: 'Permanent Marker', cursive;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;

  span {
    background: #f1f5f8;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid hsl(198, 1%, 29%);
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.7rem;
  border-bottom-right-radius: 15px 3px;
  border-bottom-left-radius: 3px 15px;
  border: solid 3px transparent;
  border-bottom: dashed 3px #ff8000;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.2rem;
  color: hsla(260, 2%, 25%, 0.7);
  width: 70%;
  margin-bottom: 20px;
`;

export const Li = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem;
`;
