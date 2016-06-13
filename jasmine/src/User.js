"use strict";
function User(){
	this._elderly = false;
	this._student = false;
	this._transportWorker = false;
};

/**
Method sets the transportWorker property boolean to true
**/
User.prototype.assignTransportWorker = function()
{
	this._transportWorker = true;
};

/**
Method will return the transportWorker property boolean
**/
User.prototype.getTransportWorkerProperty = function()
{
	try
	{
		if(this._transportWorker === true || this._transportWorker === false)
		{
			return this._transportWorker;
		}
		else
		{
			//if for some reason the transportation property was set incorrectly throw an error
			throw new Error("Transportation property not assigned a boolean of true or false");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method sets the student property boolean to true
**/
User.prototype.assignStudent = function()
{
	this._student = true;
};

/**
Method will return the student property boolean
**/
User.prototype.getStudentProperty = function()
{
	try
	{
		if(this._student === true || this._student === false)
		{
			return this._student;
		}
		else
		{
			//if for some reason the student property was set incorrectly throw an error
			throw new Error("Student property not assigned a boolean of true or false");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method sets the elderly property boolean to true
**/
User.prototype.assignElderly = function()
{
	this._elderly = true;
};

/**
Method will return the elderly property boolean
**/
User.prototype.getElderlyProperty = function()
{
	try
	{
		if(this._elderly === true || this._elderly === false)
		{
			return this._elderly;
		}
		else
		{
			//if for some reason the elderly property was set incorrectly thrown an error
			throw new Error("Elderly property not assigned a boolean of true or false");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method takes in a 2 strings corresponding to the type of pass and the mode of transport and
determines if the user has the pass within their list of passes and will return true if they have the 
pass and false if the user does not have the pass
**/
User.prototype.checkForPass = function(passType,modeOfTransport)
{
	try
	{
		if(typeof passType !== "undefined" && typeof modeOfTransport !== "undefined")
		{
			if(passType === null || modeOfTransport === null)
			{
				throw new Error("1 or more of the parameters entered were null");
			}
			else if(typeof passType !== "string" || typeof modeOfTransport !== "string")
			{
				throw new Error("Both parameters entered need to be strings");
			}
			else
			{
				if(typeof this._listOfPasses !== "undefined")
				{
					if(typeof this._listOfPasses[modeOfTransport] !== "undefined")
					{
						if(typeof this._listOfPasses[modeOfTransport][passType] !== "undefined")
						{
							var pass = this._listOfPasses[modeOfTransport][passType];
							if(passType === "prepaid")
							{
								if(typeof pass.balance === "number" &&
									pass.transportType === modeOfTransport &&
									pass.passType === passType)
								{
									return true;
								}
								else
								{
									throw new Error("Something other than an Instance of a Pass was added to the list of passes for the given passtype and mode of transportation");
								}
							}
							else if(passType === "monthly")
							{
								if(typeof pass.paid === "number" &&
									pass.transportType === modeOfTransport &&
									pass.passType === passType)
								{
									return true;
								}
								else
								{
									throw new Error("Something other than an Instance of a Pass was added to the list of passes for the given passtype and mode of transportation");
								}
							}
						}
						else
						{
							return false;
						}
					}
					else
					{
						return false;
					}
				}
				else
				{
					return false;
				}
			}
		}
		else
		{
			throw new Error("1 or more parameters were not entered");
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method takes in a 2 strings corresponding to the type of pass and the mode of transport and will
return the pass if the user has it or false if the user does not have the pass
**/
User.prototype.getPass = function(passType,modeOfTransport)
{
	try
	{
		if(this.checkForPass(passType,modeOfTransport))
		{
			return this._listOfPasses[modeOfTransport][passType];
		}
		else
		{
			return false;
		}
	}
	catch(err)
	{
		throw err;
	}
};

/**
Method takes in a pass object and will add it to the list of passes that the user hass
**/
User.prototype.assignPass = function(pass)
{
	try
	{
		if(typeof pass !== "undefined")
		{
			if(pass !== null)
			{
				if(typeof pass === "object" && 
					typeof pass.passType !== "undefined" && 
					typeof pass.transportType !== "undefined")
				{
					if(this.getPass(pass.passType,pass.transportType) === false)
					{
						if(pass.passType === "prepaid")
						{
							if(typeof pass.balance === "number")
							{
								this._listOfPasses = {};
								this._listOfPasses[pass.transportType] = {};
								this._listOfPasses[pass.transportType][pass.passType] = pass;
							}
							else
							{
								throw new Error("The object entered was not a valid object");
							}
						}
						else if(pass.passType === "monthly")
						{
							if(typeof pass.paid === "number")
							{
								this._listOfPasses = {};
								this._listOfPasses[pass.transportType] = {};
								this._listOfPasses[pass.transportType][pass.passType] = pass;
							}
							else
							{
								throw new Error("The object entered was not a valid object");
							}
						}
					}
					else
					{
						throw new Error("The pass trying to be assigned already exists in the list of passes");
					}
				}
				else
				{
					throw new Error("The object entered was not a valid object");
				}
			}
			else
			{
				throw new Error("The value input was null");
			}
		}
		else
		{
			throw new Error("A parameter was not input into the method");
		}
	}
	catch(err)
	{
		throw err;
	}
};



