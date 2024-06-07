import styled from 'styled-components';
import StyledBtn from '../ReuseableComponents/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

import img1 from '../assets/destinationImg1.svg';
import img2 from '../assets/destinationImg2.svg';
import img3 from '../assets/destinationImg3.svg';
import img4 from '../assets/destinationImg4.png';
import img5 from '../assets/destinationImg5.png';
import img6 from '../assets/destinationImg6.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 70px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const TopLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const H2 = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
  width: 40%;
`;

const BtnContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;
const CardsContainer = styled.div`
  display: none;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 20px;
  margin: 0 5px;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const CardImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  width: 100%;
`;

const CardHeader = styled.h3`
  font-size: 24px;
`;
const CardSubHeader = styled.small`
  margin: 14px 0 25px 0;
  font-size: 14px;
  color: #5b5f62;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Price = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const PriceSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #5b5f62;
`;
function PopularDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const newIndex = currentIndex === 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const cardContentSet1 = [
    {
      id: 1,
      src: img1,
      Location: 'Macchu Picchu, Peru',
      price: '$49',
    },
    {
      id: 2,
      src: img2,
      Location: 'The Grand Canyon, Arizona',
      price: '$92',
    },
    {
      id: 3,
      src: img3,
      Location: 'Mt, Fuji',
      price: '$80',
    },
  ];
  const cardContentSet2 = [
    {
      id: 1,
      src: img4,
      Location: 'St kits',
      price: '$69',
    },
    {
      id: 2,
      src: img5,
      Location: 'Dubai, desert',
      price: '$122',
    },
    {
      id: 3,
      src: img6,
      Location: 'Gulf of Guinea',
      price: '$87',
    },
  ];

  const smallScreenSet = cardContentSet1.concat(cardContentSet2);

  return (
    <Container>
      <TopLayer>
        <H2>Find Popular Destinations</H2>
        <BtnContainer>
          <StyledBtn
            color="#000"
            height="50px"
            width="50px"
            radius="50%"
            hoverBackground={'#2D3134'}
            style={{ marginRight: '15px' }}
            onClick={() => {
              handlePrev();
            }}
          >
            <FaChevronLeft />
          </StyledBtn>
          <StyledBtn
            color="#000"
            height="50px"
            width="50px"
            radius="50%"
            hoverBackground={'#2D3134'}
            onClick={() => {
              handleNext();
            }}
          >
            <FaChevronRight />
          </StyledBtn>
        </BtnContainer>
      </TopLayer>
      <Carousel
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="carouselBigScreen"
      >
        <CardsContainer>
          {cardContentSet1.map((item) => (
            <CardContainer key={item.id}>
              <CardImg src={item.src} />
              <CardBody>
                <CardHeader>{item.Location}</CardHeader>
                <CardSubHeader>{item.Location}</CardSubHeader>
                <PriceContainer>
                  <Price>
                    {item.price} <PriceSpan>/person</PriceSpan>
                  </Price>
                  <StyledBtn
                    color="#000"
                    background="#faf8ed"
                    height="40px"
                    width="100px"
                    radius="50px"
                    hoverBackground={'#2D3134'}
                  >
                    Book Now
                  </StyledBtn>
                </PriceContainer>
              </CardBody>
            </CardContainer>
          ))}
        </CardsContainer>
        <CardsContainer>
          {cardContentSet2.map((item) => (
            <CardContainer key={item.id}>
              <CardImg src={item.src} />
              <CardBody>
                <CardHeader>{item.Location}</CardHeader>
                <CardSubHeader>{item.Location}</CardSubHeader>
                <PriceContainer>
                  <Price>
                    {item.price} <PriceSpan>/person</PriceSpan>
                  </Price>
                  <StyledBtn
                    color="#000"
                    background="#faf8ed"
                    height="40px"
                    width="100px"
                    radius="50px"
                    hoverBackground={'#2D3134'}
                  >
                    Book Now
                  </StyledBtn>
                </PriceContainer>
              </CardBody>
            </CardContainer>
          ))}
        </CardsContainer>
      </Carousel>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        infiniteLoop={true}
        autoPlay={true}
        className="carouselSmallScreen"
      >
        {smallScreenSet.map((item) => (
          <CardContainer key={item.id}>
            <CardImg src={item.src} />
            <CardBody>
              <CardHeader>{item.Location}</CardHeader>
              <CardSubHeader>{item.Location}</CardSubHeader>
              <PriceContainer>
                <Price>
                  {item.price} <PriceSpan>/person</PriceSpan>
                </Price>
                <StyledBtn
                  color="#000"
                  background="#faf8ed"
                  height="40px"
                  width="100px"
                  radius="50px"
                  hoverBackground={'#2D3134'}
                >
                  Book Now
                </StyledBtn>
              </PriceContainer>
            </CardBody>
          </CardContainer>
        ))}
      </Carousel>
    </Container>
  );
}

export default PopularDestinations;
