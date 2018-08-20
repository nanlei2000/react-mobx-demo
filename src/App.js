import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Count from "./components/Count"
import Douban from "./components/Douban"
class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Count /> */}
                <Douban />
            </div>
        )
    }
}

export default App
