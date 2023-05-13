class Room1 extends AdventureScene {
    constructor() {
        super("room1", "Manstost Bridge");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Manstot', 'ManstotBridge.png');
        this.load.image('Jimmie', 'jimmie.png');
        this.load.image('Birds', 'bords.png');
        }


    onEnter() {

        let Manstot = this.add.image(this.w * 0.4, this.h * 0.5, 'Manstot')
        .setDepth(-1)
        .setScale(1);

        let Jimmie = this.add.image(this.w * 0.15, this.h * 0.6, 'Jimmie')
            .setScale(.8)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I'm Jimmie, and I like watching the birds"))
            .on('pointerdown', () => {
                if (this.hasItem("Pidgeon Meat")) {
                    this.showMessage("Hopefully they'll be back, like daddy");
                } else {
                    this.showMessage("Don't scare the birds");
                }
            });

        let pidgeon = this.add.image(this.w * 0.5, this.h * 0.6, 'Birds')
            .setScale(.4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Birds")
            })
            .on('pointerdown', () => {
                this.showMessage("You took Jimmie's birds");
                this.gainItem('Pidgeon Meat');
                this.tweens.add({
                    targets: pidgeon,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pidgeon.destroy()
                });
            });

    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("room2", "Running Away");
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('Bar', 'bar.png');
        this.load.image('Drunkard', 'drunkman.png');
        this.load.image('Beer', 'beer.png');
    }

    onEnter() {
        let Bar = this.add.image(this.w * 0.3, this.h * 0.5, 'Bar')
        .setDepth(-1)
        .setScale(1);

        let Drunkard = this.add.image(this.w * 0.2, this.h * 0.85, 'Drunkard')
            .setScale(.8)
            .setInteractive()
            .on('pointerover', () => this.showMessage("*Buuuuurp*"))
            .on('pointerdown', () => {
                if (this.hasItem("Mug of Beer")) {
                    this.showMessage("LETS GOOOO");
                    this.loseItem("Mug of Beer");
                    this.gainItem("Drunkard");
                    this.tweens.add({
                        targets: Drunkard,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => Drunkard.destroy()
                    });
                } else {
                    this.showMessage("I need a drink");
                }
            });
        
        let Beer = this.add.image(this.w * 0.55, this.h * 0.7, 'Beer')
            .setScale(.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Cold Drink"))
            .on('pointerdown', () => {
                this.gainItem('Mug of Beer');
                this.tweens.add({
                    targets: Beer,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => Beer.destroy()});
                this.showMessage("A little drink won't hurt on the run")});
            
            

    }
}

class Room3 extends AdventureScene {
    constructor() {
        super("room3", "Pants' Office");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Office', 'office.png');
        this.load.image('Cube', 'jimmie.png');
        this.load.image('', 'bords.png');
        }


    onEnter() {

        let Manstot = this.add.image(this.w * 0.4, this.h * 0.5, 'Manstot')
        .setDepth(-1)
        .setScale(1);

        let Jimmie = this.add.image(this.w * 0.15, this.h * 0.6, 'Jimmie')
            .setScale(.8)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I'm Jimmie, and I like watching the birds"))
            .on('pointerdown', () => {
                if (this.hasItem("Pidgeon Meat")) {
                    this.showMessage("Hopefully they'll be back, like daddy");
                } else {
                    this.showMessage("Don't scare the birds");
                }
            });

        let pidgeon = this.add.image(this.w * 0.5, this.h * 0.6, 'Birds')
            .setScale(.4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Birds")
            })
            .on('pointerdown', () => {
                this.showMessage("You took Jimmie's birds");
                this.gainItem('Pidgeon Meat');
                this.tweens.add({
                    targets: pidgeon,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pidgeon.destroy()
                });
            });

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
    scene: [Room2, Intro, Room1, Outro],
    global: { 
        count: 0 
    },
    title: "Adventure Game",

});

