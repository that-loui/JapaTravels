import styled from 'styled-components';
import { useState } from 'react';
import StyledBtn from '../ReuseableComponents/Button';
import imgA1 from '../assets/imgA1.jpg';
import imgA2 from '../assets/imgA2.jpg';
import imgA3 from '../assets/imgA3.jpg';
import imgA4 from '../assets/imgA4.jpg';
import imgA5 from '../assets/imgA5.jpg';
import imgA6 from '../assets/imgA6.jpg';
import imgB1 from '../assets/imgB1.jpg';
import imgB2 from '../assets/imgB2.jpg';
import imgB3 from '../assets/imgB3.jpg';
import imgB4 from '../assets/imgB4.jpg';
import imgB5 from '../assets/imgB5.jpg';
import imgB6 from '../assets/imgB6.jpg';
import imgC1 from '../assets/imgC1.png';
import imgC2 from '../assets/imgC2.png';
import imgC3 from '../assets/imgC3.png';
import imgC4 from '../assets/imgC4.png';
import imgC5 from '../assets/imgC5.png';
import imgC6 from '../assets/imgC6.png';
import imgD1 from '../assets/imgD1.jpg';
import imgD2 from '../assets/imgD2.jpg';
import imgD3 from '../assets/imgD3.jpg';
import imgD4 from '../assets/imgD4.jpg';
import imgD5 from '../assets/imgD5.jpg';
import imgD6 from '../assets/imgD6.jpg';
import imgE1 from '../assets/imgE1.jpg';
import imgE2 from '../assets/imgE2.jpg';
import imgE3 from '../assets/imgE3.jpg';
import imgE4 from '../assets/imgE4.jpg';
import imgE5 from '../assets/imgE5.jpg';
import imgE6 from '../assets/imgE6.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 100px auto;
`;
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #2d3134;
`;
const P = styled.p`
  margin: 18px 0;
`;
const BtnContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 40px;
  padding: 10px;
  @media (min-width: 768px) {
    width: 100%;
    gap: 15px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 10px;
  }
`;

const GridItem = styled.div`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: ${({ column }) => column};
    grid-row: ${({ row }) => row};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
`;

const GridItemNum = styled.span`
  background-color: #fff;
  color: #000;
  width: 40px;
  padding: 2px;
  border-radius: 20px;
  font-size: 14px;

  text-align: center;
`;

function TopDestinations() {
  const [activeBtn, setActiveBtn] = useState('a');

  const selectActive = (activeSet) => {
    setActiveBtn(activeSet);
  };
  return (
    <Container>
      <H1> Top Destinations</H1>
      <P>10 Top Reasons we should be your one-stop-shop!</P>
      <BtnContainer>
        <StyledBtn
          color={activeBtn === 'a' ? '#fff' : '#000'}
          background={activeBtn === 'a' ? '#2D3134' : '#faf8ed'}
          height="40px"
          width="100px"
          radius="50px"
          hoverBackground={'#2D3134'}
          onClick={() => {
            selectActive('a');
          }}
        >
          London
        </StyledBtn>
        <StyledBtn
          color={activeBtn === 'b' ? '#fff' : '#000'}
          background={activeBtn === 'b' ? '#2D3134' : '#faf8ed'}
          height="40px"
          width="100px"
          radius="50px"
          hoverBackground={'#2D3134'}
          style={{ margin: '0 10px' }}
          onClick={() => {
            selectActive('b');
          }}
        >
          Bangkok
        </StyledBtn>
        <StyledBtn
          color={activeBtn === 'c' ? '#fff' : '#000'}
          background={activeBtn === 'c' ? '#2D3134' : '#faf8ed'}
          height="40px"
          width="100px"
          radius="50px"
          hoverBackground={'#2D3134'}
          onClick={() => {
            selectActive('c');
          }}
        >
          Vietnam
        </StyledBtn>
        <StyledBtn
          color={activeBtn === 'd' ? '#fff' : '#000'}
          background={activeBtn === 'd' ? '#2D3134' : '#faf8ed'}
          height="40px"
          width="100px"
          radius="50px"
          hoverBackground={'#2D3134'}
          style={{ margin: '0 10px' }}
          onClick={() => {
            selectActive('d');
          }}
        >
          Singapore
        </StyledBtn>
        <StyledBtn
          color={activeBtn === 'e' ? '#fff' : '#000'}
          background={activeBtn === 'e' ? '#2D3134' : '#faf8ed'}
          height="40px"
          width="100px"
          radius="50px"
          hoverBackground={'#2D3134'}
          onClick={() => {
            selectActive('e');
          }}
        >
          France
        </StyledBtn>
      </BtnContainer>

      {activeBtn === 'a' && (
        <ImgGrid>
          <GridItem
            imgUrl={imgA1}
            column={'1/ 3'}
            row={'1/2'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>4.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgA2}
            column={'3/6'}
            row={'1/3'}
            height={'530px'}
            width={'90.17%'}
          >
            {' '}
            <GridItemNum>2.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgA3}
            column={'6/9'}
            row={'1/2'}
            height={'94.47%'}
            width={'97.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgA4}
            column={'1/3'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.3</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgA5}
            column={'6/7'}
            row={'2/3'}
            height={'94.47%'}
            width={'95.13%'}
          >
            {' '}
            <GridItemNum>3.7</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgA6}
            column={'7/9'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
        </ImgGrid>
      )}
      {activeBtn === 'b' && (
        <ImgGrid>
          <GridItem
            imgUrl={imgB1}
            column={'1/ 3'}
            row={'1/2'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgB2}
            column={'3/6'}
            row={'1/3'}
            height={'530px'}
            width={'90.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgB3}
            column={'6/9'}
            row={'1/2'}
            height={'94.47%'}
            width={'97.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgB4}
            column={'1/3'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgB5}
            column={'6/7'}
            row={'2/3'}
            height={'94.47%'}
            width={'95.13%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgB6}
            column={'7/9'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
        </ImgGrid>
      )}
      {activeBtn === 'c' && (
        <ImgGrid>
          <GridItem
            imgUrl={imgC1}
            column={'1/ 3'}
            row={'1/2'}
            height={'94.47%'}
            width={'88.17%'}
          >
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgC2}
            column={'3/6'}
            row={'1/3'}
            height={'530px'}
            width={'90.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgC3}
            column={'6/9'}
            row={'1/2'}
            height={'94.47%'}
            width={'97.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgC4}
            column={'1/3'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgC5}
            column={'6/7'}
            row={'2/3'}
            height={'94.47%'}
            width={'95.13%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgC6}
            column={'7/9'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
        </ImgGrid>
      )}
      {activeBtn === 'd' && (
        <ImgGrid>
          <GridItem
            imgUrl={imgD1}
            column={'1/ 3'}
            row={'1/2'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgD2}
            column={'3/6'}
            row={'1/3'}
            height={'530px'}
            width={'90.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgD3}
            column={'6/9'}
            row={'1/2'}
            height={'94.47%'}
            width={'97.17%'}
          >
            {' '}
            <GridItemNum>3.9</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgD4}
            column={'1/3'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>4.0</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgD5}
            column={'6/7'}
            row={'2/3'}
            height={'94.47%'}
            width={'95.13%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgD6}
            column={'7/9'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.0</GridItemNum>{' '}
          </GridItem>
        </ImgGrid>
      )}
      {activeBtn === 'e' && (
        <ImgGrid>
          <GridItem
            imgUrl={imgE1}
            column={'1/ 3'}
            row={'1/2'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgE2}
            column={'3/6'}
            row={'1/3'}
            height={'530px'}
            width={'90.17%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgE3}
            column={'6/9'}
            row={'1/2'}
            height={'94.47%'}
            width={'97.17%'}
          >
            {' '}
            <GridItemNum>3.2</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgE4}
            column={'1/3'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>5.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgE5}
            column={'6/7'}
            row={'2/3'}
            height={'94.47%'}
            width={'95.13%'}
          >
            {' '}
            <GridItemNum>3.5</GridItemNum>{' '}
          </GridItem>
          <GridItem
            imgUrl={imgE6}
            column={'7/9'}
            row={'2/3'}
            height={'94.47%'}
            width={'88.17%'}
          >
            {' '}
            <GridItemNum>1.2</GridItemNum>{' '}
          </GridItem>
        </ImgGrid>
      )}
    </Container>
  );
}

export default TopDestinations;
