const dansAdder = require('../dansAdder');

test("one plus two equals three", ()=> {
    expect(dansAdder(1,2)).toBe(3);
});

test("two plus two equals four", ()=> {
    expect(dansAdder(2,2)).toBe(4);
});

test("negative two plus two equals four", ()=> {
    expect(dansAdder(-2,2)).toBe(4);
});
