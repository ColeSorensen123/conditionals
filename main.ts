input.onButtonPressed(Button.A, function () {
    bob = randint(0, 1)
    basic.showString("truth or dare")
    if (jerry == 0) {
        basic.showString("truth")
    } else {
        basic.showString("dare")
    }
})
input.onButtonPressed(Button.B, function () {
    jerry = randint(0, 3)
    if (0 == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (jerry == 1) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (jerry == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else if (jerry == 3) {
        basic.showIcon(IconNames.Sword)
    }
})
input.onGesture(Gesture.Shake, function () {
    randomnumber = randint(0, 3)
})
let randomnumber = 0
let jerry = 0
let bob = 0
bob = 0
while (bob >= 4) {
    bob += 1
    basic.showIcon(IconNames.Heart)
}
basic.showNumber(0)
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
