
/*global Player, Path, Note, Sound*/
var viz;
var stage;
var nowPlaying;

//eg, if n=200, get back a random number between -100 and 100
function getPosOrNegRandomNumber(n) {
    var random = Math.floor(Math.random() * n) - n / 2;
    return random;
}

function getDistance(clip1, clip2) {
    var dx = (clip2.x - clip1.x) * (clip2.x - clip1.x);
    var dy = (clip2.y - clip1.y) * (clip2.y - clip1.y);
    var distance = Math.sqrt(dx + dy);
    return distance;
}

function getXYDistance(clip1, clip2) {
    var dx = (clip2.x - clip1.x);
    var dy = (clip2.y - clip1.y);
    var distance = {};
    distance.x = dx;
    distance.y = dy;
    return distance;
}

function clearTweens(_c) {
    var thisClip = _c;
    if (thisClip.tweenX) {
        thisClip.tweenX.setPaused(true);
        thisClip.tweenX = null;
    }
    if (thisClip.tweenY) {
        thisClip.tweenY.setPaused(true);
        thisClip.tweenY = null;
    }
    if (thisClip.tweenAlpha) {
        thisClip.tweenAlpha.setPaused(true);
        thisClip.tweenAlpha = null;
    }
    if (thisClip.tweenWait) {
        thisClip.tweenWait.setPaused(true);
        thisClip.tweenWait = null;
    }
}
//uses a pair of points
function getDistanceByCoords(_coords0, _coords1) {
    var coords0 = _coords0;
    var coords1 = _coords1;
    var distance = Math.sqrt(Math.pow(Math.abs(coords0[0] - coords1[0]), 2) + Math.pow(Math.abs(coords0[1] - coords1[1]), 2));
    return distance;
}

//
//AN ALL-PURPOSE SOUND PLAYING CLASS
// to loop forever, set _loop to -1
//song file size: 61,776
//song bitrate: 96 kb/sec
//therefore: song duration = 61,776/96 = 
//var songDuration = 643.5;
//call it like this: soundToPlay = new Sound("../../resources/04_26_ex_4_5new_loop.mp3", songDuration, 0, -1);
//NOTE: -1 will loop forever, otherwise it's 0 or the number of loops you want
function Sound(_instance, _duration, _id, _loop) {
    this.soundInstance = createjs.Sound.createInstance(_instance, 0, _duration);
    this.id = _id;
    this.soundDuration = _duration;
    this.loop = _loop;
    this.init();

}
Sound.prototype.init = function() {
    console.log("Sound.init");
    this.soundInstance.pause();
    this.soundInstance.setVolume(0.5);
    this.soundInstance.setPosition(0);
    this.firstRun = true;
};
Sound.prototype.playSound = function() {
    console.log("Sound.playSound");

    createjs.Sound.setMute(false);
    if (this.firstRun) {
        console.log("first time we press play, call play()");
        this.soundInstance.play({
            offset: this.startPosition,
            delay: 0,
            loop: this.loop
        });
    }
};
Sound.prototype.stopSound = function() {
    console.log("Sound.stopSound");
    this.firstRun = false;
    createjs.Sound.setMute(true);
    //this.soundInstance.stop();
};
Sound.prototype.unMute = function() {
    console.log("unMute");
    createjs.Sound.setMute(false);

};

//Path object
function Path(_root, pClip, pId, playerProto, numPaths) {
    //console.log("new instance of Path");
    this.mc = pClip;
    this.mc.objct = this;
    this.proto = playerProto;
    this.mov = _root;
    this.pos = this.mc.position_mc;
    //console.log("path " + pId + " pos.x: " + this.mc.position_mc.x);
    this.id = pId;
    this.shad = null;
    this.numPaths = numPaths;

    this.init();
}

Path.prototype.init = function() {
    //console.log("path.init");
    this.pos.visible = false;
    this.mc.x = 0;
    this.mc.y = 0;
    this.mc.visible = false;

    var framesGap = Math.round(this.mc.timeline.duration / this.numPaths);
    //console.log("framesGap: " + framesGap);
    //console.log("going to frame: " + (this.id-1)*framesGap);
    this.mc.gotoAndStop((this.id - 1) * framesGap);
};

//Chair object
function Chair(_root, pClip, pId) {
    //console.log("new chair");
    this.mc = pClip;
    this.mc.objct = this;
    this.id = pId;
    this.mov = _root;
    this.targets = [this.mc.target1_mc, this.mc.target2_mc, this.mc.target3_mc];
    this.closest = null;
    this.players = null;

    //var text = new createjs.Text(this.id, "20px Arial", "#ff7700");
    //this.mc.addChild(text);
    //
    this.init();
}
Chair.prototype.init = function() {
    this.players = null;
    this.closest = [];
    var i;
    for (i = 0; i < this.targets.length; i++) {
        this.targets[i].occupied = false;
    }
};
Chair.prototype.getClosest = function(thePlayers) {
    //console.log("Chair.getClosest");
    this.closest = [];
    var i, thisPlayer, playerPoint, targetPoint;
    for (i = 0; i < thePlayers.length; i++) {
        thisPlayer = thePlayers[i];

        playerPoint = thisPlayer.center.localToGlobal(0, 0);
        targetPoint = this.targets[0].localToGlobal(0, 0);
        thisPlayer.distance = Math.round(getDistance(playerPoint, targetPoint));


        this.closest.push(thisPlayer);
    }
    this.closest.sort(function(a, b) {
        return a.distance - b.distance;
    });
    //this.closest.sortOn("distance"+this.id, Array.NUMERIC);
};



////////////////////////////////////////////////////////////
//Player object
function Player(_root, pClip, pId, playerProto, thePaths) {
    //console.log("create new instance of Player");
    this.mc = pClip;
    this.mc.objct = this;
    this.mc.scaleX = playerProto.scaleX;
    this.mc.scaleY = playerProto.scaleY;
    this.mov = _root;
    this.id = pId;
    this.path = null;
    //this.mc.dyn_txt.text = this.id;
    this.mc.dyn_txt.visible = false;
    this.chair = null;

    this.path = thePaths[this.id - 1];
    this.center = this.mc.center_mc;
    this.center.visible = false;
    this.gettingUp = false;
    this.center.alpha = 0.15;
    this.distances = [];
    this.sitting = false; //we're not in a chair yet
    this.double = false; //no two guys in a chair yet
    this.done = false; //is the whole action complete?
    //
    this.init();
}

Player.prototype.reset = function() {
    createjs.Ticker.off("tick", this.listener);
    this.chair = null;
    this.sitting = false;
    this.double = false;
    this.doubleTop = false;
    this.numSitting = 0;
    this.done = false;
    nowPlaying = false;
};
Player.prototype.init = function() {
    //console.log("Player.init");
    this.reset();
    this.setPathPosition();
    this.stand();
};
Player.prototype.floatTo = function(_clip, _x, _y, _speed, _func, _wait, _tweenEase) {
    var thisClip = _clip;
    var thisX = _x;
    var thisY = _y;
    var thisFunc = _func;
    var speed = _speed;
    var tweenEase = _tweenEase || createjs.Ease.sineInOut;
    var thisWait = _wait || null;
    var func;

    if (thisWait === null || thisWait === undefined) {
        thisWait = 0;
    }

    if (thisFunc) {
        var that = this;
        func = function() {
            thisFunc(that);
        };
    } else {
        func = function() {
            //console.log("called empty floatto function");
            //do nothing
        };
    }


    var duration = speed;
    var funcCalled = false;

    clearTweens(thisClip);

    if (thisX !== thisClip.x) {
        thisClip.tweenX = createjs.Tween.get(thisClip).to({
            x: thisX
        }, duration, tweenEase).wait(thisWait).call(func);
        funcCalled = true;
    }
    if (thisY !== thisClip.y) {
        if (funcCalled) {
            thisClip.tweenY = createjs.Tween.get(thisClip).to({
                y: thisY
            }, duration, tweenEase);
        } else {
            thisClip.tweenY = createjs.Tween.get(thisClip).to({
                y: thisY
            }, duration, tweenEase).wait(thisWait).call(func);
            funcCalled = true;
        }
    }
    if (!funcCalled) {
        func();
    }
};
Player.prototype.stand = function(pFunc) {
    //console.log("stand");
    var thisFunc = pFunc;
    this.walking = false;
    this.mc.gotoAndStop("standing");
    //this.setShadow();

    if (thisFunc !== undefined) {
        this[thisFunc]();
    }
};
Player.prototype.walkBack = function() {
    this.goToward(this.path.pos, "stand", "setPathPosition");
    this.gettingUp = false;
};
Player.prototype.joinCircle = function() {
    //console.log("Player.joinCircle");
    this.setRandomWalk();
    var that = this;
    nowPlaying = true;
    this.listener = createjs.Ticker.addEventListener("tick", function() {
        that.setPathPosition();
    });
};
Player.prototype.setRandomWalk = function() {
    var randomFrame = Math.floor(Math.random() * 11) + 1;
    this.mc.gotoAndPlay(randomFrame);
    this.walking = true;
};
//player is passed in from Chair
Player.prototype.sit = function(player) {
    console.log("sit attempt");
    if (player !== null && player.chair !== null) {
        console.log("sit success");
        player.mc.rotation = player.chair.mc.rotation;
        player.mc.gotoAndPlay("sit");
        player.walking = false;
        player.done = true;
    }

};
Player.prototype.checkTarg = function() {
    if (this.targ === this.chair.targets[1]) {
        this.mc.gotoAndPlay("look right");
    } else if (this.targ === this.chair.targets[2]) {
        this.mc.gotoAndPlay("look left");
    }
};
Player.prototype.setPathPosition = function() {
    //console.log("setPathPosition");
    if (this.path) {
        this.mc.x = this.path.pos.x;
        this.mc.y = this.path.pos.y;
        this.mc.rotation = this.path.pos.rotation;
    }

};
Player.prototype.setRotation = function(pAngle) {
    var thisAngle = pAngle;
    this.mc.rotation = thisAngle;
};
Player.prototype.setShadow = function() {};
Player.prototype.simpleGotoChair = function(pChair) {

    createjs.Ticker.off("tick", this.listener);

    this.chair = pChair;

    var dist = getXYDistance(this.chair.targets[0].localToGlobal(0, 0), this.mc);



    var angle = Math.atan2(dist.y, dist.x) * 180 / Math.PI - 180;
    this.setRotation(angle);
    this.targ = this.chair.targets[0];
    this.sitting = true;
    var targetPoint = this.chair.targets[0].localToGlobal(0, 0);
    this.floatTo(this.mc, targetPoint.x, targetPoint.y, 1000, this.sit, 50);

};
Player.prototype.doubleGotoChair = function(pChair) {

    createjs.Ticker.off("tick", this.listener);

    var dist1, dist2;
    this.chair = pChair;
    if (this.chair.targets[1].occupied === true) {
        this.targ = this.chair.targets[2];
    } else if (this.chair.targets[2].occupied === true) {
        this.targ = this.chair.targets[1];
    } else {
        dist1 = getDistance(this.chair.targets[1], this.mc);
        dist2 = getDistance(this.chair.targets[2], this.mc);
        if (dist1 < dist2) {
            this.targ = this.chair.targets[1];
        } else {
            this.targ = this.chair.targets[2];
        }
    }
    var dist = getXYDistance(this.targ.localToGlobal(0, 0), this.mc);
    var angle = Math.atan2(dist.y, dist.x) * 180 / Math.PI - 180;
    console.log("angle: " + angle);
    this.setRotation(angle);

    this.targ.occupied = true;

    var targetPoint = this.targ.localToGlobal(0, 0);
    this.floatTo(this.mc, targetPoint.x, targetPoint.y, 1000, this.sit, 50);
    this.sitting = true;
    this.double = true;
};



////////////////////////////////////////////////
//Note object
function Note(root, pClip, pId, noteProto) {
    this.mc = pClip;
    this.mc.objct = this;
    this.id = pId;
    this.proto = noteProto;
    this.mov = root;
    this.notable = this.mc.notable_mc;
    this.poof = this.mc.poof_mc;
}

Note.prototype.init = function() {
    console.log("Note.init");
    this.mc.alpha = 0.60;
    this.mc.gotoAndStop("default");
    this.mc.visible = false;
    this.notable.visible = true;
    var variablity = 1;
    var randomNum = Math.round(Math.random() * 2 - 1);
    this.mc.scaleX = this.proto.scaleX + randomNum * variablity;
    this.mc.scaleY = this.proto.scaleY + randomNum * variablity;
    nowPlaying = true;
    createjs.Ticker.off("tick", this.Notelistener);
};
Note.prototype.wait = function() {
    //console.log("Note.wait");
    var waitNum = this.mc.timeline.duration;
    var randomWait = Math.ceil(Math.random() * waitNum);
    this.count = 0;
    var that = this;
    this.count = 0;
    this.Notelistener = createjs.Ticker.addEventListener("tick", function() {
        that.update(randomWait);
    });
};
Note.prototype.update = function(randomWait) {
    //console.log("Note.update");
    this.count++;
    if (this.count >= randomWait) {
        this.floatIn();
    }

};
Note.prototype.stop = function() {
    console.log("NOTE STOP");
    createjs.Ticker.off("tick", this.Notelistener);
    nowPlaying = false;
    this.count = 100;
};
Note.prototype.floatIn = function() {
    //console.log("floatIn");
    createjs.Ticker.off("tick", this.Notelistener);


    if (nowPlaying === true) {
        //console.log("nowPlaying so make the note visible");
        this.mc.visible = true;
        this.notable.visible = true;
        var randomNum = Math.ceil(Math.random() * 5);
        this.mc.gotoAndStop("note" + randomNum);
        randomNum = Math.random();
        var thisHeight = 350;
        var thisWidth = 700;
        var perimeter = 2 * thisHeight + 2 * thisWidth;
        var margin = 0;
        if (randomNum < thisWidth / perimeter) {
            randomNum = Math.random();
            this.mc.x = randomNum * thisWidth;
            this.mc.y = margin * -1;
        } else if (randomNum < (thisWidth + thisHeight) / perimeter) {
            randomNum = Math.random();
            this.mc.x = thisWidth + margin;
            this.mc.y = randomNum * thisHeight;
        } else if (randomNum < (2 * thisWidth + thisHeight) / perimeter) {
            randomNum = Math.random();
            this.mc.x = randomNum * thisWidth;
            this.mc.y = thisHeight + margin;
        } else {
            randomNum = Math.random();
            this.mc.x = margin * -1;
            this.mc.y = randomNum * thisHeight;
        }
        var variablity = 20;
        randomNum = Math.random() * 2 - 1;
        this.mc.rotation = randomNum * variablity;
        this.mc.gotoAndPlay("default");
        randomNum = getPosOrNegRandomNumber(200);
        var destinationX = thisWidth / 2 + randomNum;
        var destinationY = thisHeight / 2 + randomNum;
        // console.log("flating to, count is: " + this.count);
        this.floatTo(this.mc, destinationX, destinationY, 2000, this.replay, 0);
    } else {
        this.init();
    }
};
Note.prototype.replay = function(note) {
    if (nowPlaying === true) {
        note.init();
        note.wait();
    }
};
Note.prototype.floatTo = function(_clip, _x, _y, _speed, _func, _wait, _tweenEase) {
    var thisClip = _clip;
    var thisX = _x;
    var thisY = _y;
    var thisFunc = _func;
    var speed = _speed;
    var tweenEase = _tweenEase || createjs.Ease.sineInOut;
    var thisWait = _wait || null;
    var func;

    if (thisWait === null || thisWait === undefined) {
        thisWait = 0;
    }

    if (thisFunc) {
        var that = this;
        func = function() {
            thisFunc(that);
        };
    } else {
        func = function() {
            //console.log("called empty floatto function");
            //do nothing
        };
    }

    var duration = speed;
    var funcCalled = false;

    clearTweens(thisClip);

    if (thisX !== thisClip.x) {
        thisClip.tweenX = createjs.Tween.get(thisClip).to({
            x: thisX
        }, duration, tweenEase).wait(thisWait).call(func);
        funcCalled = true;
    }
    if (thisY !== thisClip.y) {
        if (funcCalled) {
            thisClip.tweenY = createjs.Tween.get(thisClip).to({
                y: thisY
            }, duration, tweenEase);
        } else {
            thisClip.tweenY = createjs.Tween.get(thisClip).to({
                y: thisY
            }, duration, tweenEase).wait(thisWait).call(func);
            funcCalled = true;
        }
    }
    if (!funcCalled) {
        func();
    }
};

function Btn(BtnAttrs) {

    // these are required
    this.mc = BtnAttrs.mc;
    this.btnName = BtnAttrs.name;
    this.func = BtnAttrs.func;
    this.enableBool = BtnAttrs.enableBool;
    this.enableType = BtnAttrs.enableType;
    this.mov = BtnAttrs.mov;

    this.isDown = false;


    if (BtnAttrs.idNum === null || BtnAttrs.idNum === undefined) {
        this.idNum = null;
    } else {
        this.idNum = BtnAttrs.idNum;
    }

    this.txt = null;
    if (this.mc.txt_mc) {
        this.mc.txt_mc.gotoAndStop(this.btnName);
    }
    if (this.mc.txtDyn_mc) {
        this.txt = this.mc.txtDyn_mc.dynBtn_txt;
    } else if (this.mc.btnMedTxtDyn_mc) {
        this.txt = this.mc.btnMedTxtDyn_mc.btnMedTxtDyn_txt;
    }

    this.btnShadow = null;
    if (this.mc.btnShad_mc) {
        this.btnShadow = this.mc.btnShad_mc;
    } else if (this.mc.btnMedShad_mc) {
        this.btnShadow = this.mc.btnMedShad_mc;
    }

    this.mc.objct = this;
    this.mc.tweenAlpha = null;

    if (this.txt) {
        this.txt.text = this.btnName;
    }

    //changes    
    this.mc.mouseChildren = false;

    var rolloverFunc = function(eventObj) {
        document.body.style.cursor = 'pointer';
        this.objct.handleOnMouseOver(eventObj);
    };
    this.rolloverFunc = this.mc.on("rollover", rolloverFunc);

    var rolloutFunc = function(eventObj) {
        document.body.style.cursor = 'default';
        this.objct.handleOnMouseOut(eventObj);
    };
    this.rolloutFunc = this.mc.on("rollout", rolloutFunc);

    var mousedownFunc = function(eventObj) {
        this.objct.handleOnPress(eventObj);
    };
    this.mousedownFunc = this.mc.on("mousedown", mousedownFunc);

    var pressupFunc = function(eventObj) {
        this.objct.handleOnClick(eventObj);
    };
    this.pressupFunc = this.mc.on("pressup", pressupFunc);

    this.init();
}

Btn.prototype.init = function(_bool) {
    this.isDown = false;
    if (this.enableType === "not visible") {
        this.mc.visible = false;
    }
    this.enable(false);
};

Btn.prototype.handleOnMouseOver = function(eventObj) {
    this.mc.gotoAndStop("over");
};

Btn.prototype.handleOnMouseOut = function(eventObj) {
    if (this.mc.mouseEnabled && !this.isDown) {
        this.mc.gotoAndStop("up");
    }
};

Btn.prototype.handleOnPress = function(eventObj) {
    this.mc.gotoAndStop("down");
    this.isDown = true;
};

Btn.prototype.handleOnClick = function(eventObj) {
    this.isDown = false;
    this.func(this);
    this.enable(this.enableBool);
};


Btn.prototype.enable = function(_bool) {
    var thisBool = _bool;

    this.mc.mouseEnabled = thisBool;
    if (this.mc.tweenAlpha !== null && this.mc.tweenAlpha !== undefined) {
        //setPaused does what removeTweens is supposed to do
        this.mc.tweenAlpha.setPaused(true);
        //removeTweens theoretically should work, but there seems to be a bug
        //left it in anyway, doesn't seem to do anything
        createjs.Tween.removeTweens(this.mc);
    }

    if (thisBool) {
        this.mc.gotoAndStop("up");
        this.mc.visible = true;
        if (this.btnShadow) {
            this.btnShadow.visible = true;
        }
        if (this.mc.alpha !== 1) {
            this.mc.tweenAlpha = new createjs.Tween.get(this.mc).to({
                alpha: 1
            }, 150, createjs.Ease.sineInOut);
        }
    } else {
        if (this.enableType === "not visible") {
            var objct = this;
            var func = function() {
                objct.mc.visible = false;
            };
            if (this.mc.alpha !== 0) {
                this.mc.tweenAlpha = new createjs.Tween.get(this.mc).to({
                    alpha: 0
                }, 150, createjs.Ease.sineInOut).call(func);
            }
            if (this.btnShadow) {
                this.btnShadow.visible = false;
            }
        }
        this.mc.gotoAndStop("disabled");
        this.isDown = false;
    }
};