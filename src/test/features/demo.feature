Feature: Demo to test Cucumber + Playwright

	@TEST_DEMO
	Scenario: Verify IOV website is open successfully
		Given I open IOV website
		When I navigate to open positions
		Then I verify the job openings are displayed
