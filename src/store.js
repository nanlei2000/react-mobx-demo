import { observable, action, computed } from "mobx"
export default class Store {
    @observable
    state = {
        count: 0,
        list: []
    }
    @action
    add() {
        this.state.count += 1
    }
    @action
    fetchData() {
        fetch("v2/movie/top250")
            .then(res => res.json())
            .then(res => {
                this.state.list = res.subjects
            })
    }
    @computed
    get divide() {
        return this.state.count / 2
    }
}
