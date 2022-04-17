import { FadeDistance, Scale, ScaleX, ScaleY } from './Contents';
import OptionBox from './OptionBox';

interface OptionContainerProps {
  delayHandler: (param: number) => void;
  durationHandler: (param: number) => void;
  duration: number;
  delay: number;
  fadeDistance: FadeDistance;
  fadeDistanceHandler: (param: FadeDistance) => void;

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
  fadeDistance,
}: OptionContainerProps) => {
  console.log(ScaleHandler, ScaleXHandler, ScaleYHandler, fadeDistanceHandler, scaleX, scaleY, scale);
  return (
    <div>
      <p>Options</p>
      <OptionBox
        description="delay (ms) [default: 0ms]"
        name="delay"
        min={0}
        max={3000}
        step={100}
        value={delay}
        onChange={delayHandler}
      />

      <OptionBox
        description="duration (ms) [default: 500ms]"
        name="duration"
        min={0}
        max={3000}
        step={100}
        value={duration}
        onChange={durationHandler}
      />

      <OptionBox
        disabled={!fadeDistance.isCustom}
        description="Fade Distance (px) [default: 200px]"
        name="fadeDistance"
        min={100}
        max={1000}
        step={100}
        value={fadeDistance.value}
        onChange={durationHandler}
      />
    </div>
  );
};

export default OptionContainer;
