import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import AnimationBox from './AnimationBox';
import CodeBox from './CodeBox';
// import { Controller, Sidebar } from '../../components';
import { ContentsWrapper, SubTitle, Content } from './styled';

interface ContentsProps {
  name: string;
}

const Contents = ({ name }: ContentsProps) => {
  const CODE = `<div class="${name}"></div>`;
  return (
    <ContentsWrapper>
      <Content>
        <SubTitle>Usage</SubTitle>
        <CodeBox code={CODE} />
      </Content>
      <Content>
        <SubTitle>Preview</SubTitle>
        <AnimationBox code={CODE} />
      </Content>
    </ContentsWrapper>
  );
};

export default Contents;
