function sbmt() { 
    let isValid = true;

    // Fetching the Elements
    const txt = document.getElementById("text").value.trim();
    const em = document.getElementById("email").value.trim();
    const ph = document.getElementById("phoneno").value.trim();
    
    // Reset Error States
    document.getElementById("text").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("phoneno").classList.remove("error");
    
    // Name Validation (Only alphabets and spaces, minimum 3 characters)
    if (!/^[A-Za-z\s]+$/.test(txt) || txt.length < 3) {
        document.getElementById("text").classList.add("error");
        isValid = false;
    }

    // Email Validation (Improved to accept correct domains)
    if (!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail|ricr)\.(com|in|co\.in)$/.test(em) || em.length < 9) {
        document.getElementById("email").classList.add("error");
        isValid = false;
    }

    // Phone Number Validation (Starts with 6-9 and is exactly 10 digits)
    if (!/^[6-9]\d{9}$/.test(ph)) {
        document.getElementById("phoneno").classList.add("error");
        isValid = false;
    }

    // If all fields are valid, log and clear form
    if (isValid) {
        console.log(txt, em, ph);
        document.getElementById("text").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phoneno").value = "";
    }
}
