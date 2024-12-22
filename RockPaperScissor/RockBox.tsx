import React from 'react';
import { styled } from '@mui/material/styles';

const BoxStyle = styled('div')(({}) => ({
  width: '40%',
  border: '3px solid black',
  color: '#000',
  padding: '20px',
  textAlign: 'center',
}));

const HandStyle = styled('div')(({}) => ({
  '& .MuiSvgIcon-root': {
    fontSize: 50,
    fill: 'pink',
  },
}));

// Props 타입 정의
interface IProps {
  name: string;
  hand: React.ReactNode;
  result: string;
}

const RockBox: React.FC<IProps> = (props) => {
  return (
    <BoxStyle
      sx={{
        borderColor:
          props.result === '이겼다'
            ? 'green'
            : props.result === '졌다'
            ? 'red'
            : 'black',
      }}
    >
      <h2>{props.name}</h2>
      <HandStyle>{props.hand}</HandStyle>
    </BoxStyle>
  );
};

export default RockBox;
