import React from 'react';
export default class QuantityCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quantity:1,
            disabledAdd: false,
            disabledDeduct: false
        }
    }
    addQuantity=()=>{
        let quantity=this.state.quantity + 1;
        if (quantity===20){
            this.setState({
                disabledAdd: true
            })
        }
        this.setState({
            quantity: quantity
        })
    }

    deductQuantity=()=>{
        let quantity=this.state.quantity -1;
        if (quantity===0){
            this.setState({
                disabledDeduct:true
            })
        }
        this.setState({
            quantity: quantity
        })
    }
    render(){
        return <div className='row justify-content-center'>
                <button  disabled={this.state.disabledAdd} onClick={this.addQuantity}>+</button>
                <div className='text-center ml-2 mr-2'>{this.state.quantity}</div>
                <button disabled={this.state.disabledDeduct} onClick={this.deductQuantity}>-</button>

            </div>
    }
}
