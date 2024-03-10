function stringConverter(data) {
    let gottenData = data;
    let convertedString = String(data);
    console.log(gottenData + " is " + typeof convertedString)
}

let numberConverter = (data) => {
    let gottenData = data;
    let convertedNumber = Number(data);
    if (isNaN(convertedNumber)) {
        console.log(gottenData + " is " + NaN + " so didn't convert")
    } else
        console.log(convertedNumber + " is " + typeof convertedNumber);
}

stringConverter(132)
stringConverter(true)
numberConverter("123")
numberConverter("Hello")
numberConverter("1Hello")