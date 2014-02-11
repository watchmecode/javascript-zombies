var MemoryEater = (function(){

  function getEater(){
    // delcare a "private" variable
    var largeArray = [];

    var eater = {
      eat: function(){
        for(var i = 0; i<100000; i++){

          var copy = _.extend({}, {
            stuff: i + "<p>Tick tock goes the clock... EXTERMINATE! You will be exterminated! Bring the Humans to me Bring the Humans to me you are not alone in the universe RUN! EXTERMINATE! you are not alone in the universe Donna Noble has left the library. Donna Noble has been saved. Geronimo! Stormageddon, Dark Lord of All EXTERMINATE! Geronimo! Donna Noble Galifreyan Donna Noble has left the library. Donna Noble has been saved. EXTERMINATE! The Shadow Proclamation Tick tock goes the clock... You are better at dying puny human River Song Dalekanium Geronimo! Puny Human! Bow ties are cool Emperor of the Daleks RUN! Amy Pond Puny Human! Skaro The Shadow Proclamation Rose Tyler EXTERMINATE! The Supreme Dalek I am a Dalek You will be exterminated! Davros Reverse the polarity of the positron flow Time War Fantastic! Hello sweetie! wibbly wobbly timey wimey you are not alone in the universe We are Dalek I really hate stairs. EXTERMINATE ALL STAIRCASES! K-9 It's bigger on the inside! wibbly-wobbly timey-wimey the oncoming storm Bow ties are cool Bring the Humans to me Fantastic! EXTERMINATE! Stormageddon, Dark Lord of All Raxacoricofallapatorius Bow ties are cool. Bad Wolf I am a Dalek Reverse the polarity of the neutron flow EXTERMINATE! K-9 EXTERMINATE! Geronimo! It's bigger on the inside! Would you like a jelly baby? Bow ties are cool wibbly-wobbly timey-wimey I hereby invoke The Shadow Proclamation! Donna Noble Skaro The Silence is Coming! The Doctor Mickey Smith puny human We are Dalek Allons-y Spoilers! Bow ties are cool Cult of Skaro Cult of Skaro The Master EXTERMINATE! The Shadow Proclamation I hereby invoke The Shadow Proclamation! Bring the Humans to me DON'T BLINK! You will be exterminated! YOU WILL OBEY! The socks with holes, dummy! Cult of Skaro Davros I am a Dalek I wear a fez now, fezzes are cool Captain Jack Harkness Bring the Humans to me Raxacoricofallapatorius Bad Wolf Demon's Run The Silence is Coming! <p> <p>River Song the oncoming storm The socks with holes, dummy! It's bigger on the inside! The Silence is Coming! Puny Human! YOU WILL OBEY! Donna Noble has left the library. Donna Noble has been saved. puny human Donna Noble has left the library. Donna Noble has been saved. the girl who waited Rory the Roman The socks with holes, dummy! I hereby invoke The Shadow Proclamation! Bow ties are cool. wibbly-wobbly timey-wimey EXTERMINATE! EXTERMINATE! RUN! Hello sweetie! Geronimo Geronimo! Hello, Captain Jack Harkness.  K-9 Donna Noble has left the library. Donna Noble has been saved. Amy Pond Stormageddon, Dark Lord of All ninehundred  Reverse the polarity of the neutron flow EXTERMINATE! Demon's Run K-9 puny human The Doctor Geronimo! Puny Human! EXTERMINATE! Hello sweetie The Silence is Coming! wibbly wobbly timey wimey The Doctor ninehundred  Bring the Humans to me The Doctor IT is the Doctor! Enemy of the Daleks! IT is the Doctor! Enemy of the Daleks! Amy Pond You will be exterminated! Geronimo Bananas are good Rude and not ginger Micky Smith Bow ties are cool wibbly wobbly timey wimey Donna Noble has left the library. Donna Noble has been saved. You will be exterminated! Rory the Roman Delete. Delete. Delete. Bow ties are cool The Silence is Coming! Bow ties are cool Mickey Smith The Silence is Coming! Fantastic! Bad Wolf Hello sweetie! Demon's Run EXTERMINATE! Captain Jack Harkness EXTERMINATE! DON'T BLINK! Reverse the polarity of the neutron flow We are Dalek Geronimo Reverse the polarity of the neutron flow Geronimo! The Shadow Proclamation the girl who waited Reverse the polarity of the positron flow RUN! Galifreyan Spoilers! Mickey Smith Hey, who turned out the lights? You are better at dying Reverse the polarity of the positron flow YOU WILL OBEY! Hello sweetie Skaro Are you my mummy? Amy Pond The Shadow Proclamation Silence will fall ninehundred  Stormageddon, Dark Lord of All wibbly wobbly timey wimey The Supreme Dalek Geronimo The Doctor I wear a fez now, fezzes are cool Cybermen <p>"
          });

          // using a closure, this code 
          // can access the largeArray variable
          largeArray.push(copy);
        }
      },

      getCount: function(){
        // using a closure, this code 
        // can access the largeArray variable
        return largeArray.length;
      },

      clean: function(){
        // using a closure, this code 
        // can access the largeArray variable
        largeArray = [];
      }
    };

    // return the eater object. it still
    // has access to the largeArray variable
    return eater;
  }

  function setupEatButton(eater){
    $("#eat-more").click(function(e){
      e.preventDefault();

      console.log("eating more memory!");
      eater.eat();
      console.log("done! length:", eater.getCount());
    });
  }

  function setupCleanButton(eater){
    $("#eat-less").click(function(e){
      e.preventDefault();

      eater.clean();
      console.log("cleaning up memory. length:", eater.getCount());
    });
  }

  return {
    start: function(){
      var eater = getEater();
      setupEatButton(eater);
      setupCleanButton(eater);
    }
  };

})();
