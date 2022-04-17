import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  /* border: 1px solid black; */
  /* height: 25vh; */
  /* background: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  justify-content: center;
  h1 {
    color: white;
  }
`;

export const ToNpmContainer = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  background: #ffffff;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1a202c;
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
  @media screen and (max-width: 767px) {
    width: 90px;
    height: 40px;
    font-size: 12px;
    white-space: nowrap;
  }
  /* border: 1px solid black;
  padding: 5px;
  width: 120px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  margin: 10px;
   */
`;
