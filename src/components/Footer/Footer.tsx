import { FooterContainer, FooterWrap, TeamInfoBox, SiteInfoBox } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <TeamInfoBox>
          <li>
            <li className="npm_box">
              <h3>⭐️ Nice People Meeting</h3>
              <span>Creative. Attractive.</span>
              <span>Born in Korea 22.</span>
            </li>
            <li className="team_box">
              <h3>📒 Team</h3>
              <li>
                <a href="https://github.com/kjhg478">kjhg478</a>
                <a href="https://github.com/jwun95">jwun95</a>
                <a href="https://github.com/developerjhp">develoerpjhp</a>
                <a href="https://github.com/woobba94">woobba94</a>
              </li>
              <li>
                <a href="https://github.com/borachoidev">borachoidev</a>
                <a href="https://github.com/hyebin-Hwang">hyebin-Hwang</a>
                <a href="https://github.com/ww8007">ww8007</a>
              </li>
            </li>
          </li>
        </TeamInfoBox>
        {/* <SiteInfoBox>
          <div>Nice People Meeting @ 2022</div>
        </SiteInfoBox> */}
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
