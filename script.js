let arrSymbols = ["a", "b", "c", "d", "e", "#", "w", "r", "t", "y", "!", "g", "q", "u", "i", "o", "p", "s", "f", "/", "h", "j", "k", "l", "z", "x", "v", "n", "m", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const lengthPas = 8
let btn_checkPas = document.getElementById("checkPas")
let btn_hint = document.getElementById("hint")
let inpPas = document.getElementById("inpPas")

btn_hint.addEventListener("click", function() {
    alert(generationPassword());
})

btn_checkPas.addEventListener("click", function() {
    if(checkPas(inpPas.value) == 0) {
        alert(`Ваш пароль меньше ${lengthPas} символов!`)
    } else if(checkPas(inpPas.value) != 1) {
        let obj = checkPas(inpPas.value)
        // console.log(obj)
        if(obj.numberSet == 0) {
            alert("Ваш пароль должен содержать хотя бы 1 (одну) цифру!")
        } else if(obj.upperCaseLetter == 0) {
            alert("Ваш пароль должен содержать хотя бы 1 (одну) заглавную букву!")
        } else {
            alert("Ваш пароль должен содержать хотя бы один спец. символ (/, #, !)!")
            // obj.specialElement == 0
        }
            // default:
            //     alert("n/a")
    } else {
        alert("Ваш пароль подходит!")
    }
})

function generationPassword() {
    let str = []
    for(let i = 0; i < lengthPas; i++) {
        let a = Math.round(Math.random() * 100)
        if(a < arrSymbols.length) {
            if(typeof arrSymbols[a] == 'string') {
                let upperCase = Math.round(Math.random())
                if(upperCase == 1) {
                    str.push(arrSymbols[a].toUpperCase())
                } else {
                    str.push(arrSymbols[a])
                }
            } else {
                str.push(arrSymbols[a])
            }
        } else {
            i--
        }
    }
    return str.join("")
}
// console.log(generationPassword(stroka))

function checkPas(str) {
    let gapRes1 = 0
    let gapRes2 = 0
    let gapRes3 = 0
    // console.log(typeof str, str)
    if(str.length < lengthPas) {
        return 0;
    }
    for(let element of str) {
        if(element == '0' || element == '1' || element == '2' || element == '3' || element == '4' || element == '5' || element == '6' || element == '7' || element == '8' || element == '9') {
            if(gapRes1 == 0) {
                gapRes1++
            }
        } else if(element == element.toUpperCase()) {
            if(gapRes2 == 0) {
                gapRes2++
            }
        }
        if(element == "!" || element == "/" || element == "#") {
            if(gapRes3 == 0) {
                gapRes3++
            }
        }
    };
    if(gapRes1 + gapRes2 + gapRes3 < 3) {
        return {
            numberSet: gapRes1,
            upperCaseLetter: gapRes2,
            specialElement: gapRes3,
        };
    }
    return 1;
}