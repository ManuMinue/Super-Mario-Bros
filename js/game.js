/**
 * Indica el fondo del escenario.
 * @type {Number}
 */
var fondo_escenario = 580;

window.addEventListener('load', function() {
    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus({ audioSupported: ['mp3', 'ogg'] })
        /**
         * Se añaden los módulos necesarios para el funcionamiento de
         * la aplicación.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        /**
         * Se ajusta la ventana.
         */
        .setup({
            width: 320,
            height: 480
        })
        /**
         * Se le añade funcionalidad.
         */
        .controls().touch().enableSound();
    /**
     * Cargamos los diversos componenentes que utilizaremos durante el juego.
     */
    loadMario(Q);
    loadPrincessPeach(Q);

    loadDefaultEnemy(Q);
    loadGoomba(Q);
    loadBloopa(Q);

    loadCoin(Q);

    loadEndGame(Q);
    loadMainTitle(Q);
    loadHUB(Q);

    loadLevel1(Q);
    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    Q.loadTMX('level.tmx, mainTitle.png, mario_small.png, mario_small.json, goomba.png, goomba.json, bloopa.png, bloopa.json, princess.png, coin.png, coin.json, music_main.mp3, music_main.ogg, music_die.mp3, music_die.ogg, music_level_complete.mp3, music_level_complete.ogg, coin.mp3, coin.ogg', function() {
        Q.compileSheets('mario_small.png', 'mario_small.json');
        Q.compileSheets('goomba.png', 'goomba.json');
        Q.compileSheets('bloopa.png', 'bloopa.json');
        Q.compileSheets('coin.png', 'coin.json');
        Q.stageScene('mainTitle');
    });
});