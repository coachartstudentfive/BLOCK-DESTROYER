namespace SpriteKind {
    export const Rainbowblocks = SpriteKind.create()
    export const Smileyblocks = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (active_ball == 0) {
        active_ball = 1
        ball = sprites.create(assets.image`ball`, SpriteKind.Projectile)
        ball.setStayInScreen(true)
        ball.setBounceOnWall(true)
        ball.setVelocity(speed_x, speed_y)
    }
})
sprites.onDestroyed(SpriteKind.Rainbowblocks, function (sprite) {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    rb_count += -1
    OutofBlocks()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Smileyblocks, function (sprite, otherSprite) {
    CheckSmiley()
    ball.setVelocity(speed_x * randint(-1, -3), speed_y * randint(-1, -3))
    info.changeScoreBy(1)
})
function buildrainbowblocks () {
    rb_count = 10
    rb_1 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_1.setPosition(10, 35)
    rb_2 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_2.setPosition(25, 35)
    rb_3 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_3.setPosition(40, 35)
    rb_4 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_4.setPosition(55, 35)
    rb_5 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_5.setPosition(70, 35)
    rb_6 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_6.setPosition(85, 35)
    rb_7 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_7.setPosition(100, 35)
    rb_8 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_8.setPosition(115, 35)
    rb_9 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_9.setPosition(130, 35)
    rb_10 = sprites.create(assets.image`rainbow`, SpriteKind.Rainbowblocks)
    rb_10.setPosition(145, 35)
}
function buildsmileyblocks () {
    sb_count = 10
    sb_1 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_1.setPosition(10, 30)
    sb_2 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_2.setPosition(25, 30)
    sb_3 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_3.setPosition(40, 30)
    sb_4 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_4.setPosition(55, 30)
    sb_5 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_5.setPosition(70, 30)
    sb_6 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_6.setPosition(85, 30)
    sb_7 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_7.setPosition(100, 30)
    sb_8 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_8.setPosition(115, 30)
    sb_9 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_9.setPosition(130, 30)
    sb_10 = sprites.create(assets.image`smile`, SpriteKind.Smileyblocks)
    sb_10.setPosition(145, 30)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    ball.setVelocity(speed_x * randint(-1, -3), speed_y * randint(-1, -3))
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
function OutofBlocks () {
    if (rb_count == 0 && sb_count == 0) {
        game.setGameOverScoringType(game.ScoringType.HighScore)
        game.splash("OUT OF BLOCKS")
        game.reset()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Rainbowblocks, function (sprite, otherSprite) {
    CheckRainbow()
    ball.setVelocity(speed_x * randint(-1, -3), speed_y * randint(-1, -3))
    info.changeScoreBy(1)
})
function CheckRainbow () {
    if (ball.overlapsWith(rb_1)) {
        sprites.destroy(rb_1)
    } else if (ball.overlapsWith(rb_2)) {
        sprites.destroy(rb_2)
    } else if (ball.overlapsWith(rb_3)) {
        sprites.destroy(rb_3)
    } else if (ball.overlapsWith(rb_4)) {
        sprites.destroy(rb_4)
    } else if (ball.overlapsWith(rb_5)) {
        sprites.destroy(rb_5)
    } else if (ball.overlapsWith(rb_6)) {
        sprites.destroy(rb_6)
    } else if (ball.overlapsWith(rb_7)) {
        sprites.destroy(rb_7)
    } else if (ball.overlapsWith(rb_8)) {
        sprites.destroy(rb_8)
    } else if (ball.overlapsWith(rb_9)) {
        sprites.destroy(rb_9)
    } else if (ball.overlapsWith(rb_10)) {
        sprites.destroy(rb_10)
    }
}
function CheckSmiley () {
    if (ball.overlapsWith(sb_1)) {
        sprites.destroy(sb_1)
    } else if (ball.overlapsWith(sb_2)) {
        sprites.destroy(sb_2)
    } else if (ball.overlapsWith(sb_3)) {
        sprites.destroy(sb_3)
    } else if (ball.overlapsWith(sb_4)) {
        sprites.destroy(sb_4)
    } else if (ball.overlapsWith(sb_5)) {
        sprites.destroy(sb_5)
    } else if (ball.overlapsWith(sb_6)) {
        sprites.destroy(sb_6)
    } else if (ball.overlapsWith(sb_7)) {
        sprites.destroy(sb_7)
    } else if (ball.overlapsWith(sb_8)) {
        sprites.destroy(sb_8)
    } else if (ball.overlapsWith(sb_9)) {
        sprites.destroy(sb_9)
    } else if (ball.overlapsWith(sb_10)) {
        sprites.destroy(sb_10)
    }
}
sprites.onDestroyed(SpriteKind.Smileyblocks, function (sprite) {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    sb_count += -1
    OutofBlocks()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
function CheckforBlocks () {
    if (rb_count == 0 && sb_count == 0) {
        music.play(music.stringPlayable("E A F C5 G F D G ", 120), music.PlaybackMode.UntilDone)
        game.setGameOverMessage(true, "GAME OVER!")
        game.gameOver(true)
    }
}
let sb_10: Sprite = null
let sb_9: Sprite = null
let sb_8: Sprite = null
let sb_7: Sprite = null
let sb_6: Sprite = null
let sb_5: Sprite = null
let sb_4: Sprite = null
let sb_3: Sprite = null
let sb_2: Sprite = null
let sb_1: Sprite = null
let sb_count = 0
let rb_10: Sprite = null
let rb_9: Sprite = null
let rb_8: Sprite = null
let rb_7: Sprite = null
let rb_6: Sprite = null
let rb_5: Sprite = null
let rb_4: Sprite = null
let rb_3: Sprite = null
let rb_2: Sprite = null
let rb_1: Sprite = null
let rb_count = 0
let ball: Sprite = null
let speed_y = 0
let speed_x = 0
let active_ball = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999dd999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999ddd99999d999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd9999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999d9dddd999ddd999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd999dddd99999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999dddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddd9dd99ddd9999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999dddddd999ddd999999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999dd9ddddd99dddd9999999ddddd9dd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddddddddddd999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999dddddddddddddddddd229dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999d9999922229dddddddddddddddddd2d299dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d999999999999999999
    999999999999dd222222992999dddddddddddddd22dd2dddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999dd999999999999999999
    999999999999dd2922929299ddddddddddddddd2dddd2ddddd9999999999999999999999999999999999d99999999999999999999999999999999999999999999999999dd999dd999999999999999999
    99999999999dd2922999229ddddddddddddddd2ddddd2dddddd999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999dd99ddd999999999999999999
    9999999999ddd22299992dddddddddddddddd2dddddd2ddddddd99999999999999999999999999999999dd99999999999999999999999999999999999999999999d999dddd9ddddd9999999999999999
    99999999999d2299999d2ddddddddddddddd2ddddddd2dddddddd999999999999999999999999999999dddd999999999999999999999999999999999999999999ddd99dddd99dd999999999999999999
    99999999999922d999dd2ddddddddddddddd2dddddddd2dddddddd99999999999999999999999999999dddd9999d9999999999999999999999999999999999999ddd999dd99dddddd999999999999999
    9999999999d22d99ddd22dddddddddddddd2ddddddddd2ddddddddd999999999999999999999dd999999dd99999d999999999999999999999999999999999999dddd9ddddddddd999999999d99999999
    99999999999d2ddd4dd22dddddddddddddd2ddddddddd2dddddddddd9999999999999999999ddd9999dddddd999dd9999999999999999999999999999999999999ddd9dddd999dd99999999d99999999
    9999999999992ddd4dd22ddddddddddddd2dddddddddd2ddddddddddd99999999999999999dddd99999dddd9999dd999999999999999999999999999992299999ddd99ddddd99d99999999dddd999999
    999999999992dddd4dd2dddddddddddddd2dddddddddd2dddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999d99999999999999922999ddddddddddddd9d999999999d99999999
    999999999992dddd4dd2dddddddddddddd2dddddddddd2dddddddddddd9999999992999999dddddd9dddddddd9dddd92999999999dd999999999999992929999ddddddddddddddddd9999dddd9999999
    99999999992ddddd44d2dddddddddddddd2dddddddddd2ddddddddddddd99999999299999dddddd9dddddddddd9dd922999999999ddd9999999999999292999ddddd99ddddddddddddd999ddd9999999
    99999999dd2ddddd44d22ddddddddddddd2ddddddddddd2ddddddddddddd999999292999999dddddd99dddd9999ddd2299999999ddddd999999999992d9299dddddddddddddddddddddd99ddddd99999
    9999999dd2dddddd44d22dddddddddddd2ddddd4dddddd2dddddddddddddd9992299299999dddddd99dddddd99ddd9229999999ddddddd99999999992dd29999dddddddddddddddddddddddddd999999
    999999dd2ddddddd44d22dddddddddddd2ddddd4dddddd2ddddddddddddddd99299929999ddddddddddddddddddddd2d2999999d9dddd999999999929dd9299dddddddddddddddddddddddddd9999999
    99999dd2dddddddd4ddd22ddddddddddd2dddd44dddddd2dddddddddddddddd2999929999999dddddddddddddddddd2d2dd99999ddddd99999999929ddd9299dddddddddddddddddddddddddd9999999
    999ddd2ddddddddd4ddd22ddddddddddd2ddd444dddddd2dddddddddddddddd299999299999ddddddddddddddddddd2d2dddd99ddddddd99999999299d9929dddddddddddddddddddddddddddd999999
    99ddd2dddddddddd4ddd222ddddddddd2dddd4d4dddddd2dddddddddddddd22dd99992999dddddddddddddddddddd2ddd2ddddd9dddd9d9999999929dddd29ddddddddddddddddd2dddddddddddd9999
    9ddd2ddddddddddd4ddd2d2ddddddddd2dddd4d4dddddd2dddddddddddddd2ddddd99299ddddddddddddddddddddd2ddd2ddddddddddd999999999299dd92dddddddddddddddddd22ddddddddddddd99
    ddd2ddddddddddd44ddd2dd2dddddddd2dddd4d4dddddd2ddddddddddddd2ddddddd929dddddddddddddddddddddd2ddd2dddddddddddd999999992dddddd2dddddddddddddddd2dd2dddddddddddddd
    dd2ddddddddddd4d4dddd2dd2ddddddd2dddd4d4dddddd2dddddddddddd2ddddddddd2ddddddddddddddddddddddd2dddd2ddddddddddd9999999929dddddd2ddddddddddddddd2ddd2ddddddddddddd
    dd2dddddddddd4dd4dddd2dd2ddddddd2dddd44ddddddd2ddddddddddd2dddddddddd2ddddddddddddddddddddddd2dddd2dddddddddddd9999992999ddddd2dddddddddddddd22dddd2dddddddddddd
    d2dddddddddd4ddd4dddd2dd2dddddd2dddd4d4ddddddd2ddddddddddd2ddddddddddd2dddddddddddddddddddddd2dddd2ddddddddddddd9999929ddddddd2dddddddddddddd2dddddd2ddddddddddd
    2dddddddddd4dddd4ddddd2d2dddddd2dddd4d4ddddddd2dddddddddd2ddddddd4dddd2ddddddddddddddddddddd2ddddd2ddddddddddddddd9992dddd4dddd2ddddddddddddd2ddddddd2dddddddddd
    2ddddddddd4ddddd4ddddd2dd2dddd2dddd4dd4ddddddd2ddddddddd2ddddddd44dddd2ddddddddddddddddddddd2ddddd2dddddddddddddddddd2dddd4dddd2dddddddddddd2dddddddd2dddddddddd
    2ddddddd44dddddd4dddddd2d2dddd2dddd4d4dddddddd2dddddddd2dddddddd44dddd2dddddddddddddddddddd2dddddd2dddddddddddddddddd2dddd4dddd2ddddddddddd2ddddddddd2dddddddddd
    dddddd44ddddddd54ddddddd22dddd2dddd4d4dddddddd2ddddddd2dddddddd4d4dddd2dddddddddddddddddddd2dddddd2ddddddddddddddddd2ddddd4ddddd2ddddddddd2ddddddddddd2ddddddddd
    ddddd4ddddddd55dd4ddddddd2ddd2ddddd4d4ddddddddd2dddddd2dddddddd4d4dddd2dddddddddddddddddddd2ddd4dd2ddddddddddddddddd2ddddd44dddd2dddddddd22dddddddddddd2dddddddd
    dddd4ddddd5555ddd4ddddddd22dd2ddddd4d4ddddddddd2ddddd2dddddddd4dd4dddd2dddddddddddddddddddd2ddd4dd2ddddddddddddddddd2dddd4d4dddd2dddddddd2ddddddddddddd2dddddddd
    ddd4ddddd5dd5dddd4dddddddd2d2dddddd4d4ddddddddd2dddd2ddddddddd4dd4dddd2ddddddddddddddddddd2ddd4ddd2ddddddddddddddddd2dddd4d4dddd2ddddddd2dddddddddddddd22ddddddd
    dd4ddd555dd5dddddd4ddddddd2d2dddddd4d4ddddddddd2dddd2ddddddddd4ddd4dddd2ddddddddddddddddd2dddd4dddd2dddddddddddddddd2dddd4d4dddd2dddddd22ddddddd4ddddddd2ddddddd
    d4ddd55ddd5ddddddd4dddddddd22dddddd4d4ddddddddd2dddd2ddddddddd4ddd4dddd2dddddddddddddddd2ddddd4dddd2dddddddddddddddd2dddd4dd4dddd2dddd22dddddddd4dddddddd22ddddd
    dddd5dddd5dddddddd4dddddddd22dddddd4d4ddddddddd2ddd2dddddddddd4ddd4dddd2dddddddddddddddd2ddddd4dddd2dddd2ddddddddddd2dddd4dd4dddd2dddd2ddddddddd44dddddddd2ddddd
    ddd5ddddd5ddddddddd4ddddddd2ddddddd4d4ddddddddd2dd2ddddddddddd4ddd4dddd2ddddddddddddddd2ddddd4ddddd2dddd2ddddddddddd2ddd4dddd4ddd2dd22dddddddddd44ddddddddd2dddd
    ddd5ddddd5ddddddddd4ddddddddddddddd4d4ddddddddd2dd2ddddddddddd4ddd4dddd2ddddddddddddd22dddddd4ddddd2dddd2ddddddddddd2ddd4dddd4ddd2d2ddddddddddddd44ddddddddd2ddd
    ddd5ddddd5ddddddddd4ddddddddddddddd4d4ddddddddd2dd2ddddddddddd4d5d4dddd2dddddddddddd2ddddddd44ddddd2dddd22dddddddddd2ddd4dddd4ddd2d2ddddddddddddd44ddddddddd22dd
    dddddddddd5dddddddd4ddddddddddddddd4d4dddddddddd222ddddddddddd4d5d4dddd2ddddddddddd2dddddddd44ddddd2ddd2d2dddddddddd2ddd4dddd4dddd2dddddddddddddd44dddddddddd2dd
    ddddddddddd55ddddddd4dddddddddddddd4d4dddddddddd22ddddddddddd4d5dd4dddd2dddddddddd2ddddddddd4dddddd2ddd2d2ddddddddd2dddd4ddddd4ddd2ddddddddddddddd4dddddddddd2dd
    ddddddddddddd5dddddd4ddddddddddddd44d4dddddddddd22ddddddddddd4d5dd4ddddd2dddddddd2ddddddddd44dddddd2dd2dd2ddddddddd2dddd4ddddd4ddddddddddddddddddd4ddddddddddd2d
    dddddddddddddd555ddd4444ddddddddd44dd4ddddddddddddddddddddddd4d55d4ddddd2ddddddd22ddddddddd4ddddddd2dd2dd2ddddddddd2dddd4ddddd4ddddddddddddddddddd44dddddddddd2d
    dddddddddddddddd5ddddddd444444444ddddd4dddddddddddddddddddddd45d5d4ddddd2ddddddd2ddddddddd44ddddddd2d2dddd2ddddddd2ddddd4dddddd4dddddddddddddddddd44ddddddddddd2
    ddddddddddddddddd5ddddddddddddd555555d4dddddddddddddddddddddd45d554dddddd2dddddd2ddddddddd4dddddddd22ddddd2ddddddd2dddd4ddddddd4dddddddddddddddddd44ddddddddddd2
    dddddddddddddddddd55dddddddd555dddd5dd4ddddddddddddddddddddd4d5dd54ddddddd2ddd22ddddddddd44dddddddd22dddddd2dddddd2dddd4ddddddd4dddddddddddddddddd4d4dddddddddd2
    dddddddddddddddddddd555dddd5ddddddd5ddd4ddddddddddddddddddd44d5dd544ddddddd2dd2ddddddddd4d4dddddddd22dddddd2ddddd2ddddd4dddddd54dddddddddddddddddd4dd4ddddddddd2
    ddddddddddddddddddddddd5555dddddddd5dddd4dddddddddddddddddd4dd5dd5d4ddddddd222dddddddddd4d4dddddddd22dddddd2ddddd2dddd4dddddd554dddddddddddddddddd4ddd4dddddddd2
    ddddddddddddddddddddddddddddddddddd5ddddd4dddddddddddddddd4ddd5dd5d44dddddd2ddddddddddd4d4ddddddddd2dddddddd2dddd2dddd4dddddd55d4dddddddddddddddd4dddd4dddddddd2
    ddddddddddddddddddddddddddddddddddd5dddddd44ddddddddddddd4dddd5dd5dd4dddddddddddddddd44dd4ddddddddd2ddd4dddd2ddd2ddddd4ddddd555d4dddddddddddddddd4ddddd4ddddddd2
    dddddddddddddddddddddddddddddddddddd5ddddddd4444ddddd4444ddddd5d55ddd4dddddddddddddd4ddddd4dddddddddddd4dddd2dd2dddddd4ddddd5d5d4dddddddddddddddd4ddddd4ddddddd2
    ddddddddddddddddddddddddddddddddddddd5dddddddddd44444ddddddddd555ddddd4444dddddddd44dddddd4ddddddddddd44ddddd2d2dddddd4dddddd55dd4ddddddddddddddd4dddddd4dddddd2
    dddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddd55ddddddddddd44444444dddddddd4ddddddddddd44ddddd2d2dddddd4dddddd55dd44ddddddddddddd4dddddddd4dddddd
    ddddddddddddddddddddddddddddddddddddddd55dddddddddddddddddd55d5dddddddddddddddddddddd5dddd4ddddddddddd44ddddd22dddddd4dddddddd55dd4dddddddddddd4ddddddddd4dddddd
    ddddddddddddddddddddddddddddddddddddddddd555dddddddddddd5555dd5dddddddddddddddddddddd5ddddd4ddddddddd4d4ddddd22dddddd4dddddddd55ddd4ddddddddddd4dddddddddd4ddddd
    dddddddddddddddddddddddddddddddddddddddddddd555555dddd55ddddddd5ddddddddddddddddddddd5dddddd4ddddddd4dd4ddddd2ddddddd4dddddddd5d5ddd444ddddddd4dddddddddddd4dddd
    dddddddddddddddddddddddddddddddddddddddddddddddddd5555ddddddddd5ddddddddddddddddddddd5ddddddd4444dd4ddd4ddddd2ddddddd4ddddddddd55dddddd444ddd4dddddddd5dddd4dddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddd5d5dddddddddd44ddddd4dddddddddddd4ddddddddd55ddddddddd444ddddddddd5ddddd4ddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddd55d5ddddddddddddddddd4ddddddddddd4dddddddddd55ddddddddddddddddddddd55ddddd4dd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddd5ddd5ddddddddddddddddd4dddddddddd44dddddddddd5d5ddddddddddddddddddd5d5ddddd4dd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddddddddddd55ddddd5ddddddddddddddddd44ddddddd4ddddddddddddd55ddddddddddddddddddd5d5dddddd4d
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555dddddddd5dddddddddddddddddd44444444ddddddddddddd55ddddddddddddddddddd5d5ddddddd4
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddddddddddddddddddddddddddddddddddddd5dddddddddddddddddd5dd5dddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddd5dddddddddddddddddddddddddd5dddddddddddddddddd5ddd5ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5555dd555ddddddddddddddddddddddddddd5dddddddddddddddd5ddddd5dddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddd5dddddddddddddddddddddddddd55dddddddddddddd55ddddd5dddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddddddddddddddddddddddd5d55ddddddddd555dddddddd5ddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddd5ddd5555dd555dddddddddddd5dddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555ddddddddddddddddddd55ddddddd55dddddddddddddddd5ddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5555ddddddddddddd55dddddddddddddddddddddddddddd55d
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddd55ddddddddddddddddddddddddddddddd55
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555ddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
active_ball = 0
speed_x = 30
speed_y = 20
buildrainbowblocks()
buildsmileyblocks()
let bottom = sprites.create(assets.image`bottom`, SpriteKind.Enemy)
bottom.bottom = 120
let paddle = sprites.create(assets.image`paddle`, SpriteKind.Player)
paddle.setPosition(80, 100)
controller.moveSprite(paddle, 100, 0)
game.onUpdateInterval(250, function () {
    if (paddle.y < 75) {
        paddle.y = 100
    }
})
