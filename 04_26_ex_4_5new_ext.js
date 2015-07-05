/*global Btn, Player, Note, Chair, Path, Sound*/

function Panel1(viz){
  //var root = viz.exportRoot;
    console.log("Panel 1");

  function initViz(){
      /*** Original ActionScript ***
      
       #include "../../../AS2Bridge/AS2Bridge.as"
      *** End Original ActionScript ***/
  }

  var frameActions = {};
  frameActions._4 = function(me){
      me.stop();
      viz.getPlayer().done();
  };


  viz.onPlay = function(){
    viz.defaultOnPlay();
  };

  viz.onReset = function(){
    viz.defaultOnReset();
    initViz();
  };
  initViz();

  return frameActions;
}

function Panel2(viz){
    console.log("Panel 2");
  var root = viz.exportRoot;
  var lib = viz.lib;
  var chairs = [root.chair1_mc, root.chair2_mc, root.chair3_mc, root.chair4_mc, root.chair5_mc];
  var numPaths = 6;
  var thePlayers =[];
  var thePaths = [];
  var playMusicButton;
  var stopMusicButton;
  var i;
  var theChairs = [];
  var theNotes = [];

  
  //song file size: 61,776
  //song bitrate: 96 kb/sec
  //therefore: song duration = 61,776/96 = 
  var songDuration = 643.5;
  //var songInstance = createjs.Sound.createInstance("../../resources/04_26_ex_4_5new_loop.mp3");
  var soundToPlay;
  var capShowing=null;
  var readyListener;
  var showCap = function showCap(_cap) {
      var thisCap = _cap;
      if(thisCap === null){
          if(viz){
              viz.getPlayer().clearEventCaption();
          }
      } else if(thisCap !== capShowing && thisCap !== undefined){
          if(viz){
              viz.getPlayer().showEventCaption(thisCap);
          }
          //console.log(thisCap);

      }
      capShowing = thisCap;
  };
  var checkReady = function(){
      console.log("is it ready?");
      var i, numSitting=0;
      for ( i = 0; i<thePlayers.length; i++) {
          if (thePlayers[i].done === true){
              numSitting++;
          }
      }
      if (numSitting === 6){
          console.log("READY");
          createjs.Ticker.off("tick", readyListener);
          playMusicButton.enable(true);
          showCap("p1_cap2");
      }
  };
 
  
  function startWalk() {
      var thisPlayer;
      for ( i = 0; i<theChairs.length; i++) {
      theChairs[i].init();
      }
      for ( i = 0; i<thePlayers.length; i++) {
       thisPlayer = thePlayers[i];
       thisPlayer.reset();
       thisPlayer.init();
       thisPlayer.joinCircle();
      }
      for ( i = 0; i<thePaths.length; i++) {
      thePaths[i].mc.play();
      }
      var thisNote;
      for (i = 0; i<theNotes.length; i++) {
          thisNote = theNotes[i];
          thisNote.init();
          thisNote.wait();
          thisNote.poof.visible = false;
          }
      //theStopBtn.enable(true);
      //showCap(capClickStop);
      }
 var playMusic = function(){
     showCap("p1_cap1");
         soundToPlay.playSound();
         
         startWalk();
         console.log("playMusic");
         stopMusicButton.enable(true);
         playMusicButton.enable(false);
  };
  function stopMusic(){
      console.log("stop music");
      showCap(null);
      soundToPlay.stopSound();
      //don't enable Play button till everybody is seated or else all hell breaks loose...
      readyListener = createjs.Ticker.addEventListener("tick", checkReady);
          var i, j, thisPlayer, doubleTargChair, thisChair, thisNote;
          for (i = 0; i<thePaths.length; i++) {
          thePaths[i].mc.stop();
          }
          for (i = 0; i<thePlayers.length; i++) {
          thisPlayer = thePlayers[i];
          createjs.Ticker.off("tick", thisPlayer.listener);

          }
          
          for (i = 0; i<theChairs.length; i++) {
              theChairs[i].getClosest(thePlayers);
          }
          
         //randomly select a chair and put the two closest players in it
        var randomNum = Math.floor(Math.random()*theChairs.length);
        doubleTargChair = theChairs[randomNum];//randomly select a chair for two players to sit in
        //console.log("random double chair is chair number " + doubleTargChair.id);
        //doubleTargChair = theChairs[0];//temp for testing with just hte first chair
        doubleTargChair.players = [doubleTargChair.closest[0], doubleTargChair.closest[1]];//the two closest players to the "double" chair
        doubleTargChair.players[0].doubleGotoChair(doubleTargChair, 1);
        doubleTargChair.players[1].doubleGotoChair(doubleTargChair, 2);
          
        for ( i = 0; i<theChairs.length; i++) {
        thisChair = theChairs[i];
            if (thisChair !== doubleTargChair) {//this chair alreay has two players sitting in it, so skip it
                //console.log("chair number " + thisChair.id);
                for (j = 0; j< thisChair.closest.length; j++){
                    if (thisChair.closest[j].sitting===false){//find the nearest chair that's not occupied, eg, has a value for targ
                        thisPlayer = thisChair.closest[j];
                        thisPlayer.simpleGotoChair(thisChair);
                        break;
                    }
                    
                }
               

            }
        }
          
          for (i = 0; i<theNotes.length; i++) {
              thisNote = theNotes[i];
              thisNote.poof.visible = true;
              thisNote.poof.gotoAndPlay("poof");
              thisNote.notable.visible = false;
              thisNote.stop();
          }
          
  }
  function reset(){
      capShowing=null;
      playMusicButton.enable(true);
      stopMusicButton.enable(false);
      var i;
      for (i = 0; i < numPaths; i++) {
          //thisClip = playerProto.duplicateMovieClip("player" + (i + 1), playerProto._parent.getNextHighestDepth());
         
          thePlayers[i].init();
        }
      soundToPlay.stopSound();
      
      for ( i = 0; i<theChairs.length; i++) {
          theChairs[i].init();
          }
      for ( i = 0; i<thePlayers.length; i++) {
           thePlayers[i].reset();
           thePlayers[i].init();
           //thePlayers[i].joinCircle();
          }
          
          var thisNote;
          for (i = 0; i<theNotes.length; i++) {
              thisNote = theNotes[i];
              thisNote.init();
              thisNote.stop();

              thisNote.poof.visible = false;
              }
  }
  function initViz(){
      console.log("Panel 2 initViz");
      
      
      //create a sound to play
      soundToPlay = new Sound("../../resources/04_26_ex_4_5new_loop.mp3", songDuration, 0, -1);

      var i, thisClip;
      
      var playerProto = root.players_mc.player_mc;
      var shadProto = root.playerShads_mc.player_mc;
      
      root.path_mc.visible = false;
      playerProto.visible = false;
      var pathProto = root.path_mc;
      pathProto.visible = false;
      for (i = 0; i < numPaths; i++) {
         thisClip = new lib.Path();
         root.addChild(thisClip);
        thePaths.push(new Path(root, thisClip, (i + 1), playerProto, numPaths));
        
      }
      
      
     
      
      shadProto.visible = false;
      for (i = 0; i < numPaths; i++) {
        //thisClip = playerProto.duplicateMovieClip("player" + (i + 1), playerProto._parent.getNextHighestDepth());
        thisClip = new lib.Player();
        root.addChild(thisClip);
        thePlayers.push(new Player(root, thisClip, (i + 1), playerProto, thePaths));
      }
      
      root.notes_mc.visible = false;
      root.notes_mc.note_mc.visible = false;
      
      var noteProto = root.notes_mc.note_mc;
      noteProto.visible = false;
      for (i = 0; i < 15; i++) {
          thisClip = new lib.Notes();
          root.addChild(thisClip);
          thisClip.x= -20;
          theNotes.push(new Note(root, thisClip, (i + 1), noteProto));
      }
      
      for (i = 0; i < chairs.length; i++) {
        thisClip = chairs[i];
        theChairs.push(new Chair(root, thisClip, (i + 1)));
      }
      
      var BtnAttrs = {
              name: "Play Music",
              mc: root.stop_btn,
              func: playMusic,
              enableBool: false,//does it remain active after clicking?
              enableType: "greyed out",//other option is “greyed out”
              mov: root
          };
      playMusicButton = new Btn( BtnAttrs );
      playMusicButton.enable(true);
      
      BtnAttrs.func = stopMusic;
      BtnAttrs.mc = root.start_btn;
      BtnAttrs.name = "Stop Music";
      BtnAttrs.enableType = "not visible";
      stopMusicButton = new Btn(BtnAttrs);
      stopMusicButton.enable(false);

  }

  var frameActions = {};
  frameActions._6 = function(me){
      /*** Original ActionScript ***
      
       this.prevFrame()
      *** End Original ActionScript ***/
  };

  frameActions._8 = function(me){
      /*** Original ActionScript ***
      
       stop();
      trace("fin");
      *** End Original ActionScript ***/
     // viz.getPlayer().done();
  };


 

  viz.onReset = function(){
    viz.defaultOnReset();
    reset();
  };
  viz.onPause = function(){
      viz.defaultOnPause();
      soundToPlay.stopSound();
  };
  viz.onResume = function() {
      viz.defaultOnResume();
      soundToPlay.unMute();
     };
  initViz();

  return frameActions;
}

function Panel3(viz){
  //var root = viz.exportRoot;

  function initViz(){
      /*** Original ActionScript ***
      
       #include "../../../AS2Bridge/AS2Bridge.as"
      *** End Original ActionScript ***/
  }

  var frameActions = {};
  frameActions._6 = function(me){
      /*** Original ActionScript ***
      
       stop();
      trace("fin");
      *** End Original ActionScript ***/
      viz.getPlayer().done();
  };


  viz.onPlay = function(){
    viz.defaultOnPlay();
  };

  viz.onReset = function(){
    viz.defaultOnReset();
    initViz();
  };
  initViz();

  return frameActions;
}

function Panel4(viz){
  //var root = viz.exportRoot;

  function initViz(){
      /*** Original ActionScript ***
      
       #include "../../../AS2Bridge/AS2Bridge.as"
      *** End Original ActionScript ***/
  }

  var frameActions = {};
  frameActions._5 = function(me){
      me.stop();
      viz.getPlayer().done();
  };


  viz.onPlay = function(){
    viz.defaultOnPlay();
  };

  viz.onReset = function(){
    viz.defaultOnReset();
    initViz();
  };
  initViz();

  return frameActions;
}


  function setupSymbolActions(){
    var frameActions = {};
//    frameActions.noty = {};
//    frameActions.noty._9 = function(me){
//      /*** Original ActionScript ***
//      
//       this.objct.floatIn();
//      *** End Original ActionScript ***/
//    };

//    frameActions.poof = {};
//    frameActions.poof._5 = function(me){
//      /*** Original ActionScript ***
//      
//       gotoAndStop("default")
//      *** End Original ActionScript ***/
//    };

//    frameActions.path = {};
//    frameActions.path._242 = function(me){
//      /*** Original ActionScript ***
//      
//       gotoAndPlay("start");
//      *** End Original ActionScript ***/
//    };

//    frameActions.top_walking_relative = {};
//    frameActions.top_walking_relative._11 = function(me){
//        if (this.objct.walking === true) {
//            this.gotoAndPlay("default");
//          }
//      /*** Original ActionScript ***
//      
//       if (this.objct.walking == true) {
//        gotoAndPlay("default");
//      }
//      *** End Original ActionScript ***/
//    };
//
//    frameActions.top_walking_relative._17 = function(me){
//      /*** Original ActionScript ***
//      
//       stop();
//      if (this != this.objct.shad) {
//        this.objct.checkTarg();
//      }
//      *** End Original ActionScript ***/
//    };
//
//    frameActions.top_walking_relative._32 = function(me){
//      /*** Original ActionScript ***
//      
//       if (this != this.objct.shad) {
//        this.objct.walkBack();
//      }
//      *** End Original ActionScript ***/
//    };


    return frameActions;
  }

  function panelWrapper(func, libName){
    return function(viz){
      var symbolActions = setupSymbolActions();
      var symbolName;
      for(symbolName in symbolActions){if(symbolActions.hasOwnProperty(symbolName)){
        viz.lib[symbolName].prototype.frameActions = symbolActions[symbolName];
      }}
      viz.lib[libName].prototype.frameActions = func(viz);
    };
  }


