import React from 'react';
// from node modules


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      showMessage: false,
      pokemon: []

    }
  }


  // componentDidMount() {
  //     fetch( this.state.url ||'https://swapi.dev/api/people/')
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ pokemon: data.results })
  //       console.log(this.state.pokemon)
  //     })
  //     .catch(console.log)
  //   }

  doSommething(value, action) {
    this.setState({
      showMessage: true
    });
    if (value === 'https://jsonplaceholder.typicode.com/posts' && action === 'POST') {

      /// Lets post something fake:

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))

    } else if (value === 'https://jsonplaceholder.typicode.com/posts/1' && action === 'DELETE') {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
      console.log('We deleted the post');
    } else if(action === 'GET'){
      fetch(`${value}`)
        .then(response => {
          return response.json();
        }).then(data => {
          this.setState({
            pokemon: data.results
          })
        });
    } else if(value === 'https://jsonplaceholder.typicode.com/posts/1' && action === 'PUT'){
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
    } else {
      console.log('Error: you need  valid action and a valid route');
    }
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  handleString = async (e) => {
    this.setState({
      showMessage: false
    });
    const url = e.target.value;
    await this.setState({ url });
    console.log(this.state);
  }

  handleClick = async (e) => {
    const method = e.target.value;
    await this.setState({ method });

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (

      <div className='form-div'>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <input type="text" onChange={this.handleString} id="path" className="form-control" placeholder="https://pokeapi.co/api/v2/pokemon" />
              <button onClick={this.handleClick} value='GET' className="btn btn-info form-btn">Get</button>
              <button value='POST' onClick={this.handleClick} className="btn btn-warning form-btn">Post</button>
              <button value='PUT' onClick={this.handleClick} className="btn btn-primary form-btn">Put</button>
              <button value='DELETE' onClick={this.handleClick} className="btn btn-dark form-btn">Delete</button>
            </div>
          </fieldset>
        </form>
        <button value='GO!' type='submit' onClick={() => { this.doSommething(this.state.url, this.state.method) }} className="btn btn-danger form-btn" >GO!</button>
        <h2 data-testid="display-method">The method: {this.state.method}</h2>
        <h2 data-testid="display-url">The URL: {this.state.url}</h2>
        <div>{this.state.showMessage && (<div id='result-box'>

          <h1>Done</h1>


          {this.state.pokemon.map((pokemon) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
              </div>
            </div>
          ))}

        </div>)}</div>


      </div>
    )
  }
}

export default Form;