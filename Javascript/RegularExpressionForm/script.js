function sbmt() { 
    let isValid = true;

    // Fetching the Elements
    const txt = document.getElementById("name").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phone").value.trim();
    const ps = document.getElementById("password").value.trim();
    const cp = document.getElementById("confirm-password").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const terms = document.getElementById("terms").checked;

    // Reset Error States
    document.querySelectorAll(".form-control").forEach(el => el.classList.remove("error"));

    // Name Validation
    if (!/^[A-Za-z\s]+$/.test(txt) || txt.length < 3) {
        document.getElementById("name").classList.add("error");
        isValid = false;
    }

    // Email Validation
    if (!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail|ricr)\.(com|in|co\.in)$/.test(em)) {
        document.getElementById("email").classList.add("error");
        isValid = false;
    }

    // Phone Number Validation
    if (!/^[6-9]\d{9}$/.test(ph)) {
        document.getElementById("phone").classList.add("error");
        isValid = false;
    }

    // Password Validation
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(ps)) {
        document.getElementById("password").classList.add("error");
        isValid = false;
    }

    // Confirm Password Validation
    if (ps !== cp) {
        document.getElementById("confirm-password").classList.add("error");
        isValid = false;
    }

    // Date of Birth Validation
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        document.getElementById("dob").classList.add("error");
        isValid = false;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select a gender.");
        isValid = false;
    }

    // Terms Validation
    if (!terms) {
        alert("You must agree to the terms and conditions.");
        isValid = false;
    }

    // If all fields are valid, log and clear form
    if (isValid) {
        console.log(txt, em, ph, ps, cp, dob, gender, terms);
        document.querySelectorAll(".form-control").forEach(el => el.value = "");
        document.getElementById("terms").checked = false;
    }
}
