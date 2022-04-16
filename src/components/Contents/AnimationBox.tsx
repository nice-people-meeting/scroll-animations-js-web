import { TestAniamtionDiv, AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string;
}

function AnimationBox({ name }: AnimationBoxProps) {
  return (
    <AnimationBoxWrapper>
      <AnimationBackground>
        <div className={name} />
      </AnimationBackground>
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
