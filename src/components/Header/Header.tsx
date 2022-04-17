import { AnimationList } from './AnimationList';
import Button from './Button';
import { ButtonWrapper, HeaderWrapper, LogoContainer, ToNpmContainer, ToNpmDiv, GihubLogo } from './styled';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

interface Prop {
  curAnimationHandler: (param: string) => void;
}

export default function Header({ curAnimationHandler }: Prop) {
  return (
    <HeaderWrapper>
      <ToNpmContainer>
        <ToNpmDiv>
          <a href="https://github.com/nice-people-meeting/scroll-animation-js" target="_blank" rel="noreferrer">
            {/* &gt; Go To Npm */}
            <Logo width={40} height={40} fill="#202020" />
          </a>
        </ToNpmDiv>
        <GihubLogo style={{ justifySelf: 'flex-end' }}>
          <a href="https://github.com/nice-people-meeting/scroll-animation-js" target="_blank" rel="noreferrer">
            {/* &gt; Go To Npm */}
            <GithubIcon width={40} height={40} fill="#fff" />
          </a>
        </GihubLogo>
      </ToNpmContainer>
      <LogoContainer>
        <h1>Scroll Animations JS</h1>
      </LogoContainer>
      <ButtonWrapper>
        {AnimationList.map(el => {
          return <Button key={el.id} name={el.name} src={el.src} curAnimationHandler={curAnimationHandler} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}
