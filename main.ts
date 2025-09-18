function oppsettOppgaver() {
    radioNivå1 = 141
    radioNivå2 = 124
    radioNivå3 = 135
    radioNivå4 = 119
    radioNivå5 = 158
    kodeord1 = "VITENSENTER"
    kodeord2 = "INDIA"
    kodeord3 = "ELEMENTÆRPARTIKKEL"
    kodeord4 = "NEWTON"
    kodeord5 = "MASKINIST"
}
function nivåFullført() {
    basic.showIcon(IconNames.Yes, 0)
    music.beginMelody([
        "C5:1", "G5:6"
    ], MelodyOptions.Once)
    for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.clear()
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    nivå += 1
}
function settRadiogruppeNivå() {
    if (nivå == 1) {
        radio.setGroup(radioNivå1)
    } else if (nivå == 2) {
        radio.setGroup(radioNivå2)
    } else if (nivå == 3) {
        radio.setGroup(radioNivå3)
    } else if (nivå == 4) {
        radio.setGroup(radioNivå4)
    } else if (nivå == 5) {
        radio.setGroup(radioNivå5)
    }
    basic.showNumber(nivå)
}
input.onButtonPressed(Button.A, function () {
    nivå += -1
    settRadiogruppeNivå()
})
function spillFullført() {
    basic.showIcon(IconNames.Heart, 0)
    music.beginMelody([
        "C4:1", "E4:1", "G4:1", "C5:2",
        "G4:1", "C5:4"
    ], MelodyOptions.Once)
    strip.showRainbow(1, 360)
    for (let index = 0; index < 240; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(20)
    }
}
radio.onReceivedString(function (receivedString) {
    if (nivå == 1 && receivedString == kodeord1) {
        nivåFullført()
    } else if (nivå == 2 && receivedString == kodeord2) {
        nivåFullført()
    } else if (nivå == 3 && receivedString == kodeord3) {
        nivåFullført()
    } else if (nivå == 4 && receivedString == kodeord4) {
        nivåFullført()
    } else if (nivå == 5 && receivedString == kodeord5) {
        spillFullført()
    } else {
        nivåFeilet()
    }
    settRadiogruppeNivå()
})
input.onButtonPressed(Button.B, function () {
    nivå += 1
    settRadiogruppeNivå()
})
function nivåFeilet() {
    basic.showIcon(IconNames.No, 0)
    music.beginMelody([
        "A3:2", "F3:4"
    ], MelodyOptions.Once)
    for (let index = 0; index < 6; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.clear()
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
let kodeord5 = ""
let kodeord4 = ""
let kodeord3 = ""
let kodeord2 = ""
let kodeord1 = ""
let radioNivå5 = 0
let radioNivå4 = 0
let radioNivå3 = 0
let radioNivå2 = 0
let radioNivå1 = 0
let nivå = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
nivå = 1
oppsettOppgaver()
settRadiogruppeNivå()
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
