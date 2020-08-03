import React from 'react';
import Counter from '../Counter/index.jsx'

class CounterGroup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            total : 0
        };
    }

    inputCount = (e) =>{
		this.setState({
            count: e.target.value,
            total:0
        })   
    }

    countTotal = (value) => {
        this.setState((preState) => ({
                total: preState.total + value
            })
        )
    }

    render(){
        return(
            <div>
                <p>numbers of counters：
                    <input
                        // value={this.state.count}
                        onChange={this.inputCount}
                    />
                </p>
                <p>total:
                    <label>{this.state.total}</label>
                </p>
                {new Array(Number(this.state.count)).fill().map((key,index) => 
                    <Counter key={index} countTotal={this.countTotal} count={this.state.count}/>
                )}
            </div>
        );
    }
}

export default CounterGroup;