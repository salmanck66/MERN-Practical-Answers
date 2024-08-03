function hello(name)
{
    console.log(`Hello ${name}`)
}

function mainf(fn,name)
{
    fn(name)
}

mainf(hello,"Shihas")


function firstFunction(secondFunction) {
    // Simulate a code delay
    setTimeout(function () {
      console.log("First function called");
      secondFunction();
    }, 1000);
    
  }
  function secondFunction() {
    console.log("Second function called");
  }
  firstFunction(secondFunction);
  
  
  
  // Second function called
  // First function called