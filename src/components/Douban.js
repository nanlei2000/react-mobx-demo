import React, { Component } from "react"
import { inject, observer } from "mobx-react"
@inject("store")
@observer
export default class Douban extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleBtnClick}>点击加载数据</button>
                <ul>
                    {this.props.store.state.list.map(item => {
                        return <li key={item.title}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }

    handleBtnClick = () => {
        if (this.props.store.state.list.length == 0) {
            this.props.store.fetchData()
        }
    }
}
