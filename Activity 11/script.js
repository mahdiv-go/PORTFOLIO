function showForLoop() {
    let number = document.getElementById("forNumber").value;
    let text = document.getElementById("forText").value;
    let output = "";

    if (isNaN(number) || text == "") {
        alert("Invalid Output!");
        return;
    }
    for (let i = 1; i <= number; i++) {
        output += i + ". " + text + "<br>";
    }

    document.getElementById("forOutput").innerHTML = output;

}


function showWhileLoop() {
    let number = document.getElementById("whileNumber").value;
    let text = document.getElementById("whileText").value;
    let output = "";
    let i = 1;

    if (isNaN(number) || text == "") {
        alert("Invalid Output!");
        return;
    }

    while (i <= number) {
        output += i + ". " + text + "<br>";
        i++;
    }

    document.getElementById("whileOutput").innerHTML = output;
}

function showDoWhileLoop() {
    let number = document.getElementById("doWhileNumber").value;
    let text = document.getElementById("doWhileText").value;
    let output = "";
    let i = 1;
    if (isNaN(number) || text == "") {
        alert("Invalid Output!");
        return;
    }


    do {
        output += i + ". " + text + "<br>";
        i++;
    } while (i <= number);

    document.getElementById("doWhileOutput").innerHTML = output;
}



function clearFieldsFor() {


    document.getElementById("forNumber").value = "";
    document.getElementById("forText").value = ""

    document.getElementById("forOutput").innerHTML = " ";
}

function clearFieldsWhile() {
    document.getElementById("whileOutput").innerHTML = " ";
    document.getElementById("whileNumber").value = "";
    document.getElementById("whileText").value = "";
}


function clearFieldsDoWhile() {
    document.getElementById("doWhileOutput").innerHTML = " ";
    document.getElementById("doWhileNumber").value = "";
    document.getElementById("doWhileText").value = "";
}