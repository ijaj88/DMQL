document.getElementById('login-btn').addEventListener('click', function() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": username,
      "password": password,
      "role": "ADMIN"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://likely-zoo-production.up.railway.app/api/v1/auth/login", requestOptions)
      .then(response => {
        console.log(response);

        if(response.status == 200){
            window.location.href = "../pages/patientHome.html";
        }
      })
      .catch(error => console.log('error', error));  
      
    
  });


