package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	WebDriver driver;

	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\selenium\\Selenium 3.14\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	}

	@When("^title of Login Page is FreeCRM$")
	public void title_of_Login_Page_is_FreeCRM() {
		String title = driver.getTitle();
		System.out.println(title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[1]")).sendKeys(username);
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[2]")).sendKeys(password);
	}

	@Then("^User clicks on Login Button$")
	public void user_clicks_on_Login_Button() {
		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}

	@Then("^User is on Login Page$")
	public void user_is_on_Login_Page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user moves to Contacts Page$")
	public void user_moves_to_Contacts_Page() {
		driver.switchTo().frame("mainpanel");
		// driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
	}

	@Then("^user clicks on new Contact Link$")
	public void user_clicks_on_new_Contact_Link() {
		Actions act = new Actions(driver);
		WebElement e = driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		act.moveToElement(e).perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	
	  @Then("^user enters firstname and lastname$") public void
	  user_enters_firstname_and_lastname() {
	  driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys("a");
	  driver.findElement(By.xpath("//input[@id='surname']")).sendKeys("b"); }
	 

	@Then("^user enters contacts details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_firstname_and_lastname(String fn, String ln, String pos) {
		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(fn);
		driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(ln);
		driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(pos);
	}

	@Then("^user clicks on save button$")
	public void user_clicks_on_save_button() {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	@Then("^close browser$")
	public void close_browser() {
		driver.close();
	}

}
