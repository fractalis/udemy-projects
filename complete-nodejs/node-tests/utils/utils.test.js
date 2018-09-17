const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('Should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');

    });
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('Square should square a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
  });

  it('Should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });
});


it('setName should verify set first and last name', () => {
  var user = {
    age: 33,
    location: 'Northfield, OH'
  };
  var res = utils.setName(user, "Scott Rallya");

  expect(res).toInclude({firstName: "Scott"});
  expect(res).toInclude({
    lastName: "Rallya",
    age: 33
  });
});

// it('Should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Scott'}).toEqual({name: 'Scott'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Scott',
//     age: 33,
//     location: 'Northfield, OH'
//   }).toInclude({
//     age: 33
//   });
// });
