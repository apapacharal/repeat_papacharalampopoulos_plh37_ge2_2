input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 <= 4; index2++) {
        basic.pause(1000)
        led.toggle(index2, 1)
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        basic.pause(1000)
        led.toggle(index2, 1)
    }
})
led.plot(0, 0)
basic.forever(function () {
	
})
