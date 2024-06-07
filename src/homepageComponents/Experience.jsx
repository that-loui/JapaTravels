import styled from 'styled-components';
import Img from '../assets/experience.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 70px 0;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;
const DisplayImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DisplayImg = styled.img`
  display: block;
  width: 300px;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 56px;
  font-weight: 600;
  margin: 20px 0;
`;

const Small = styled.p`
  text-align: start;
  font-size: 20px;
  font-weight: 600;
  color: #f66f4d;
`;
const WriteUpText = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #5b5f62;
`;
const NumInfoContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px){
    display: flex ;
  }
`;
const NumInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const NumInfoNum = styled.h4`
  font-size: 50px;
  font-weight: 600;
  color: #f66f4d;
  padding: 5px 0;
`;

const NumInfoText = styled.p`
  color: #939597;
  font-size: 20px;
  font-weight: 400;
  width: 100px;
`;

function Experience() {
  return (
    <Container>
      <DisplayImgContainer>
        <DisplayImg src={Img} />
      </DisplayImgContainer>
      <TextContainer>
        <Small>Our Experience</Small>
        <H2>Our Stories Have Adventures</H2>
        <WriteUpText>
          We are experienced in bringing adventures to stay their journey, with
          all outdoor destinations in the world as our specialties. Start your
          adventure now! Nature has already called you!
        </WriteUpText>

        <NumInfoContainer>
          <NumInfoItem>
            <NumInfoNum>12k+</NumInfoNum>
            <NumInfoText>Success Stories</NumInfoText>
          </NumInfoItem>
          <NumInfoItem>
            <NumInfoNum>16+</NumInfoNum>
            <NumInfoText>Awards Won</NumInfoText>
          </NumInfoItem>
          <NumInfoItem>
            <NumInfoNum>20+</NumInfoNum>
            <NumInfoText>Years of Experience</NumInfoText>
          </NumInfoItem>
        </NumInfoContainer>
      </TextContainer>
    </Container>
  );
}

export default Experience;
