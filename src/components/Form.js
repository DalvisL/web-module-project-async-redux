import React from 'react';
import { connect } from 'react-redux';
import { addName, fetchName } from '../actions';

const Form = (props) => {
    const handleChange = evt => {
        const name = evt.target.value;
        props.addName(name);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.fetchName(props.name);
    };

    return(
        <div className='Form'>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor='input-id'>Enter your Name</label>
                <input id='input-id' onChange={(evt) => handleChange(evt)} placeholder='Name' value={props.name}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        name: state.name,
        fetchingName: state.fetchingName,

    }
};

export default connect(mapStateToProps, {addName, fetchName})(Form);