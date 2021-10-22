Feature: Creating new account 

@Scenario 
Scenario: User Should Be able to add new account successfully 
	Given User should be on techfios login page 
	When User  should enter username as "demo@techfios.com"  
	When User  should enter Password as "abc123" 
	When User  should click on  signin button 
	When User should be on Dashboard 
	When User Should click Bank And Cash 
	When User should click on new account 
	When User should be able to enter account title as "Abcd1234" 
	When User should be able to enter description as "For techfios" 
	When User should be able to enter initial balance as "10000000000" 
	When User should be able to enter account number as "ani543210987" 
	When User should be able to enter contact person as "dcabhede" 
	When User should be able to enter phone as "666-888-4545" 
	When User should be able to enter Banking url as "https://search.12yahoo.com/" 
	When User should be able to click submit button
	Then User should validate the page    
 
  @Scenario1
  Scenario Outline: User Should Be able to add new account successfully 
	Given User should be on techfios login page 
	When User  should enter username as "<username>"  
	When User  should enter Password as "<Password>" 
	When User  should click on  signin button 
	When User should be on Dashboard 
	When User Should click Bank And Cash 
	When User should click on new account 
	When User should be able to enter account title as "<account title>" 
	When User should be able to enter description as "<description>" 
	When User should be able to enter initial balance as "<initial balance>"
	When User should be able to enter account number as "<account number>" 
	When User should be able to enter contact person as "<contact person>" 
	When User should be able to enter phone as "<phone>" 
	When User should be able to enter Banking url as "<Banking url>"
	When User should be able to click submit button
	Then User should validate the page 
	Examples:
	 |username|Password|account title|description|initial balance|account number|contact person|phone|Banking url|
  	|demo@techfios.com|abc123|Abcd1234|For techfios|10000000000|any543210987|aabb|666-888-4545|https://search.123yahoo.com/|