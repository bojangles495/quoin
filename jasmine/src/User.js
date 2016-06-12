"use strict";
function User(){
	this._elderly = false;
	this._student = false;
	this._transportWorker = false;
};

//Set User as a Transportation Worker
User.prototype.assignTransportWorker = function()
{
	this._transportWorker = true;
};

//Get User information about being a Transportation Worker
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

//Set User as Student
User.prototype.assignStudent = function()
{
	this._student = true;
};

//Get User information about being a Student
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

//Set User as Elderly
User.prototype.assignElderly = function()
{
	this._elderly = true;
};

//Get User information about being Elderly
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


