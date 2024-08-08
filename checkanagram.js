// heart and earth


function anagram(str)
{
    let splitted = str.split(" ")
    console.log(splitted)
    for(let i=0;i<splitted[0].length;i++)
    {
        if(!splitted[0].includes(splitted[2][i]))
        {
            return false
        }else
        {
            return true
        }
    }
}

console.log(anagram("eath and teah"));
