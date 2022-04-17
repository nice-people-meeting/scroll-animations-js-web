import { useState } from 'react';
import AnimationBox from './AnimationBox';
import CodeBox from './CodeBox';
import OptionBox from './OptionBox';
import { ContentsWrapper, SubTitle, Content } from './styled';

interface ContentsProps {
  name: string | null;
}

const Contents = ({ name }: ContentsProps) => {
  const [delay, setDelay] = useState(300);
  const [duration, setDuration] = useState(500);
  const CODE = `<div class="${name}" ${delay ? `sa-delay="${delay}"` : ''} ${
    duration !== 500 ? `sa-duration="${duration}"` : ''
  }></div>`;

  const delayHandler = (param: number) => {
    setDelay(param);
  };
  const durationHandler = (param: number) => {
    setDuration(param);
  };

  return (
    <ContentsWrapper>
      <Content>
        <SubTitle>Usage</SubTitle>
        <CodeBox code={CODE} />
        <OptionBox delayHandler={delayHandler} durationHandler={durationHandler} duration={duration} delay={delay} />
      </Content>
      <Content>
        <SubTitle>Preview</SubTitle>
        <AnimationBox name={name} delay={delay} duration={duration} />
      </Content>
    </ContentsWrapper>
  );
};

export default Contents;
