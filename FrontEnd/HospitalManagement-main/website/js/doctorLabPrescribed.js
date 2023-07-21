document.getElementById('getdetails-btn').addEventListener('click', function() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "servicenumder": 1
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://likely-zoo-production.up.railway.app/api/v1/users/doctor/PatientLab/1", requestOptions)
      .then(response => response.text())
      .then(result => {     
        
        console.log("res::",JSON.parse(result))
        deets = JSON.parse(result);

        // Get references to the labels
        const appointmentIdLabel = document.getElementById('appointment-id');
        const bookingForLabel = document.getElementById('booking-for');
        const slotNumberLabel = document.getElementById('slot-number');
        const medicineIdLabel = document.getElementById('lab-id');
        const medicineNameLabel = document.getElementById('lab-name');
        const patientId = document.getElementById('patient-id');


        // Populate the labels with data
        appointmentIdLabel.textContent = deets.data.appointments.id;
        bookingForLabel.textContent = deets.data.appointments.BookingFor;
        slotNumberLabel.textContent = deets.data.appointments.slotnumbder;
        medicineIdLabel.textContent = deets.data.lab.id;
        medicineNameLabel.textContent = deets.data.lab.TestName;
        patientId.textContent = deets.data.id;
    
    })
      .catch(error => console.log('error', error));   
    
});

document.getElementById('btn-logout').addEventListener('click', function() {
    window.location.href = "/logout";
  });
  