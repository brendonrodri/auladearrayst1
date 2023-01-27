// /* let carros = ["fusca", "golzinho", "monza"]
// console.log(carros[2])


// console.log(legumes[3])

// //index: 0,1,2,3,4,5
// //array: 1,2,3,4,5,6
// console.log(legumes)
// legumes.pop()
// console.log(legumes)

// //método pop() ele SEMPRE vai remover o último item da nossa 

// function removerItem(){
//     console.log('item removido')
// }
// removerItem()
// carros.pop()
// console.log(carros) */

// /* let frutas = ["morango", "banana", "laranja", "kiwi", "mexerica"]
// console.log(frutas)
// frutas.shift()
// console.log(frutas) */

// //o shift() ele remove o primeiro item da array

// let legumes = ["batata", "cenoura", "chuchu", "tomate", "abobrinha", "quiabo"]
// /* 
// legumes.shift()
// console.log(legumes)
// legumes.shift()
// console.log(legumes)
// legumes.pop()
// console.log(legumes)
//  */

// // let compras = ["brócolis", "leite", "açúcar"]

// // compras.unshift("óleo")
// // console.log(compras)
// // compras.unshift("refri")
// // console.log(compras)

// //unshift() ele é o oposto do método shift(), pois adiciona um item dentro do meu array, na primeira posição

// // compras.unshift("carne","pão")
// // console.log(compras)

// // let array = ["1", 2, 3, 4, "5", "6"]
// // console.log(array)

// // let item = "batata"
// // console.log()
// // console.log(item)

// // let numerosELetras = ["vasco", "flamengo", 10, 20, 5, true, NaN]
// // console.log(numerosELetras)


// // let impares = [1,3,5,7,9,11,13,15,17]
// // impares.shift()
// // console.log(impares)
// // impares.shift()
// // console.log(impares)
// // impares.pop()
// // impares.pop()
// // console.log(impares)

// // impares.push(21, 23)
// // console.log(impares)

// // impares.unshift(-1,-3)


// //o push adiciona sempre no final e o unshift() adiciona sempre no começo

// let descrescentes = [9,8,7,6,5,4,3,2,1,0]
// descrescentes.reverse()
// console.log(descrescentes)


// //reverse() muda as ordem os meus items

// let times = ["vasco", "corinthians", "flamengo", "bahia", "américa"]

// times.reverse()
// console.log(times)

// //nesse caso ele pegou a minha array e colocou na ordem alfabética

// let crescentes = [1, 4, 5, 3, 9, 8, 2,7]
// crescentes.sort()
// console.log(crescentes)

// let alfabeto = ["f","d","e","a","c"]
// console.log(alfabeto)
// alfabeto.sort()
// console.log(alfabeto)

// //o método sort ele colocan nossos item ou na ordem alfabética ou na ordem crescente numérica

// let item = ["abacaxi", "cenoura", "batata", "tomate", "abacate", "beringela"]

// item.sort()
// console.log(item)

// let esportes = ["futebol", "basquete", "volei", "skate", "natação", "bike", "luta"]

// esportes.unshift("rugby")
// esportes.push("boxe")
// console.log(esportes)

// let lutas = ["boxe", "mma", "jiu-jitsu", "karate"]

// console.log(`Esportes de luta ${lutas}`)
// console.log(`Esportes de luta que só usam a mão ${lutas[0]}`)

// let frases = ["Bom dia tropa da t1", "bom dia tropa da t2", "bom dia tropa da t3"]


let frase = ["bom dia", "sextou", "noite", "de", "beber", "com moderação"]
let fraseDois = ["bebam", "água"]

// console.log(`${frase[0]} ${frase[1]}, ${frase[2]}
//  ${frase[3]} ${frase[4]} ${frase[5]} e ${fraseDois[0]} ${fraseDois[1]} `)

//só é possível retornar um item por vez no console com o index 
console.log(`${frase[0,1,2,3,4,5]}`)