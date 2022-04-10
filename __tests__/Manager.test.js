const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('Create Manager Object', ()=>{
    const manager = new Manager('Brian', 10, 'ManagerEmail@email.com', 220);

    expect(manager.name).toBe('Brian');
    expect(manager.id).toBe(10);
    expect(manager.email).toBe('ManagerEmail@email.com');
    expect(manager.officeNumber).toBe(220);
});

test("Parent method getName() should return manager name",()=>{
    const manager = new Manager('Brian');

    expect(manager.getName()).toBe('Brian');
});

test('Parent method getId() to return manager id number', ()=>{
    const manager = new Manager('Brian', 10);

    expect(manager.getId()).toBe(10);
});

test('Parent method getEmail() to return manager email', ()=>{
    const manager = new Manager('Brian', 5, 'ManagerEmail@email.com');

    expect(manager.getEmail()).toBe('ManagerEmail@email.com');
});

test('Manager getOfficeNumber() to return managers office number',()=>{
    const manager = new Manager('Brian', 5, 'ManagerEmail@email.com', 200);

    expect(manager.getOfficeNumber()).toBe(200);
});

test('Manager getRole() to return "Manager"',()=>{
    const manager = new Manager('Brian');

    expect(manager.getRole()).toBe('Manager');
})