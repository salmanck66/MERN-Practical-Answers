function one(name) {
    return (greet) => { 
      return console.log(greet + " " + name);
    };
  }
  
  const func = one("Salman");
  
  console.log(func("Hi"));
  