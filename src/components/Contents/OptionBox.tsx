import { RangeBar } from './styled';

interface OptionBoxProps {
  delayHandler: (param: number) => void;
  durationHandler: (param: number) => void;
  duration: number;
  delay: number;
}

const OptionBox = ({ delayHandler, durationHandler, duration, delay }: OptionBoxProps) => {
  return (
    <div>
      <p>Options</p>
      <div>delay (ms) [default: 0ms]</div>
      <RangeBar>
        <p>0</p>
        <input
          type="range"
          id="delay"
          name="delay"
          min="0"
          max="3000"
          step="50"
          value={delay}
          onChange={e => delayHandler(+e.target.value)}
        />
        <p>3000</p>
      </RangeBar>

      <div>duration (ms) [default: 500ms]</div>
      <RangeBar>
        <p>0</p>
        <input
          type="range"
          id="duration"
          name="duration"
          min="0"
          max="3000"
          step="50"
          value={duration}
          onChange={e => durationHandler(+e.target.value)}
        />
        <p>3000</p>
      </RangeBar>
    </div>
  );
};

export default OptionBox;
