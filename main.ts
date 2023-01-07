basic.forever(function () {
    if (input.soundLevel() > 80) {
        basic.showString("" + (input.soundLevel()))
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    }
})
