package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class bankAndCashPage {

	WebDriver driver;

	public bankAndCashPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]")
	WebElement BANK_CASH;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]")
	WebElement NEW_ACCOUNT;
	@FindBy(how = How.XPATH, using = "//input[@id=\"account\"]")
	WebElement ACCOUNT_TITLE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement DESCRIPTION_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement INITIAL_BALANCE;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement ACCOUNT_NUMBER;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement CONTRACT_PERSON;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement PHONE_FIELD;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement BANKING_URL;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement SUBMIT_BUTTON;

	public void bankAndCashButton() {
		BANK_CASH.click();

	}

	public void newAccount() {
		NEW_ACCOUNT.click();
	}
	
	public void accountTitle(String title) {
		ACCOUNT_TITLE.sendKeys(title);
	}

	public void descriptionField(String dis) {
		DESCRIPTION_FIELD.sendKeys(dis);
	}

	public void initialBalance(String balance) {
		INITIAL_BALANCE.sendKeys(balance);
	}

	public void accountNumber(String account) {
		ACCOUNT_NUMBER.sendKeys(account);
	}

	public void contactPerson(String contact) {
		CONTRACT_PERSON.sendKeys(contact);
	}

	public void phoneField(String phone) {
		PHONE_FIELD.sendKeys(phone);
	}

	public void bankingUrl(String url) {
		BANKING_URL.sendKeys(url);
	}

	public void submitField() {
		SUBMIT_BUTTON.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}
}