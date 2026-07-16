let 連続で鳴るのを禁止 = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        if (連続で鳴るのを禁止 == 0) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
            連続で鳴るのを禁止 = 1
        }
    } else {
        連続で鳴るのを禁止 = 0
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
