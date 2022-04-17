import { useRef, useEffect } from 'react';
import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string | null;
  delay: number;
  duration: number;
}

function AnimationBox({ name, delay, duration }: AnimationBoxProps) {
  const example = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!example.current) return;

    example.current.classList.remove('sa-animated');
    setTimeout(() => {
      example.current?.classList.add('sa-animated');
    }, duration);
  }, [delay, duration]);
  return (
    <AnimationBoxWrapper>
      <AnimationBackground>
        <div ref={example} className={name || undefined} sa-delay={delay} sa-duration={duration} />
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
