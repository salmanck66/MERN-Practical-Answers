// // heart and earth

function anagram(str1,str2) {
  let splitted1 = str1.replaceAll(" ","").toLowerCase().split("")
  let splitted2 = str2.replaceAll(" ","").toLowerCase().split("")
  let flag = false
    for(let i =0;i<splitted1.length;i++)
    {
        
        if(!splitted2.includes(splitted1[i]))
        {
            return false
        }
        else
        {
            flag    =true
        }
    }
 return flag == true ? true : false

}

//   let count = 0;
//   for (let i = 0; i < splitted[0].length; i++) {
    
//   }}
//   return count == splitted[0].length ? true : flase;

console.log(anagram("The Morse Code","Here come dots"));
// console.log(x)
// //undefined
// var x = 10
// console.log(x,y)
// //10 undefined
// y=20
// console.log(y)
