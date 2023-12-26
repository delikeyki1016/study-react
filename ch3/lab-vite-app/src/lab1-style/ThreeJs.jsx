// 모듈로 import 한 것은 해당 컴포넌트 명으로 해당 파일내에서만 사용할 수 있다. 
import styles from './three.module.css'

const Three = () => {
    return (
        <div className={styles.wrapper}>
            <h3>hello, I am Three component</h3>
        </div>
    )
}

export default Three