import { FooterContainer, FooterWrap, TeamInfoBox, SiteInfoBox } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <TeamInfoBox>
          <li>
            <h3>&middot; Nice People Meeting</h3>
            <span>Creative. Attractive.</span>
            <span>Born in Korea 22.</span>
          </li>
          <li>
            <h3>&middot; Team</h3>
            <a href="https://github.com/kjhg478">kjhg478</a>
            <a href="https://github.com/jwun95">jwun95</a>
            <a href="https://github.com/developerjhp">develoerpjhp</a>
            <a href="https://github.com/woobba94">woobba94</a>
            <a href="https://github.com/borachoidev">borachoidev</a>
            <a href="https://github.com/hyebin-Hwang">hyebin-Hwang</a>
            <a href="https://github.com/ww8007">ww8007</a>
          </li>
        </TeamInfoBox>
        <SiteInfoBox>
          <h1>Scroll-Animations-js</h1>
          <div>Nice People Meeting @ 2022</div>
        </SiteInfoBox>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
