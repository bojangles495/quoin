"use strict";
function Discount()
{
};

/*
Abstract method to handle validating a particular discount that has been input and appending 
the property name to the error message for more concise error reporting
*/
Discount.prototype.validDiscount = function(discount,errorPrefix)
{
	if(typeof discount !== "undefined")
	{
		if(discount === null)
		{
			throw new Error(errorPrefix+"could not be assigned because a null value was input");
		}
		else if(typeof discount !== "number")
		{
			throw new Error(errorPrefix+"could not be assigned because a non number was input");
		}
		else if(Number(discount.toFixed(2)) <= 0)
		{
			throw new Error(errorPrefix+"could not be assigned because a value less than or equal to 0 was input");
		}
		else if(Number(discount.toFixed(2)) > 1)
		{
			throw new Error(errorPrefix+"could not be assigned because a number greater than 1 was input");
		}
		else
		{
			return Number(discount.toFixed(2));
		}
	}
	else
	{
		throw new Error(errorPrefix+"could not be assigned because no value input");
	}
};

Discount.prototype.getDiscount = function(discountProperty,errorPrefix)
{
	if(typeof discountProperty === "undefined")
	{
		throw new Error(errorPrefix+"was not set so an Error was thrown");
	}
	else if(typeof discountProperty !== "number" || discountProperty === null || Number(discountProperty.toFixed(2)) <= 0 || Number(discountProperty.toFixed(2)) > 1)
	{
		throw new Error(errorPrefix+"because the discount was set to a non positive number between 0 and 1");
	}
	else
	{
		return discountProperty;
	}
};

Discount.prototype.setTransportWorkerDiscount = function(discount)
{
	try
	{
		var checkedDiscount = this.validDiscount(discount,"Discount TransportWorkerDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			this._transportWorkerDiscount = checkedDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};

Discount.prototype.getTransportWorkerDiscount = function()
{
	try
	{
		var checkedDiscount = this.getDiscount(this._transportWorkerDiscount,"Discount TransportWorkerDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			return this._transportWorkerDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};

Discount.prototype.setStudentAndElderlyDiscount = function(discount)
{
	try
	{
		var checkedDiscount = this.validDiscount(discount,"Discount StudentAndElderlyDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			this._studentAndElderlyDiscount = checkedDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};

Discount.prototype.getStudentAndElderlyDiscount = function()
{
	try
	{
		var checkedDiscount = this.getDiscount(this._studentAndElderlyDiscount,"Discount StudentAndElderlyDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			return this._studentAndElderlyDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};

Discount.prototype.setWeekendDiscount = function(discount)
{
	try
	{
		var checkedDiscount = this.validDiscount(discount,"Discount WeekendDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			this._weekendDiscount = checkedDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};

Discount.prototype.getWeekendDiscount = function()
{
	try
	{
		var checkedDiscount = this.getDiscount(this._weekendDiscount,"Discount WeekendDiscount Property ");
		if(typeof checkedDiscount === "number")
		{
			return this._weekendDiscount;
		}
	}
	catch(err)
	{
		throw err;
	}
};