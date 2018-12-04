package stepDefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefination {
	WebDriver driver;

	@Given("^user is already on Login Page$")
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

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[1]")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[2]")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_Login_Button() {
		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}

	@Then("^user is on home page$")
	public void user_is_on_Login_Page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user moves to deals page$")
	public void user_moves_to_deals_Page() {
		driver.switchTo().frame("mainpanel");
		Actions act = new Actions(driver);
		WebElement e = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		act.moveToElement(e).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) {
		List<List<String>> deal = dealData.raw();
		driver.findElement(By.xpath("//input[@id='title']")).sendKeys(deal.get(0).get(0));
		driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(deal.get(0).get(1));
		driver.findElement(By.xpath("//input[@id='probability']")).sendKeys(deal.get(0).get(2));
		driver.findElement(By.xpath("//input[@id='commission']")).sendKeys(deal.get(0).get(3));

	}

	@Then("^close the browser$")
	public void close_browser() {
		driver.close();
	}
}