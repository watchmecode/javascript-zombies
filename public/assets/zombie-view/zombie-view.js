var Zombies = (function(){

  // Zombie Object
  // -------------
 
  var events = new Events();

  function Zombie(){
    this.counter = 0;

    var eatBrainsHandler = this.eatBrains.bind(this);
    events.on("brains:found", eatBrainsHandler);
  }

  Zombie.prototype.eatBrains = function(){
    this.counter += 1;
    console.log("eating brains, count", this.counter);
  };

  // Setup Stuff
  // -----------

  var zombieInstance = new Zombie();

  function eatBrains(){
    $("#eat-brains").click(function(e){
      e.preventDefault();

      events.trigger("brains:found");
      console.log("---");
    });
  }

  function raiseTheDead(){
    $("#raise-dead").click(function(e){
      console.log("Raising the dead");
      e.preventDefault();
      zombieInstance = new Zombie();
    });
  }

  // Public API
  // ----------

  return {
    riseFromTheGrave: function(){
      eatBrains();
      raiseTheDead();
    }
  };

})();
