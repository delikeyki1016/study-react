import React, { useEffect, useState } from 'react';
import RockBox from './RockBox';
import { Button } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BackHandIcon from '@mui/icons-material/BackHand';

type Hand = 'Rock' | 'Scissor' | 'Paper';

const RockScissorPaper = () => {
  const [myHand, setMyHand] = useState<Hand>('Rock');
  const [comHand, setComHand] = useState<Hand>('Rock');
  const [result, setResult] = useState<string>('result');
  const [comResult, setComResult] = useState<string>('result');

  const handMark = (hand: string) => {
    // console.log('hand', hand);
    switch (hand) {
      case 'Rock':
        return <RocketIcon />;
      case 'Scissor':
        return <ContentCutIcon />;
      case 'Paper':
        return <BackHandIcon />;
      default:
        return null;
    }
  };

  const getRandomHand = (): Hand => {
    const hands: Hand[] = ['Rock', 'Scissor', 'Paper'];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  };

  const game = (item: Hand) => {
    setMyHand(item);
    const comSelect = getRandomHand();
    setComHand(comSelect);
  };

  const gameResult = (myHand: Hand, comHand: Hand): string => {
    if (myHand === 'Rock') {
      if (comHand === 'Rock') return '비겼다';
      if (comHand === 'Paper') return '졌다';
      if (comHand === 'Scissor') return '이겼다';
    } else if (myHand === 'Paper') {
      if (comHand === 'Rock') return '이겼다';
      if (comHand === 'Paper') return '비겼다';
      if (comHand === 'Scissor') return '졌다';
    } else if (myHand === 'Scissor') {
      if (comHand === 'Rock') return '졌다';
      if (comHand === 'Paper') return '이겼다';
      if (comHand === 'Scissor') return '비겼다';
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
        <RockBox name="you" hand={handMark(myHand)} result={result} />
        <RockBox name="computer" hand={handMark(comHand)} result={comResult} />
      </div>
      <div className="d-flex x-center gap5">
        <Button
          variant="contained"
          startIcon={<RocketIcon />}
          onClick={() => game('Rock')}
        >
          Rock
        </Button>
        <Button
          variant="contained"
          startIcon={<ContentCutIcon />}
          onClick={() => game('Scissor')}
        >
          Scissor
        </Button>
        <Button
          variant="contained"
          startIcon={<BackHandIcon />}
          onClick={() => game('Paper')}
        >
          Paper
        </Button>
      </div>
      <div className="d-flex x-center mt10">result: {result}</div>
    </div>
  );
};

export default RockScissorPaper;
