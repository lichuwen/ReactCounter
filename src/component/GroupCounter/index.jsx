import React from 'react';
import Counter from '../Counter/index.jsx'

class CounterGroup extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            new Array(this.props.count).fill(0).map((key,index) => <Counter key={index}/>)
        );
    }
}

export default CounterGroup;