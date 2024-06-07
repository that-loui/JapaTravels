import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoImg from '../assets/JapaTravels.svg';
import { FaTimes, FaBars, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import StyledBtn from '../ReuseableComponents/Button';

const Nav = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

const Logo = styled.img`
  max-width: 100%;
`;
const Menu = styled.ul`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
  background-color: #faf8ed;
  color: #5b5f62;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: unset;
    /* margin-left: 100px; */
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const MenuItem = styled.li`
  width: 100%;
  margin: 15px auto;
  color: #5b5f62;

  @media (min-width: 768px) {
    margin: auto 20px;
    /* text-align: center; */
  }
`;

const HamburgerMenu = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  background-color: #faf8ed;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BookNowBtn = styled(StyledBtn)`
  display: none;

  &:hover{
    color: #f77e5f;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const BtnText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-right: 5px;
`;

function Navigation() {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState('');

  const handleHamburgerClick = () => {
    setActive(!active);
  };

  const handleHoverIn = (state) => {
    setHovered(state);
  };
  const handleHoverOut = () => {
    setHovered('');
  };

  return (
    <Nav>
      <NavLink to="/">
        <Logo src={LogoImg} />
      </NavLink>
      <Menu active={active}>
        <NavLink
          to="/"
          onMouseOver={() => handleHoverIn('home')}
          on
          onMouseOut={() => handleHoverOut()}
        >
          <MenuItem
            style={{ color: `${hovered === 'home' ? '#f77e5f' : '#5b5f62'}` }}
          >
            Home{' '}
          </MenuItem>
        </NavLink>

        <NavLink
          to="item2"
          onMouseOver={() => handleHoverIn('destinations')}
          on
          onMouseOut={() => handleHoverOut()}
        >
          <MenuItem style={{ color: `${hovered === 'destinations' ? '#f77e5f' : '#5b5f62'}` }}>Destinations </MenuItem>
        </NavLink>

        <NavLink
          to="item3"
          onMouseOver={() => handleHoverIn('tours')}
          on
          onMouseOut={() => handleHoverOut()}
        >
          <MenuItem style={{ color: `${hovered === 'tours' ? '#f77e5f' : '#5b5f62'}` }}>Tours </MenuItem>
        </NavLink>

        <NavLink
          to="item4"
          onMouseOver={() => handleHoverIn('blog')}
          on
          onMouseOut={() => handleHoverOut()}
        >
          <MenuItem style={{ color: `${hovered === 'blog' ? '#f77e5f' : '#5b5f62'}` }}>Blog </MenuItem>
        </NavLink>

        <NavLink
          to="item4"
          onMouseOver={() => handleHoverIn('about')}
          on
          onMouseOut={() => handleHoverOut()}
        >
          <MenuItem style={{ color: `${hovered === 'about' ? '#f77e5f' : '#5b5f62'}` }}>About Us </MenuItem>
        </NavLink>
      </Menu>

      <HamburgerMenu
        onClick={() => {
          handleHamburgerClick();
        }}
      >
        {active ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>

      <BookNowBtn
        width={'175px'}
        border={'2px solid #F66F4D'}
        padding={'10px 16px'}
        background={'#FAF8ED'}
        radius={'60px'}
        color={'#F66F4D'}
        hoverScale={0.9}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BtnText>Book Now</BtnText> <FaPaperPlane />
      </BookNowBtn>
    </Nav>
  );
}

export default Navigation;
