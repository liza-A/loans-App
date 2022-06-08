const regValidation = () => {
    const surname = document.getElementById('surname')
    const givenname = document.getElementById('givenname')
    const nin = document.getElementById('nin')
    const date = document.getElementById('date')
    const occupation = document.getElementById('occupation')
    const work = document.getElementById('work')
    const gender = document.getElementById('gender')
    const loan = document.getElementById('loan')
    const security = document.getElementById('security')
    const fallback = document.getElementById('fallback')

    // VALIDATION ERRORS
    const surnameError = document.getElementById('surnameError')
    const givennameError = document.getElementById('givennameError')
    const ninError = document.getElementById('ninError')
    const dateError = document.getElementById('dateError')
    const occupationError = document.getElementById('occupationError')
    const workError = document.getElementById('workError')
    const genderError = document.getElementById('genderError')
    const loanError = document.getElementById('loanError')
    const securityError = document.getElementById('securityError')
    const fallbackError = document.getElementById('fallbackError')

    // SURNAME VALIDATION
    if (surname.value == "") {
        surname.style.border = "1px solid red"
        surnameError.innerHTML = "Invalid Feild";
        surnameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const surnamelengthRegex = /^[A-Z][a-z]{2,255}$/
        if (surnamelengthRegex.test(surname.value) === false) {
            surname.style.border = '1px solid red';
            surnameError.innerHTML = "Surname should be btn 2-255 characters";
            surnameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {
            surname.style.border = "1px solid green"
            surnameError.textContent = ""
        }
    };

    // GIVEN NAME VALIDATION
    if (givenname.value == "") {
        givenname.style.border = "1px solid red"
        givennameError.innerHTML = "Invalid Feild";
        givennameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const givennamelengthRegex = /^[A-Z][a-z]{2,255}$/
        if (givennamelengthRegex.test(givenname.value) === false) {
            givenname.style.border = '1px solid red';
            givennameError.innerHTML = "Given Name should be 2-255 characters";
            givennameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {

            givenname.style.border = "1px solid green"
            givennameError.textContent = ""
        }

    };

    // NIN VALIDATION
    if (nin.value == "") {
        nin.style.border = "1px solid red"
        ninError.innerHTML = "Invalid Field";
        ninError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const ninRegex = /^[C][A-Z]{1}[0-9A-Z]{12}$/
        if (ninRegex.test(nin.value) === false) {
            nin.style.border = '1px solid red';
            ninError.innerHTML = "please provide valid UG NIN with 14 Alphanumeric Characters";
            ninError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false

        } else {
            nin.style.border = "1px solid green"
            ninError.textContent = ""
        }
    };

// DATE OF BIRTH VALIDATION
    if (date.value == "") {
        date.style.border = "1px solid red"
        dateError.innerHTML = "Please Select Date of Birth";
        dateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        date.style.border = "1px solid green"
        dateError.textContent = ""
    };

     // OCCUPATION VALIDATION
    if (occupation.value == "") {
        occupation.style.border = "1px solid red"
        occupationError.innerHTML = "Invalid Feild";
        occupationError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        const occupationlengthRegex = /^[A-Z][a-z]{2,255}$/
        if (occupationlengthRegex.test(occupation.value) === false) {
            occupation.style.border = '1px solid red';
            occupationError.innerHTML = "Given Name should be 2-255 characters";
            occupationError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {
            occupation.style.border = "1px solid green"
            occupationError.textContent = ""
        }
    };

  // PLACE OF WORK VALIDATION
    if (work.value == "") {
        work.style.border = "1px solid red"
        workError.innerHTML = "Invalid Field";
        workError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        const worklengthRegex = /^[A-Z][a-z]{2,255}$/
        if (worklengthRegex.test(work.value) === false) {
            work.style.border = '1px solid red';
            workError.innerHTML = "Given Name should be 2-255 characters";
            workError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {
            work.style.border = "1px solid green"
            workError.textContent = ""
        }
    };

     // GENDER
    if (gender.value == "Default") {
        gender.style.border = "1px solid red"
        genderError.innerHTML = "Please select at least one gender";
        genderError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        gender.style.border = "1px solid green"
        genderError.textContent = ""
    };

     // LOAN AMOUT
if (loan.value == "") {
    loan.style.border = "1px solid red"
    loanError.innerHTML = "Invalid Feild";
    loanError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
    return false
} else {
    loan.style.border = "1px solid green"
    loanError.textContent = ""

};

// LOAN SECURITY
if (security.value == "") {
    security.style.border = "1px solid red"
    securityError.innerHTML = "Invalid Feild";
    securityError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
    return false
} else {
    const securitylengthRegex = /^[A-Z][a-z]{5,255}$/
    if (securitylengthRegex.test(security.value) === false) {
        security.style.border = '1px solid red';
        securityError.innerHTML = "Loan Sexcurity should be 5-255 characters";
        securityError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        security.style.border = "1px solid green"
        securityError.textContent = ""
    }
}

// FALL BACK 
if (fallback.value == "") {
    fallback.style.border = "1px solid red"
    fallbackError.innerHTML = "Invalid Feild";
    fallbackError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
    return false
} else {
    const fallbacklengthRegex = /^[A-Z][a-z]{5,255}$/
    if (fallbacklengthRegex.test(fallback.value) === false) {
        fallback.style.border = '1px solid red';
        fallbackError.innerHTML = "FallBack should be 5-255 characters";
        fallbackError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        fallback.style.border = "1px solid green"
        fallbackError.textContent = ""
    }
} 
};
