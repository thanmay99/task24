import React, { useCallback, useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState({
        nameError: "",
        ageError: "",
        emailError: "",
    });

    const handleChange = (e) => {
        // e -> event object
        console.log(e);
        console.log(e.target.id);
        console.log(e.target.value);

        if (e.target.id === "firstname") {
            validateName(e.target.value);
        }
        if (e.target.id === "age") {
            validateAge(e.target.value);
        }
        if (e.target.id === "email") {
            validateEmail(e.target.value);
        }
    };

    const validateName = (name) => {
        let nameError = error.nameError;
        let isValid = formValid;

        if (name.trim() == "") {
            isValid = false;
            nameError = "This is required";
        } else if (name.trim().length < 3) {
            isValid = false;
            nameError = "This is invalid";
        } else {
            isValid = true;
            nameError = "";
        }

        setFirstName(name);
        setError({ ...error, nameError });
        setFormValid(isValid);

        return isValid;
    };

    const validateAge = (age) => {
        let ageError = error.ageError;
        let isValid = formValid;

        if (age.trim() == "") {
            isValid = false;
            ageError = "This is required";
        } else if (age.trim().length > 3) {
            isValid = false;
            ageError = "This is invalid";
        } else {
            isValid = true;
            ageError = "";
        }

        setAge(age);
        setError({ ...error, ageError });
        setFormValid(isValid);

        return isValid;
    };

    const validateEmail = (email) => {
        let emailError = error.emailError;
        let isValid = formValid;
        let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

        if (!emailRegex.test(email)) {
            isValid = false;
            emailError = "This is invalid!";
        } else {
            isValid = true;
            emailError = "";
        }

        setEmail(email);
        setFormValid(isValid);
        setError({ ...error, emailError });

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateName(firstName) && validateAge(age) && validateEmail(email)) {
            alert("form is submitted");

            // restructuring of objects
            const user = { firstName, age, email };
            props.add(user);

            setFirstName("");
            setAge("");
            setEmail("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Name</label>
            <input
                type="text"
                placeholder="Please enter name"
                onChange={handleChange}
                id="firstname"
                value={firstName}
            />
            <p>{error.nameError}</p>
            <label>Enter Age</label>
            <input
                type="text"
                placeholder="Please enter age"
                onChange={handleChange}
                id="age"
                value={age}
            />
            <p>{error.ageError}</p>
            <label>Enter Email</label>
            <input
                type="text"
                placeholder="Please enter email"
                onChange={handleChange}
                id="email"
                value={email}
            />
            <p>{error.emailError}</p>
            <button>Submit</button>
        </form>
    );
};

export default Form;