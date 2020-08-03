import React from 'react';
class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            number: 0,
            count: this.props.count
        };
        this.reduce = this.reduce.bind(this);
        this.increase = this.increase.bind(this);
    }

    static getDerivedStateFromProps(Props,State){
        if(State.count != Props.count){
            return{
                number:0
            }
        }
    }

    increase = () => {
        this.setState((preState) => ({
            number: preState.number + 1
            })
        )
        this.props.countTotal(1)
    }

    // componentWillReceiveProps(){
    //     this.props.counterNumber
    // }


    reduce = () => {
        if(this.props.counterNumber != 0){
            this.setState((preState) => ({
                number: preState.number - 1
                })
            )
        }
        
        this.props.countTotal(-1)
    }


    render() {
        return (
          <div>
            <button onClick={this.increase}>+</button>
            <mark>{this.state.number}</mark>
            <button onClick={this.reduce}>-</button>
          </div>
        );
    }
}

export default Counter;
