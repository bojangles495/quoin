<p>This was my approach for the Coding Challege of desiging a system for users to purchase passes for different transit systems.</p>

<p>
	<h3>Problem Specifications:</h3>
	<ul>
		<li>There would be 3 modes of Transportation - Buses, Subways, Commuter Rails</li>
		<li>There would be 2 types of Passes - Prepaid and Monthly</li>
		<li>There would be discounts on passes - Elderly, Student, Transportation Worker, Weekends</li>
	</ul>
</p>
Application Requirements:
	Code should be flexible if changes are to arise
	Users are to be able to buy passes
		users would be able to specify the type of transportation and type of pass
		for prepaid passes, a user could load a certain amount of money onto the pass
		for monthly passes, discounts would be applied that would determine the over all cost of the pass
	Users could use their pass
		specifying which type of transportation,
		if a prepaid card was used apply discounts to the transportation fare and deduct amount from the appropriate pass
		if a monthly pass was used validate the pass was appropriate for the mode of transportation and not expired
	Users should be able to check the balance on a given card

Things I had to work from:
The client was told that this application was to be broken into 3 sprints
I was to determine which specifications will be built in which sprint
My solution must meet requirements for sprint 1
This must be completed quickly
Code must be flexible to allow for quick changes
Testing had to be used
Code must be solid
This challenge was to test my proficiency with javascript
UI was not a factor
No data stores were needed for the solution
No user credentials needed for the project
Quoin is a mostly TDD shop and therefore I made the assumption that an emphasis should be made on spending quite a bit of time on making sure code was tested thoroughly

Sprint 1:
	Designing all of the compentents used to generate a user
		set a user types: elderly, student, transportation worker
		get a users types: elderly, student, transportation worker
		check if a user has a given pass based on defined transportation type and type of pass
		get a particular pass from the list of passes that a user has
		assign a newly created pass to the list of passes the user has
	Designing the components for the transportation types
		set the prepaid and monthly fare
		get the prepaid and monthly fare
	Designing the components for the Discount types
		set discounts for elderly, student, transport worker, weekend
		get discounts for a given type
	Desigining the components for Passes
		Ability to apply discounts
		Create a new prepaid or monthly pass depending on input information
	Thorough testing of javascript code ensuring that all methods have all edge cases tested
Sprint 2:
	Designing the UI for purchasing pass
		form input for user to specify if they qualify for discount
		form input to specify type of pass purchasing
		form input to specify type of transportation
	Designing the UI for using the pass
		form input to specify the type of transport
	Implement javascript logic for forms to create the pass for the user based on their input information
		Based on form input use values in the compenents created in Sprint 1
	Implement javascript logic to validate monthly pass is not expired and valid for type of transport
		Based on form input use values in the components created in Sprint 1
	Implement javascript logic to deduct fare+discounts from prepaid pass
		Based on form input use values in the components created in Sprint 1
	Thorough testing of javascript code ensuring that all methods have all edge cases tested
Sprint 3:
	Design admin UI area 
		Ability to update discount changes
		Ability to update fare amounts for different transportation types
	Design UI area for user pass interactions
		Ability to view the balance on different prepaid passes
		Ability to load more money onto prepaid passes
	Finish any testing
	Quality Assurance Testing


Questions that would need clarification:

What would the fare prices be?
Would would the mechanism be to verify if someone was a student, elderly, or a transportation worker?
How will replacement passes be issued?
Will there be a difference for monthly passes depending on the length of the month?
How would users go about purchasing passes?
Would users purchase them at the transportation facility?
Would users have to create accounts to create persistent data about themselves and therefore facilitate buying passes on line?
It seems an admin area would need to be created to modify discounts and fares for various transportation methods
How would monthly passes be handled if discounts are modified within a given month prior to the pass expiring?
How will persistent data be stored?
What will the user interface consist of?
Will users be able to have multiple discounts ie. elderly students?

Explanation of Completed Work:
	Based on the statement of not to worry about UI and entry points to the application I decided to focus on the actual compenets that would build up the application once the UI and entry points would be designed.
	I wanted to make sure that all of the base compenents would be thorough, tested, and complete so when time came to start piecing everything together for the later sprints that the foundation of the application would be solid.
	My vision of the solution would be that the later sprints would be focuses on design and functionility and have to worry that the compenents being used would not be robust on flexible to any sort of changes that needed to be made.
	Most of the testing of the application would be done in Sprint 1.



 