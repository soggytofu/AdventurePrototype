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
        super("room2", "Watered Down Bar");
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
        this.load.image('Office', 'Office.png');
        this.load.image('Cube', 'cube.png');
        }


    onEnter() {

        let Office = this.add.image(this.w * 0.3, this.h * 0.5, 'Office')
        .setDepth(-1)
        .setScale(1);

        let Cube = this.add.image(this.w * 0.58, this.h * 0.18, 'Cube')
            .setScale(.35)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A strange cube"))
            .on('pointerdown', () => {
            this.showMessage("It looks like it requires a high IQ to solve")
            this.gainItem('IQ Cube');
            this.tweens.add({
                targets: Cube,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => Cube.destroy()});
            });
    }
}

class Room4 extends AdventureScene {
    constructor() {
        super("room4", "The Church");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('Church', 'Church.png');
        this.load.image('Barbruh', 'Barbruh.png');
        }


    onEnter() {
        let mesageCount = 0;

        let Church = this.add.image(this.w * 0.4, this.h * 0.5, 'Church')
        .setDepth(-1)
        .setScale(1);

        let Barbruh = this.add.image(this.w * 0.3, this.h * 0.7, 'Barbruh')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Diemon is trying to hunt you down? I can help exorcise it"))
            .on('pointerdown', () => {
                if (this.hasItem("IQ Cube") && this.hasItem("Pidgeon Meat") && mesageCount == 2) {
                    this.showMessage("This is perfect! We can trap Diemon with this, go on, I'll set the trap");
                    this.loseItem("IQ Cube");
                    this.loseItem("Pidgeon Meat");
                    AdventureScene.count++;
                    console.log(AdventureScene.count);
                }
                else if (this.hasItem("Drunkard") && (mesageCount == 1)) {
                    this.showMessage("A pair of fresh legs? That can help me be taller. Now I just need some food and something to stimulate Diemon's brain");
                    this.loseItem("Drunkard");
                    mesageCount++;
                    console.log(mesageCount);
                } 
                else if (mesageCount == 0) {
                    this.showMessage("If you can help me be as tall as my big sister, I'll help");
                    mesageCount++;
                    console.log(mesageCount);
                }
                else if (mesageCount > 0){
                    this.showMessage("You don't have what I need. Go on ahead, I'll try my best to hold on");
                    console.log(mesageCount);
                }
            });
    }
}

class Room5 extends AdventureScene {
    constructor() {
        super("room5", "You Died");
    }
    
    onEnter() {

        AdventureScene.count++;
        this.cameras.main.setBackgroundColor('#c4bbb4');
        let DeathMessage = this.add.text(this.w * 0.1, this.h * 0.3, "It is your end, Barbruh could not stop Diemon from catching you and eating you like a snack")
            .setFontSize(this.s * 3)
            .setInteractive()
            .setWordWrapWidth(this.w * 0.5 - 2 * this.s)
            .on('pointerover', () => {
                this.showMessage("GG Git Gud")
            })
    }
}

class Room6 extends AdventureScene {
    constructor() {
        super("room6", "You Won");
    }
    
    onEnter() {
        this.cameras.main.setBackgroundColor('#c4bbb4');
        let WinMessage = this.add.text(this.w * 0.1, this.h * 0.3, "You managed to defeat Diemon with the power of braincells and food")
            .setFontSize(this.s * 3)
            .setInteractive()
            .setWordWrapWidth(this.w * 0.5 - 2 * this.s)
            .on('pointerover', () => {
                this.showMessage("GG EZ")
            })
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
        this.input.on('pointerdown', () => {
        this.scene.start('intro')
        AdventureScene.count = 1;
        });
        
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Room1, Room2, Room3, Room4, Room5, Room6, Outro],
    title: "Adventure Game",

});

