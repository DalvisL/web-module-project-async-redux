import React from 'react';
import { connect } from 'react-redux';

function Results(props) {
    return (
        // this is just a placeholder for now, replace once you have the data
        <div className='Results'>
            <h2>Results</h2>
            <p>{props.name}</p>
            <div className='results-wrapper'></div>
            <hr/>
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
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        probability: state.nameProbabilities
    }
};

export default connect(mapStateToProps, {})(Results);