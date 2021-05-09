import React from 'react'
export default class AddOptions extends React.Component{
    state = {
        error: undefined
    }
    
    handleAddedOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p className='add-option__error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddedOption}>
                    <input className='add-option__input' type='text' name='option' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}