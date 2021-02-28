test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.583 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(3.5)

    const expected = 3.5/1.2 * 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})

test("One yen should be 0.00625 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(3.5)

    const expected = 3.5/127.9 * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
})