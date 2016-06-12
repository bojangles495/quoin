describe("Transportation",function()
{
	var transportation;

	beforeEach(function()
	{
		transportation = new Transportation();
	});

	//Section for getter/setter PrepaidFare
	it("Transportation SetPrepaidFare should be set", function()
	{
		expect(transportation._prepaidFare).toEqual(undefined);
		transportation.setPrepaidFare(15.005);
		expect(transportation._prepaidFare).toEqual(15.01);//The set fare method will round to 2 decimal places
	});

	it("Transportation SetPrepaidFare should throw Error because no value set", function()
	{
		expect(function()
		{
			transportation.setPrepaidFare();
		}).toThrowError("Transportation PrepaidFare Property could not be assigned because no value input");
	});

	it("Transportation SetPrepaidFare should throw Error because negative value entered", function()
	{
		expect(function()
		{
			transportation.setPrepaidFare(-14.5);
		}).toThrowError("Transportation PrepaidFare Property could not be assigned because a value less than or equal to 0 input");
	});

	it("Transportation SetPrepaidFare should throw Error because value that would evaluate to 0 entered", function()
	{
		expect(function()
		{
			transportation.setPrepaidFare(0.001);
		}).toThrowError("Transportation PrepaidFare Property could not be assigned because a value less than or equal to 0 input");
	});

	it("Transportation SetPrepaidFare should throw Error because a non integer entered", function()
	{
		expect(function()
		{
			transportation.setPrepaidFare("garbage");
		}).toThrowError("Transportation PrepaidFare Property could not be assigned because a non number value input");
	});

	it("Transportation SetPrepaidFare should throw Error because null was input", function()
	{
		expect(function()
		{
			transportation.setPrepaidFare(null);
		}).toThrowError("Transportation PrepaidFare Property could not be assigned because null input");
	});

	it("Transportation GetPrepaidFare should throw Error because the prepaidFare was not set", function()
	{
		expect(function()
		{
			transportation.getPrepaidFare();
		}).toThrowError("Transportation PrepaidFare Property was not set so an Error was thrown");
	});

	it("Transportation GetPrepaidFare should throw Error because the prepaidFare was set to a non positive number", function()
	{
		transportation._prepaidFare = null;
		expect(function()
		{
			transportation.getPrepaidFare();
		}).toThrowError("Transportation PrepaidFare Property was not a positive number greater than 0 rounded to 2 decimal places");
	});

	it("Transportation GetPrepaidFare should return the prepaidFare proprety that was set, accounting for various rounding", function()
	{
		var fareToBeRoundedDown = 14.0049;
		var fareToBeRoundedUp = 14.0050;
		var fareWithSingleDigit = 14.6;
		var fareWithTwoDigits = 14.64;

		transportation.setPrepaidFare(fareToBeRoundedDown);
		expect(transportation.getPrepaidFare()).toEqual(14.00);

		transportation.setPrepaidFare(fareToBeRoundedUp);
		expect(transportation.getPrepaidFare()).toEqual(14.01);

		transportation.setPrepaidFare(fareWithSingleDigit);
		expect(transportation.getPrepaidFare()).toEqual(14.60);

		transportation.setPrepaidFare(fareWithTwoDigits);
		expect(transportation.getPrepaidFare()).toEqual(fareWithTwoDigits);
	});

	//Section for setter/getter MonthlyFare
	it("Transportation SetMonthlyFare should be set", function()
	{
		expect(transportation._monthlyFare).toEqual(undefined);
		transportation.setMonthlyFare(15.1);
		expect(transportation._monthlyFare).toEqual(15.10);//The set fare method will round to 2 decimal places
	});

	it("Transportation SetMonthlyFare should throw Error because no value set", function()
	{
		expect(function()
		{
			transportation.setMonthlyFare();
		}).toThrowError("Transportation MonthlyFare Property could not be assigned because no value input");
	});

	it("Transportation SetMonthlyFare should throw Error because negative value entered", function()
	{
		expect(function()
		{
			transportation.setMonthlyFare(-2.5);
		}).toThrowError("Transportation MonthlyFare Property could not be assigned because a value less than or equal to 0 input");
	});

	it("Transportation SetMonthlyFare should throw Error because value that would evaluate to 0 entered", function()
	{
		expect(function()
		{
			transportation.setMonthlyFare(0);
		}).toThrowError("Transportation MonthlyFare Property could not be assigned because a value less than or equal to 0 input");
	});

	it("Transportation SetMonthlyFare should throw Error because a non integer entered", function()
	{
		expect(function()
		{
			transportation.setMonthlyFare("1.55");
		}).toThrowError("Transportation MonthlyFare Property could not be assigned because a non number value input");
	});

	it("Transportation SetMonthlyFare should throw Error because null was input", function()
	{
		expect(function()
		{
			transportation.setMonthlyFare(null);
		}).toThrowError("Transportation MonthlyFare Property could not be assigned because null input");
	});

	it("Transportation GetMonthlyFare should throw Error because the monthlyFare was not set", function()
	{
		expect(function()
		{
			transportation.getMonthlyFare();
		}).toThrowError("Transportation MonthlyFare Property was not set so an Error was thrown");
	});

	it("Transportation GetMonthlyFare should throw Error because the fare was set to a non positive number", function()
	{
		transportation._monthlyFare = "garbage";
		expect(function()
		{
			transportation.getMonthlyFare();
		}).toThrowError("Transportation MonthlyFare Property was not a positive number greater than 0 rounded to 2 decimal places");
	});

	it("Transportation GetMonthlyFare should return the monthlyFare proprety that was set, accounting for various rounding", function()
	{
		var fareToBeRoundedDown = 14.494;
		var fareToBeRoundedUp = 14.999;
		var fareWithSingleDigit = 14.6;
		var fareWithTwoDigits = 14.64;

		transportation.setMonthlyFare(fareToBeRoundedDown);
		expect(transportation.getMonthlyFare()).toEqual(14.49);

		transportation.setMonthlyFare(fareToBeRoundedUp);
		expect(transportation.getMonthlyFare()).toEqual(15.00);

		transportation.setMonthlyFare(fareWithSingleDigit);
		expect(transportation.getMonthlyFare()).toEqual(14.60);

		transportation.setMonthlyFare(fareWithTwoDigits);
		expect(transportation.getMonthlyFare()).toEqual(fareWithTwoDigits);
	});
});
