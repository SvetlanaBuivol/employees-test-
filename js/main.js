const employees = [
  {
    name: "John",
    position: "Developer",
    salary: 0,
    department: "IT",
    experience: 2,
  },
  {
    name: "Alice",
    position: "Designer",
    salary: 0,
    department: "Design",
    experience: 3,
  },
  {
    name: "Bob",
    position: "Manager",
    salary: 0,
    department: "Management",
    experience: 5,
  },
  {
    name: "Eva",
    position: "Developer",
    salary: 0,
    department: "IT",
    experience: 1,
  },
  {
    name: "Charlie",
    position: "Designer",
    salary: 0,
    department: "Design",
    experience: 4,
  },
  {
    name: "David",
    position: "Manager",
    salary: 0,
    department: "Management",
    experience: 6,
  },
  {
    name: "Grace",
    position: "Developer",
    salary: 0,
    department: "IT",
    experience: 2,
  },
  {
    name: "Henry",
    position: "Designer",
    salary: 0,
    department: "Design",
    experience: 3,
  },
  {
    name: "Isabel",
    position: "Manager",
    salary: 0,
    department: "Management",
    experience: 7,
  },
  {
    name: "Jack",
    position: "Developer",
    salary: 0,
    department: "IT",
    experience: 1,
  },
];

const tableBodyEl = document.querySelector(".tableBody");
const totalEl = document.querySelector(".total");
const highestPaidEl = document.querySelector(".highestPaid");

const generateSalary = () => {
  return Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000;
};

employees.forEach((employee) => {
  employee.salary = generateSalary();
});

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

const totalSalary = (employees) => {
  return employees.reduce((total, employee) => total + employee.salary, 0);
};

const total = totalSalary(employees);

const filteredEmployees = employees.map(({ name, salary, position }) => ({
  name,
  salary,
  position,
}));

const highestPaidEmployee = filteredEmployees.reduce(
  (highestPaid, currentEmployee) => {
    console.log("highestPaidEmployee  highestPaid", highestPaid);
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
