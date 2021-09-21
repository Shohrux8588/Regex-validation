// validation script here
const inputs = document.querySelectorAll("input");

const patters = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\-\.]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /[\w@-]{8,20}/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}

function check(e) {
    const regex = patters[e.target.name];
    const characters = e.target.value;
    if (regex.test(characters)) {
        e.target.className = "valid";
    } else {
        e.target.className = "invalid";
    }
}

inputs.forEach(input => {
    input.addEventListener("input", check);
})
