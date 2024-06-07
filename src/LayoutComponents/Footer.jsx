import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import LogoImg from '../assets/JapaTravels.svg';
import { Link } from 'react-router-dom';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 45px auto;


  @media (min-width:512px) {
    flex-direction: row;
  }
`;

const LogoAndSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 100%;

  @media (min-width: 512px) {
    width: 65%;
    height: 28px;
  }
`;

const LogoAndSocialsText = styled.p`
  font-size: 14px;
  width: 60%;
  line-height: 26px;
  margin: 22px auto;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    text-align: start;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialsLink = styled.a`
  margin-right: 15px;
  padding: 8px;
  border: 1px solid #5b5f62;
  color: #5b5f62;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    color: #f66f4d;
    border: 1px solid #f66f4d;
  }
`;

const UsefulLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (min-width: 512px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
  }
`;

const UsefulLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const UsefulLinksHeader = styled.h4`
  font-size: 18px;
  margin-bottom: 25px;
  color: #2d3134;
`;

const UsefulLink = styled(Link)`
  font-size: 16px;
  display: block;
  margin: 10px 0px;
  color: #676a6c;
  text-align: start !important;
`;
function Footer() {
  return (
    <Container>
      <LogoAndSocialsContainer>
        <Link to="/">
          <Logo
            src={LogoImg}
            alt="JapaTravels Logo"
            aria-label="Japa travels Logo"
          />
        </Link>
        <LogoAndSocialsText>
          Enjoy the touring with JapaTravels
        </LogoAndSocialsText>
        <SocialsContainer>
          <SocialsLink>
            <FaFacebookF />
          </SocialsLink>
          <SocialsLink>
            <FaInstagram />
          </SocialsLink>
          <SocialsLink>
            <FaTwitter />
          </SocialsLink>
        </SocialsContainer>
      </LogoAndSocialsContainer>

      <UsefulLinksContainer>
        <UsefulLinks>
          <UsefulLinksHeader>Resources</UsefulLinksHeader>
          <UsefulLink>Download</UsefulLink>
          <UsefulLink>Help Center</UsefulLink>
          <UsefulLink>Guide Book</UsefulLink>
          <UsefulLink>App Directory</UsefulLink>
        </UsefulLinks>
        <UsefulLinks>
          <UsefulLinksHeader>Travelers</UsefulLinksHeader>
          <UsefulLink>Why Travelers</UsefulLink>
          <UsefulLink>Enterprise</UsefulLink>
          <UsefulLink>Customer Stories</UsefulLink>
          <UsefulLink>Instagram posts</UsefulLink>
        </UsefulLinks>
        <UsefulLinks>
          <UsefulLinksHeader>Company</UsefulLinksHeader>
          <UsefulLink>Traveling</UsefulLink>
          <UsefulLink>About locator</UsefulLink>
          <UsefulLink>Success</UsefulLink>
          <UsefulLink>Information</UsefulLink>
        </UsefulLinks>
        <UsefulLinks>
          <UsefulLinksHeader>Get Apps</UsefulLinksHeader>
          <UsefulLink>App Store</UsefulLink>
          <UsefulLink>Google Play Store</UsefulLink>
        </UsefulLinks>
      </UsefulLinksContainer>
    </Container>
  );
}

export default Footer;
