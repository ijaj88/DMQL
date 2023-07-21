document.querySelector('.verify').addEventListener('click', function () {

    let validAccessCode = document.getElementById('access-code').value;

    const adminAccessCode = "999999";
    const doctorAccessCode = "123456";
    let accessCode = document.getElementById("access-code").value;

    console.log("entered:", accessCode);
    console.log("given:", validAccessCode);
    if (adminAccessCode === validAccessCode) {
        window.location.href = '/staffLanding';
    }
    else if (doctorAccessCode === validAccessCode) {
        window.location.href = '/doctorLanding';
    }
    else {
        alert("Invalid access code. Please try again.");
    }


});