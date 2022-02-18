let buttons = document.querySelectorAll("button");

let screenValue = document.getElementById("res");

for (let button of buttons) {
    button.addEventListener("click", function (e) {
        let value = e.target.innerText;


        if (value === "C") {

            value = "";
            screenValue.innerHTML = "";
            
        }

        else if (value === "=") {
            
            value = eval(screenValue.innerHTML.replace(/([01]+)/g, '0b$1')).toString();
            screenValue.innerHTML = Number(value).toString(2);
        }

        else {
            screenValue.innerHTML += value;
        }
    })
}


