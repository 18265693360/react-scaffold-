
import React from 'react';

//状态提升 类组件运用 子组件随父组件变化
class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleChange = (num) => {
        this.props.changeStatus(num)
    };
    render() {
        const arr = this.props.arr;
        let num = 0;
        const doneArr = arr.filter(item =>{
            return item.isDone
        });
        arr.map(item =>{
            if (!item.isDone){
                num++
            }
        });

        return (
            <div className="todo-bottom">
                <span>
                    剩余 {num} 项
                </span>
                <button onClick={()=>{
                    this.handleChange(1)
                }}>全部</button>
                <button onClick={() => {
                    this.handleChange(2)
                }}>未完成</button>
                <button onClick={()=>{
                    this.handleChange(3)
                }}>已完成</button>
                {
                  doneArr.length>0 ?<button onClick={this.props.removeDone}>清除已完成</button>: null
                }

            </div>
        )
    }
}

export default Bottom;





