/**
 * Условия 
 */

let text = `Выхожу один я на дорогу;
Сквозь туман кремнистый путь блестит;
Ночь тиха. Пустыня внемлет богу,
И звезда с звездою говорит.
В небесах торжественно и чудно!
Спит земля в сиянье голубом...
Что же мне так больно и так трудно?
Жду ль чего? жалею ли о чем  ?`


let letters = []

for (let i = 0; i < text.length; i++){
    if (text.charAt(i) === "о"){
        letters.push("о")
    }
}
console.log(letters.length)


function numbersCycle(num){
    let array = [];
    for (let i = 0; i <= num; i++){
        array.push(i)
    }
    return array;
}


let cycle = numbersCycle(100);

function fizzBuzz(cycle){
    for(let i = 0; i < cycle.length; i++){
        if(cycle[i] % 3 === 0 && cycle[i] % 5 === 0){
            console.log("Fizz & Buzz")
        }else if (cycle[i] % 5 === 0){
            console.log("Buzz")
        }else if (cycle[i] % 3 === 0){
            console.log("Fizz")
        }else{
            console.log(cycle[i])
        }
    }
}

fizzBuzz(numbersCycle(100))

