import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string | null;
}

function AnimationBox({ name }: AnimationBoxProps) {
  return (
    <AnimationBoxWrapper>
      <AnimationBackground>
        <div className={name || undefined} />
      </AnimationBackground>
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
