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
            &gt; Go To Npm
          </a>
        </ToNpmDiv>
      </ToNpmContainer>
      <LogoContainer>
        <img src="images/large.png" alt="logo" width="700px" />
      </LogoContainer>
      <ButtonWrapper>
        {AnimationList.map(el => {
          return <Button key={el.id} name={el.name} src={el.src} curAnimationHandler={curAnimationHandler} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}
