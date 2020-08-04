class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.reset=createButton('Reset');
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        background(bg);
        var title = createElement('h2');
        title.html("Car racing game");
        title.position(displayWidth/2,100);

        this.input.position(displayWidth/2,displayHeight/2-150);
        this.button.position(displayWidth/2+70,displayHeight/2-115);
        this.reset.position(displayWidth-100,30);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount=playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight/2-100);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);

        })
    }
}
