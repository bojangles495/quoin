"use strict";
function Pass(){
};

/**
Takes in a number corresponding to a fare or charge amount and decimal number corresponding to a discount 
percentage applies discounts to the fare and returns the new ammount
**/
Pass.prototype.applyDiscounts = function(fare,discounts)
{
	try
	{
		if(typeof fare !== "undefined" && typeof discounts !== "undefined")
		{
			if(fare === null || discounts === null)
			{
				throw new Error("A null value was entered");
			}
			else if(typeof fare !== "number" || typeof discounts != "number")
			{
				throw new Error("A value was not numeric")
			}
			else
			{
				if(fare < 0 || discounts < 0)
				{
					throw new Error("A negative value was entered");
				}
				else
				{
					if(discounts > 1)
					{
						discounts = 1;
					}

					return Number((fare - (fare * discounts)).toFixed(2));
				}
			}
		}
		else
		{
			throw new Error("1 or more paramters were not entered");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
The method takes in a number , string containing a transportation type, and a string that represents what the pass type will be
and returns an object containing all of the pass information
**/
Pass.prototype.createPass = function(paid,transportType,passType)
{
	try
	{
		if(typeof paid !== "undefined" && typeof transportType !== "undefined" && typeof passType !== "undefined")
		{
			if(paid === null || transportType === null || passType === null)
			{
				throw new Error("1 or more paramters were null");
			}
			else if(typeof paid !== "number")
			{
				throw new Error("The first parameter needs to be a number");
			}
			else if(typeof transportType !== "string")
			{
				throw new Error("The second parameter needs to be a string");
			}
			else if(typeof passType !== "string")
			{
				throw new Error("The third parameter needs to be a string");
			}
			else if(paid < 0)
			{
				throw new Error("The first parameter needs to be a number greater than or equal to 0");
			}
			else
			{
				var pass = {};
				if(passType === "prepaid")
				{
					pass.balance = Number(paid.toFixed(2));
				}
				else if(passType === "monthly")
				{
					pass.paid = Number(paid.toFixed(2));
				}
				else
				{
					throw new Error("An incorrect pass type was entered")
				}
				
				pass.transportType = transportType;
				pass.passType = passType;
				pass.expired = false;
				return pass;
			}
		}
		else
		{
			throw new Error("1 or more paramters are missing");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
The method takes in a prepaid pass object and will return the balance on that pass
**/
Pass.prototype.getPrepaidPassBalance = function(pass)
{
	try
	{
		if(typeof pass !== "undefined")
		{
			if(typeof pass === "object")
			{
				if(pass === null)
				{
					throw new Error("A null value was entered");
				}
				else
				{
					if(typeof pass.balance !== "undefined" && typeof pass.balance === "number")
					{
						return pass.balance;
					}
					else
					{
						throw new Error("A non valid prepaid pass entered");
					}
				}
			}
			else
			{
				throw new Error("A non boject was entered");
			}
		}
		else
		{
			throw new Error("No input was entered");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
This method will take in a prepaid pass object and a number that corresponds to a fare that is 
greater than or equal to 0 and return a new pass object that has the updated balance
**/
Pass.prototype.updatePrepaidPassBalance = function(pass,fare)
{
	try
	{
		if(typeof pass !== "undefined" && typeof fare !== "undefined")
		{
			if(pass !== null && fare !== null)
			{
				if(typeof pass === "object" && typeof pass.balance !== "undefined" && typeof pass.passType !== "undefined" && pass.passType === "prepaid")
				{
					if(typeof fare === "number" && fare >= 0)
					{
						var newBalance = pass.balance - Number(fare.toFixed(2));
						if(newBalance >= 0)
						{
							pass.balance = newBalance;
							return pass;
						}
						else
						{
							throw new Error("There were insufficient funds")
						}
					}
					else
					{
						throw new Error("The second input parameter must be a number greater than or equal to 0");
					}
				}
				else
				{
					throw new Error("The first input parameter must be a valid prepaid pass");
				}
			}
			else
			{
				throw new Error("1 or more input parameters was null");
			}
		}
		else
		{
			throw new Error("1 or more input parameters are missing");
		}
	}
	catch(err)
	{
		throw err;
	}
};
