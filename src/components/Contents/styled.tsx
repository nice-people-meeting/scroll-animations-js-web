import styled from 'styled-components';

// Contents
export const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 48vh;
  margin-bottom: 50px;
`;
export const SubTitle = styled.p`
  font-size: 26px;
  color: #8a8a8a;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80%;
  height: 100%;
  max-width: 600px;
`;

// CodeBox
export const CodeBoxWrapper = styled.code`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  div {
    width: 80%;
    justify-content: center;
    align-items: flex-start;
    :first-child {
      padding: 20px;
    }
  }
`;

// AnimationBox
export const AnimationBoxWrapper = styled.div`
  display: flex;
  background-color: #ddd;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
`;

export const TestAniamtionDiv = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 100px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  background-color: #ececec;
`;
export const AnimationBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300%;
  div {
    width: 200px;
    height: 200px;
    margin-bottom: 100px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    background-color: #ececec;
  }
`;
