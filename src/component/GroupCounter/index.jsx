import React from 'react';
import Counter from '../Counter/index.jsx'

class CounterGroup extends React.Component{
    render(){
        return(
            new Array(3).fill(0).map((key,index) => <Counter key={index}/>)
        );
    }
}

export default CounterGroup;