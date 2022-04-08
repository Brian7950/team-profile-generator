const { test, expect } = require("@jest/globals");

test('creates a player object', () =>{
    const employee = new Employee('test');

    expect(employee.name).toBe('test');
    expect
})