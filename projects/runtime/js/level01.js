var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createObstacle(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
            
            var obstacleImage = draw.bitmap('img/Small Rock.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }

        createObstacle(700, groundY-30);
        createObstacle(1000, groundY-120);
        createObstacle(1200, groundY-120);
        createObstacle(1500, groundY-30);

       
       function createEnemy(x, y) {
         var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;   
        game.addGameItem(enemy);
        enemy.velocityX = -2;
        enemy.rotationVelocity = 10;

        enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
        enemy.fadeOut();
        console.log('The enemy has hit Halle');
        };
        enemy.onProjectileCollision = function(){
        console.log('Halle has hit the enemy');
        enemy.shrink();
        };
    };      
        createEnemy(400, groundY-100);
        createEnemy(800,groundY-100);
        createEnemy(1400,groundY-50);   
        createEnemy(1800, groundY-100);
        createEnemy(2000,groundY-100);
        createEnemy(2400, groundY-100);   
        createEnemy(2800,groundY-10);
        createEnemy(3200,groundY-100);
        createEnemy(3600,groundY-50);
        createEnemy(4000,groundY-10);
        createEnemy(4400,groundY-100);
        createEnemy(4800,groundY-50);      

            
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
