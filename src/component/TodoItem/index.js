import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text:'todo内容',
            isEdit: false,
            isDone: false
        }
    }


    handleChange = (e)=> {
        const {editItem, index} = this.props;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const item = {
            ...this.props.item,
            [e.target.name]: value
        }
        editItem(index, item)
    }


    handleDoubleClick = () => {
        this.props.editItem(this.props.index,{
            ...this.props.item,
            isEdit: true
        }).then(()=>{
            this.refs.editor.focus();
        })
    };

    handleBlur = ()=> {
        this.setState({
            ...this.state,
            isEdit: false
        });
        this.props.editItem(this.props.index,{
            ...this.props.item,
            text: this.refs.editor.value,
            idEdit: false
        })
    };

    render() {
        const _this = this;
        const idShowEdit = ()=> {
            const {item, index} = this.props;
            if (!item.isEdit){
                return (
                    <div className="todo-item-body">
                        <input type="checkbox" name="isDone" value={item.isDone} onChange={_this.handleChange} checked={item.isDone}/>
                        <span className={
                            item.isDone? 'isDone':' '
                        }
                            onDoubleClick={this.handleDoubleClick}
                        >{item.text}</span>
                        <button onClick={() =>{
                            this.props.removeOne(this.props.index)
                        }}>删除该todo</button>
                    </div>
                )
            }else {
                return(
                    <div className="todo-item-editor">
                        <input type="text"
                               onBlur={this.handleBlur}
                               value={this.props.item.text}
                               ref="editor" name="text" onChange={this.handleChange} />
                    </div>
                )
            }
        };


        return (
            <li className="todo-item">
                {
                    idShowEdit()
                }
            </li>
        )
    }
}

export default TodoItem;



// $name 去到新组件会，默认消失

