window.addEventListener("load", () => {
    let greeterButton = document.getElementById("greeterButton")  

    greeterButton.addEventListener("click", () => {
        let greeting = document.getElementById("greeting")
        let input = document.getElementById("name").value;
        greeting.innerHTML =  `Hello, ${input}`;
    })
})



