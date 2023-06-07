describe('Navigation and Contact Us', () => {
  /*beforeEach(() => {
    cy.visit('https://uel.ac.uk/'); // Visit the UEL website
    cy.viewport(1920, 1080)
  });*/

  it('Homepage', () => {

    cy.visit('https://uel.ac.uk/'); // Visit the UEL website
    cy.viewport(1920, 1080) //Set resolution to 1080p
    cy.get('#onetrust-accept-btn-handler').click(); // Click on the accept cookies button
    
    //Verify six menu items visible or not:
    cy.contains('Study').click();
    cy.contains('International').click();
    cy.contains('Your career').click();
    cy.contains('Partners').click();
    cy.contains('Our research').click();
    cy.contains('About').click(); 

    //Site search

    cy.get('#search-icon').click();
    //cy.get('.coh-container header-search coh-ce-cpt_header-255ad105').click()
    // cy.get('[aria-label="Search"]').click()
    //cy.get('input[aria-label="Search Box"].coh-container header-search coh-ce-cpt_header-255ad105').click()
    //cy.scrollTo('bottom');
    //cy.contains('Undergraduate').click();
    
    

    //cy.get('.coh-link mobile-1 coh-style-inline-link coh-ce-432f5798 js-coh-menu-item-link light-link').click()
    //cy.scrollTo('top');
    
  });

  /*it('find and click on "About"', () => {
      cy.contains('About').click(); // Click on the About section link
      
      cy.contains('Contact us').click()

  })*/
  /*it('should click on Contact Us', () => {
   // cy.get('#onetrust-accept-btn-handler').click(); // Click on the accept cookies button

    cy.contains('About').click(); // Click on the About section link

    cy.contains('Contact Us').click(); // Click on the Contact Us link

    // Perform assertions or further actions on the Contact Us page
  });*/
});
