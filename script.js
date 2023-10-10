function realizarConversion(){
    let celsius = parseInt(document.getElementById("gradosCelsius").value);
    let kelvin = celsius+273.15;
    let fahrenheit = (celsius * 9/5) +32;
    document.getElementById("kelvin").textContent = 'La temperatura en Kelvin es: ' + kelvin ;
    document.getElementById("fahrenheit").textContent = 'La temperatura en Fahrengeit es: ' + fahrenheit ;

}
