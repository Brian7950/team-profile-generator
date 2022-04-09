const { test, expect } = require("@jest/globals");
const exp = require("constants");
const Engineer = require("../lib/Engineer");

test("Create an Engineer Object", () =>{
    const engineer = new Engineer('Brian', 1, 'Email@email', 'Github');

    expect(engineer.name).toBe('Brian')
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("Parent method getName should return this objects name", ()=>{
    const engineer = new Engineer('Brian')
    
    expect(engineer.getName()).toBe('Brian');
});

test("Parent method getId to return engineers id number", ()=>{
    const engineer = new Engineer('Brian', 55,)

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test("Parent method getEmail should return engineers Email", ()=>{
    const engineer = new Engineer('Brian', 55, "EMAIL@email.com");

    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test("Engineer method getGithub should return engineers github link",()=>{
    const engineer = new Engineer('Brian', 55, 'Email@email.com', 'github accont')

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test("Engineer getRole() method to return 'Engineer'",()=>{
    const engineer = new Engineer('Brian', 55, 'Email@email.com', 'github')

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
})