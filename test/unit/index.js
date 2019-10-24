const expect = require('chai').expect;
const ctrlUser = require('../../src/application/controllers/controllerUser');
const domainUser=require('../../src/domain/businessLogic/logicUser')

describe('User API', () => {
	it('Should return all user whit the propierty', () => {
		const mockReq = {};

		const mockRes = {
			json(obj) {
				return obj;
			}
		};

		// Get the result from the controller using mocked values
		const result = ctrlUser.getUser(mockReq, mockRes);

		// Perform the actual test
		// Since this is a list of elements, it should be an array
		expect(result).to.be.an('array');

		// the user should be active
    expect(result.user).to.have.all.keys('id');
    expect(result.user).to.have.all.keys('name');
    expect(result.user).to.have.all.keys('lastname');
    expect(result.user).to.have.all.keys('birthday');
    expect(result.user).to.have.all.keys('is_active');
    expect(result.user).to.have.all.keys('email');
    expect(result.user).to.have.all.keys('genere');
    expect(result.user).to.have.all.keys('age');
	});

	it('Should return all user whit the propierty is_active in true', () => {
		const mockReq = {};

		const mockRes = {
			json(obj) {
				return obj;
			}
		};

		// Get the result
		const result = ctrlUser.getUser(mockReq, mockRes);

		// Check if object is valid
		expect(result).to.include({is_active: true});
	});

	it('Should return a array whit propierti age', () => {
		const mockReq = [];

		const mockRes = {
			json(obj) {
				return obj;
			}
		};

		// Get result
		const result = domainUser.userAge(mockReq, mockRes);

		// Check if the error is triggered
		expect(result.user).to.have.all.keys('age');
	});
});