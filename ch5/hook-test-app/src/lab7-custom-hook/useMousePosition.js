// 여러 컴포넌트에서 마우스 위치값이 필요한 custom hook 만들기
// 마우스 위치값을 얻기 위해서는 유저의 mousemove 이벤트를 잡아야 하는데, 
// 보통의 경우 컴포넌트 mount시에 이벤트 등록, unmount 시에 이벤트 해제를 컴포넌트 라이프사이클로 제어해야하는데, 이것을 공통코드로 사용하자.
import { useEffect, useState } from "react";

const useMousePosition = () => {
    const [position, setPosition] = useState({x:0, y:0})

    useEffect(()=>{
        const onMove = (e) => {
            setPosition({x: e.pageX, y: e.pageY})
        }
        window.addEventListener('mousemove', onMove)

        // 언마운트될 때 클린업 함수 정의
        return ()=> {
            window.removeEventListener('mousemove', onMove)
        }
    }, []) //마운트될때 최초 한번 실행

    return position
}

export {useMousePosition}
