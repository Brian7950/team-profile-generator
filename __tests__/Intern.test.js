const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test("Create Intern Object",()=>{
    const intern = new Intern('Brian', 5, 'internEmail@emial.com', 'School name');

    expect(intern.name).toBe('Brian');
    expect(intern.id).toBe(5);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("Parent method getName() should return intern name",()=>{
    const intern = new Intern('Brian')

    expect(intern.getName()).toBe('Brian');
});

test('Parent method getId() to return intern id number', ()=>{
    const intern = new Intern('Brian', 5);

    expect(intern.getId()).toBe(5);
});

test('Parent method getEmail() to return interns email', ()=>{
    const intern = new Intern('Brian', 5, 'Internemail@email.com');

    expect(intern.getEmail()).toBe('Internemail@email.com');
});

test('Intern getSchool() method to return Interns school name', ()=>{
    const intern = new Intern('Brian', 5, 'Internemail@email.com', 'Intern school name');

    expect(intern.getSchool()).toBe('Intern school name');
});

test('Intern getRole() to return "Intern"',()=>{
    const intern = new Intern('Brian', 5, 'Internemail@email.com', 'Intern school name');

    expect(intern.getRole()).toBe('Intern');
})