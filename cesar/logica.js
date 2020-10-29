    function doCrypt(isDecrypt) {
        var shiftText = document.getElementById("shift").value;
        if (!/^-?\d+$/.test(shiftText)) {
            alert("No es un número entero");
            return;
        }
        var key = parseInt(shiftText, 10);
        if (key < 0 || key >= 26) {
            alert("Está fuera de rango UnU");
            return;
        }
        if (isDecrypt)
            key = (26 - key) % 26;
        var textElem = document.getElementById("text");
        textElem.value = crypt(textElem.value, key);
    }
    function crypt(input, key) {
        var output = "";
            for (var i = 0; i < input.length; i++) {
            var c = input.charCodeAt(i);
            if      (c >= 65 && c <=  90) output += String.fromCharCode((c - 65 + key) % 26 + 65);  // Uppercase
            else if (c >= 97 && c <= 122) output += String.fromCharCode((c - 97 + key) % 26 + 97);  // Lowercase
            else                          output += input.charAt(i);  // Copy
        }
        return output;
    }