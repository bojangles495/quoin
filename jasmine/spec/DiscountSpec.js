describe("Discount",function(){
	var discount;

	beforeEach(function()
	{
		discount = new Discount();
	});

	//Section handles setters/getters for Transportation Worker Discount
	it("Discount SetTransportWorkerDiscount should be set", function()
	{
		expect(discount._transportWorkerDiscount).toEqual(undefined);
		discount.setTransportWorkerDiscount(1.001);
		expect(discount._transportWorkerDiscount).toEqual(1);
	});

	it("Discount SetTransportWorkerDiscount should throw Error because no value was entered", function()
	{
		expect(function()
		{
			discount.setTransportWorkerDiscount();
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because no value input");
	});

	it("Discount SetTransportWorkerDiscount should throw Error because null entered", function()
	{
		expect(function()
		{
			discount.setTransportWorkerDiscount(null);
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because a null value was input");
	});

	it("Discount SetTransportWorkerDiscount should throw Error because a negative number was input", function()
	{
		expect(function()
		{
			discount.setTransportWorkerDiscount(-0.11);
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetTransportWorkerDiscount should throw Error because a number equating to 0 was entered", function()
	{
		expect(function()
		{
			discount.setTransportWorkerDiscount(0.001);
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetTransportWorkerDiscount should throw Error because a number greater than 1 was entered", function()
	{
		expect(function()
		{
			discount.setTransportWorkerDiscount(1.1);
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because a number greater than 1 was input");
	});

	it("Discount SetTransportWorkerDiscount should throw Error because a non number was input", function(){
		expect(function()
		{
			discount.setTransportWorkerDiscount("garbage");
		}).toThrowError("Discount TransportWorkerDiscount Property could not be assigned because a non number was input");
	});

	it("Discount GetTransportWorkerDiscount should throw Error because the discount was not set", function()
	{
		expect(function()
		{
			discount.getTransportWorkerDiscount();
		}).toThrowError("Discount TransportWorkerDiscount Property was not set so an Error was thrown");
	});

	it("Discount GetTransportWorkerDiscount should throw Error because the discount was set to a non positive number between 0 and 1", function()
	{
		discount._transportWorkerDiscount = ".55";
		expect(function()
		{
			discount.getTransportWorkerDiscount();
		}).toThrowError("Discount TransportWorkerDiscount Property because the discount was set to a non positive number between 0 and 1");
	});

	it("Discount GetTransportWorkerDiscount should return the discount proprety that was set, accounting for various rounding", function()
	{
		var discountToBeRoundedDown = .005;
		var discountToBeRoundedUp = .899;
		var fareWithSingleDigit = .1;
		var fareWithTwoDigits = .25;

		discount.setTransportWorkerDiscount(discountToBeRoundedDown);
		expect(discount.getTransportWorkerDiscount()).toEqual(0.01);

		discount.setTransportWorkerDiscount(discountToBeRoundedUp);
		expect(discount.getTransportWorkerDiscount()).toEqual(0.90);

		discount.setTransportWorkerDiscount(fareWithSingleDigit);
		expect(discount.getTransportWorkerDiscount()).toEqual(fareWithSingleDigit);

		discount.setTransportWorkerDiscount(fareWithTwoDigits);
		expect(discount.getTransportWorkerDiscount()).toEqual(fareWithTwoDigits);
	});

	//Section handles setters/getters for Student and Elderly discounts
	it("Discount SetStudentAndElderlyDiscount should be set", function()
	{
		expect(discount._studentAndElderlyDiscount).toEqual(undefined);
		discount.setStudentAndElderlyDiscount(.499);
		expect(discount._studentAndElderlyDiscount).toEqual(.50);//will round to 2 decimal places
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because no value was entered", function()
	{
		expect(function()
		{
			discount.setStudentAndElderlyDiscount();
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because no value input");
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because null entered", function()
	{
		expect(function()
		{
			discount.setStudentAndElderlyDiscount(null);
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because a null value was input");
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because a negative number was input", function()
	{
		expect(function()
		{
			discount.setStudentAndElderlyDiscount(-1);
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because a number equating to 0 was entered", function()
	{
		expect(function()
		{
			discount.setStudentAndElderlyDiscount(0.0049);
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because a number greater than 1 was entered", function()
	{
		expect(function()
		{
			discount.setStudentAndElderlyDiscount(1.009);
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because a number greater than 1 was input");
	});

	it("Discount SetStudentAndElderlyDiscount should throw Error because a non number was input", function(){
		expect(function()
		{
			discount.setStudentAndElderlyDiscount("0.55");
		}).toThrowError("Discount StudentAndElderlyDiscount Property could not be assigned because a non number was input");
	});

	it("Discount GetStudentAndElderlyDiscount should throw Error because the discount was not set", function()
	{
		expect(function()
		{
			discount.getStudentAndElderlyDiscount();
		}).toThrowError("Discount StudentAndElderlyDiscount Property was not set so an Error was thrown");
	});

	it("Discount GetStudentAndElderlyDiscount should throw Error because the discount was set to a non positive number between 0 and 1", function()
	{
		discount._studentAndElderlyDiscount = "garbage";
		expect(function()
		{
			discount.getStudentAndElderlyDiscount();
		}).toThrowError("Discount StudentAndElderlyDiscount Property because the discount was set to a non positive number between 0 and 1");
	});

	it("Discount GetStudentAndElderlyDiscount should return the discount proprety that was set, accounting for various rounding", function()
	{
		var discountToBeRoundedDown = .111;
		var discountToBeRoundedUp = .999;
		var fareWithSingleDigit = .7;
		var fareWithTwoDigits = .01;

		discount.setStudentAndElderlyDiscount(discountToBeRoundedDown);
		expect(discount.getStudentAndElderlyDiscount()).toEqual(0.11);

		discount.setStudentAndElderlyDiscount(discountToBeRoundedUp);
		expect(discount.getStudentAndElderlyDiscount()).toEqual(1);

		discount.setStudentAndElderlyDiscount(fareWithSingleDigit);
		expect(discount.getStudentAndElderlyDiscount()).toEqual(fareWithSingleDigit);

		discount.setStudentAndElderlyDiscount(fareWithTwoDigits);
		expect(discount.getStudentAndElderlyDiscount()).toEqual(fareWithTwoDigits);
	});

	//Section handles setters/getters for Weekend discounts
	it("Discount SetWeekendDiscount should be set", function()
	{
		expect(discount._weekendDiscount).toEqual(undefined);
		discount.setWeekendDiscount(.754);
		expect(discount._weekendDiscount).toEqual(.75);//will round to 2 decimal places
	});

	it("Discount SetWeekendDiscount should throw Error because no value was entered", function()
	{
		expect(function()
		{
			discount.setWeekendDiscount();
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because no value input");
	});

	it("Discount SetWeekendDiscount should throw Error because null entered", function()
	{
		expect(function()
		{
			discount.setWeekendDiscount(null);
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because a null value was input");
	});

	it("Discount SetWeekendDiscount should throw Error because a negative number was input", function()
	{
		expect(function()
		{
			discount.setWeekendDiscount(-1);
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetWeekendDiscount should throw Error because a number equating to 0 was entered", function()
	{
		expect(function()
		{
			discount.setWeekendDiscount(0.0000001);
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because a value less than or equal to 0 was input");
	});

	it("Discount SetWeekendDiscount should throw Error because a number greater than 1 was entered", function()
	{
		expect(function()
		{
			discount.setWeekendDiscount(2);
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because a number greater than 1 was input");
	});

	it("Discount SetWeekendDiscount should throw Error because a non number was input", function(){
		expect(function()
		{
			discount.setWeekendDiscount("1");
		}).toThrowError("Discount WeekendDiscount Property could not be assigned because a non number was input");
	});

	it("Discount GetWeekendDiscount should throw Error because the discount was not set", function()
	{
		expect(function()
		{
			discount.getWeekendDiscount();
		}).toThrowError("Discount WeekendDiscount Property was not set so an Error was thrown");
	});

	it("Discount GetWeekendDiscount should throw Error because the discount was set to a non positive number between 0 and 1", function()
	{
		discount._weekendDiscount = 1.01;
		expect(function()
		{
			discount.getWeekendDiscount();
		}).toThrowError("Discount WeekendDiscount Property because the discount was set to a non positive number between 0 and 1");
	
	});

	it("Discount GetWeekendDiscount should return the discount proprety that was set, accounting for various rounding", function()
	{
		var discountToBeRoundedDown = .244;
		var discountToBeRoundedUp = .105;
		var fareWithSingleDigit = 1;
		var fareWithTwoDigits = 1.00;

		discount.setWeekendDiscount(discountToBeRoundedDown);
		expect(discount.getWeekendDiscount()).toEqual(0.24);

		discount.setWeekendDiscount(discountToBeRoundedUp);
		expect(discount.getWeekendDiscount()).toEqual(.1);//toFixed is used and will round .105 down to .1 instead of .11

		discount.setWeekendDiscount(fareWithSingleDigit);
		expect(discount.getWeekendDiscount()).toEqual(fareWithSingleDigit);

		discount.setWeekendDiscount(fareWithTwoDigits);
		expect(discount.getWeekendDiscount()).toEqual(fareWithTwoDigits);
	});
});