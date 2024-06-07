import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import StyledBtn from '../ReuseableComponents/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/categoriesImg-1.svg';
import img2 from '../assets/categoriesImg-2.svg';
import img3 from '../assets/categoriesImg-3.svg';
import img4 from '../assets/categoriesImg-4.svg';
import img5 from '../assets/categoriesImg-5.svg';
import img6 from '../assets/categoriesImg-6.svg';
import img7 from '../assets/categoriesImg-7.png';
import img8 from '../assets/categoriesImg-8.png';
import img9 from '../assets/categoriesImg-9.png';
import img10 from '../assets/categoriesImg-10.png';
import img11 from '../assets/categoriesImg-11.png';
import img12 from '../assets/categoriesImg-12.png';

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 50%;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5b5f62;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 70%;
    margin-bottom: 1px;
  }
`;

const BtnContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const BottomLayerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BottomLayerBig = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    display: flex;
  }
`;
const ImgContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  margin: 0 0 10px 0;
  width: 50px;
  height: 300px;

  @media (min-width: 768px) {
    width: 100%;
    height: 80%;
  }
`;

function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = currentIndex === 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const set1 = [
    {
      id: 1,
      src: img1,
      text: 'Egypt',
    },
    {
      id: 2,
      src: img2,
      text: 'China',
    },
    {
      id: 3,
      src: img3,
      text: 'Hawaii',
    },
    {
      id: 4,
      src: img4,
      text: 'Lebanon',
    },
    {
      id: 5,
      src: img5,
      text: 'France',
    },
    {
      id: 6,
      src: img6,
      text: 'Jordan',
    },
  ];
  const set2 = [
    {
      id: 1,
      src: img7,
      text: 'Beach',
    },
    {
      id: 2,
      src: img8,
      text: 'Desert',
    },
    {
      id: 3,
      src: img9,
      text: 'Mount',
    },
    {
      id: 4,
      src: img10,
      text: 'Italy',
    },
    {
      id: 5,
      src: img11,
      text: 'Tower',
    },
    {
      id: 6,
      src: img12,
      text: 'Greece',
    },
  ];
  return (
    <Container>
      <TopLayer>
        <TextContainer>
          <h1 style={{ marginBottom: '20px', fontSize: '50px' }}>Categories</h1>
          <P>
            Here are lots of interesting destinations to visit, but don’t be
            confused—they are already grouped by category.
          </P>
        </TextContainer>
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
        centerMode
        centerSlidePercentage={100}
        className="carouselBigScreen"
      >
        <BottomLayerBig>
          {set1.map((item) => (
            <ImgContainer key={item.id}>
              <Img src={item.src} />
              <span>{item.text}</span>
            </ImgContainer>
          ))}
        </BottomLayerBig>

        <BottomLayerBig>
          {set2.map((item) => (
            <ImgContainer key={item.id}>
              <Img src={item.src} />
              <span>{item.text}</span>
            </ImgContainer>
          ))}
        </BottomLayerBig>
      </Carousel>

      <Carousel
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        infiniteLoop={true}
        autoPlay={true}
        className="carouselSmallScreen"
      >
        {set1.map((item) => (
          <ImgContainer key={item.id}>
            <Img src={item.src} />
            <span>{item.text}</span>
          </ImgContainer>
        ))}
      </Carousel>
    </Container>
  );
}

export default Categories;
