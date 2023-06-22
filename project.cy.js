import { it } from "mocha";

describe('Flipkart Test', () => {
    
  beforeEach(() => {
    
    cy.viewport(1920, 1080)//Set resolution to 1080p

  })


  it('Open Flipkart and search Oneplus', () => {
   
    cy.visit('https://www.flipkart.com/'); //Navigate to Flipkart site
    cy.get('._3704LK').type("oneplus"+ '{enter}');  //Search for keyword "oneplus"
     
    //Set different sort & order
    cy.contains("Price -- High to Low").click();
    cy.contains("Price -- Low to High").click();
    cy.contains("Popularity").click();
    cy.contains("Relevance").click();

    //Open an item
    cy.contains("OnePlus Nord CE 2 Lite 5G (Black Dusk, 128 GB)").invoke('removeAttr', 'target').click(); 
    //This portion ".invoke('removeAttr', 'target').click()" opens the URL in the same tab and restricts opening on new tab
   
    cy.get('[class="_30jeq3 _16Jk6d"]').invoke('text').then((Flipkart) => { //Fetch the price
      
      console.log(Flipkart); // Output the text to the Cypress console
      
    });
    // Take a screenshot of the visible page
    cy.screenshot('Flipkart price', { capture: 'viewport'});
    
   
  });

  it('Open amazon and search Oneplus', ()  => {
    
    
    cy.visit('https://www.amazon.in/');
    cy.get("#twotabsearchtextbox").type("OnePlus Nord CE 2 Lite 5G"+ '{enter}');
    cy.contains("OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)").invoke('removeAttr', 'target').click(); 
    

    cy.get('[class="a-price-whole"]').invoke('text').then((Amazon) => { //Fetch the price
      
      console.log(Amazon); // Output the text to the Cypress console
      
    });

    // Take a screenshot of the visible page
    cy.screenshot('Amazon price', { capture: 'viewport' }).end();
    
   

  })

  
cy.stop();





})
