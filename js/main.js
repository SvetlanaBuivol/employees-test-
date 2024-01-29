const employeeNames = [
  "John",
  "Alice",
  "Bob",
  "Eva",
  "Charlie",
  "David",
  "Grace",
  "Henry",
  "Isabel",
  "Jack",
];
const positions = ["Developer", "Designer", "Manager"];
const departments = ["IT", "Design", "Management"];

const generateRandomValue = (value) => Math.floor(Math.random() * value);

const generateEmployees = (numberOfEmployees) => {
  return Array.from({ length: numberOfEmployees }, (_) => ({
    name: employeeNames[generateRandomValue(employeeNames.length)],
    position: positions[generateRandomValue(positions.length)],
    salary: generateRandomValue(15000 - 2000 + 1 + 2000),
    department: departments[generateRandomValue(departments.length)],
    experience: generateRandomValue(10 + 1),
  }));
};

const employees = generateEmployees(20);
console.log("employees", employees);

const tableBodyEl = document.querySelector(".tableBody");
const totalEl = document.querySelector(".total");
const highestPaidEl = document.querySelector(".highestPaid");

const createEmployeesTableMarkup = (employee) => {
  return `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.salary}</td>
      <td>${employee.department}</td>
      <td>${employee.experience}</td>
      </tr>
    `;
};

const total = employees.reduce((total, employee) => total + employee.salary, 0);

const filteredEmployees = employees.map(({ name, salary, position }) => ({
  name,
  salary,
  position,
}));

const highestPaidEmployee = filteredEmployees.reduce(
  (highestPaid, currentEmployee) => {
    return currentEmployee.salary > highestPaid.salary
      ? currentEmployee
      : highestPaid;
  },
  filteredEmployees[0]
);

const makeEmployeesTable = employees
  .map((employee) => createEmployeesTableMarkup(employee))
  .join("");

tableBodyEl.innerHTML = makeEmployeesTable;
totalEl.textContent = `TOTAL: ${total}`;
highestPaidEl.textContent = `HIGHEST PAID EMPLOYEE: ${highestPaidEmployee.name}, Position: ${highestPaidEmployee.position}, Salary: ${highestPaidEmployee.salary}`;
