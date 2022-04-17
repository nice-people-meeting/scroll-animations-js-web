import { RangeBar } from './styled';

interface OptionBoxProps {
  delayHandler: (param: number) => void;
  durationHandler: (param: number) => void;
}

const OptionBox = ({ delayHandler, durationHandler }: OptionBoxProps) => {
  return (
    <div>
      <p>Options</p>
      <div>delay (ms)</div>
      <RangeBar>
        <p>0</p>
        <input
          type="range"
          id="delay"
          name="delay"
          min="0"
          max="3000"
          step="50"
          onChange={e => delayHandler(+e.target.value)}
        />
        <p>3000</p>
      </RangeBar>

      <div>duration (ms)</div>
      <RangeBar>
        <p>0</p>
        <input
          type="range"
          id="duration"
          name="duration"
          min="0"
          max="3000"
          step="50"
          onChange={e => durationHandler(+e.target.value)}
        />
        <p>3000</p>
      </RangeBar>
    </div>
  );
};

export default OptionBox;
