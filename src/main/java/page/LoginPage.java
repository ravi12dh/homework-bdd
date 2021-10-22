package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement USER_NAME_FIELD;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement PASSWORD_FIELD;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	WebElement SIGNIN_BUTTON;

	public void insertUserName(String username) {
		USER_NAME_FIELD.sendKeys(username);
	}

	public void insertPassword(String password) {
		PASSWORD_FIELD.sendKeys(password);
	}

	public void clickSignin() {
		SIGNIN_BUTTON.click();

	}

	public String getPageTitle() {
		return driver.getTitle();
	}

}
