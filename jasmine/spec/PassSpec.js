describe("Pass",function(){
	var pass;

	beforeEach(function()
	{
		pass = new Pass();
	});

	//Section testing the ApplyDiscounts method
	it("Pass ApplyDiscounts should throw Error because the fare parameter was not entered", function(){
		expect(function()
		{
			pass.applyDiscounts();
		}).toThrowError("1 or more paramters were not entered");

		expect(function()
		{
			pass.applyDiscounts(1);
		}).toThrowError("1 or more paramters were not entered");

		
	});

	it("Pass ApplyDiscounts should throw Error because 1 of the parameters input was null", function(){
		expect(function()
		{
			pass.applyDiscounts(1,null);
		}).toThrowError("A null value was entered");

		expect(function()
		{
			pass.applyDiscounts(null,3);
		}).toThrowError("A null value was entered");
	});

	it("Pass ApplyDiscounts should throw Error because 1 of the parameters was not a number", function(){
		expect(function()
		{
			pass.applyDiscounts(1,".5");
		}).toThrowError("A value was not numeric");

		expect(function()
		{
			pass.applyDiscounts("1",.5);
		}).toThrowError("A value was not numeric");
	});

	it("Pass ApplyDiscounts should throw Error because 1 of the parameters was negative", function(){
		expect(function()
		{
			pass.applyDiscounts(1,-.5);
		}).toThrowError("A negative value was entered");

		expect(function()
		{
			pass.applyDiscounts(-1,.5);
		}).toThrowError("A negative value was entered");
	});

	it("Pass ApplyDiscounts should return the correct fare after applying discounts", function(){
		expect(pass.applyDiscounts(10,1)).toEqual(0);
		expect(pass.applyDiscounts(10,0)).toEqual(10);
		expect(pass.applyDiscounts(10,1.5)).toEqual(0);
		expect(pass.applyDiscounts(10,.6)).toEqual(4);

		expect(pass.applyDiscounts(0,1)).toEqual(0);
		expect(pass.applyDiscounts(0,0)).toEqual(0);
		expect(pass.applyDiscounts(0,1.5)).toEqual(0);
		expect(pass.applyDiscounts(0,.6)).toEqual(0);
	});

	//Section testing AddPrepaidPass object
	it("Pass CreatePass should throw error because 1 or more paramters was not input", function(){
		expect(function()
		{
			pass.createPass();
		}).toThrowError("1 or more paramters are missing");

		expect(function()
		{
			pass.createPass("something");
		}).toThrowError("1 or more paramters are missing");

		expect(function()
		{
			pass.createPass(1,"something");
		}).toThrowError("1 or more paramters are missing");
	});

	it("Pass CreatePass should throw error because 1 or more paramters were input as null", function(){
		expect(function()
		{
			pass.createPass(1,null,"monthly");
		}).toThrowError("1 or more paramters were null");

		expect(function()
		{
			pass.createPass(null,"bus","prepaid");
		}).toThrowError("1 or more paramters were null");

		expect(function()
		{
			pass.createPass(1,"bus",null);
		}).toThrowError("1 or more paramters were null");
	});

	it("Pass CreatePass should throw error because first parameter needs to be a number", function(){
		expect(function()
		{
			pass.createPass("1","bus","prepaid");
		}).toThrowError("The first parameter needs to be a number");
	});

	it("Pass CreatePass should throw error because the first parameter needs to be a value greater than or equal to zero", function(){
		expect(function()
		{
			pass.createPass(-1,"bus","monthly");
		}).toThrowError("The first parameter needs to be a number greater than or equal to 0");
	});

	it("Pass CreatePass should throw error because second parameter needs to be a string", function(){
		expect(function()
		{
			pass.createPass(1,5,"monthly");
		}).toThrowError("The second parameter needs to be a string");
	});

	it("Pass CreatePass should throw error because third parameter needs to be a string", function(){
		expect(function()
		{
			pass.createPass(1,"bus",1);
		}).toThrowError("The third parameter needs to be a string");
	});

	it("Pass CreatePass should throw error because the pass type was a string other than prepaid or monthly", function(){
		expect(function()
		{
			pass.createPass(100,"bus","garbage");
		}).toThrowError("An incorrect pass type was entered");
	});

	it("Pass CreatePass should return a new Prepaid Pass object", function(){
		var createdPass = pass.createPass(100,"bus","prepaid");
		expect(createdPass.balance).toEqual(100);
		expect(createdPass.transportType).toEqual("bus");
		expect(createdPass.passType).toEqual("prepaid");
	});

	it("Pass CreatePass should return a new Monthly Pass object", function(){
		var createdPass = pass.createPass(100,"bus","monthly");
		expect(createdPass.paid).toEqual(100);
		expect(createdPass.transportType).toEqual("bus");
		expect(createdPass.passType).toEqual("monthly");
	});
});