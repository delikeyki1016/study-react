import React, { useEffect, useState } from 'react';
import RockBox from './RockBox';
import { Button } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BackHandIcon from '@mui/icons-material/BackHand';
import { JSX } from 'react/jsx-runtime';

type choiceType = {
  [key: string]: {
    name: string;
    icon: JSX.Element;
  };
};
const choice: choiceType = {
  rock: {
    name: 'Rock',
    icon: <RocketIcon />,
  },
  scissor: {
    name: 'Scissor',
    icon: <ContentCutIcon />,
  },
  paper: {
    name: 'Paper',
    icon: <BackHandIcon />,
  },
};

type ChoiceKey = keyof typeof choice;

const RockScissorPaper = () => {
  const [myHand, setMyHand] = useState<ChoiceKey | null>(null);
  const [comHand, setComHand] = useState<ChoiceKey | null>(null);
  const [result, setResult] = useState<string>('result');
  const [comResult, setComResult] = useState<string>('result');

  const getRandomHand = (): ChoiceKey => {
    // choice 객체의 키를 배열로 추출
    const hands: ChoiceKey[] = [...Object.keys(choice)] as ChoiceKey[];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  };

  const game = (item: ChoiceKey) => {
    console.log('item?', item);
    setMyHand(item);
    const comSelect = getRandomHand();
    setComHand(comSelect);
  };

  const gameResult = (
    myHand: ChoiceKey | null,
    comHand: ChoiceKey | null
  ): string => {
    if (myHand === null || comHand === null) {
      return '결과를 알 수 없습니다.';
    }
    if (myHand === 'rock') {
      if (comHand === 'rock') return '비겼다';
      if (comHand === 'paper') return '졌다';
      if (comHand === 'scissor') return '이겼다';
    } else if (myHand === 'paper') {
      if (comHand === 'rock') return '이겼다';
      if (comHand === 'paper') return '비겼다';
      if (comHand === 'scissor') return '졌다';
    } else if (myHand === 'scissor') {
      if (comHand === 'rock') return '졌다';
      if (comHand === 'paper') return '이겼다';
      if (comHand === 'scissor') return '비겼다';
    }
    return '결과를 알 수 없습니다.';
  };

  useEffect(() => {
    const resultText = gameResult(myHand, comHand);
    setResult(resultText);
  }, [myHand, comHand]);

  useEffect(() => {
    if (result === '이겼다') {
      return setComResult('졌다');
    } else if (result === '졌다') {
      return setComResult('이겼다');
    } else if (result === '비겼다') {
      return setComResult('비겼다');
    }
  }, [result]);

  // 가위,바위,보 버튼을 클릭하면, 내 박스에는 해당 선택이 보여지고, 컴퓨터는 랜덤하게 뽑은 것이 보여진다.
  // 게임 결과가 텍스트로 노출되고, 이기면 박스컬러가 그린, 지면 레드, 비기면 블랙으로 표시된다.
  return (
    <div>
      <h1>가위바위보 게임</h1>
      <div className="m10 d-flex x-center gap10">
        <RockBox
          name="you"
          item={myHand ? choice[myHand] : { name: '', icon: <div /> }}
          result={result}
        />
        <RockBox
          name="computer"
          item={comHand ? choice[comHand] : { name: '', icon: <div /> }}
          result={comResult}
        />
      </div>
      <div className="d-flex x-center gap5">
        <Button
          variant="contained"
          startIcon={<RocketIcon />}
          onClick={() => game('rock')} //onClick사용시에 ()=> 의 콜백함수로 넣어줘야 리랜더링될 때 실행되지 않음
        >
          Rock
        </Button>
        <Button
          variant="contained"
          startIcon={<ContentCutIcon />}
          onClick={() => game('scissor')}
        >
          Scissor
        </Button>
        <Button
          variant="contained"
          startIcon={<BackHandIcon />}
          onClick={() => game('paper')}
        >
          Paper
        </Button>
      </div>
      <div className="d-flex x-center mt10">result: {result}</div>
    </div>
  );
};

export default RockScissorPaper;
