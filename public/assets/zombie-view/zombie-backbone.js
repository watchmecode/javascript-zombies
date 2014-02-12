var Zombies = (function(){

  // Zombie Model
  // ------------

  var Zombie = Backbone.Model.extend({
  });

  // Zombie View
  // -----------

  var ZombieView = Backbone.View.extend({
    initialize: function(){
      this.model.on("brains:found", this.eatBrains, this);
      this.counter = 0;
    },

    eatBrains: function(){
      this.counter += 1;
      console.log("eating brains, count", this.counter);
    }
  });

  // Setup Stuff
  // -----------

  var zombie = new Zombie();
  var zombieView = new ZombieView({
    model: zombie
  });

  function eatBrains(){
    $("#eat-brains").click(function(e){
      e.preventDefault();

      zombie.trigger("brains:found");
      console.log("---");
    });
  }

  function raiseTheDead(){
    $("#raise-dead").click(function(e){
      console.log("Raising the dead");
      e.preventDefault();

      zombieView = new ZombieView({
        model: zombie
      });
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
