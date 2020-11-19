import React from 'react';

let historyClick = async (e) => {
  console.log('Hello world');
  const text = document.getElementById('targetString').innerHTML;
  let splited = text.split(/[ ]+/);
  console.log('We got', splited);
  let historyUrl = splited[0];
  console.log('this is ourhistory Url: ', historyUrl);
  let historyVerb = splited[1];
  console.log('this is the history verb', historyVerb); 
}

function History(props) {

  console.log('this is history', props.history)

        if (props.history === null) {
            return( <p>No History</p>);
          }
          else if (props.history.length === 0) {
            return( <p>History is empty</p>);
          }
          else if (props.history.length === false) {
            return( <p>History is false?</p>);
          }
          return (
<div id='card-catcher'>
          {props.history.map((pokemon, index) => (
            <div className="col-sm-12" key={index}>
            <div className="card">
              <div className="card-body">
                <p id='targetString' onClick={historyClick} className="card-title">{pokemon}</p>
              </div>
            </div></div>
          ))}</div>

          );
        }


export default History;