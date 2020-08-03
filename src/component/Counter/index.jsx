import React from 'react';
class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            number: 0
        };
        this.reduce = this.reduce.bind(this);
        this.increase = this.increase.bind(this);
    }

    // componentWillUnmount() {
    //     console.log("------Unmount-------")
    // }
    // componentDidMount() {
    //     console.log("------didMount-------")
    // }
    // componentWillUpdate(){
    //     console.log("------willUpdate-------")
    // }
    // componentDidUpdate(){
    //     console.log("------didUpdate-------")
    // }

    increase = () => {
        // this.setState({number: ++this.state.number})
        this.setState((preState) => ({
            number: preState.number + 1
            })
        )
        this.props.countTotal(1)
    }


    reduce = () => {
        // this.setState({number: --this.state.number})
        this.setState((preState) => ({
            number: preState.number - 1
            })
        )
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
