import { AnimationList } from './AnimationList';
import Button from './Button';
import { ButtonWrapper, HeaderWrapper, LogoContainer, ToNpmContainer, ToNpmDiv, GithubLogo } from './styled';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

interface Prop {
  curAnimationHandler: (param: string) => void;
}

export default function Header({ curAnimationHandler }: Prop) {
  return (
    <HeaderWrapper>
      <ToNpmContainer>
        <ToNpmDiv />
        <GithubLogo style={{ justifySelf: 'flex-end' }}>
          <a href="https://github.com/nice-people-meeting/scroll-animation-js" target="_blank" rel="noreferrer">
            <GithubIcon width={40} height={40} fill="#fff" />
          </a>
        </GithubLogo>
      </ToNpmContainer>
      <LogoContainer>
        <Logo width={400} height={56} />
      </LogoContainer>
      <ButtonWrapper>
        {AnimationList.map(el => {
          return <Button key={el.id} name={el.name} src={el.src} curAnimationHandler={curAnimationHandler} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}
