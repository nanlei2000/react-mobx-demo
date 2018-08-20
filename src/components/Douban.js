import React, { Component } from "react"
import { inject, observer } from "mobx-react"
@inject("store")
@observer
export default class Douban extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.store.state.list.map(item => {
                        return <li>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.props.store.fetchData()
    }
}
