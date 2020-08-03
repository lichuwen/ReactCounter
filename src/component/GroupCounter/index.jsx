import React from 'react';
import Counter from '../Counter/index.jsx'

class CounterGroup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: ""
        };
    }

    handelChange(e){
		this.setState({
			inputCount:parseInt(e.target.value)
		})
	}

    render(){
        return(
            <div>
                <p>numbers of counters：
                    <input
                        value={this.state.inputCount}
                        onChange={this.handelChange.bind(this)}
                    />
                </p>
                {new Array(this.state.inputCount).fill().map((key,index) => <Counter key={index}/>)}
            </div>
        );
    }
}

export default CounterGroup;