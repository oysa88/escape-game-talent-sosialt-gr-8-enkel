function oppsettRadio () {
    radioNivå1 = 119
    radioNivå2 = 124
    radioNivå3 = 135
    radioNivå4 = 141
    radioNivå5 = 158
}
function nivåFullført () {
    basic.showIcon(IconNames.Yes, 0)
for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.clear()
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    nivå += 1
    basic.showNumber(nivå)
}
function spillFullført () {
    basic.showIcon(IconNames.Heart, 0)
strip.showRainbow(1, 360)
    for (let index = 0; index < 240; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(20)
    }
    strip.clear()
    strip.show()
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    nivå += -1
    basic.showNumber(nivå)
    if (nivå == 1) {
        radio.setGroup(radioNivå1)
    } else if (nivå == 2) {
        radio.setGroup(radioNivå2)
    } else if (nivå == 3) {
        radio.setGroup(radioNivå2)
    } else if (nivå == 4) {
        radio.setGroup(radioNivå4)
    }
})
radio.onReceivedString(function (receivedString) {
    if (nivå == 1 && receivedString == "NEWTON") {
        nivåFullført()
        radio.setGroup(radioNivå2)
    } else if (nivå == 2 && receivedString == "FINLAND") {
        nivåFullført()
        radio.setGroup(radioNivå3)
    } else if (nivå == 3 && receivedString == "ELEMENTÆRPARTIKKEL") {
        nivåFullført()
        radio.setGroup(radioNivå4)
    } else if (nivå == 4 && receivedString == "VITENSENTER") {
        nivåFullført()
        radio.setGroup(radioNivå5)
    } else if (nivå == 5 && receivedString == "MASKINIST") {
        spillFullført()
    } else {
        nivåFeilet()
    }
})
function nivåFeilet () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.No, 0)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.clear()
        strip.show()
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    basic.showNumber(nivå)
}
let radioNivå5 = 0
let radioNivå4 = 0
let radioNivå3 = 0
let radioNivå2 = 0
let radioNivå1 = 0
let nivå = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
nivå = 1
basic.showNumber(nivå)
oppsettRadio()
radio.setGroup(radioNivå1)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
