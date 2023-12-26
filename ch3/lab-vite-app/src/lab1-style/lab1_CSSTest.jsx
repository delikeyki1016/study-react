import styles from './style'
import One from './OneJs'
import Two from './TwoJs'
import Three from './ThreeJs'
import Four from './FourJs'

const CSSTest = () => {
    return (
        // global style : container, btn, btn-primary
        <div className='container'>
            <h2>CSS Global, Inline test</h2>
            <button type='button' className='btn btn-primary'>Primary</button>
            {/* inline style */}
            <p style={styles.textStyle}>hello world</p>
            <p className="wrapper">hello world</p>
            <hr style={styles.dashStyle} />
            <One />
            <Two />
            <Three />
            <Four />
        </div>
    )
}

export default CSSTest