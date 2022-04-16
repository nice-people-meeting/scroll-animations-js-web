// import './scroll-animations-js.css';
import React from 'react';
import { AnimationBoxWrapper, AnimationBackground } from './styled';

interface AnimationBox {
  code: string;
}

function AnimationBox({ code }: AnimationBox) {
  return (
    <AnimationBoxWrapper>
      <AnimationBackground>
        {/* <div dangerouslySetInnerHTML={{ __html: code }}>움직이는 요소</div> */}
        <div>움직이는 요소</div>
      </AnimationBackground>
    </AnimationBoxWrapper>
  );
}

export default AnimationBox;
