import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Results from './components/Results';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: center;
    background-color: #32B8D8;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.5);
    height: 100px;
  }
  h1 {
    font-size: 3rem;
    color: white;
    text-align: center;
    align-self: center;
  }
  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
  ol {
    font-size: 1.2rem;
  }
  .wrapper {
    margin-left: 20px;
  }
`;

function App(props) {


  return (
    <AppWrapper>
      <header>
        <h1>Nationalize Your Name</h1>
      </header>
      <div className='wrapper'>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>
            <li>Enter your name.</li>
            <li>Click the submit button.</li>
            <li>See the probability of your name being from a certain country.</li>
            <li>Note: You will receive a country code, this country code corresponds to the ISO country codes found <a href={`https://nationalize.io/our-data`} target='_blank'>here</a>.</li>
          </ol>
        </div>
      </div>
      <Form />
      {props.nameProbabilities.length > 0 && <Results />}
    </AppWrapper>
  );
}
const mapStateToProps = state => {
  return {
    nameProbabilities: state.nameProbabilities,
  }
}

export default connect(mapStateToProps, {})(App);