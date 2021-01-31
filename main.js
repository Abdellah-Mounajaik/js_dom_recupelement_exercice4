let secondh1 = document.getElementsByTagName("h1")[1]
console.log(secondh1.innerText);

let dernierli = document.getElementsByTagName("li")[3]
console.log(dernierli.innerText);

let pmajuscule = document.getElementsByTagName("p")[0].innerText.toUpperCase()
console.log(pmajuscule);

let li = document.getElementsByTagName("li")
let liArray = Array.from(li)
liArray.forEach(element => {
   console.log(element.innerText.toUpperCase()); 
});