import { useRef, useEffect, useCallback } from 'react';
import init from 'scroll-animations-js';
import { AnimationBoxWrapper, AnimationBackground } from './styled';
import type { FadeDistance, Scale } from './Contents';

interface AnimationBoxProps {
  name: string | null;
  delay: number;
  duration: number;
  fadeDistance: FadeDistance;
  scale: Scale;
}

function AnimationBox({ name, delay, duration, fadeDistance, scale }: AnimationBoxProps) {
  const boxWrapper = useRef<HTMLDivElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToTop();
  }, [name]);

  const scrollToTop = useCallback(() => {
    scrollRef.current?.scrollIntoView({ block: 'start' });
  }, [name]);

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
            >
              <span>It will immediately animate</span>
            </div>
            <div
              className={name || undefined}
              sa-delay={delay}
              sa-duration={duration}
              sa-fade-distance={fadeDistance.value}
            >
              <span>It will immediately animate</span>
            </div>
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
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value}>
              <span>It will immediately animate</span>
            </div>
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value}>
              <span>It will immediately animate</span>
            </div>
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
            <div className={name || undefined} sa-delay={delay} sa-duration={duration} sa-scale={scale.value} />
          </>
        )}
      </AnimationBackground>
      <div ref={scrollRef} />
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
