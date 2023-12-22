const CountryList = () =>{
    let list = [
        {no:1, country:'일본', visited: false},
        {no:2, country:'영국', visited: false},
        {no:3, country:'독일', visited: true},
        {no:4, country:'미국', visited: false},
    ]

    let countries = list.map((item, index) => {
        // 반복적으로 랜더링 되는 컴포넌트에는 꼭 key 속성을 유일값으로 설정해야 한다. 랜더링 최적화를 위해서
        // 유일성 확보를 위해 단순 index로 지정해도 되지만, 의미있는 데이터를 지정할 것을 권장함. 
        return (
            // if문은 {}보간법으로 쓸 수 없지만, 3항 연산자는 결과값이 있기 때문에 가능 
            <li key={item.no} className={item.visited ? "list-group-item active" : "list-group-item"}>
                {item.country}
            </li>
        )
    })

    return (
        <div className="container">
            <h2>JSX TEST 2</h2>
            <ul className="list-group">{countries}</ul>
        </div>
    )
}

export default CountryList