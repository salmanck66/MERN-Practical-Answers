///input: adarsh
//Eg81Br

function randomGen(input)
{
    let gen = []
    while(gen.length<input.split("").length/2)
    {
        rett =Math.floor( Math.random()*10)
        if(gen.length<input.length)
        {
        if(rett<input.length )
        gen.push(rett + input[rett] )
        }
    }
    return gen.join("")
}

console.log(randomGen("Adarsh"))