let output = document.getElementById("output");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (element) => {
        switch (element.target.innerText) {
            case "C":
                output.innerText = "";
                break;
            case "CE":
                if (output.innerText) {
                    output.innerText = output.innerText.slice(0, -1);
                    break;
                }
            case "=":
                try {
                    output.innerText = eval(output.innerText); ""
                }
                catch {
                    output.innerText = "ERROR!!";
                }
                break;
            default:
                output.innerText += element.target.innerText;
        }
    })
})