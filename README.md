<p>This was my approach for the Coding Challege of desiging a system for users to purchase passes for different transit systems.</p>
<p>
	<h3>Viewing my work dowload project:</h3>
	<ul>
		<li>
			To run the Tests double click:
			<ul>
				<li>jasmine/SpecRunner.html</li>
			</ul>
		</li>
		<li>
			To view source code:
			<ul>
				<li>jasmine/src/</li>
			</ul>
		</li>
		<li>
			To view test code:
			<ul>
				<li>jasmine/spec/</li>
			</ul>
		</li>
	</ul>
</p>
<p>
	<h3>Problem Specifications:</h3>
	<ul>
		<li>There would be 3 modes of Transportation - Buses, Subways, Commuter Rails</li>
		<li>There would be 2 types of Passes - Prepaid and Monthly</li>
		<li>There would be discounts on passes - Elderly, Student, Transportation Worker, Weekends</li>
	</ul>
</p>
<p>
	<h3>Application Requirements:</h3>
	<ul>
		<li>Code should be flexible if changes are to arise</li>
		<li>
			Users are to be able to buy passes
			<ul>
				<li>users would be able to specify the type of transportation and type of pass</li>
				<li>for prepaid passes, a user could load a certain amount of money onto the pass</li>
				<li>for monthly passes, discounts would be applied that would determine the over all cost of the pass</li>
			</ul>
		</li>
		<li>
			Users could use their pass
			<ul>
				<li>specifying which type of transportation</li>
				<li>if a prepaid card was used apply discounts to the transportation fare and deduct amount from the appropriate pass</li>
				<li>if a monthly pass was used validate the pass was appropriate for the mode of transportation and not expired</li>
			</ul>
		</li>
		<li>Users should be able to check the balance on a given card</li>
	</ul>
</p>
<p>
	<h3>Things I had to work from:</h3>
	<ul>
		<li>The client was told that this application was to be broken into 3 sprints</li>
		<li>I was to determine which specifications will be built in which sprint</li>
		<li>My solution must meet requirements for sprint 1</li>
		<li>This must be completed quickly</li>
		<li>Code must be flexible to allow for quick changes</li>
		<li>Testing had to be used</li>
		<li>Code must be solid</li>
		<li>This challenge was to test my proficiency with javascript</li>
		<li>UI was not a factor</li>
		<li>No data stores were needed for the solution</li>
		<li>No user credentials needed for the project</li>
		<li>Quoin is a mostly TDD shop and therefore I made the assumption that an emphasis should be made on spending quite a bit of time on making sure code was tested thoroughly</li>
	</ul>
</p>
<p>
	<h3>Sprint 1:</h3>
	<ul>
		<li>
			Designing all of the compentents used to generate a user
			<ul>
				<li>set a user types: elderly, student, transportation worker</li>
				<li>get a users types: elderly, student, transportation worker</li>
				<li>check if a user has a given pass based on defined transportation type and type of pass</li>
				<li>get a particular pass from the list of passes that a user has</li>
				<li>assign a newly created pass to the list of passes the user has</li>
			</ul>
		</li>
		<li>
			Designing the components for the transportation types
			<ul>
				<li>set the prepaid and monthly fare</li>
				<li>get the prepaid and monthly fare</li>
			</ul>
		</li>
		<li>
			Designing the components for the Discount types
			<ul>
				<li>set discounts for elderly, student, transport worker, weekend</li>
				<li>get discounts for a given type</li>
			</ul>
		</li>
		<li>
			Desigining the components for Passes
			<ul>
				<li>Ability to apply discounts</li>
				<li>Create a new prepaid or monthly pass depending on input information</li>
			</ul>
		</li>
		<li>Thorough testing of javascript code ensuring that all methods have all edge cases tested</li>
	</ul>
	<h3>Sprint 2:</h3>
	<ul>
		<li>
			Designing the UI for purchasing pass
			<ul>
				<li>form input for user to specify if they qualify for discount</li>
				<li>form input to specify type of pass purchasing</li>
				<li>form input to specify type of transportation</li>
			</ul>
		</li>
		<li>
			Designing the UI for using the pass
			<ul>
				<li>form input to specify the type of transport</li>
			</ul>
		</li>
		<li>
			Implement javascript logic for forms to create the pass for the user based on their input information
			<ul>
				<li>Based on form input use values in the compenents created in Sprint 1</li>
			</ul>
		</li>
		<li>
			Implement javascript logic to validate monthly pass is not expired and valid for type of transport
			<ul>
				<li>Based on form input use values in the components created in Sprint 1</li>
			</ul>
		</li>
		<li>
			Implement javascript logic to deduct fare+discounts from prepaid pass
			<ul>
				<li>Based on form input use values in the components created in Sprint 1</li>
			</ul>
		</li>
		<li>Thorough testing of javascript code ensuring that all methods have all edge cases tested</li>
	</ul>
	<h3>Sprint 3:</h3>
	<ul>
		<li>
			Design admin UI area
			<ul>
				<li>Ability to update discount changes</li>
				<li>Ability to update fare amounts for different transportation types</li>
			</ul>
		</li>
		<li>
			Design UI area for user pass interactions
			<ul>
				<li>Ability to view the balance on different prepaid passes</li>
				<li>Ability to load more money onto prepaid passes</li>
			</ul>
		</li>
		<li>Finish any testing</li>
		<li>Quality Assurance Testing</li>
	</ul>
</p>
<p>
	<h3>Questions that would need clarification:</h3>
	<ul>
		<li>What would the fare prices be?</li>
		<li>What would the fare prices be?</li>
		<li>Would would the mechanism be to verify if someone was a student, elderly, or a transportation worker?</li>
		<li>How will replacement passes be issued?</li>
		<li>Will there be a difference for monthly passes depending on the length of the month?</li>
		<li>How would users go about purchasing passes?</li>
		<li>Would users purchase them at the transportation facility?</li>
		<li>Would users have to create accounts to create persistent data about themselves and therefore facilitate buying passes on line?</li>
		<li>It seems an admin area would need to be created to modify discounts and fares for various transportation methods</li>
		<li>How would monthly passes be handled if discounts are modified within a given month prior to the pass expiring?</li>
		<li>How will persistent data be stored?</li>
		<li>What will the user interface consist of?</li>
		<li>Will users be able to have multiple discounts ie. elderly students?</li>
	</ul>
</p>
<p>
	<h3>Explanation of Completed Work:</h3>
	<ul>
		<li>Based on the statement of not to worry about UI and entry points to the application I decided to focus on the actual compenets that would build up the application once the UI and entry points would be designed.</li>
		<li>I wanted to make sure that all of the base compenents would be thorough, tested, and complete so when time came to start piecing everything together for the later sprints that the foundation of the application would be solid.</li>
		<li>My vision of the solution would be that the later sprints would have a focus on design and functionility and not have to worry that the compenents being used would not be robust on flexible for any sort of changes that needed to be made.</li>
		<li>Most of the testing of the application would be done in Sprint 1.</li>
	</ul>
</p> 