/*package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHookStepDefination {

	// global hooks
	@Before(order = 0)
	public void setup() {
		System.out.println("launch");
	}

	@After(order = 0)
	public void teardoen() {
		System.out.println("close");
	}

	@Before(order = 1)
	public void setup1() {
		System.out.println("launch 1");
	}

	@After(order = 1)
	public void teardoen1() {
		System.out.println("close 1");
	}

	// local hooks
	@Before("@First")
	public void beforeFirst() {
		System.out.println("before first ");
	}

	@After("@First")
	public void afterFirst() {
		System.out.println("after first ");
	}

	@Before("@Second")
	public void beforeSecond() {
		System.out.println("before Second ");
	}

	@After("@Second")
	public void afterSecond() {
		System.out.println("after Second ");
	}

	@Before("@Third")
	public void beforeThird() {
		System.out.println("before Third ");
	}

	@After("@Third")
	public void afterThird() {
		System.out.println("after Third ");
	}

	@Given("^this is the first step$")
	public void this_is_the_first_step() {
		System.out.println(".......1...... ");
	}

	@When("^this is the second step$")
	public void second_page() {
		System.out.println(".......2...... ");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() {
		System.out.println(".......3...... ");
	}

}
*/