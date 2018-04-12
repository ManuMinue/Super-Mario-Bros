window.addEventListener('load', function() {
    // Set up an instance of the Quintus engine and include
    // the Sprites, Scenes, Input and 2D module. The 2D module
    // includes the `TileLayer` class as well as the `2d` componet.
    var Q = Quintus()
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX')
        // Maximize this game to whatever the size of the browser is
        .setup({
            width: 320,
            height: 480
        })
        // And turn on default input controls and touch input (for UI)
        .controls().touch();

    Q.Sprite.extend("Mario", {
        init: function(p) {
            this._super(p, {
                sheet: 'marioR',
                x: 150,
                y: 380
            });
            this.add('2d, platformerControls');
        },

        step: function(dt){
            if(this.p.y > 580){
                this.p.x = 150;
                this.p.y = 380;
            }
        }

    });

    Q.scene('level1', function(stage) {
        Q.stageTMX('level.tmx', stage);

        var mario = stage.insert(new Q.Mario());
        stage.add("viewport").follow(mario, {x: true, y: true},{minX: -100, maxX: 256*16, minY: 125, maxY: 32*16});

        stage.viewport.offsetX = -10;
        stage.viewport.offsetY = 168;

    });

    Q.loadTMX('level.tmx, mario_small.png, mario_small.json', function() {
        Q.compileSheets('mario_small.png', 'mario_small.json');
        Q.stageScene('level1');
    });
});