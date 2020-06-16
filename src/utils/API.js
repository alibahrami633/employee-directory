export default {
  getEmployeeList: async () => {
    const employees = await require("../db/employee.json"); // for further fetch or axios get functions on the backend
    return employees;
  },

  getEmployeeByName: async (name) => {
    if (name.trim() === "") {
      const employeeList = await this.getEmployeeList();
      return employeeList;
    }
    else {
      const filteredEmployees = await require("../db/employee.json")
        .filter(employee => employee.employeeName.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
      return filteredEmployees;
    }
  }
};
