import React from 'react';
import Spinner from './spinner';
import History from './history';
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/1337')

// from node modules


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      showMessage: false,
      showHistory: true,
      loading: false,
      pokemon: [],
      history: [],
      body: [],
      showHideBod: false,
      json: ''
    }
  }

  componentDidMount() {

    // const history = localStorage.getItem(JSON.parse('history'));
    this.setState({
      history: JSON.parse(localStorage.getItem('history'))
    });

  }

  doSommething(value, action, params) {
    this.setState({
      showMessage: true
    });
    this.setState({
      showHistory: true
    });

    if (action === 'POST') {

      /// Lets post something fake:

      fetch(value, {
        method: 'POST',
        body: JSON.stringify({ params }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log('Sent Json', json);
          this.setState({
            json: json
          });
        })
/////////

////////////

    } else if (action === 'DELETE') {
      fetch(`${value}`, {
        method: 'DELETE',
      })
      console.log('We deleted the post');
        this.setState({
          json: 'deleted'
        })
    } else if (action === 'GET') {
      fetch(value)
        .then(response => {
          return response.json();
        }).then(data => {
          this.setState({
            pokemon: data.results
          })
        });
    } else if (action === 'PUT') {
      fetch(`${value}`, {
        method: 'PUT',
        body: JSON.stringify({params}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json);
          this.setState({
            json: json
          });
        })
    } else {
      console.log('Error: you need  valid action and a valid route');
    }
  }

  _showSpiner = () => {
    this.setState({
      loading: true
    });
    setTimeout(
      function () {
        this.setState({ loading: false });
      }
        .bind(this),
      2000
    );

  }


  // handleClickHist = props=> {
  //   const { url } = this.state
  //   //Handle fName and lName here
  // };

  // onLNameChange = (e) => {
  //   this.setState({ url: e.target.value })
  // }




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
  }

  handleBody = async (e) => {
    const body = e.target.value;
    await this.setState({ body });
  }


  handleClick = async (e) => {
    const method = e.target.value;
    await this.setState({ method });
  }


  handleClickExtra = async (e) => {
    this.setState({ showHideBod: true });
    const method = e.target.value;
    await this.setState({ method });

  }



  fixNull = () => {

    if (this.state.history === null) {
      this.setState({
        history: []
      });
    }
  }

  handleLocal = async () => {
    const { history } = this.state;
    await localStorage.setItem('history', JSON.stringify(history));
  }

  _addToHistory = async (url, verb) => {
    var joined = this.state.history.concat(url + ' ' + verb);
    this.setState({ history: joined });
    const { history } = { history: joined };
    await localStorage.setItem('history', JSON.stringify(history));
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (



      <div {...() => {
        console.log('hello world', this.state.history);

      }} id='container-div'>

        <div className='form-div'>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <input type="text" onClick={this.fixNull} onChange={this.handleString} id="path" className="form-control" placeholder="https://pokeapi.co/api/v2/pokemon" />
                <button onClick={this.handleClick} value='GET' className="btn btn-info form-btn">Get</button>
                <button value='POST' onClick={this.handleClickExtra} className="btn btn-warning form-btn">Post</button>
                <button value='PUT' onClick={this.handleClickExtra} className="btn btn-primary form-btn">Put</button>
                <button value='DELETE' onClick={this.handleClick} className="btn btn-dark form-btn">Delete</button>

                {/* 

The pop up text field:

*/}

                {this.state.showHideBod && (<input type="text" onChange={this.handleBody} className="form-control" placeholder="{
          title: 'foo',
          body: 'bar',
          userId: 1,
        }" />)}

              </div>
            </fieldset>
          </form>
          <div>{this.state.loading && (<Spinner />)}</div>
          <button value='GO!' {...console.log('this is body now', this.state.body)} type='submit' onClick={() => { this.doSommething(this.state.url, this.state.method, this.state.body); this._showSpiner(); this._addToHistory(this.state.url, this.state.method); }} className="btn btn-danger form-btn" >GO!</button>



          <div >{this.state.showMessage && (<div id='result-box' >
            <h1 className='party-text'>Done</h1>
            <h2 className='party-text' data-testid="display-method">The method: <span className='fun'>{this.state.method}</span></h2>
            <h2 className='party-text' data-testid="display-url">The URL: <span className='fun'>{this.state.url}</span></h2>
            <div id='card-catcher'>


            <div><h2 className='results'>Results from PUT / POST / DELETE: </h2><JSONPretty id="json-pretty" data={this.state.json} theme={JSONPrettyMon}></JSONPretty></div>
            <div><h2 className='results'>Results from GET: </h2><JSONPretty id="json-pretty" data={this.state.pokemon} theme={JSONPrettyMon}></JSONPretty></div>


              {/* {this.state.pokemon.map((pokemon, index) => (
            <div className="col-sm-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
              </div>
            </div></div>
          ))} */}


            </div>

          </div>)}</div>



        </div>

        <div id='history-div'>
          <div><h4>History</h4></div>
          <History {...this.state}  />
        </div>
      </div>
    )
  }
}

export default Form;