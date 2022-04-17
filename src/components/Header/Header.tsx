import { AnimationList } from './AnimationList';
import Button from './Button';
import { ButtonWrapper, HeaderWrapper, LogoContainer, ToNpmContainer, ToNpmDiv } from './styled';

interface Prop {
  curAnimationHandler: (param: string) => void;
}

export default function Header({ curAnimationHandler }: Prop) {
  return (
    <HeaderWrapper>
      <ToNpmContainer>
        <ToNpmDiv>
          <a href="https://www.npmjs.com/package/scroll-animations-js" target="_blank" rel="noreferrer">
            {/* &gt; Go To Npm */}
            <img alt="" src="/images/GitHub_Logo_White.png" width={100} height={50} />
          </a>
        </ToNpmDiv>
      </ToNpmContainer>
      <LogoContainer>
        <h1>Scroll Animation JS</h1>
      </LogoContainer>
      <ButtonWrapper>
        {AnimationList.map(el => {
          return <Button key={el.id} name={el.name} src={el.src} curAnimationHandler={curAnimationHandler} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}
