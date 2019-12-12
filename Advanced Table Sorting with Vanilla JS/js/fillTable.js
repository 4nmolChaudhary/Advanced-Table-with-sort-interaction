const table = document.querySelector("table");

for (let i = 0; i < 30; i++) {
    let row = table.insertRow(-1);
    let column1 = row.insertCell(0);
    let column2 = row.insertCell(1);
    let column3 = row.insertCell(2);
    let column4 = row.insertCell(3);
    column1.innerHTML = data[i].first_name;
    column2.innerHTML = data[i].last_name;
    column3.innerHTML = data[i].username;
    column4.innerHTML = data[i].contact;
}
