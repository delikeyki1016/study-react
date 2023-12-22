const MusicItem = (props) => {
    let item = props.item
    return <li className="list-group-item">{item.no} : {item.title} ({item.artist})</li>
}

const MusicList = (props) => {
    const list = props.music
    let items = list.map((item, index) => {
        return <MusicItem key={item.no} item={item} />
    })
    return <ul className="list-group">{items}</ul>
}

const PropsTest2 = () => {
    let list = [
        {no:1, title:'I am', artist: 'ive'},
        {no:2, title:'퀸카', artist: 'idle'},
    ]
    return (
        <div>
            <h2>List - Item 세분화</h2>
            <MusicList music={list} />
        </div>
    )
}

export default PropsTest2