import { useRef, useEffect } from 'react';
import init from 'scroll-animations-js';
import { FadeDistance, Scale } from './Contents';
import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBoxProps {
  name: string | null;
  delay: number;
  duration: number;
  fadeDistance: FadeDistance;
  scale: Scale;
}

function AnimationBox({ name, delay, duration, fadeDistance, scale }: AnimationBoxProps) {
  const boxWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxWrapper.current) return;

    const list = Array.from(boxWrapper.current.children);

    list.forEach(item => {
      item.classList.remove('sa-animated');
    });

    setTimeout(() => {
      list.forEach(item => {
        item.classList.add('sa-animated');
      });
      init.init();
    }, duration);
  }, [delay, duration, name, fadeDistance, scale]);

  return (
    <AnimationBoxWrapper>
      <AnimationBackground ref={boxWrapper}>
        {!name?.match(/sa-scale/gi) ? (
          <>
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            />
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            />
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            />
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            />
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            />
          </>
        ) : (
          <>
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
          </>
        )}
      </AnimationBackground>
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
