function convert() {
    let value = parseFloat(document.getElementById('inputValue').value);
    let unitType = document.getElementById('unitType').value;
    let result = 0;
    
    if (isNaN(value)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }

    switch (unitType) {
        case 'm-to-ft': result = value * 3.28084; break;
        case 'ft-to-m': result = value / 3.28084; break;
        case 'c-to-f': result = (value * 9/5) + 32; break;
        case 'f-to-c': result = (value - 32) * 5/9; break;
        case 'kg-to-lb': result = value * 2.20462; break;
        case 'lb-to-kg': result = value / 2.20462; break;
    }
    
    document.getElementById('result').innerText = "Converted Value: " + result.toFixed(2);
}
