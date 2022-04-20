input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let x = 0; x <= 4; x++) {
            let y = 0
            led.toggle(x, y)
            led.unplot(2, 2)
            led.unplot(1, 1)
            led.unplot(0, 0)
        }
    }
})
basic.forever(function () {
	
})
