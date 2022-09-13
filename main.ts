input.onButtonPressed(Button.A, function () {
    basic.showString("truth or dare")
})
input.onGesture(Gesture.Shake, function () {
    randomnumber = randint(0, 3)
})
let randomnumber = 0
let bob = 0
while (bob >= 4) {
    bob += 1
    basic.showIcon(IconNames.Heart)
}
basic.showNumber(0)
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
