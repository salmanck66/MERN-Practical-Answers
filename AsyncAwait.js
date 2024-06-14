let TimePromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Resolved")
    }, 3000);
})



async function a()
{
    let result = await TimePromise
    console.log(result)
}

a()