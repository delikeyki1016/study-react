const Test1 = () => {
    // <b>Hello</b> JSX 표현식 
    let msg1 = <b>Hello</b>
    // "<b>World</b>" 일반 문자열
    let msg2 = "<b>World</b>"

    return (
        <div className="container">
            <h2>JSX TEST</h2>
            <p>Welcome {msg1}</p>
            {/* Welcome Hello */}
            <p>Welcome {msg2}</p>
            {/* Welcome <b>World</b> */}
            <p>Welcome <span dangerouslySetInnerHTML={{__html:msg2}}></span></p>
            {/* Welcome World */}
        </div>
    )
}

export default Test1