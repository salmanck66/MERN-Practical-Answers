// uniqueArray([1, 2, 2, 3, 4, 4, 5]); // should return [1, 2, 3, 4, 5]
// uniqueArray([5, 5, 5, 5, 5]);       // should return [5]
// uniqueArray([1, 2, 3]);             // should return [1, 2, 3]
// first answer o(n2)
function uniArray(array)
{
    let newArr = []
    array.forEach(element => {
        if(!newArr.includes(element))
        {
            newArr.push(element)
        }
    });
    return newArr
}

console.log(uniArraySet([5, 5, 5, 5, 5]))

// first answer o(n)
function uniArraySet(array)
{
    let newArr = []
    let seenset = new Set()

    array.forEach(element => {
        if(!seenset.has(element))
        {
            seenset.add(element)
            newArr.push(element)
        }
    });
    return newArr
}