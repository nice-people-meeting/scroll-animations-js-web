import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  g {
    fill: white;
  }
  @media (max-width: 400px) {
    width: 365px;
  }
`;

export const ToNpmContainer = styled.div`
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

export const GithubLogo = styled.div`
  display: flex;

  margin-top: 1rem;
  margin-right: 1rem;
  justify-self: end;
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
  box-shadow: inset 0 0 0 0 #2e3846;

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
  border-radius: 0.5rem;
  cursor: pointer;
  touch-action: manipulation;
  margin: 10px;
  transition: ease-out 0.3s;
  &:hover {
    box-shadow: inset 400px 0 0 0 #2e3846;
    color: #fff;
  }
  @media screen and (max-width: 767px) {
    width: 90px;
    height: 40px;
    font-size: 12px;
    white-space: nowrap;
  }
`;
