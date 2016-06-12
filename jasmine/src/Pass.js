"use strict";
function Pass(){
};

//takes in a fare and applies discounts to it and returns the new ammount
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
