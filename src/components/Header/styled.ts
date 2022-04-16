import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  border: 1px solid black;
  /* height: 25vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
`;

export const ToNpmContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export const ToNpmDiv = styled.div`
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`;

export const ButtonWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  margin: 10px;
`;
