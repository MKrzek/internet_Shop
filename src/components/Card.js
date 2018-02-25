import React from 'react';
import {connect} from 'react-redux';
class Card extends React.Component{

    render(){
        return <div>
            
               </div>
    }
}
function mapStateToProps(state){
    console.log ('state card', state.cardProduct)
    return{
        product: state.cardProduct
    }
}
export default connect(mapStateToProps, null)(Card);