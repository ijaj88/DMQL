/*const express = require('express');

const app = express();

app.use(express.static(__dirname, { 'Content-Type': 'application/javascript' }));


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});


app.listen(3002, () => {
  console.log('Server started on port 3002');
});
*/

const express = require('express');
const app = express();
app.use(express.static(__dirname, { 'Content-Type': 'application/javascript' }));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/pages/patientLanding.html');
})
app.get('/doctorLanding', (req,res) => {
  res.sendFile(__dirname + '/pages/hospitalDoctorLanding.html');
})
app.get('/staffLanding', (req,res) => {
  res.sendFile(__dirname + '/pages/hospitalStaffLanding.html');
})



app.get('/patientLogin', (req, res) => {
  res.sendFile(__dirname + '/pages/patientLogin.html');
});
app.get('/doctorLogin', (req, res) => {
  res.sendFile(__dirname + '/pages/doctorLogin.html');
});
app.get('/adminLogin', (req, res) => {
  res.sendFile(__dirname + '/pages/adminLogin.html');
});


app.get('/patientRegister', (req, res) => {
  res.sendFile(__dirname + '/pages/patientRegister.html');
});
app.get('/doctorRegister', (req, res) => {
  res.sendFile(__dirname + '/pages/doctorRegister.html');
});
app.get('/adminRegister', (req, res) => {
  res.sendFile(__dirname + '/pages/adminRegister.html');
});



app.get('/bookAppointment', (req, res) => {
  res.sendFile(__dirname + '/pages/bookAppointment.html');
});

app.get('/showAllPatients', (req, res) => {
  res.sendFile(__dirname + '/pages/showAllPatients.html');
});


app.get('/doctorHome', (req, res) => {
  res.sendFile(__dirname + '/pages/doctorHome.html');
});

app.get('/doctorMedicinesPrescribed', (req, res) => {
  res.sendFile(__dirname + '/pages/doctorMedicinesPrescribed.html');
});

app.get('/doctorLabPrescribed', (req, res) => {
  res.sendFile(__dirname + '/pages/doctorLabPrescribed.html');
});


app.get('/accesscode', (req, res) => {
  res.sendFile(__dirname + '/pages/accesscode.html');
});

app.get('/generateBill', (req, res) => {
  res.sendFile(__dirname + '/pages/generateBill.html');
});

app.get('/logout', (req, res) => {
  res.sendFile(__dirname + '/pages/patientLanding.html');
});





app.listen(3002, () => {
  console.log('Server started on port 3002');
});
