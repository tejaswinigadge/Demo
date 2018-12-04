package stepDefination;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import Calculator.Calculator;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorSteps {
	private Calculator calculator;

	@Before
	public void setUp() {
		calculator = new Calculator();
	}

	@Given("^I have a calculator$")
	public void i_have_a_calculator() {
		assertNotNull(calculator);
	}

	@When("^I add (\\d+) and (\\d+)$")
	public void i_add_and(int num1, int num2) {
		calculator.add(num1, num2);
	}

	@Then("^the result should be$")
	public void the_result_should_be(int result) {
		assertEquals(result, calculator.getResult());
	}
}
