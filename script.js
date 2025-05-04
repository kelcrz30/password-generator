function enterPass() {
    let inputPassword = parseInt(document.getElementById("length").value);
    let uppercaseBtn = document.getElementById("uppercaseBtn").checked;
    let lowercaseBtn = document.getElementById("lowercaseBtn").checked;
    let numberBtn = document.getElementById("numberBtn").checked;
    let symbolBtn = document.getElementById("symbolBtn").checked;
    let result = document.getElementById("result");
    let output = "";

    if (inputPassword < 1) {
        result.textContent = "Please enter a number greater than 1.";
        return;
    }
    if (uppercaseBtn) {
        output += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercaseBtn) {
        output += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numberBtn) {
        output += "0123456789";
    }
    if (symbolBtn) {
        output += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    if (output === "") {
        result.textContent = "Please select at least one character type.";
        return;
    }

    let password = "";
    for (let i = 0; i < inputPassword; i++) {
        const randomPass = Math.floor(Math.random() * output.length);  
        password += output[randomPass]; 
    }

    result.textContent = `Your generated password is ${password}`;
}
