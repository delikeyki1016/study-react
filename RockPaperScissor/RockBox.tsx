import React from 'react';
import { styled } from '@mui/material/styles';
import { JSX } from 'react/jsx-runtime';

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
  item: { name: string; icon: JSX.Element };
  name: string;
  result: string;
}

const RockBox: React.FC<IProps> = (props) => {
  console.log('props:', props);
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
      <HandStyle>{props.item.icon}</HandStyle>
      <p>
        {props.result === '이겼다'
          ? 'winner'
          : props.result === '졌다'
          ? 'looser'
          : 'same'}
      </p>
    </BoxStyle>
  );
};

export default RockBox;
