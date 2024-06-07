import styled from 'styled-components';
import Img404 from '../assets/404.png'

const Styled404Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const Styled404Img = styled.img`
    width: 100%;
    height: auto;
`

function PageNotFound() {
  return <Styled404Page>
    <Styled404Img src={Img404}/>
  </Styled404Page>;
}

export default PageNotFound;
