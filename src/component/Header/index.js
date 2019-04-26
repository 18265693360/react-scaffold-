import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            text: value
        });
    };

    handleEnter = (e) => {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            let item = {
                text: this.state.text,
                isDone: false,
                isEdit: false
            }
            this.props.addItem(item)
            this.setState({
                text: ''
            })
        }
    };



    render(){
        const {text} = this.state;
        return (
            <div className="todo-header">
                <input type="text" placeholder="你今天想做什么?" value={text} onChange={this.handleChange} onKeyDown={this.handleEnter}/>
            </div>
        )
    }
}

export default Header;





