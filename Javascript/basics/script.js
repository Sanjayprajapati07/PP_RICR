// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent actual form submission
//     const formData = new FormData(event.target);
//     const formObject = Object.fromEntries(formData.entries());
//     console.log("Form Submitted:", formObject);
// });

// function submit(){
//     const nm = document.getElementById("name").value;
//     const em = document.getElementById("email").value;
//     const ag = document.getElementById("age").value;
//     const db = document.getElementById("dob").value;
//     const ps = document.getElementById("password").value;
//     const gn = document.querySelector("input[name='gender']:checked").value;
//     const ql =[];
     
//     document.querySelectorAll("input[name='qualification']:checked").forEach(element =>{
//         ql.push(element.value)
//     });

//     const ck=  document.getElementById("accept").ariaChecked;
//     if(!ck){
//         alert("please accept the terms and condition")
//         return;
//     }

//     console.log(nm,em,ag,db,ps,gn,ql);
// }
function submitForm() {
    //event.preventDefault();
    const nm = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const ag = document.getElementById("age").value;
    const db = document.getElementById("dob").value;
    const ps = document.getElementById("password").value;
    const res = document.getElementById("resume").value;
    const gn = document.querySelector("input[name='gender']:checked").value;
    const ql = [];
    document.querySelectorAll("input[name='qualification']:checked").forEach(element => {
        ql.push(element.value);
    });
    
    const ck = document.getElementById("accept").checked;
    if (!ck) {
        alert("Please accept the terms and conditions");
        return;
    }
    
    console.log(nm, em, ag, db, ps, gn, ql,res);
}