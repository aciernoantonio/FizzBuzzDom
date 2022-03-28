const fizzElement = document.querySelector(".fizz");
const numbersElement = document.querySelector(".numbers")


//stampare in console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    /* console.log(i); */
    

    if (i % 3 == 0) {
       /* console.log(fizzElement); */
       fizzElement.innerHTML += `Fizz`

    } else {
        numbersElement.innerHTML += `${i} `
    }
}


