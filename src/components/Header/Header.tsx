import { AnimationList } from './AnimationList';
import Button from './Button';
import { ButtonWrapper, HeaderWrapper, LogoContainer, ToNpmContainer, ToNpmDiv } from './styled';

export default function Header() {
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
        <img
          src="https://i0.wp.com/www.buppagistar.com/wp-content/uploads/2017/08/wowjs_screenshot.png?fit=806%2C364&ssl=1"
          alt="logo"
          width="700px"
        />
      </LogoContainer>
      <ButtonWrapper>
        {AnimationList.map(el => {
          return <Button key={el.id} name={el.name} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
}
