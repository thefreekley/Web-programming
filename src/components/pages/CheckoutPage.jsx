import React from 'react';

import Hat from "../Hat";
import hat from "../../accets/img/hat.jpg";
import {Formik} from "formik";
import '../../accets/css/pages-style/checkout-page.css'
import Button from "../Button";
import ErrorBox from "../boxes/ErrorBox";
import { Redirect } from 'react-router'

function СheckoutPage() {
    const [stateErr,setStateErr] = React.useState(true);

    const onStateErr = (errTriger) => {
        setStateErr(errTriger);
    }

    function returnBoxError(){
        if(!stateErr)return <ErrorBox closeFunc={()=>onStateErr(true)} />
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",

    };

    const validate = (values) => {
        let errors = {};
        const regexEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        const regexNoName = /[0-9]/;
        const regexPhone = /^((\+?3)?8)?0\d{9}$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }


        if (!values.firstName) {
            errors.firstName = "First name is required";
        } else if (regexNoName.test(values.firstName)) {
            errors.firstName = "First name shouldn't contain numbers";
        }


        if (!values.lastName) {
            errors.lastName = "Last name is required";
        } else if (regexNoName.test(values.lastName)) {
            errors.lastName = "Last name shouldn't contain numbers";
        }


        if (!values.phone) {
            errors.phone = "Phone name is required";
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = "Invalid phone";
        }


        if (!values.address) {
            errors.address = "Address is required";
        }

        return errors;
    };

    const submitForm = (values) => {
        console.log(values)
    };

    const upperCaseName = (name) => {
        return name.substr(0, 1).toUpperCase() + name.substr(1)
    }


    return (

        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={submitForm}
                >
                    {(formik) => {
                        const {
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur,
                            isValid,
                            dirty,
                            isSubmitting
                        } = formik;
                        return (
                            <div className="checkout-container">
                                <h1>CHECKOUT</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="checkout-form">
                                        <div className="form-row">
                                            <div className="form-item">
                                                <label htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={upperCaseName(values.firstName)}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.firstName && touched.firstName ? "input-error" : null
                                                    }
                                                />
                                                {errors.firstName && touched.firstName && (
                                                    <span className="error">{errors.firstName}</span>
                                                )}
                                            </div>


                                            <div className="form-item">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={upperCaseName(values.lastName)}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.lastName && touched.lastName ? "input-error" : null
                                                    }
                                                />
                                                {errors.lastName && touched.lastName && (
                                                    <span className="error">{errors.lastName}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-item">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={values.email.replace(/\s/g, '')}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email ? "input-error" : null
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <span className="error">{errors.email}</span>
                                                )}
                                            </div>


                                            <div className="form-item">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    id="phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.phone && touched.phone ? "input-error" : null
                                                    }
                                                />
                                                {errors.phone && touched.phone && (
                                                    <span className="error">{errors.phone}</span>
                                                )}
                                            </div>

                                        </div>
                                        <div className="form-large-item">
                                            <label htmlFor="address">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.address && touched.address ? "input-error" : null
                                                }
                                            />
                                            {errors.address && touched.address && (
                                                <span className="error">{errors.address}</span>
                                            )}
                                        </div>
                                    </div>
                                    {
                                        returnBoxError()
                                    }


                                    <div className="checkout-buttons">
                                        <Button type={"button"} value={" GO BACK ⯇"} link={"/cart"} width={"300px"}
                                                align="center"/>


                                        <Button type="submit" value={"CONTINUE ⯈"}
                                                onClick={() => onStateErr(isSubmitting)}
                                                width={"300px"}
                                                align="center"
                                                link={!(dirty && isValid) ? null : "/success"}

                                        />
                                    </div>
                                </form>

                            </div>

                        );
                    }}
                </Formik>
            </div>
        </div>
    );

}

export default СheckoutPage;

// <button
//     type="submit"
//     className={!(dirty && isValid) ? "disabled-btn" : ""}
//     disabled={!(dirty && isValid)}
// >
//     Sign In
// </button>