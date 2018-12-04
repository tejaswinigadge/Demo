package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:Features", glue = { "stepDefination" }, format = { "pretty", "html:test-output",
		"junit:test-output/cucumber.xml",
		"json:test-output/cucumber.json" }, dryRun = true, monochrome = true, strict = true)

// tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}
// ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as
// @SmokeTest OR @RegressionTest
// ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests
// tagged as @SmokeTest AND @RegressionTest

public class TestRunner2 {

}
