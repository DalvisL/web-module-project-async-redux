import React from 'react';
import { connect } from 'react-redux';
import { addName, fetchName } from '../actions';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    form {
        display: flex;
        flex-direction: column;
        align-content: center;
        gap: 10px;
        width: 50vw;
        div {
            display: flex;
            justify-content: center;
            height: fit-content;
            width: 100%;
        }
        button {
            border: none;
            height: 100%;
            background-color: #32B8D8;
            color: white;
        }
        label {
            font-size: 2rem;
            width: 100%;
            text-align: center;
        }
    }
`

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
        <FormWrapper>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor='input-id'>Enter your Name</label>
                <div>
                    <input id='input-id' onChange={(evt) => handleChange(evt)} placeholder='Name' value={props.name}></input>
                    <button type='submit'>Submit</button>  
                </div>
                
            </form>
        </FormWrapper>
    )
} 

const mapStateToProps = state => {
    return {
        name: state.name,
        fetchingName: state.fetchingName,

    }
};

export default connect(mapStateToProps, {addName, fetchName})(Form);