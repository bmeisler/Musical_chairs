// TO DO: Add OR logic so undefined vars get default vals (enableBool,enableType)
// Grig:
// - 2/11/13: Made first changes to version from SVN
// - 2/16/13: Updated with a fresh version from Steve, original version on 2/11/13 was old
// - 2/19/13: Refactored Btn attributes into a single object
// Steve:
// - 2/20/13: removed update property(no longer used)
// - 2/20/13: minor changes to tweening
// - 3/12/13: added btnShadow prop, added txt prop
// - 3/23/13: added idNum prop
// - 10/3/13: fixed idNum setting bug
// - 12/10/13: made changes for cjs 0.7.0 compatibility
// will work in cjs 0.7.0 player with or without compatibity patch
// will not work in cjs 0.5.0 player
// made functions removable 01/23/14
/*global Btn*/
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

    var rolloverFunc = function (eventObj) {
        document.body.style.cursor = 'pointer';
        this.objct.handleOnMouseOver(eventObj);
    };
    this.rolloverFunc = this.mc.on("rollover", rolloverFunc);
    
    var rolloutFunc = function (eventObj) {
        document.body.style.cursor = 'default';
        this.objct.handleOnMouseOut(eventObj);
    };
    this.rolloutFunc = this.mc.on("rollout", rolloutFunc);

    var mousedownFunc = function (eventObj) {
        this.objct.handleOnPress(eventObj);
    };
    this.mousedownFunc = this.mc.on("mousedown", mousedownFunc);

    var pressupFunc = function (eventObj) {
        this.objct.handleOnClick(eventObj);
    };
    this.pressupFunc = this.mc.on("pressup", pressupFunc);

    this.init();
}

Btn.prototype.init = function (_bool) {
    this.isDown = false;
    if (this.enableType === "not visible") {
        this.mc.visible = false;
    }
    this.enable(false);
};

Btn.prototype.handleOnMouseOver = function (eventObj) {
    this.mc.gotoAndStop("over");
};

Btn.prototype.handleOnMouseOut = function (eventObj) {
    if (this.mc.mouseEnabled && !this.isDown) {
        this.mc.gotoAndStop("up");
    }
};

Btn.prototype.handleOnPress = function (eventObj) {
    this.mc.gotoAndStop("down");
    this.isDown = true;
};

Btn.prototype.handleOnClick = function (eventObj) {
    this.isDown = false;
    this.func(this);
    this.enable(this.enableBool);
};


Btn.prototype.enable = function (_bool) {
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
            var func = function () {
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