describe("Slider",()=>{
    it("Slider should pick a value from slider",()=>{
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.get("#tried-test-cafe").click()
        cy.contains(5).click()
        
    })
})