let employeeNameInput = document.getElementById('employee-name');
let employeePositionInput = document.getElementById('employee-position');
let addEmployeeButton = document.getElementById('add-employee');
let employeeList = document.querySelector('.employee-list');
let employees = JSON.parse(localStorage.getItem('employees')) || [];
let idCounter = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
renderEmployees();
addEmployeeButton.onclick = function () {
    let employeeName = employeeNameInput.value.trim();
    let employeePosition = employeePositionInput.value.trim();
    if (!employeeName || !employeePosition) {
        alert('Vui lòng nhập đầy đủ tên nhân viên và chức vụ!');
    } else {
        let employee = {
            id: idCounter++,
            name: employeeName,
            position: employeePosition
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        employeeNameInput.value = '';
        employeePositionInput.value = '';
    }
    renderEmployees();
};

function renderEmployees() {
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        employeeList.appendChild(row);
    });
}