document.getElementById('allUsers-btn').addEventListener('click', function() {

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://likely-zoo-production.up.railway.app/api/v1/users/patient?limit=0&offset=0", requestOptions)
    .then(response => response.text())
    .then(result => {// Get the table element
        appts = JSON.parse(result);
        console.log(appts.data);
      const table = document.getElementById('appointment-table');

      // Create a header row
      const headerRow = document.createElement('tr');
      const headers = ['id', 'username', 'roles', 'email', 'isAccountDisabled'];
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Create a row for each data item and populate it with the data
      appts.data.forEach(data => {
        const row = document.createElement('tr');
        const cells = [data.id, data.username, data.roles, data.email, data.isAccountDisabled];
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


document.getElementById('allUsers-btn').addEventListener('click', function() {

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://likely-zoo-production.up.railway.app/api/v1/users/patient?limit=0&offset=0", requestOptions)
    .then(response => response.text())
    .then(result => {// Get the table element
        appts = JSON.parse(result);
        console.log(appts.data);
      const table = document.getElementById('appointment-table');

      // Create a header row
      const headerRow = document.createElement('tr');
      const headers = ['id', 'username', 'roles', 'email', 'isAccountDisabled'];
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Create a row for each data item and populate it with the data
      appts.data.forEach(data => {
        const row = document.createElement('tr');
        const cells = [data.id, data.username, data.roles, data.email, data.isAccountDisabled];
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