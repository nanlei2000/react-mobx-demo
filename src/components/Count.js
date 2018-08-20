import React, { Component } from "react"
import { inject, observer } from "mobx-react"
@inject("store")
@observer
class Count extends Component {
    constructor(props) {
        super(props)
        this.handleAddClick = this.handleAddClick.bind(this)
    }
    render() {
        let { count } = this.props.store.state
        let { divide } = this.props.store
        return (
            <div>
                <div>
                    原始值-
                    {count}
                </div>
                <div>
                    除2-
                    {divide}
                </div>
                <button onClick={this.handleAddClick}>add</button>
            </div>
        )
    }
    handleAddClick() {
        this.props.store.add()
    }
}
export default Count
