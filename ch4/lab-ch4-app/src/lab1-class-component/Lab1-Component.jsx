import React from 'react'
import TestComponent from "./Test1-component"
import PropsComponent from './Test2-props'
import StateComponent from './Test3-state'

class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <TestComponent />
                <hr />
                <PropsComponent />
                <hr />
                <StateComponent />
            </div>
        )
    }
}

export default ClassComponent
