Feature: TF login functionality validation


@smoke
Scenario: User Should be able to login with valid credentials 
	Given User should be on techfios login page    
	When User  should enter username as "demo@techfios.com"   
	When User  should enter Password as "abc123" 
	When User  should click on  signin button     
	When User should be on Dashboard
	Then User Should click Bank And Cash 