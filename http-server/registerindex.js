let userForm = document.getElementById("u-form");
const retent = () => {
    let entries = localStorage.getItem("u-details");
    if(entries){
        entries= JSON.parse(entries);
    }else{
        entries = [];
    }
return entries;
}
let UserDet = retent();
const dispent = () => {
    const entries =retent();
    let tableEntries='';
    for(const entry of entries){
        const nameCell = `<td>${entry.name}</td>`; 
        const emailCell=  `<td>${entry.email}</td>`;
        const passwordCell = `<td>${entry.password}</td>`;
        const dobCell = `<td>${entry.dob}</td>`;
        const acceptTermsCell = `<td>${entry.acceptedTermsAndcondtions ? 'true':'false'}</td>`;
        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        tableEntries +=row;
    }
    const table = `<table><tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`
    let details=document.getElementById("u-details");
    details.innerHTML=table;
}
const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndcondtions = document.getElementById("acceptTerms").checked;
    const entry ={
        name,
        email,
        password,
        dob,
        acceptedTermsAndcondtions,
    };
    UserDet.push(entry);
    localStorage.setItem("u-details",JSON.stringify(UserDet));
    dispent();
}
userForm.addEventListener("submit",saveUserForm);
dispent();
