document.getElementById('register-btn').addEventListener('click', function () {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let sex = document.getElementById('sex').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let emergencycontact = document.getElementById('emergencycontact').value;
    let email = document.getElementById('email').value;

    var raw = JSON.stringify({
        "username": username,
        "password": password,
        "TYPE": "ADMIN",
        "firstname": firstname,
        "lastname": lastname,
        "sex": sex,
        "age": age,
        "phonenumber": phone,
        "emergencycontact": emergencycontact,
        "isAccountDisabled": 0,
        "email": email
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://likely-zoo-production.up.railway.app/api/v1/auth/register/admin", requestOptions)
        .then(response => {
            console.log(response);

            if (response.status == 201) {
                alert("User registered Successful! Please Login.")
                window.location.href = "/adminLogin";
            }
        })
        .catch(error => console.log('error', error));

});




