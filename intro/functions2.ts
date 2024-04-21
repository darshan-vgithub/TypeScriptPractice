let addTwo=(num:number):number=>{
return num +2
// return "hello"
}

addTwo(2)


// let getValue=(myval:number)=>{
// if(myval>5){
//     return true
// }
// else{
//     return "200 ok"
// }
// }

// the above code is a special case where it comes under the union type we will learn about it further 


const heros=["thor","loki","odin","hella","spiderman","captain","ironman"]
heros.map(heros=>{
    return `the marvel heros are ${heros}`
})


const getheors=()=>{
    const heros = [
      "thor",
      "loki",
      "odin",
      "hella",
      "spiderman",
      "captain",
      "ironman",
    ];
    heros.map((heros):string=>{
        return `the heros are ${heros}`
    })
}

getheors()

export{}