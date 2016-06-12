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

	//Section that will return true of false depending on if a requested pass exists in the list of passes attached to user
	it("User CheckForPass should return false if the pass does not exist with in the list of passes", function(){
		expect(user.checkForPass("prepaid","bus")).toBe(false);

		var pass = new Pass();
		createdPass = pass.createPass(100,"subway","prepaid");
		user._listOfPasses = {};
		user._listOfPasses.subway = {};
		user._listOfPasses.subway.prepaid = createdPass;

		expect(user.checkForPass("prepaid","bus")).toBe(false);
		expect(user.checkForPass("monthly","bus")).toBe(false);
		expect(user.checkForPass("monthly","subway")).toBe(false);
	});

	it("User CheckForPass should return true if the pass does exist with in the list of passes", function(){
		var pass = new Pass();
		createdPass = pass.createPass(100,"bus","prepaid");
		user._listOfPasses = {};
		user._listOfPasses.bus = {};
		user._listOfPasses.bus.prepaid = createdPass;
		expect(user.checkForPass("prepaid","bus")).toBe(true);
	});

	it("User CheckForPass should throw an error because a non instance of a pass was assigned to the list of passes", function(){
		user._listOfPasses = {};
		user._listOfPasses.bus = {};
		user._listOfPasses.bus.prepaid = "garbage";
		expect(function()
		{
			user.checkForPass("prepaid","bus");
		}).toThrowError("Something other than an Instance of a Pass was added to the list of passes for the given passtype and mode of transportation");
	});

	it("User CheckForPass should throw an error if 1 or more parameters was not input", function(){
		expect(function()
		{
			user.checkForPass();
		}).toThrowError("1 or more parameters were not entered");

		expect(function()
		{
			user.checkForPass("garbage");
		}).toThrowError("1 or more parameters were not entered");
	});

	it("User CheckForPass should throw an error if a non string is input", function(){
		expect(function()
		{
			user.checkForPass(1,"bus");
		}).toThrowError("Both parameters entered need to be strings");

		expect(function()
		{
			user.checkForPass("prepaid",1);
		}).toThrowError("Both parameters entered need to be strings");
	});

	it("User CheckForPass should throw an error if a null value is input", function(){
		expect(function()
		{
			user.checkForPass(null,"bus");
		}).toThrowError("1 or more of the parameters entered were null");

		expect(function()
		{
			user.checkForPass("prepaid",null);
		}).toThrowError("1 or more of the parameters entered were null");
	});

	//Section that will return a given pass if it exists
	it("User GetPass should return a pass if it exists with in the list of passes", function(){
		var pass = new Pass();
		createdPass = pass.createPass(100,"bus","prepaid");
		user._listOfPasses = {};
		user._listOfPasses.bus = {};
		user._listOfPasses.bus.prepaid = createdPass;

		expect(user.getPass("prepaid","bus")).toEqual(createdPass);
	});

	it("User GetPass should return false if pass does not exist with in the list of passes", function(){
		var pass = new Pass();
		createdPass = pass.createPass(100,"subway","prepaid");
		user._listOfPasses = {};
		user._listOfPasses.subway = {};
		user._listOfPasses.subway.prepaid = createdPass;

		expect(user.getPass("prepaid","bus")).toEqual(false);
		expect(user.getPass("monthly","bus")).toEqual(false);
		expect(user.getPass("monthly","subway")).toEqual(false);
	});

	it("User GetPass should throw an error because a non instance of a pass was assigned to the list of passes", function(){
		user._listOfPasses = {};
		user._listOfPasses.bus = {};
		user._listOfPasses.bus.prepaid = "garbage";
		expect(function()
		{
			user.getPass("prepaid","bus");
		}).toThrowError("Something other than an Instance of a Pass was added to the list of passes for the given passtype and mode of transportation");
	});

	it("User GetPass should throw an error if 1 or more parameters was not input", function(){
		expect(function()
		{
			user.getPass();
		}).toThrowError("1 or more parameters were not entered");

		expect(function()
		{
			user.getPass("garbage");
		}).toThrowError("1 or more parameters were not entered");
	});

	it("User GetPass should throw an error if a non string is input", function(){
		expect(function()
		{
			user.getPass(1,"bus");
		}).toThrowError("Both parameters entered need to be strings");

		expect(function()
		{
			user.getPass("prepaid",1);
		}).toThrowError("Both parameters entered need to be strings");
	});

	it("User GetPass should throw an error if a null value is input", function(){
		expect(function()
		{
			user.getPass(null,"bus");
		}).toThrowError("1 or more of the parameters entered were null");

		expect(function()
		{
			user.getPass("prepaid",null);
		}).toThrowError("1 or more of the parameters entered were null");
	});

	//Section will test assigning a newly created pass
	it("User AssignPass should assign a pass to the user's list of passes", function(){
		var pass = new Pass();
		var createdPass = pass.createPass(100,"subway","prepaid");
		user.assignPass(createdPass);
		expect(user.getPass("prepaid","subway")).toEqual(createdPass);

		var pass = new Pass();
		var createdPass = pass.createPass(80,"bus","monthly");
		user.assignPass(createdPass);
		expect(user.getPass("monthly","bus")).toEqual(createdPass);
	});

	it("User AssignPass should throw an Error because the pass being assigned already exists in the list of passes", function(){
		var pass = new Pass();
		createdPass = pass.createPass(100,"subway","prepaid");
		user._listOfPasses = {};
		user._listOfPasses.subway = {};
		user._listOfPasses.subway.prepaid = createdPass;

		expect(function()
		{
			user.assignPass(createdPass);
		}).toThrowError("The pass trying to be assigned already exists in the list of passes");
	});

	it("User AssignPass should throw an Error because no parameter was entered", function(){
		expect(function()
		{
			user.assignPass();
		}).toThrowError("A parameter was not input into the method");
	});

	it("User AssignPass should throw an Error because the input entered was not a valid object", function(){
		expect(function()
		{
			user.assignPass("garbage");
		}).toThrowError("The object entered was not a valid object");
	});

	it("User AssignPass should throw an Error because the input entered was null", function(){
		expect(function()
		{
			user.assignPass(null);
		}).toThrowError("The value input was null");
	});

	it("User AssignPass should throw an Error because the pass entered did meet have certain properties set", function(){
		expect(function()
		{
			user.assignPass({});
		}).toThrowError("The object entered was not a valid object");

		expect(function()
		{
			user.assignPass({"balance":"garbage"});
		}).toThrowError("The object entered was not a valid object");

		expect(function()
		{
			user.assignPass({"balance":15,"transportType":"bus"});
		}).toThrowError("The object entered was not a valid object");

		expect(function()
		{
			user.assignPass({"transportType":"bus","passType":"prepaid"});
		}).toThrowError("The object entered was not a valid object");

		expect(function()
		{
			user.assignPass({"balance":"garbage","transportType":"bus","passType":"prepaid"});
		}).toThrowError("The object entered was not a valid object");
	});
});