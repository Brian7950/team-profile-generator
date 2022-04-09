const { TestWatcher } = require('jest');
const Employee = require("../lib/Employee");

test('checking name property', () =>{
    const employee = new Employee('Brian');

    expect(employee.name).toBe('Brian');
})

test('checking for id', () =>{
    const employee = new Employee('Brian', 1);

    expect(employee.id).toBe(1);
})

test('checking for email', () =>{
    const employee = new Employee('Brian', 1, "Brian@something.com");

    expect(employee.email).toBe("Brian@something.com");
})

test('checking getName method to return name', () =>{
    const employee = new Employee('Brian');

    expect(employee.getName()).toBe('Brian');
})

test('checking getId method to return id', () =>{
    const employee = new Employee('Brian', 1);

    expect(employee.getId()).toBe(1);
})

test('checking getEmail method to return email', () =>{
    const employee = new Employee('Brian', 1, "Brian@something.com");

    expect(employee.getEmail()).toBe("Brian@something.com");
})

