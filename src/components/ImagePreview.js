import React from 'react';
export default class ImagePreview extends React.Component{
    render(){
        const {imageUrl, image}=this.props;
        if(!imageUrl){
            return <div style={{ height: "200px", borderStyle:'solid', borderColor:"lightgrey", width: '200px'}}>{image}</div>
        }else{
        return <img
               className='img-fluid'
               style={{height: '200px'}}
               src={imageUrl}
               alt='product image'
               />
        }
    }
}