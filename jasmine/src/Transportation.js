"use strict";
function Transportation(){
};

/**
Method that will take in a positive number corresponding to the fare of the mode of transportation and
a string that will append the type of error message being thrown in the even of a failure. If a valid fare is entered
the fare will be return after being rounded to 2 decimal places
**/
Transportation.prototype.validFare = function(fare,errorPrefix)
{
	if(typeof fare !== "undefined")
	{
		if(fare === null)
		{
			throw new Error(errorPrefix+"could not be assigned because null input");
		}
		else if(typeof fare !== "number")
		{
			throw new Error(errorPrefix+"could not be assigned because a non number value input");
		}
		else
		{
			if(Number(fare.toFixed(2)) <= 0)
			{
				throw new Error(errorPrefix+"could not be assigned because a value less than or equal to 0 input");
			}
			else
			{
				return Number(fare.toFixed(2));
			}
		}
	}
	else
	{
		throw new Error(errorPrefix+"could not be assigned because no value input");
	}
};

/**
Method will set the prepaidFare property for the transportation object
**/
Transportation.prototype.setPrepaidFare = function(fare)
{
	try
	{
		var checkedFare = this.validFare(fare,"Transportation PrepaidFare Property ");
		if(typeof checkedFare === "number")
		{
			this._prepaidFare = checkedFare;
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method will set the monthlyFare property for the transportation object
**/
Transportation.prototype.setMonthlyFare = function(fare)
{
	try
	{
		var checkedFare = this.validFare(fare,"Transportation MonthlyFare Property ");
		if(typeof checkedFare === "number")
		{
			this._monthlyFare = checkedFare;
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method takes in a number corresponding to a particular fare property and string that will append to the error message
if thrown. The method returns the fare property if no error is thrown
**/
Transportation.prototype.getFare = function(fareTypeProperty,errorPrefix)
{

	if(typeof fareTypeProperty === "undefined")
	{
		throw new Error(errorPrefix+"was not set so an Error was thrown");
	}
	else if(typeof fareTypeProperty !== "number" || fareTypeProperty === null || Number(fareTypeProperty.toFixed(2)) <= 0)
	{
		throw new Error(errorPrefix+"was not a positive number greater than 0 rounded to 2 decimal places");
	}
	else
	{
		return fareTypeProperty;
	}
};

/**
Method returns the prepaidFare property for the given transportation object
**/
Transportation.prototype.getPrepaidFare = function()
{
	try
	{
		var checkedFare = this.getFare(this._prepaidFare,"Transportation PrepaidFare Property ");
		if(typeof checkedFare === "number")
		{
			return this._prepaidFare;
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method returns the monthlyFare property for the given transportation object
**/
Transportation.prototype.getMonthlyFare = function()
{
	try
	{
		var checkedFare = this.getFare(this._monthlyFare,"Transportation MonthlyFare Property ");
		if(typeof checkedFare === "number")
		{
			return this._monthlyFare;
		}
	}
	catch(err)
	{
		throw err;
	}
};