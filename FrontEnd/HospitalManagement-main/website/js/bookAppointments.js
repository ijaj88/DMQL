document.getElementById('doctors-btn').addEventListener('click', function() {

  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://likely-zoo-production.up.railway.app/api/v1/users/doctor?limit=0&offset=0", requestOptions)
      .then(response => response.text())
      .then(result => {// Get the table element
          appts = JSON.parse(result);
          console.log(appts.data);
        const table = document.getElementById('doctor-table');
  
        // Create a header row
        const headerRow = document.createElement('tr');
        const headers = ['id', 'firstname', 'lastname', 'sex', 'speciality','age'];
        headers.forEach(header => {
          const th = document.createElement('th');
          th.textContent = header;
          headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
  
        // Create a row for each data item and populate it with the data
        appts.data.forEach(data => {
          const row = document.createElement('tr');
          const cells = [data.id, data.firstname, data.lastname, data.sex, data.speciality, data.age];
          cells.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
          });
          // Add a radio button to the row
          const radioTd = document.createElement('td');
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'doctor';
          radio.value = data.id;
          radioTd.appendChild(radio);
          row.appendChild(radioTd);

          table.appendChild(row);
          table.appendChild(row);
        });
      })
      .catch(error => console.log('error', error));
  
  
  });



document.getElementById('appointment-btn').addEventListener('click', function() {

  const selectedDoctorId = document.querySelector('input[name="doctor"]:checked').value;
console.log(selectedDoctorId);
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://likely-zoo-production.up.railway.app/api/v1/users/doctor/Availabilty/"+selectedDoctorId, requestOptions)
    .then(response => response.text())
    .then(result => {
        // Get the table element
        appts = JSON.parse(result);
        console.log(appts.data);
      const table = document.getElementById('appointment-table');

      // Create a header row
      const headerRow = document.createElement('tr');
      const headers = ['availableid', 'doctorId', 'firstname', 'dutydate', 'availableslots'];
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Create a row for each data item and populate it with the data
      appts.data.forEach(data => {
        const row = document.createElement('tr');
        const cells = [data.availableid, data.doctorId, data.firstname, data.dutydate, data.availableslots];
        cells.forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
        });
        table.appendChild(row);
      });
    })
    
    .catch(error => console.log('error', error));


});

document.getElementById('slot-btn').addEventListener('click', function() {

  let slot = parseInt(document.getElementById('slot').value);
  let availableId = document.getElementById('availableId').value;
 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFpc2h3YXJ5YSIsInN1YiI6OSwicm9sZXMiOlsiUEFUSUVOVCJdLCJpYXQiOjE2ODI5MDk4NzksImV4cCI6MTY4MjkxMzQ3OX0.EcsrgKdLgizT57uipNEn33AB1N2_gi5JDVYAWMYmUJZ1vHITevok3IbXStKgIayLTr_3coYVpGnkhlm8hcQbDtSiyta8AfL2yS8QBYeoXORx10DQnAFP6gnNz5HGgs9zSrkFFPDxD2r-A7XiDW9sWlMGh9hHG9Jv0BUJr_yfaTmm0P5JCU-9VvUKW1APa-78iTYWkrRq220gbZWbEqFvOrAdDgAOCMp_JgyeCvqAlrfdj3i86PPEOHZZ7UgRm8ryJnXnGCNSCMBeF4kElpUxYFREhsQjnUi_TyHBzT7JmK_5e1PR-C1lgnCcxwtuN4cY1WXET0fP0GCF6n_eFmM-lw");
  
  var raw = JSON.stringify({
    "slotnumbder": slot
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://likely-zoo-production.up.railway.app/api/v1/users/patient/bookappoitmnet/"+availableId, requestOptions)
  .then(response => {
    console.log(response);
    if(response.status == 201){
        alert("Appointment Booked!");
    }
  })
   
    .catch(error => console.log('error', error));

});

document.getElementById('btn-logout').addEventListener('click', function() {
  window.location.href = "/logout";
});

