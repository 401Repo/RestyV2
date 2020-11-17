import React from 'react';
// from node modules


class Form extends React.Component {

    constructor(){
        super();
        this.state = {
            url: '',
            method: '',
        }
    }

    handleString = async (e) => {
        const url = e.target.value;
        await this.setState({url});
        console.log(this.state);
    }

    handleClick = async (e) => {
        const method = e.target.value;
        await this.setState({method});
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
    return (

    <div class='form-div'>
    <form onSubmit={this.handleSubmit}>
    <fieldset>
    <div class="form-group">
    <input type="text" onChange={this.handleString} id="path" class="form-control" placeholder="home/etc/"  />
    <button value='GET' onClick={this.handleClick} class="btn btn-primary form-btn">Get</button>
    <button value='POST' onClick={this.handleClick} class="btn btn-primary form-btn">Post</button>
    <button value='PUT' onClick={this.handleClick} class="btn btn-primary form-btn">Put</button>
    <button value='DELETE' onClick={this.handleClick} class="btn btn-primary form-btn">Delete</button>
    </div>
    </fieldset>
    </form>

    <h2>The method: {this.state.method}</h2>
    <h2>The URL: {this.state.url}</h2>
    <p id='result-box'></p>
    </div>
        )
    }
}

export default Form;