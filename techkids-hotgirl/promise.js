// const trung = function(disom) { 
//     return new Promise(function(resolve, reject){
//     if (disom) resolve("Chuc mung ban")
//     else reject("Lua day");
//     })
// }

// trung(false)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

function nguday(){
    return new Promise(function(resolve, reject){
        setTimeout(function(cb){
            console.log("ngu day");
            resolve();
        }, 2000)
    })
    
}

function danhrang(){
    return new Promise(function(resolve, reject){
        setTimeout(function(cb){
            console.log("danh rang");
            resolve({message: "ok"});
        }, 1500)
    })
    
}

function ruamat(){
    return new Promise(function(resolve, reject){
        setTimeout(function(cb){
            console.log("rua mat");
            resolve();
        }, 1000)
    })   
}

// nguday()
//     .then(() => {
//         return danhrang();
//     })
//     .then(() => {
//         return ruamat();
//     })
//     .catch((err) => {
//         console.log(err);
//     })

async function asyncFunc (){
    try{
        await nguday();
        const data = await danhrang();
        console.log(data);
        await ruamat();
    } catch(error){
        console.log(error);
    };
    
}

asyncFunc();


