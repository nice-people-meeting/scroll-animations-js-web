import { useRef, useEffect } from 'react';
import init from 'scroll-animations-js';
import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string | null;
  delay: number;
  duration: number;
}

function AnimationBox({ name, delay, duration }: AnimationBoxProps) {
  const boxWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxWrapper.current) return;

    const list = Array.from(boxWrapper.current.children);

    list.forEach(item => {
      item.classList.remove('sa-animated');
    });

    console.log('init');

    setTimeout(() => {
      list.forEach(item => {
        item.classList.add('sa-animated');
      });
      init.init();
    }, duration);
  }, [delay, duration, name]);
  return (
    <AnimationBoxWrapper>
      <AnimationBackground ref={boxWrapper}>
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
