describe("User",function(){
	var user;

	beforeEach(function(){
		user = new User();
	});

	//Test eldery property getter/setters
	it("User Elderly Property should not be true", function(){
		expect(user.getElderlyProperty()).not.toEqual(true);
	});

	it("User Elderly Property should be false", function(){
		expect(user.getElderlyProperty()).toEqual(false);
	});

	it("User Elderly Property should change from false to true", function(){
		expect(user.getElderlyProperty()).toEqual(false);
		user.assignElderly();
		expect(user.getElderlyProperty()).toEqual(true);
	});

	it("User Elderly Property set incorrectly and should throw Error if accessed", function(){
		user._elderly = "garbage";
		expect(function()
		{
			user.getElderlyProperty();
		}).toThrowError("Elderly property not assigned a boolean of true or false");
	});

	//Test Student property getter/setters
	it("User Student Property should not be true", function(){
		expect(user.getStudentProperty()).not.toEqual(true);
	});

	it("User Student Property should be false", function(){
		expect(user.getStudentProperty()).toEqual(false);
	});

	it("User Student Property should change from false to true", function(){
		expect(user.getStudentProperty()).toEqual(false);
		user.assignStudent();
		expect(user.getStudentProperty()).toEqual(true);
	});

	it("User Student Property set incorrectly and should throw Error if accessed", function(){
		user._student = 1;
		expect(function()
		{
			user.getStudentProperty();
		}).toThrowError("Student property not assigned a boolean of true or false");
	});

	//Test transportation property getter/setters
	it("User Transportation Worker Property should not be true", function(){
		expect(user.getTransportWorkerProperty()).not.toEqual(true);
	});

	it("User Transportation Worker Property should be false", function(){
		expect(user.getTransportWorkerProperty()).toEqual(false);
	});

	it("User Transportation Worker Property should change from false to true", function(){
		expect(user.getTransportWorkerProperty()).toEqual(false);
		user.assignTransportWorker();
		expect(user.getTransportWorkerProperty()).toEqual(true);
	});

	it("User Transportation Worker Property set incorrectly and should throw Error if accessed", function(){
		user._transportWorker = null;
		expect(function()
		{
			user.getTransportWorkerProperty();
		}).toThrowError("Transportation property not assigned a boolean of true or false");
	});
});