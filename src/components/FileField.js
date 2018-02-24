import React from 'react';
import ImagePreview from './ImagePreview.js';
export default class FileField extends React.Component{
    constructor(props){
        super(props);
        this.state={
           image: 'Please attach an image',
           imageUrl: null,
        }
    }
    displayImage=event=>{
        let reader=new FileReader();
        let file=event.target.files[0];
        reader.onloadend=()=>{
            this.setState({
                image: file,
                imageUrl: reader.result
            })
            console.log('image url', this.state.imageUrl)
        }
        reader.readAsDataURL(file)
    }
    render(){
        const {input} =this.props;
        console.log('filefield input', this.props.input)
        console.log ('files',this.props)

        delete input.value
        return <div>
                <div className='mt-3 mb-5'>
                <input
                 type='file'
                 className='form-control'
                 {...input}
                 onChange={event=>{this.displayImage(event)}}/>
                 </div>
                 <ImagePreview imageUrl={this.state.imageUrl} image={this.state.image}/>
               </div>
    }
} 