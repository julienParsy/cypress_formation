Feature: Find an Owner on the Petclinic Website
 
  Scenario: Search for an existing owner
    Given I am on the Find Owners page
    When I search the owner "Davis"
    Then I should see the owner details for "Betty Davis"
 
  # Scenario: Search for a non-existing owner
  #   Given I am on the Find Owners page
  #   When I search the owner "NonExistent"
  #   Then I should see a message saying "has not been found" 
