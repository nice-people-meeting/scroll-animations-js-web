import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 2rem;
  }
`;

export const ToNpmContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ToNpmDiv = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  flex: 1;

  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`;

export const GihubLogo = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  flex: 0.02;
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  background: #fff;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #000;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  width: 150px;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 12px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 10px;
  &:hover {
    background: #282d3e;
  }
  @media screen and (max-width: 767px) {
    width: 90px;
    height: 40px;
    font-size: 12px;
    white-space: nowrap;
  }
`;
