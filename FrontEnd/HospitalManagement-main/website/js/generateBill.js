document.getElementById('getdetails-btn').addEventListener('click', function () {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "servicenumder": 2
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://likely-zoo-production.up.railway.app/api/v1/users/doctor/GenearteBill/1", requestOptions)
    .then(response => response.text())
    .then(result => {     
        
        console.log("res::",JSON.parse(result))
        deets = JSON.parse(result);

        // Get references to the labels
        const appointmentIdLabel = document.getElementById('appointment-id');
        const bookingForLabel = document.getElementById('booking-for');
        const slotNumberLabel = document.getElementById('slot-number');
        const insuranceIdLabel = document.getElementById('insurance-id');
        const insurancecompanyLabel = document.getElementById('insurancecompany');
        const patientId = document.getElementById('patient-id');
        const policyno = document.getElementById('policyno');
        const amount = document.getElementById('amount');
        const admittedOn = document.getElementById('admittedOn');


        // Populate the labels with data
        appointmentIdLabel.textContent = deets.data.appointments.id;
        bookingForLabel.textContent = deets.data.appointments.BookingFor;
        slotNumberLabel.textContent = deets.data.appointments.slotnumbder;
        insuranceIdLabel.textContent = deets.data.insurances.id;
        policyno.textContent = deets.data.insurances.policyno;
        insurancecompanyLabel.textContent = deets.data.insurances.insurancecompanyLabel;
        patientId.textContent = deets.data.id;
        amount.textContent = deets.data.Amount;
        admittedOn.textContent = deets.data.admittedon;
    
    })
    .catch(error => console.log('error', error));  
    
    
    /*.then(result => {
            console.log("res::",result)
           
        })
        .then(response => {

            console.log("response:",response.text());
            deets = JSON.parse(response);

            console.log(deets.data);

            // Get references to the labels
            const appointmentIdLabel = document.getElementById('appointment-id');
            const bookingForLabel = document.getElementById('booking-for');
            const slotNumberLabel = document.getElementById('slot-number');
            const medicineIdLabel = document.getElementById('medicine-id');
            const medicineNameLabel = document.getElementById('medicine-name');
            const patientId = document.getElementById('patient-id');


            // Populate the labels with data
            appointmentIdLabel.textContent = deets.data.appointments.id;
            bookingForLabel.textContent = deets.data.appointments.BookingFor;
            slotNumberLabel.textContent = deets.data.appointments.slotnumbder;
            medicineIdLabel.textContent = deets.data.medicine.id;
            medicineNameLabel.textContent = deets.data.medicine.medicinename;
            patientId.textContent = deets.data.patientId;
        })
        .catch(error => console.log('error', error));
        */

});

document.getElementById('btn-logout').addEventListener('click', function() {
    window.location.href = "/logout";
  });
  