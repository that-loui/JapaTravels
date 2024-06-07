import styled from 'styled-components';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCalendar2Date } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';

import HeroImage from '../assets/HeroImg.png';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;
const HeroHeaderText = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 84px;
    margin-bottom: 25px;
  }
`;

const HeroForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 30px;
  margin: 35px 0;
`;

const HeroInput = styled.input`
  border: none;
  overflow: scroll;
  width: 80%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9498a4;
  }
`;

const DateLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40%;
  margin: 0 10px;
`;

const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const HeroImg = styled.img`
  width: 290px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

function Hero({}) {
  const today = new Date();
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroHeaderText>Discover the best luxury locations</HeroHeaderText>
        <p>
          Plan and book your next vacation with expert advice, travel tips,
          destination information and inspiration from us.
        </p>

        <HeroForm>
          <DateLocationContainer>
            <h5 style={{ fontWeight: '500' }}>Where</h5>
            <div>
              <HeroInput type="text" placeholder="Center Point, Lon " />
              <FaLocationDot style={{ color: '#f77e5f' }} />
            </div>
          </DateLocationContainer>

          <hr style={{ height: '30px' }} />

          <DateLocationContainer>
            <h5 style={{ fontWeight: '500' }}>Date</h5>
            <div>
              <HeroInput
                type="text"
                placeholder={today.toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              />
              <BsCalendar2Date style={{ color: '#f77e5f' }} />
            </div>
          </DateLocationContainer>

          <CiSearch
            color="#fff"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#f77e5f',
              padding: '10px',
            }}
          />
        </HeroForm>
      </HeroTextContainer>
      <HeroImgContainer>
        <HeroImg src={HeroImage} />
      </HeroImgContainer>
    </HeroContainer>
  );
}

export default Hero;
