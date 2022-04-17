import { RangeBar } from './styled';

interface OptionBoxProps {
  description: React.ReactNode | string;
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  disabled?: boolean;
  onChange: (newValue: number) => void;
}

const OptionBox = ({ description, name, min, max, step, disabled = false, value, onChange }: OptionBoxProps) => {
  return (
    <div>
      <div>{description}</div>
      <RangeBar>
        <p>{min}</p>
        <input
          disabled={disabled}
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(+e.target.value)}
        />
        <p>{max}</p>
      </RangeBar>
    </div>
  );
};

export default OptionBox;
