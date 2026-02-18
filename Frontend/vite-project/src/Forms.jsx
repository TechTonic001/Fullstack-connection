import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Forms = () => {
    // Declaring regex values for yup validation
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "Must be 2 characters or more")
                .required("First name cannot be empty"),
            lastName: Yup.string()
                .min(2, "Must be 2 characters or more")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .matches(lower, "Must include lowercase letter")
                .matches(upper, "Must include uppercase letter")
                .matches(number, "Must include a number")
                .matches(length, "Must not be less than 8 characters")
                .required("Required")
        }),

        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <small>{formik.errors.firstName}</small>
                ) : null}
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <small>{formik.errors.lastName}</small>
                ) : null}
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <small>{formik.errors.email}</small>
                ) : null}
                <input
                    id="password"
                    name="password"
                    type="text"
                    placeholder="*******"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <small>{formik.errors.password}</small>
                ) : null}
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Forms;