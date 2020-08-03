  
import React from 'react';
import Counter from '../Counter';
import store from "../redux/store.js";

class CounterGroup extends React.Component {

    increment = () => {
        store.dispatch({
            type: "increment"
        });
    };

    decrement = () => {
        store.dispatch({
            type: "decrement"
        });
    };

    refresh = () => {
        store.dispatch({
            type: 'refresh'
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            total: store.getState()
        }
    }

    increase = () => {
      this.increment()
      store.subscribe(() =>
          this.setState({
              total: store.getState()
          })
      );
    };

    decrease = () => {
        this.decrement()
        store.subscribe(() =>
            this.setState({
                total: store.getState()
            })
        );
    };

    inputCount = (e) => {
        this.refresh()
        if (e.target.value.match(/[0-9]/)) {
            this.setState({
                counter: parseInt(e.target.value)
            });
        } else {
            this.setState({
                counter: 0
            });
        }    
    };

    render() {
        return(
            <div>
                <p>numbers of counters：<input value={this.state.counter} onChange={this.inputCount}/></p>
            
                <p>Total: <input value={store.getState()} readOnly/></p>
            
                {new Array(Number(this.state.counter)).fill().map((key,index) => 
                    <Counter key={index} increase={this.increase} decrease={this.decrease}/>
                )}
            </div>
        );
    }
}

export default CounterGroup

// class CounterGroup extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//             total : 0
//         };
//     }

//     inputCount = (e) =>{
// 		this.setState({
//             count: e.target.value,
//             total:0
//         })   
//     }

//     countTotal = (value) => {
//         this.setState((preState) => ({
//                 total: preState.total + value
//             })
//         )
//     }

//     render(){
//         return(
//             <div>
//                 <p>numbers of counters：
//                     <input
//                         // value={this.state.count}
//                         onChange={this.inputCount}
//                     />
//                 </p>
//                 <p>total:
//                     <label>{this.state.total}</label>
//                 </p>
//                 {new Array(Number(this.state.count)).fill().map((key,index) => 
//                     <Counter key={index} countTotal={this.countTotal} count={this.state.count}/>
//                 )}
//             </div>
//         );
//     }
// }

// export default CounterGroup;