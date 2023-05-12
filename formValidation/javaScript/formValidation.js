let checkMssgs = document.getElementsByClassName("needed");
function setError(i) {
    checkMssgs[i].style.display = "block";
}
function noError() {
    for(let item of checkMssgs)
    {
        item.style.display = "none"
    }
}
returnValVerifier();
function returnValVerifier() {
    let returnVal = true;
    noError();
    names = document.getElementById("name").value;
    num = document.getElementById("number").value;
    mail = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    let hosts = "@gmail.com"
    if (names.length<=2) {
        setError(0);
        returnVal = false;
    }
    if (num.length!=10) {
        setError(1);
        returnVal = false;
    }
    if (!mail.toLowerCase().includes(hosts)) {
        setError(2);
        returnVal = false;
    }
    if (pass.length <= 8) {
        setError(3);
        returnVal  = false;
    }
    return returnVal;
}