import { useState } from 'react';
import AnimationBox from './AnimationBox';
import CodeBox from './CodeBox';
import OptionContainer from './OptionContainer';
import { ContentsWrapper, SubTitle, Content } from './styled';

interface ContentsProps {
  name: string | null;
}

export interface FadeDistance {
  isCustom: boolean;
  value: number;
}

export interface Scale {
  isCustom: boolean;
  value: number;
}

export interface ScaleX {
  isCustom: boolean;
  value: number;
}

export interface ScaleY {
  isCustom: boolean;
  value: number;
}
const Contents = ({ name }: ContentsProps) => {
  const [delay, setDelay] = useState(300);
  const [duration, setDuration] = useState(500);
  const [fadeDistance, setFadeDistance] = useState<FadeDistance>({ isCustom: false, value: 200 });
  const [scale, setScale] = useState<Scale>({ isCustom: false, value: 200 });
  const [scaleX, setScaleX] = useState<ScaleX>({ isCustom: false, value: 200 });
  const [scaleY, setScaleY] = useState<ScaleY>({ isCustom: false, value: 200 });
  const CODE = `<div class="${name}" ${delay ? `sa-delay="${delay}"` : ''} ${
    duration !== 500 ? `sa-duration="${duration}"` : ''
  } ${fadeDistance.isCustom ? `sa-fade-distance="${fadeDistance.value}"` : ''}  ${
    fadeDistance.isCustom ? `sa-scale="${scale.value}"` : ''
  }  ${fadeDistance.isCustom ? `sa-scale-x="${scaleX.value}"` : ''}  ${
    fadeDistance.isCustom ? `sa-scale-y="${scaleY.value}"` : ''
  } ></div>`;

  const delayHandler = (param: number) => {
    setDelay(param);
  };
  const durationHandler = (param: number) => {
    setDuration(param);
  };

  const fadeDistanceHandler = (param: FadeDistance) => {
    setFadeDistance(param);
  };

  const ScaleHandler = (param: Scale) => {
    setScale(param);
  };

  const ScaleXHandler = (param: ScaleX) => {
    setScaleX(param);
  };
  const ScaleYHandler = (param: ScaleY) => {
    setScaleY(param);
  };

  return (
    <ContentsWrapper>
      <Content>
        <SubTitle>Usage</SubTitle>
        <CodeBox code={CODE} />
        <OptionContainer
          delayHandler={delayHandler}
          durationHandler={durationHandler}
          duration={duration}
          delay={delay}
          fadeDistance={fadeDistance}
          fadeDistanceHandler={fadeDistanceHandler}
          scale={scale}
          scaleX={scaleX}
          scaleY={scaleY}
          ScaleYHandler={ScaleYHandler}
          ScaleXHandler={ScaleXHandler}
          ScaleHandler={ScaleHandler}
        />
      </Content>
      <Content>
        <SubTitle>Preview</SubTitle>
        <AnimationBox name={name} delay={delay} duration={duration} />
      </Content>
    </ContentsWrapper>
  );
};

export default Contents;
