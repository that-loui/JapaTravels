import styled from 'styled-components';
import { useState } from 'react';
import StyledBtn from '../ReuseableComponents/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import img1 from '../assets/testimonies-img1.svg';
import img2 from '../assets/testimonies-img2.svg';
import img3 from '../assets/testimonies-img3.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 175px !important;
  height: 239px;
  border-radius: 190px;

  @media (min-width: 768px) {
    width: 390px !important;
    height: 539px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CarouselIndicator = styled.span`
  background: linear-gradient(to right, #ffd482, #ffbe82);
  width: 67px;
  height: 8px;
  margin-top: 15px;
  border-radius: 4px;
  display: block;
  transform: translateX(${({ index }) => index * 100}%);
  transition: transform 0.3s ease-in;
`;

const TextHeader = styled.h2`
  font-size: 30px;
  margin: 15px 0;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
const TextCarousel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 11px;
  border-radius: 20px;
  min-height: 283px;

  @media (min-width: 768px) {
    padding: 31px;
  }
`;
const TextCarouselText = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #5b5f62;
  text-align: start;
`;
const CarouselBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h4`
  margin: 10px 0;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const CarouselItem = ({ text, name, title, prev, next }) => {
  return (
    <TextCarousel>
      <TextCarouselText>{text}</TextCarouselText>
      <CarouselBottom>
        <NameContainer>
          <Name>{name}</Name>
          <small>{title}</small>
        </NameContainer>
        <BtnContainer>
          <StyledBtn
            height={'40px'}
            radius={'50%'}
            color="#000"
            hoverBackground={'#2D3134'}
            style={{ marginRight: '10px' }}
            onClick={() => {
              prev();
            }}
          >
            <FaChevronLeft />
          </StyledBtn>
          <StyledBtn
            height={'40px'}
            radius={'50%'}
            color="#000"
            hoverBackground={'#2D3134'}
            onClick={() => {
              next();
            }}
          >
            <FaChevronRight />
          </StyledBtn>
        </BtnContainer>
      </CarouselBottom>
    </TextCarousel>
  );
};

function Testimonies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <Carousel
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        className="testimoniesImgCarousel"
      >
        {images.map((item, index) => (
          <Img src={item} key={index} alt />
        ))}
      </Carousel>
      <TextContainer>
        <CarouselIndicator index={currentIndex}></CarouselIndicator>
        <TextHeader>What Our Customers Say About Us:</TextHeader>

        <Carousel
          selectedItem={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          <CarouselItem
            text={
              'JapaTravels helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.'
            }
            name={'Shalewa Bolodeoku'}
            title={'Founder, Rivkah'}
            next={handleNext}
            prev={handlePrev}
          />
          <CarouselItem
            text={
              'JapaTravels was incredibly helpful in finding the perfect spot for our first outdoor adventure. They responded promptly and provided a detailed overview of the location, including its history and top features.'
            }
            name={'Andrew Sarma'}
            title={'Entrepreneur'}
            next={handleNext}
            prev={handlePrev}
          />
          <CarouselItem
            text={
              'JapaTravels was instrumental in finding the perfect destination for our first outdoor adventure trip. Their swift response and detailed information about the location, including its history and highlights, were invaluable.'
            }
            name={'Ben Sarmason'}
            title={'Ui/Ux Designer'}
            next={handleNext}
            prev={handlePrev}
          />
        </Carousel>
      </TextContainer>
    </Container>
  );
}

export default Testimonies;
