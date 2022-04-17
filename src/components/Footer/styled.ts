import styled from 'styled-components/macro';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;

  background: #202020;
  border-top: 1px solid #f2f2f2;
`;

export const FooterWrap = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 0rem;
  color: white;
`;

export const TeamInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  li {
    .npm_box {
      flex-direction: column;
    }
    .team_box {
      flex-direction: column;
    }
    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
    span {
      padding: 0 0 0.3rem 0.6rem;
      color: #aaaaaa;
    }
    a {
      height: 20px;
      text-decoration: none;
      padding: 0 0.5rem;

      color: #aaaaaa;
    }
    a:hover {
      text-decoration: underline;
      text-shadow: 0.5px 0px 0.1px, -0.5px 0px 0.1px;
    }
  }
  li:nth-child(1) {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SiteInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  text-align: right;
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-black);
  }
`;
