function limpiar() {
    let textarea = document.querySelector("#textareainput");
    textarea.value = "";
    hideImageTextSubt();
    showImageTextSubt();
}
document.getElementById("limpiar").onclick = limpiar;
/*La función limpiar() se encarga de limpiar el contenido del textarea y de llamar a las funciones hideImageTextSubt() y showImageTextSubt() que ocultan y muestran elementos de la interfaz de usuario*/
/* En la linea 7. Este código asigna la función limpiar() al evento onclick del botón con el id limpiar. */

function verificarvacio() {
    let textarea = document.querySelector("#textareainput");
    if (textarea.value.trim() == "") {
        textarea.value = "";
        textarea.focus();
        return true;
    }
    return false;
}

/*La función verificarvacio() verifica si el contenido del textarea está vacío o no. Si está vacío, limpia el textarea, le da el foco y retorna true, en caso contrario retorna false*/


function verificaralfanumerico() {
    let textareavalue = document.querySelector("#textareainput").value;
    let resultadoPatron = textareavalue.match(/[^A-Za-z0-9\s]/g);
    if (resultadoPatron) {
        return true;
    }
    return false;
}

/*La función verificaralfanumerico() verifica si hay algún carácter en el contenido del textarea que no sea alfanumérico. Si lo hay, retorna true, en caso contrario retorna false*/


function encriptar() {
    let textareavalue = document.querySelector("#textareainput").value;
    let resultadoPatron = textareavalue.replace(/[aeiou]/g, (e) => {
        if (e == "a") { return "ai"; };
        if (e == "e") { return "enter"; };
        if (e == "i") { return "imes"; };
        if (e == "o") { return "ober"; };
        if (e == "u") { return "ufat"; };
    });


    return resultadoPatron;
}

/*La función encriptar() toma el contenido del textarea y encripta las vocales, reemplazándolas por las cadenas "ai", "enter", "imes", "ober" y "ufat". Luego, retorna el resultado.*/


function desencriptar() {
    let textareavalue = document.querySelector("#textareainput").value;
    let resultadoPatron = textareavalue.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (e) => {
        if (e == "ai") { return "a"; };
        if (e == "enter") { return "e"; };
        if (e == "imes") { return "i"; };
        if (e == "ober") { return "o"; };
        if (e == "ufat") { return "u"; };
    });

    return resultadoPatron;
}

/*La función desencriptar() toma el contenido del textarea y desencripta las vocales, reemplazando las cadenas "ai", "enter", "imes", "ober" y "ufat" por las vocales correspondientes. Luego, retorna el resultado.  */


function hideImageTextSubt() {
    document.querySelector(".espacioblanco img").style.display = "none";
    document.querySelector("#titulo").style.display = "none";
    document.querySelector("#subtitulo").style.display = "none";
    document.querySelector(".espacioblanco").style["justify-content"] = "space-between";
    document.querySelector("#textareaoutput").style.display = "block";
    document.querySelector("#copiar").style.display = "block";

}

/*Aquí definimos una función llamada hideImageTextSubt que se encarga de esconder algunos elementos de la página. La primera línea selecciona un elemento HTML que tiene la clase "espacioblanco" y dentro de él, selecciona un elemento "img" y cambia su propiedad "display" a "none", lo que significa que el elemento se ocultará en la página. Luego se seleccionan otros elementos por su ID ("titulo" y "subtitulo") y también se cambia su propiedad "display" a "none". Selecciona nuevamente el elemento HTML con clase "espacioblanco" y cambia su propiedad "justify-content" a "space-between", que es una propiedad de CSS que se encarga de distribuir el espacio entre los elementos. Finalmente, se seleccionan dos elementos más por su ID ("textareaoutput" y "copiar") y se cambia su propiedad "display" a "block", lo que significa que estos elementos se mostrarán en la página.Aquí definimos una función llamada hideImageTextSubt que se encarga de esconder algunos elementos de la página. La primera línea selecciona un elemento HTML que tiene la clase "espacioblanco" y dentro de él, selecciona un elemento "img" y cambia su propiedad "display" a "none", lo que significa que el elemento se ocultará en la página. Luego se seleccionan otros elementos por su ID ("titulo" y "subtitulo") y también se cambia su propiedad "display" a "none". Selecciona nuevamente el elemento HTML con clase "espacioblanco" y cambia su propiedad "justify-content" a "space-between", que es una propiedad de CSS que se encarga de distribuir el espacio entre los elementos. Finalmente, se seleccionan dos elementos más por su ID ("textareaoutput" y "copiar") y se cambia su propiedad "display" a "block", lo que significa que estos elementos se mostrarán en la página. */

function showImageTextSubt() {
    document.querySelector(".espacioblanco img").style.display = "block";
    document.querySelector("#titulo").style.display = "block";
    document.querySelector("#subtitulo").style.display = "block";
    document.querySelector(".espacioblanco").style["justify-content"] = "center";
    document.querySelector("#textareaoutput").style.display = "none";
    document.querySelector("#copiar").style.display = "none";

}
/* Esta función se encarga de mostrar los mismos elementos que la función anterior. Aquí seleccionamos los mismos elementos, pero cambiamos sus propiedades para mostrarlos en la página en lugar de ocultarlos.*/


async function copiar() {
    let textareavalue = document.querySelector("#textareaoutput").value;

    try {
        await navigator.clipboard.writeText(textareavalue);
        let tooltip = document.querySelector(".tooltiptext");
        tooltip.innerHTML = "Texto copiado al portapapeles";
    } catch (err) {
        console.error('Error en la copia', err);
    }


}

/*Esta función se encarga de copiar el contenido de un elemento de texto en el portapapeles del usuario. Primero, seleccionamos el elemento HTML que tiene el ID "textareaoutput" y obtenemos su valor. Luego, usamos el objeto navigator.clipboard para escribir el valor del elemento en el portapapeles del usuario. Si la copia se realiza correctamente, se cambia el texto de un elemento con la clase "tooltiptext" para indicar que la copia fue exitosa. Si hay algún error, se muestra un mensaje de error en la consola del navegador. */

function fueraFunc() {
    var tooltip = document.querySelector(".tooltiptext");
    tooltip.innerHTML = "Copiar al portapapeles";
}

/* Esta función se ejecuta cuando el usuario saca el cursor del mouse fuera del botón "copiar". Lo que hace es seleccionar el elemento HTML que tiene la clase "tooltiptext" (un elemento que contiene el texto "Copiar al portapapeles") y reemplazar su contenido con ese mismo texto.*/


function ejecucionencriptar() {
    if (verificarvacio()) {
        alert("Has ingresado vacio");
    }
    if (verificarvacio() == 0 && verificaralfanumerico() == 1) {
        alert("Has ingresado un caracter no alfanumerico");
    }
    if (verificarvacio() == 0 && verificaralfanumerico() == 0) {
        let encripatado = encriptar();
        hideImageTextSubt();
        let textareaoutput = document.querySelector("#textareaoutput");
        textareaoutput.value = encripatado;
    }

}

/*Esta función se ejecuta cuando el usuario hace clic en el botón "encriptar". Primero, verifica si el usuario ha ingresado texto en el campo de entrada. Si no ha ingresado nada, muestra una alerta que indica que el usuario debe ingresar texto. Si el usuario ha ingresado texto, la función verifica si el texto contiene algún carácter que no sea alfanumérico. Si es así, muestra una alerta que indica que el usuario debe ingresar solo caracteres alfanuméricos. Si el texto ingresado es válido, la función llama a la función encriptar() para encriptar el texto, oculta algunas imágenes y texto en la página y luego actualiza el valor del elemento HTML con ID "textareaoutput" con el texto encriptado. */

function ejecuciondesencriptar() {
    if (verificarvacio()) {
        alert("Has ingresado vacio");
    }
    if (verificarvacio() == 0 && verificaralfanumerico() == 1) {
        alert("Has ingresado un caracter no alfanumerico");
    }
    if (verificarvacio() == 0 && verificaralfanumerico() == 0) {
        let desencriptado = desencriptar();
        hideImageTextSubt();
        let textareaoutput = document.querySelector("#textareaoutput");
        textareaoutput.value = desencriptado;
    }

}

/*Esta función se ejecuta cuando el usuario hace clic en el botón "desencriptar". Realiza una serie de verificaciones similares a las realizadas en la función ejecucionencriptar() para asegurarse de que el texto ingresado sea válido. Si el texto ingresado es válido, la función llama a la función desencriptar() para desencriptar el texto, oculta algunas imágenes y texto en la página y luego actualiza el valor del elemento HTML con ID "textareaoutput" con el texto desencriptado. */

document.getElementById("encriptar").onclick = ejecucionencriptar;
document.getElementById("desencriptar").onclick = ejecuciondesencriptar;
document.getElementById("copiar").onclick = copiar;
document.getElementById("copiar").onmouseout = fueraFunc;

/* Los últimos cuatro comandos asignan diferentes funciones a diferentes eventos. document.getElementById("encriptar").onclick = ejecucionencriptar; asigna la función ejecucionencriptar() al evento "onclick" del botón con ID "encriptar". document.getElementById("desencriptar").onclick = ejecuciondesencriptar; asigna la función ejecuciondesencriptar() al evento "onclick" del botón con ID "desencriptar". document.getElementById("copiar").onclick = copiar; asigna la función copiar() al evento "onclick" del botón con ID "copiar". Y finalmente, document.getElementById("copiar").onmouseout = fueraFunc; asigna la función fueraFunc() al evento "onmouseout" del botón con ID "copiar".*/