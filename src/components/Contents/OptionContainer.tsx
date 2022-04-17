import { FadeDistance, Scale, ScaleX, ScaleY } from './Contents';
import OptionBox from './OptionBox';
import { OptionContainerWrapper, OptionTitle } from './styled';

interface OptionContainerProps {
  delayHandler: (param: number) => void;
  durationHandler: (param: number) => void;
  duration: number;
  delay: number;
  fadeDistance: FadeDistance;
  fadeDistanceHandler: (param: FadeDistance) => void;
  name: string | null;
  scale: Scale;
  scaleX: ScaleX;
  scaleY: ScaleY;
  ScaleYHandler: (param: ScaleY) => void;
  ScaleXHandler: (param: ScaleX) => void;
  ScaleHandler: (param: Scale) => void;
}

const OptionContainer = ({
  delayHandler,
  durationHandler,
  ScaleHandler,
  ScaleXHandler,
  ScaleYHandler,
  fadeDistanceHandler,
  scaleX,
  scaleY,
  scale,
  duration,
  delay,
  name,
  fadeDistance,
}: OptionContainerProps) => {
  console.warn(ScaleHandler, ScaleXHandler, ScaleYHandler, fadeDistanceHandler, scaleX, scaleY, scale);

  /**
   * [v] name 가져오기 -> scale / fade 구분
   * [] fade : isCustom/ value 조절 function 분리
   * []scale : isCustom/ value 조절 function 분리
   *
   * -----시간나면------------------------------------
   * [] scale : checkbox disable
   * [] scaleX : isCustom/ value 조절 function 분리
   * [] scaleY : isCustom/ value 조절 function 분리
   *  */

  const handleFadeRangeOption = (newValue: number) => {
    fadeDistanceHandler({ isCustom: true, value: newValue });
  };

  const handleScaleHandler = (newValue: number) => {
    ScaleHandler({ isCustom: true, value: newValue });
  };

  const handleScaleXHandler = (newValue: number) => {
    ScaleXHandler({ isCustom: true, value: newValue });
  };

  const handleScaleYHandler = (newValue: number) => {
    ScaleYHandler({ isCustom: true, value: newValue });
  };

  const handleFadeCustomOption = (e: any) => {
    if (e.target.checked) {
      fadeDistanceHandler({ ...fadeDistance, isCustom: true });
    } else {
      fadeDistanceHandler({ ...fadeDistance, isCustom: false });
    }
  };

  const handleScaleCustomOption = (e: any) => {
    if (e.target.checked) {
      ScaleHandler({ ...scale, isCustom: true });
    } else {
      ScaleHandler({ ...scale, isCustom: false });
    }
  };

  const handleScaleXCustomOption = (e: any) => {
    if (e.target.checked) {
      ScaleXHandler({ ...scaleX, isCustom: true });
    } else {
      ScaleXHandler({ ...scaleX, isCustom: false });
    }
  };

  const handleScaleYCustomOption = (e: any) => {
    if (e.target.checked) {
      ScaleYHandler({ ...scaleY, isCustom: true });
    } else {
      ScaleYHandler({ ...scaleY, isCustom: false });
    }
  };
  console.log(scaleX);
  console.log(scaleY);
  console.log(scaleX.isCustom || scaleY.isCustom);

  return (
    <OptionContainerWrapper>
      <OptionTitle>Options</OptionTitle>
      <OptionBox
        description="Delay (ms) [default: 0ms]"
        name="delay"
        min={0}
        max={5000}
        step={100}
        value={delay}
        onChange={delayHandler}
      />

      <OptionBox
        description="Duration (ms) [default: 500ms]"
        name="duration"
        min={0}
        max={5000}
        step={100}
        value={duration}
        onChange={durationHandler}
      />
      {!name?.match(/sa-scale/gi) && (
        <>
          <input type="checkbox" onChange={handleFadeCustomOption} />
          <OptionBox
            disabled={!fadeDistance.isCustom}
            description="Fade Distance (px) [default: 200px]"
            name="fadeDistance"
            min={100}
            max={1000}
            step={100}
            value={fadeDistance.value}
            onChange={handleFadeRangeOption}
          />
        </>
      )}

      {name?.match(/sa-scale/gi) && (
        <>
          {!(scaleX.isCustom || scaleY.isCustom) && (
            <>
              <input type="checkbox" onChange={handleScaleCustomOption} />
              <OptionBox
                disabled={!scale.isCustom}
                description="scale [default: 1.1]"
                name="scale"
                min={0.1}
                max={3}
                step={0.1}
                value={scale.value}
                onChange={handleScaleHandler}
              />
            </>
          )}
          {/* {!scale.isCustom && (
            <>
              <input type="checkbox" onChange={handleScaleXCustomOption} />
              <OptionBox
                disabled={!scaleX.isCustom}
                description="scaleX (px) [default: 200px]"
                name="scaleX"
                min={100}
                max={1000}
                step={100}
                value={scaleX.value}
                onChange={handleScaleXHandler}
              />
              <input type="checkbox" onChange={handleScaleYCustomOption} />
              <OptionBox
                disabled={!scaleY.isCustom}
                description="scaelY (px) [default: 200px]"
                name="scaleY"
                min={100}
                max={1000}
                step={100}
                value={scaleY.value}
                onChange={handleScaleYHandler}
              />
            </>
          )} */}
        </>
      )}
    </OptionContainerWrapper>
  );
};

export default OptionContainer;
