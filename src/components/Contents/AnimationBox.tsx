import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string | null;
  delay: number;
  duration: number;
}

function AnimationBox({ name, delay, duration }: AnimationBoxProps) {
  return (
    <AnimationBoxWrapper>
      <AnimationBackground>
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
        <div className={name || undefined} sa-delay={delay} sa-duration={duration} />
      </AnimationBackground>
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
