import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Form.css';

function Form() {
    const [submission, setSubmission] = useState('dependent');
    const { register, errors, handleSubmit } = useForm();

    const simulateRequest = ms => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async data => {
        setSubmission('pending');
        await simulateRequest(2000);
        console.log(data);
        setSubmission('success');
    }

    return (
        <React.Fragment>
            {submission === 'dependent' ? (
                <div>
                    {Object.entries(errors).length !== 0 && <div className="error-alert"><p className="alert-text">HEADS UP! There are errors in the form below</p></div>}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <b>First Name <span className="red-text">*</span></b><br />
                        <input className="form-input" type="text" name="firstName" ref={register({ required: true })}></input>
                        {errors.firstName && <p className="form-error">First name is required</p>}

                        <b>Last Name <span className="red-text">*</span></b><br />
                        <input className="form-input" type="text" name="lastName" ref={register({ required: true })}></input>
                        {errors.lastName && <p className="form-error">Last name is required</p>}

                        <b>Email <span className="red-text">*</span></b><br />
                        <input className="form-input" type="text" name="email" ref={register({ required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}></input>
                        {errors.email && errors.email.type === "required" && <p className="form-error">Email is required</p>}
                        {errors.email && errors.email.type === "pattern" && <p className="form-error">Expected email format: example@example.com</p>}

                        <b>Phone Number <span className="red-text">*</span></b><br />
                        <input className="form-input" type="text" name="phoneNumber" ref={register({ required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im })}></input>
                        {errors.phoneNumber && errors.phoneNumber.type === "required" && <p className="form-error">Phone number is required</p>}
                        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && <p className="form-error">Incorrect format for phone number</p>}

                        <input className="button button-large success" type="submit" value="SIGN UP"></input>

                    </form>
                </div>
            ) : submission === 'pending' ? (
                <div className="row">
                    <div className="col-2 offset-1">
                        <Loader
                            type="ThreeDots"
                            color="#CCCCCC"
                            height={75}
                            width={75}
                        />
                        <b className="">Submiting...</b>
                    </div>
                </div>
            ): (
                <div className="row">
                    <div className="col-3">
                        <span className="circle"><FaCheck className="vertical-center horizontal-center" color="#FFFFFF" size="50px" /></span>
                    </div>
                    <div className="col">
                        <h1 className="subtitle bold">Demo request sent!</h1>
                        <p>Someone will reach out to schedule your demo within the next 48 business hours</p>
                        <b className="custom-underline" onClick={() => { setSubmission('dependent') }}>Request another demo</b>
                    </div>
                </div>
            )}

        </React.Fragment>
    );
}

export default Form;
