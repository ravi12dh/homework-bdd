package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import page.TestBase;
import page.bankAndCashPage;

public class stepsDefinitions extends TestBase {

	LoginPage login;
	bankAndCashPage bankCash;

	@Before
	public void init() {
		initDriver();
		login = PageFactory.initElements(driver, LoginPage.class);
		bankCash = PageFactory.initElements(driver, bankAndCashPage.class);
	}

	@Given("^User should be on techfios login page$")
	public void User_should_be_on_techfios_login_page() {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User  should enter username as \"([^\"]*)\"$")
	public void user_should_enter_username_as(String username) throws Throwable {

		login.insertUserName(username);
	}

	@When("^User  should enter Password as \"([^\"]*)\"$")
	public void user_should_enter_Password_as(String password) throws Throwable {
		login.insertPassword(password);
	}

	@When("^User  should click on  signin button$")
	public void user_should_click_on_signin_button() throws Throwable {
		login.clickSignin();
	}

	@When("^User should be on Dashboard$")
	public void user_should_be_on_Dashboard() throws Throwable {
		String expestedTitle = "Dashboard- iBilling";
		String actualTitle = login.getPageTitle();
		Assert.assertEquals(expestedTitle, actualTitle);

	}

	@When("^User Should click Bank And Cash$")
	public void User_Should_click_Bank_And_Cash() throws Throwable {
		bankCash.bankAndCashButton();
	}

	@When("^User should click on new account$")
	public void user_should_click_on_new_account() throws Throwable {
		bankCash.newAccount();
	}

	@When("^User should be able to enter account title as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_account_title_as(String title) throws Throwable {
		bankCash.accountTitle(title);
	}

	@When("^User should be able to enter description as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_description_as(String dis) throws Throwable {
		bankCash.descriptionField(dis);
	}

	@When("^User should be able to enter initial balance as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_initial_balance_as(String balance) throws Throwable {
		bankCash.initialBalance(balance);
	}

	@When("^User should be able to enter account number as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_account_number_as(String account) throws Throwable {
		bankCash.accountNumber(account);
	}

	@When("^User should be able to enter contact person as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_contact_person_as(String contact) throws Throwable {
		bankCash.contactPerson(contact);
	}

	@When("^User should be able to enter phone as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_phone_as(String phone) throws Throwable {
		bankCash.phoneField(phone);
	}

	@When("^User should be able to enter Banking url as \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_Banking_url_as(String url) throws Throwable {
		bankCash.bankingUrl(url);
	}

	@When("^User should be able to click submit button$")
	public void user_should_be_able_to_click_submit_button() throws Throwable {
		bankCash.submitField();
	}
	
	@Then ("^User should validate the page$")
	public void user_should_validate_the_page() throws Throwable{
		String expestedTitle = "Accounts- iBilling";
		String actualTitle = bankCash.getPageTitle();
		Assert.assertEquals(expestedTitle, actualTitle);
		
	}

	@After
	public void tearDown() {

		driver.close();
		driver.quit();
	}

}