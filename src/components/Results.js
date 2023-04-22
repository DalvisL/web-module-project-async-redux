import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 20px;
    h2 {
        border-bottom: 1px solid grey;
        text-align: center;
        margin-bottom: 20px;
        background-color: #32B8D8;
        color: white;
    }
    .results {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid grey;
        padding: 10px;
        font-size: 1.5rem;
        .country, .probability {
            h3 {
                font-weight: bold;
                text-underline-position: under;
            }
        }
        .country {
            margin-bottom: 10px;
        }

    }
`

function Results(props) {
    return (
        // this is just a placeholder for now, replace once you have the data
        <ResultsWrapper>
            <h2>Results</h2>
            {props.probability.map((country, index) => {
                return (
                    <div  className='results' key={index}>
                        <div className='country'>
                            <h3>Country Code</h3>
                            <p>{country.country_id}</p>  
                        </div>
                        
                        <div className='probability'>
                            <h3>Probability</h3>
                            <p>{country.probability * 100 + '%'}</p>
                        </div>
                    </div>
                )
            })}
        </ResultsWrapper>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        probability: state.nameProbabilities
    }
};

export default connect(mapStateToProps, {})(Results);