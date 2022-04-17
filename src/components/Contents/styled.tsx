import styled from 'styled-components';

// Contents
export const ContentsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
`;

export const CodeWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const SubTitle = styled.p`
  font-size: 26px;
  color: #f3f1f1;
  font-weight: 700;
  margin: 2rem 0;
  a {
    margin-left: 10px;
    position: relative;
    padding-top: 60px;
  }
  a span {
    top: 50px;
    position: absolute;
    width: 30px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
  }
  a span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// CodeBox
export const CodeBoxWrapper = styled.code`
  div {
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px;
    width: 600px;
    :first-child {
      padding: 20px;
    }
    @media (max-width: 870px) {
      margin-right: 0;
    }
    @media (max-width: 650px) {
      width: 425px;
    }
  }
`;

export const OptionContainerWrapper = styled.div`
  background: #282a36;
  color: #f3f1f1;
  padding: 1.2rem;
  border-radius: 2px;
  @media (max-width: 870px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const OptionTitle = styled.p`
  padding-bottom: 0.7rem;
`;

export const OptionBoxWrapper = styled.div`
  padding: 0.3rem 0;
  font-size: 0.9rem;
`;

// AnimationBox
export const AnimationBoxWrapper = styled.div`
  display: flex;
  background-color: #2f3846;
  justify-content: center;
  align-items: flex-start;
  width: 300%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  height: 40rem;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 5rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }
`;

export const AnimationBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
    margin-bottom: 10rem;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    background-color: #325cba;
    align-items: center;
    text-align: center;
    display: flex;
    :first-child {
      margin-top: 5rem;
      background-color: #6f0000;
    }
    :nth-child(2) {
      background-color: #ff8c00;
    }
    :nth-child(3) {
      background-color: #cccc00;
    }
    :nth-child(4) {
      background-color: #006400;
    }
    :nth-child(6) {
      background-color: #000080;
    }
    :nth-child(7) {
      background-color: #483d8b;
    }
  }
  span {
    color: white;
    font-weight: bold;
  }
`;

// OptionBox

export const RangeBar = styled.div`
  display: flex;
  padding: 0.3rem 0;
  input {
    width: 100%;
  }
`;
