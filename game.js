class Room1 extends AdventureScene {
    constructor() {
        super("room1", "RUN ASssssssseggdessss");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('room2');
                }
            })

    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("room2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('room1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.load.path = './assets/';
        this.load.image('Background', 'BackgroundPaimon.png');
        this.load.image('Title', 'BenshinBimpact.png');
        this.load.audio('music', 'Song2.mp3');
        }
      
        create() {
            let backofground = this.add.image(this.w * 0.5, this.h * 0.5, 'Background')
            this.add.image(this.w * 0.2, this.h * 0.2, 'Title').setScale(.5);
    
            const music = this.sound.add('music');
            music.setVolume(0.6);
            //music.play();
            music.setVolume(0.6);
    
            const startButton = this.add.text(this.w * 0.2, this.h * 0.3, 'Start', { 
                fontSize: '32px', 
                color: '#ffffff',
                fontStyle: 'bold',
                fontWeight: 'bold' 
            });
            startButton.setOrigin(0.5);
            startButton.setInteractive();
        
            startButton.on('pointerover', () => {
                startButton.setColor('#ff0000');
                startButton.setScale(1.1);
            });
        
            startButton.on('pointerout', () => {
                startButton.setColor('#ffffff');
                startButton.setScale(1);
            });
        
            startButton.on('pointerup', () => {
                this.cameras.main.fadeOut(500);
                this.time.delayedCall(800, () => {
                    music.stop();
                    this.scene.start('room1');
                });
            });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Room1, Room2, Outro],
    title: "Adventure Game",
});

