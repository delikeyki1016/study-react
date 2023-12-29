const ArrayReduceComponent = () => {

    const members = [
        {name: '홍길동', point: 1000},
        {name: '홍동동', point: 2000},
        {name: '홍길길', point: 3000},
        {name: '홍홍홍', point: 4000},
    ]

    // 멤버들의 전체 포인트를 합산하는 함수(reducer - reduce에 등록해서 사용)
    // Array.reduce()에 등록하는 함수(reducer)는 매개변수가 두개
    // 첫번째 매개변수 : 이전 함수 호출의 리턴값(기억하고 있다가 그 다음 호출 시 전달)
    // 두번째 매개변수 : 배열의 아이템
    // 과거의 값을 참조해서 알고리즘을 돌릴 때 유용
    const reducer1 = (total, member) => {
        total += member.point
        return total
    }

    // total= 0 (초기값),  처음 호출할 때 total 매개변수에 전달
    const total = members.reduce(reducer1, 0)
    // const total = members.reduce((total, member) => {
    //     total += member.point
    //     return total
    // }, 0)

    const numbers = [10, 100, 320, 430, 150]
    // 데이터들 중 max값을 구하기
    const reducer2 = (max, number) => {
        if(max > number) return max
        else return number
    }
    const maxNum = numbers.reduce(reducer2, 0)

    return (
        <div>
            <h2>Array Reduce</h2>
            <p>total : {total}</p>
            <p>maxNum : {maxNum}</p>
        </div>

    )
}

export default ArrayReduceComponent