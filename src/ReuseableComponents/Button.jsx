import styled from 'styled-components';

const StyledBtn = styled.button`
  width: ${({ width }) => width || '40px'};
  border: ${({ border }) => border || '1px solid grey'};
  padding: ${({ padding }) => padding || '10px'};
  background-color: ${({ background }) => background || '#fff'};
  border-radius: ${({ radius }) => radius || '50px'};
  color: ${({ color }) => color || '#000'};
  height: ${({ height }) => height || '50px'};

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#fff'};
    background-color: ${({ hoverBackground }) => hoverBackground || '#000'};
    transform: scale(${({hoverScale}) => hoverScale || '1' });
  }
`;

export default StyledBtn;
