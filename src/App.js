import React from 'react';
import Header from './component/Header';
import TodoItem from './component/TodoItem';
import Bottom from './component/Bottom';
import './index.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    text: '泡吧',
                    isDone: true,
                    isEdit: false
                },
                {
                    text: '喝酒',
                    isDone: false,
                    isEdit: false
                },
                {
                    text: '泡妹',
                    isDone: false,
                    isEdit: false
                },
            ],
            status: 1 //1.全部 2.未完成 3.已完成
        }
    }


    // chagneStatus = (status) => {
    changeStatus = (status) => {
        this.setState({
            status: status
        })
    };

    removeDone = () => {
        let newArr = this.state.arr.filter(item => {
            return !item.isDone
        });
        this.setState({
            arr: newArr
        })
    };

    removeOne = () => {
        let newArr = [...this.state.arr];
        newArr.splice(Header, 1);
        this.setState({
            arr: newArr
        })
    };

    addItem = (item) => {
        let newArr = [...this.state.arr]
        newArr.push(item);
        this.setState({
            arr: newArr
        })
    };

    editItem = (index, item) => {
        return new Promise((resolve, reject) => {
            let newArr = [...this.state.arr];
            newArr[index] = item;
            this.setState({
                arr: newArr
            }, () => {
                resolve()
            })
        })
    };

        render(){
            const arr = this.state.arr;
            const status = this.state.status;
            return (
                <div className="App">
                    <h1 style={{textAlign: 'center'}}>todolist</h1>
                    <div className="todo-container">
                        <Header addItem={this.addItem}/>
                        <ul className="todo-box">
                            {
                                arr.map((item, index) => {
                                    if (status == 1) {
                                        return <TodoItem
                                            removeOne={this.removeOne}
                                            editItem={this.editItem()}
                                            item={item} key={index} index={index}/>
                                    } else if (status === 2) {
                                        if (!item.isDone) {
                                            return <TodoItem
                                                item={item}
                                                editItem={this.editItem}
                                                removeOne={this.removeOne}
                                                key={index}
                                                index={index}/>
                                        } else {
                                            return null
                                        }
                                    } else if (status === 3) {
                                        if (item.isDone) {
                                            return <TodoItem
                                                item={item}
                                                key={index}
                                                removeOne={this.removeOne}
                                                index={index}/>
                                        } else {
                                            return null
                                        }
                                    }
                                })
                            }
                            {/*<TodoItem />*/}
                        </ul>
                        <Bottom changeStatus={this.changeStatus}
                                removeDone={this.removeDone}
                                arr={arr}/>
                    </div>
                </div>
            )
        }
}

export default App;





