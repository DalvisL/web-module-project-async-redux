import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Results from './components/Results';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;

`;

function App(props) {


  return (
    <div className="App">
      <header>
        <h1>Nationalize your Name</h1>
      </header>
      <div className='wrapper'>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>
            <li>Enter your name.</li>
            <li>Click the submit button.</li>
            <li>See the probability of your name being from a certain country.</li>
            <li>You will receive a country code, this country code corresponds to the ISO country codes found <a href={`https://nationalize.io/our-data`} target='_blank'>here</a>.</li>
          </ol>
        </div>
      </div>
      <Form />
      {props.nameProbabilities.length > 0 && <Results />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    nameProbabilities: state.nameProbabilities,
  }
}

export default connect(mapStateToProps, {})(App);