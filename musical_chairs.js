/*global Btn, Player, Note, Chair, Path, Sound*/

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_04_26_ex_4_5new_people.jpg", id:"_04_26_ex_4_5new_people"},
		{src:"images/_04_26_ex_4_5new_pigeon.jpg", id:"_04_26_ex_4_5new_pigeon"}
	]
};

function Sound(_instance, _duration, _id, _loop){
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
    if(this.firstRun){
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
Sound.prototype.unMute = function(){
    console.log("unMute");
    createjs.Sound.setMute(false);

};


// symbols:



(lib._04_26_ex_4_5new_people = function() {
	this.initialize(img._04_26_ex_4_5new_people);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,367);


(lib._04_26_ex_4_5new_pigeon = function() {
	this.initialize(img._04_26_ex_4_5new_pigeon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,243);


(lib.top_torso_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A18D14").ss(1,1,1,3,true).p("ABfFQIACgBQA2hvAPgXQAWghAFg4QAAgHAAgxQAAgrAFgjQAIhGgVg+QgEgLgRg/QgPg0gIgQQgGgMgEgNQgEgKgJgFAholQIAAAAQgkAegUAjQgMAXgLAnQgSA9AGBZQAGBWgKBXQAEBgACAJQAFAvAUAXQAZApACABIAIAG");
	this.shape.setTransform(-0.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD11E").s().p("AgBFpQg9AAhHgaIgIgGQgCgBgZgpQgUgXgFgvQgCgIgEhgQAKhXgGhWQgGhZASg9QALgoAMgWQAUgkAkgdIAAgBQAzgTA8gDQBJgDAmAZQAJAGAEAJQAEAOAGALQAIARAPA0QARA/AEALQAVA+gIBFQgFAjAAArIAAA4QgFA4gWAhQgPAXg2BvIgCABQgiAbg9AAIgBAAg");
	this.shape_1.setTransform(-0.4,0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-35.9,42.2,72.4);


(lib.top_thigh_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#053770").ss(1,1,1).p("AiriDIElAZQAlAAAXAkQAVAhgBAtQgBAwgYAiQgcAmgvAEIkvAA");
	this.shape.setTransform(13.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2463AA").s().p("AitCEQh7iMCUh7IAFAAIElAZQAlAAAXAkQAVAhgBAuQgBAvgYAiQgcAngvADg");
	this.shape_1.setTransform(10.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#053770").ss(1,1,1).p("AiIiAIDRAlQBPAfAQAZACfBsQgEAHhNAOIj1gM");
	this.shape_2.setTransform(8.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2463AA").s().p("AiRB1QhGgjALhbQAKhdBMgaIAEABIDRAlQBOAfARAYQAVAhgGAlQgFAngIAMQgHALgFALQgDAHhNAOg");
	this.shape_3.setTransform(6.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.9,47.1,28.5);


(lib.top_head_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSCQIhGAFIAcgNQg2ALgsgRIAJgTIgcAEQgIgVgMgZQgGgLgEgMIADAAIALgRIgfgIQAMgDAAgLQAAgZABgaIASACIgJgVQAYgWAcgTQAIgFgEgPIAjAJIgWgVIBSgLIABACIAxgBIgbgPQAcAEAsACQAuABBBAiIgKAZIAUAAQAfAVALATIAFAJIgCAAIgTAKIAYAHQADAHgTAAIATAEIgNASIAUAJQgBANgCAPIgGAAIABAUIgLAkIgJgVIABAQQgNAQgUANIgnAcIAGgSIghAcIAIgVIgUALIAAAAIh5ARg");
	this.shape.setTransform(-0.6,-0.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AgWgWIAtARIAAARIgpALg");
	this.shape_1.setTransform(22,-0.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-16.8,47.5,32.5);


(lib.top_hand_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("AgVBPQgFAAgEgEIgMgJQgKgIgVgGQgJgCgEgHIACAFIACAGIgHgJIAAAAQgpg1ApghIAGgBQAYgDAoADIAUgCQAKgCAFABQASgLAOgFQAcgMAFAMQAFAMgQAOQgOALgRADQgLABgLAIIgOAKQAAAKgFACIAHAIQAEAEABADQAHADAOAIIAMAIQAGAAAFACIAHACQAFgCAHgBQAGgBAFABQAFgHAKgBQALAAABAJIgQANQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBACgEABIgMAEIgNAHQgDACgDAAQgBAAgEgBQgFgCgQgCQgRgCgCABQgFAEgHAAQgHgBgCAEQgCACgEAAIgGgBgAA8gwQADAFAFgBQgDgBgCgEIgCgMQgDAHACAGgAAcAeQgKgGgDAAIAMgGQAGgDAEABQADgFAIgFQAIgGAGABQAGgLAJgEQALgGADAMQgJAKgDAGIgCADIgFAEIgOAOQgIAIgIACIgOgJgAgggvQAAgPACgFQADgFAHACQADABAAAIIgDAQIgMgCgAAEhLQAEgGAGADQAEACABAIQgBAIgDAKIgIAAQgHAAgBABQAAgTAFgHg");
	this.shape.setTransform(7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AgeBUQgFgBgLgGQgKACgFgCQgFgDgLgLQgJgJgKgGIgCgEQAEAGAJADQAVAFAKAIIAMAKQAEADAFABQAJACADgEQACgDAIABQAIAAADgEQACgCARACQAQACAFACQAEACABgBQADABADgDIANgHIAMgEQAEgBABgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAQgNQgBgKgLABQgKABgFAHQgFgCgGABQgHABgFADIgHgDQgFgCgGAAIgMgIQgOgIgFgCQgBgEgEgDIgJgIQAHgDAAgKIAMgKQALgHALgCQARgDAOgLQAQgNgFgNQgFgMgcAMQgOAGgSAKQgEAAgJABIgWACQgogCgYACIgGACIAAgCQAHgEAIgBQANgCAUACQACgOAFgHQAGgJAJAEQAHADgBAKIgFAPIAJgBQAIgpAOAEQAIADABAKQABAFgDAPIATgKQANgHANgBQASgDACALQACANgJAKQgIAKgUAFQgPADgJAFIgNAJIgEAFQAAADgCAEQgCADgCABIAHAHIACAEIALgFIAKgEQAPgNAJgCQAKgNAMgEQAPgFABASQgHAGgGALIgDAEIgGAEIgNANIgGAFIgFAEIALACQAPgEAGABQAMgIAMADQAMACgDALQgIAJgIAFQgDADgIACQgHACgPAJQgEAEgDAAQgDABgGgBQgGgCgLgBQgMgCgGABQgNADgDgBQgIAEgFAAIgDAAgAAPASIgMAGQADAAAKAGIAOAJQAIgCAIgIIAOgNIAFgEIACgDQADgGAJgKQgDgMgLAFQgJAFgGAKQgGAAgIAGQgIAFgDAFIgDgBQgDAAgEACgAgqhCQgCAEAAAQIAMABIADgQQAAgHgDgCIgEAAQgEAAgCAEgAgGhLQgHAIAAASQADgBAHABIAGgBQADgKABgHQgBgJgEgCIgCgBQgDAAgDAEgAAwgwQgCgGADgGIACALQACAEADABIgCABQgEAAgCgFg");
	this.shape_1.setTransform(8.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF8450").s().p("AgcADIADAAIAAAAgAAbgCIAAAAIABAAIABAAIgBAAg");
	this.shape_2.setTransform(6.7,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AhEAcQARgDAMgOIAKgJQAXAFAUgCQAFAAAIgEIgJAGIgBAAIgGABQgXABgQgDIgIAJIgEADIAaAEIABAAIgDABIgBAAIgEABIgYgDQgFAFgGACIgMAAgAgWgKIAKgMIABgBIABAAQAcAHAxgLIABAAIABABIgDADIgBAAIgBAAIgBABQgsAKgegHIgKAKg");
	this.shape_3.setTransform(10.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AgQBJQAGgCAFgEIAWACQgGAGgLAAQgHAAgJgCgAhrAsIgQgVQgEgIALgUQAMgXAQgWIBDgYQAzAEApAXQgIAbgdgEIgigFIgJAAIA+ATQAbAJAtgFQACAPgSAIIAAAAIgBgBQgxAMgegHIgBAAIgBAAIgLAMIABABIALgJQAfAHAtgLIABAAIAAAAIABgBQAFgEgIANQgMAPgYADQgHAEgFAAQgXABgXgEIgJAIQgKAOgRADIgDABgAAbBDIgBAAIgBAAIgZgDIACgEIAJgIQAPADAagCIAGgBIgJAIQgEAEgGACIgMABg");
	this.shape_4.setTransform(6.8,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-8.9,22.7,17);


(lib.top_foot_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ABTA4QAGgGABgPIAEggQADgQgKgUQgLgUgSgGQAQgKARAIQAfAPAJAYQACAIgBAKIgBASQgBANgLAVQgDAGgRAFQgQAFgQABQALgBAFgIgAhbgPIAIAAIACAqIgKACgAg4gQIAJAAIACApIgLADgAiDgRIAIAAIACAqIgLADg");
	this.shape.setTransform(19,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhUBNIgVgHQADgBAHgIIAKgMQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAABIACABIAhgDQAUgCAWAAIAkgCIATgBIADgQIAGgeQACgRgGgNIgJgRIgYAAIgcACIgaACIgLAAIAMgOQAlAEAZgCQAagDAUgGQATgFAUgEQAMgDAPACQAdACANAHQAQAGAJAOQAKANABAWQAAAMgGANIgKAZQgDAIgRAKIgaANQgIAGglAFQgeADgUAAIgXAAIgVAAIgugBIgWAAIgUACIgBAAQgEAAgLgEgAASBLIAgABIBFgBIgGgUIg0gNIh5ALIgTAUQANACARAAIAigBIAMAAIAVABgAB2hDQASAFALAUQAKAUgDASIgEAfQgBAOgGAHQgFAHgLACQAQgCAQgEQARgFADgGQALgVABgOIABgRQABgLgCgHQgJgYgfgQQgHgDgHAAQgKAAgJAGgAitA9Qg2goAIgiQAGgYAIgLQABgFAOgDQAOgDAPAEQAPADAGgCQAFgCACACIgBAFQgVAFgMAQQgMAQABAQQABASARAMQAGAGAPAAIAegCQgKAJgNAHQgKAFgMADIgFABQgHAAgHgCgAhaAiQgNgDgGAAIgbAAQgMAAgFgGQgOgMAAgNQABgPALgLQALgMAUgBIAPgBIAigCIApgCQAUAAAQgDIAZgCIAKAOQAJAMgCAPIgEAZQgCANgCAGIgVAAIglAAIguAAIgCAAQgIAAgMgCgAgfAVIAKgDIgCgqIgIAAgAACAUIALgDIgCgqIgJAAgAhIAUIALgEIgCgpIgIAAgAhgg+QgOgBgLgDQgLgEgDgCIAQgBIAagBIAbACQAMABAEAEQgGAEgMABIgOABIgOgBg");
	this.shape_1.setTransform(13,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA5BbQgfABgWgBIgygFQgIABgNgBIgWgDQgZgBgVgEQgagGgQgIQAKACAJgBQAMgDAKgFQANgHAKgJIgeACQgPAAgGgGQgRgMgBgSQgBgQAMgQQAMgQAVgFIABgFQgCgCgFACQgGACgPgDQgPgEgOADQgOADgBAFQgIALgGAYQgIAiA2AoQg3gMAAgxQABgwAJgGQAIgGAFgCQAAgDAagHQAMAAAMgEQALgEAOgBIAhgCIAoABQAhgBAjAAQAkABAegEIAqgHQANgCARABQARABAKADQAXAGAPAOQAPAOAFAQQAGAQgIAlQgFASgPAOQgBALglAQQghAOghADgAhZA0IgKAMQgHAIgDABIAVAHQAMAEAEAAIAUgCIAWAAIAuABIAVAAIAXAAQAUAAAegDQAlgFAIgGIAagNQARgKADgIIAKgZQAGgNAAgMQgBgWgKgNQgJgOgQgGQgNgHgdgCQgPgCgMADQgUAEgTAFQgUAGgaADQgZACglgEIgMAOIALAAIAagCIAcgCIAYAAIAJARQAGANgCARIgGAeIgDAQIgTABIgkACQgWAAgUACIghADIgCgBIgBgBIgCACgAAAgsQgSADgUAAIgpACIgiACIgPABQgUABgLAMQgLALgBANQAAAPAOAMQAFAGAMAAIAbAAQAGAAANADQAOADAIgBIAuAAIAlAAIAVAAQACgGACgNIAEgZQACgPgJgMIgKgOIgXACgAh7hGIgQABQADACALAEQALADAOABQAPABANgBQAMgBAGgEQgEgEgMgBIgbgCIgaABgAAOBOQgPgBgSAAIgiABQgRAAgNgCIATgUIB5gLIA0ANIAGAUIhFABIgggBg");
	this.shape_2.setTransform(13.4,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAhA1QgSgDgRAAIgigBQgQgBgIgEQgIgFgDgIQgCgIAAgMIABgcQAAgaANgIQANgIAbAIQALAFAQACIAyABQAQAVAAAeQAAAlgaALIgPgDg");
	this.shape_3.setTransform(3.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgkBWQgNgBgHgFQgGgGgEgFQgGgHgLgHQgMgHgOgBQgJABgJgEQgJgFgFgNQgFgOACgYQABgcACgRQABgRALgHQAJgHAaADQgIAIgEARQgDARAAAUQACATAFAPQAFARAJAJIAZAWQAMALAPAHQAPAHAUAAQgPADgLAAIgJgBgAB7AoIgXgDIgSgBIgmgBQgSgBgJgEQgJgFgCgKQgDgIABgMIAAghQAAgdAOgJQAPgJAfAIQALAHAVABIALABIALgBIANAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIANAHIgygBQgSgBgLgGQgbgHgNAIQgNAIAAAaIgBAdQAAALACAIQADAIAIAFQAIAEAQABIAiAAQATABASADIAPADIgKADIgDgBgAhfABQgCgMABgUQABgVAGgUIAKADIAUAFIAOADQgGAIAAAOQAAAOADANQAEAMAFAHIgIABIgVAEIgYAGQgBgDgCgOg");
	this.shape_4.setTransform(-4.9,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhCBRQgDgDAFgMQAEgMgBgKQgBgJgEgKQgEgKgCgNQgDgQABgRQACgQAIgRQAGgLANgEQANgEARABQAPABAQAEIgQALQgYgBgMAGQgMAGgDAMQgEALABAPQAAAOACAFIADAQQACAIAAARQABAQACAEQADAEAEgCQAFgBAGAAQAHACAKAAIAPABQAIABgBAEQAAAGgJAAIgeACIgaADIgGAAQgFAAgDgCgAA3gxIgPgHQgHgEACgCQACgCAFAAIAJgBQAGAAAIAGQAGAEAEAJIgKABIgKgEg");
	this.shape_5.setTransform(-0.7,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBkQgPgEgKgIQgJgHgMgGQgMgHgUgBQgggDgLgcQgMgcAFgwQADggANgLQAOgMAUACQAUABAXAHQAHgFAPgCIAggEIAjgCIAhgCQATgCATAFQAUAEAOALQAKAIAEAMIgNABQgFgJgGgFQgHgGgGAAIgKABQgFABgCABQgBACAGAEIAQAIIAJADIgLAAQgVgBgLgHQgfgIgPAJQgOAJAAAdIAAAfQgBANADAJQACAJAJAFQAJAFASABIAmAAIASABIgLAGQgLAGgHAIQgGAJgOAIQgOAHgSAGQgRAFgRACIgKABQgJAAgIgCgAg+A/QALAHAGAHQAEAFAGAFQAHAFANACQANACAUgFQgSAAgPgHQgPgHgMgKIgZgXQgJgIgFgRQgFgRgCgSQAAgTADgRQAEgRAIgIQgagEgJAHQgLAHgBASQgCARgBAbQgCAZAFANQAFANAJAFQAJAEAJAAQAOABAMAHgAAQhfQgNAEgDAMQgJARgBAQQgCAQADATQADALADAJQADAKABAKQABAJgDAMQgFAMAEADQACAEAJgCIAbgDIAfgBQAJAAABgGQAAgFgIgBIgRgBQgKAAgGgBQgHgBgEACQgEACgDgEQgCgEgBgRQgBgRgBgIIgEgNQgBgIgBgOQAAgPADgLQAEgLAMgGQAMgHAZABIARgKQgRgEgQgBIgIgBQgMAAgLADgAhLgYQgBAUACANQACAOABADIAYgGIAVgEIAIgCQgFgHgEgLQgDgOAAgNQAAgOAGgIIgOgEIgUgFIgKgCQgGAUgBAUg");
	this.shape_6.setTransform(-7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-9.1,46.7,18.5);


(lib.top_elbow_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(1,1,1,3,true).p("AAChEQAYAFAQAKQARAKArApABNBFIiRgnQgYgLgJgU");
	this.shape.setTransform(4.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AhIAhQgYgLgJgWQgKgVAGgJQAGgJAQgQQAPgQAYAAQAYAAAYAFQAWAGARAKQAQAKArAoQAlBAg+AIg");
	this.shape_1.setTransform(4.6,2.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-4.9,22.9,16);


(lib.top_calf_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#053770").ss(1,1,1,3,true).p("ACxBtQgxADgGABIjfgoQgqgRgIgGQgTgNgDgZQgDgcABgHQABgKAJgOQAUgeAYACQApgNBCgHQBUgIA7gIQACAAAIAAQAIABAUgC");
	this.shape.setTransform(-19.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B4C84").s().p("Ai7A1QhfhHBfgsIE7gZQBtA8gBAkQgBAXhNA4g");
	this.shape_1.setTransform(-13.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2463AA").s().p("AiTBJQgqgRgIgGQgSgMgDgaQgEgbABgIQABgKAKgOQATgdAYABQAqgMBCgIQBUgIA7gIIAKABQAIABAUgCQA5gHAkAlQAIAIhKgSIk7AZQhfAtBfBHIFZAjQA5gOgTAUQgQAQgYACIguABIg2ADg");
	this.shape_2.setTransform(-15.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#053770").ss(1,1,1,3,true).p("AhrBpIAqAEIBsgZQAhgVANgLQANgKADgdQACgbABgLQABgLgMgTQgNgSgMgJQgbgPgtgCQgsgDgSgDQgSgDgFABQgCAAgEAAQgEAAgHgB");
	this.shape_3.setTransform(8.8,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D508A").s().p("AhjhrIAGAAQAFgBASADQASADAuACQArADAbAPQAMAJANASQAMASgBAMIgDAmQgDAcgNALQgNALghAVIhsAZQCqhwjEhog");
	this.shape_4.setTransform(9.6,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2463AA").s().p("AhJBfQgXgogBgtQAAgsAZgrQAVglAjAHIAKABQDEBoirBwIgpgEQgJAAgSAEIgCAAQgOAAgIgPg");
	this.shape_5.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-12.1,48.9,24.7);


(lib.top_bicep_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A18D14").ss(1,1,1,3,true).p("AiDh2QgIBigCBLQAHAUARAPQAbAYAnAEQAoAFAggQQARgJAQgPIA9hyIARghQAKgbAAgJ");
	this.shape.setTransform(-0.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996633").ss(1,1,1,3,true).p("AA4A0QABgBABgBIAohMAhhg2QgBAvAEAsQAAABAGAR");
	this.shape_1.setTransform(-4.9,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DABE1A").s().p("AglB2QgngEgbgYQgRgPgHgUQAChLAIhiQgDAxAjAkQAgAgAyAIQAvAKAqgRQAagKAQgVIg9ByQgPAPgRAJQgaAMgcAAIgSgBg");
	this.shape_2.setTransform(-1.9,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFD11E").s().p("AgWBYQgygKgfggQgjgkACgwQACgZAYgMQARgJAbgEQAcgEApADQAsAEAQAEQAVAFAOALIAOAKIASAPIAFAGQACADAAALQAAAKgKAZIgRAhQgQAVgbALQgbALgeAAQgPAAgRgDg");
	this.shape_3.setTransform(0,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AgXBAQg7gBgGgSIgGgSQgEgsABgvQAIAUARAQQAaAXAoAFQAlADAigPQASgIAPgPIgoBMIgCABIgMAJQgNAHgRADQgOAEgRAAIgGgBg");
	this.shape_4.setTransform(-4.9,22.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-7.2,30.6,35.8);


(lib.tail = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABbBwQgNgigngXQgXgNgXgGIgmgHQgngIgcgwQgCgvABhEQAZBDAyAdQAPAIAdAQQAdAPAWARQAqAmALAxQAGAZgDARIgQAEQAAgNgGgSg");
	this.shape.setTransform(11.5,14.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,28.7);


(lib.stem = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAlgIAALB");
	this.shape.setTransform(0,35.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,72.8);


(lib.screen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg2rAbWMAAAg2rMBtXAAAMAAAA2rg");
	this.shape.setTransform(350,175);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700,350);


(lib.position = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.poof7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBAAIABgBIACADIgDgCg");
	this.shape.setTransform(82.9,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],0.4,-18.2,0,0.4,-18.2,120.9).s().p("AA6J4IgCgBIAMgIIhcALIA5ACQioBsh+iTQgcghgCgrIgBgsQjLA5h8iqQgcgmgBgxIACgaQABgKAggnQgOgXAngtIgLgDIAKgEQBHAcBEgnQAIgEAFgEQg2AViMguQiMguANirQAMiuBqg1QBqg1AoAYQgxiIC6hbQC6hcBiA9QBNAwAAANIADgDIAOgJIATgMQAGgEgbAhIgCABIgCACIAGACIABgBQBvhVBKgNQBWgRBqAzQBpA0gCBPQgBBPgMAgIgXgBIAUAHIgEAIIACAAIAHgGIA7AVQBsA6gMBBQgNBBg1A2QCfAqARB1QARB3gtBQQguBQhOAHQhPAHgTgCIgkgLQAuB4gqBdQg+COiiAPQgSACgRAAQhWAAhHgygAgDoXIACgDIgDgEQgBAAACAHg");
	this.shape_1.setTransform(81,70.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5BBBD").s().p("AD6LLQhwgNhQhDQgaATgZAUQhFA7hUgdQiAgtgyiAIguAAQhvgFhUhGQhbhMAXhxQABAxAcAmQB7CqDMg5IABAsQACArAcAhQB+CTCohsIg6gCIBcgLIgLAIIACABQBVA8BrgMQChgPA/iOQAphdguh4IAlALQASACBPgHQBPgHAthQQAthQgQh3QgSh1iegqQA0g2ANhBQANhBhsg6Ig8gVIgGAGIgCAAIADgIIgUgHIAXABQAMggAChPQABhPhpg0QhpgzhXARQhJANhwBVIAFgGIgHACQAbghgGAEIgTAMQAggpAugZQBcgxBpAMQCMALBaBrQAnAugUBVQgLAsgMAMQAvAKAoAgQBEA4AGBXQAFBJhDAFQBaAnAoBaQArBegUBnQgPBNg8AuQhOA7hfgUQALAqgEAsQgKCIhpBaQhFA8haAAIgYgBgAo+B1IgLAEQhvgZg8hgQg5hbAbhqQAYheBIhAQBOhFBqACQANidCFhUQBlg/B0AaQBkAYBBBMIgDADQAAgNhNgwQhjg9i5BcQi6BbAxCIQgogYhqA1QhqA1gNCuQgMCrCMAuQCMAuA1gVQgFAEgHAEQgnAWgpAAQgdAAgegLg");
	this.shape_2.setTransform(79.6,71.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159.2,143.3);


(lib.poof5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5BBBD").s().p("Ah/DGQj0AcgRjzIBSgtQghkDEHAwQjcAGACBkQABBlAcAgIhUATQAWC2DIAKQAPAEAKARQBQCICPg/Qg/gfAbg5IBVBVQC+AUAHi+QAAgJgCgIQBMC5jdArQglAIgjgOQg8AcgyAAQhqAAg7iFgADdgcQAqgOAsANIA5g7QgLhagegzQArAwASAuQAeBRiDBCIg+gogAg5kCIAfAcQCHipCfB0QgrgVg9ARQiqAvgWA9g");
	this.shape.setTransform(39,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],0.9,-9.5,0,0.9,-9.5,46.6).s().p("AhvDIQgKgQgOgEQjIgLgXi1IBUgTQgbghgChkQgChlDdgFIANABIAGANIAdBPQAWg8CpgwQA9gRArAVQAgAbAXAbQAeAzALBaIg5A7QgsgNgpAPIA+AnIBLA2QAEAHADAJQABAIAAAJQgHC9i+gUIhVhUQgbA4BAAgQguAUgoAAQhTAAg3heg");
	this.shape_1.setTransform(39.9,32.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,66.4);


(lib.poof4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],-2.7,-8.6,0,-2.7,-8.6,52.7).s().p("AhnEOQgmgZgfgkIAaAxQjQA1AdjfIADgWQAUh6B9geQAiBMBRABQich0CeiaIAsgqIACgBIAGgBQCogOA6ChIg2gSQAJAhAgAKQAdAKAbgKQCwDNkTBAIgEAiIAhAKQgGAcgIAYQgmBvhbAAQg+AAhZg3g");
	this.shape.setTransform(36.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5BBBD").s().p("AhtEWQiiBhhEixQgbhGACg5QAFiKCzhDIAQg9QAUhLBEghQAfgPAcgJIgsApQieCaCcB0QhRgBgihLQh9AdgUB6IgDAWQgdDgDQg2IgagxQAfAlAmAYQDWCGBCi+QAIgYAGgcIghgKIAEgiQETg/iwjOQgbAKgdgKQgggKgJggIA2ASQg6iiioAOQCsgzBEC5QBIAUAfBAQBhDJjNAvQgCAmgSAiIgDAFQhFCBhgAAQhCAAhRhAg");
	this.shape_1.setTransform(36.6,34.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,73.1,68.5);


(lib.poof3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZgRIAzAeIgUAEIgCAAIAAABg");
	this.shape.setTransform(68.8,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5BBBD").s().p("Ai6EGQhlAmhpiKQhpiKBiiAIAfAAQhbCsCsB9QBCAvBNgRIhKAVQDHBGCnheQAigTgOiKIAoAuQDpBAgej8QgSiUjUAbQhsiVjJBVQDFiACoCqQDRgyABDnQABDfjKgfIAUgEIg1gfIAfAkQgJAshZBWQgpAmhHAAQhWAAiGg6g");
	this.shape_1.setTransform(44.8,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],0.3,-4.8,0,0.3,-4.8,52.1).s().p("AjgD/IBKgVQhOARhBgvQith9BbisQA8hBBWAIIATAHIAchLIAvgiQDJhWBtCVQDTgbASCUQAfD8jqhAIgnguQAOCKgjATQhhA2hoAAQhQAAhUgeg");
	this.shape_2.setTransform(45.4,30.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.5,64.1);


(lib.poof2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],-0.9,-9.4,0,-0.9,-9.4,56.4).s().p("AA1FKQhLgkAOhWIAFggIBPghQh3gugDCAQjQhBAviIQAviFAjgNQhOASgdBUQiLAdAAiaQABhMBLgLQgFA8AgAQQgKhuB6gdQAXgGAYABIAOAiQBbiZCMB3QAgAbgNAqQgIAdgTAYIgVADQgRARAQARQCDgQA/BvQgUAtgpAeIBzAcQBACPiiAIIgQgLQgTABgIASIgBAEIAmAlQgjBghNAAQgmAAgvgXgAjciZIgwgDQASAIAegFg");
	this.shape.setTransform(40.7,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5BBBD").s().p("ABvGJQhhgFgnhIQgPgZgIgiQjHgoAJjNQigARgKipQgIiCCGgLQBRhMBkAxQBqh9BvA8QB1A8g4BxQgEAHhAAaQDMgFAMCLQACAWhJASIB6AHQBgCli1A3QACBshMAjQgkAQg1AAIgRAAgABJCHIhOAhIgGAgQgNBVBKAlQCSBFA0iPIgmglIABgDQAIgTATAAIAPALQCigJg/iOIh0gcQAqgeATgtQg+hwiDAQQgRgRARgQIAWgEQASgYAJgdQANgqghgbQiLh2hbCZIgOgjQgYAAgYAFQh5AeAJBtQgfgQAFg8QhMALAABMQgBCaCMgdQAchUBPgSQgkANguCGQgvCHDQBBQAChdBAAAQAXAAAgAMgAkOilIAwADQgMADgKAAQgPAAgLgGg");
	this.shape_1.setTransform(41,39.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,78.8);


(lib.poof1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339933").s().p("AgGAAIAAAAIANABg");
	this.shape.setTransform(31.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],1.1,-7.7,0,1.1,-7.7,35.1).s().p("AiICiQhKg9gFhgIBIgiIgYgPQACiQCBABQA6ABAuAqIgCAHQDBApg3CTQg0COicgvQgiAqglAAQgeAAgfgagAA+hyIAPADIgPgDIgCAAIACAAg");
	this.shape_1.setTransform(24.7,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5BBBD").s().p("AiZDiQishlBuiaQgRixClgkQCLgfgQB6Qgugrg6AAQiBgBgCCPIAYAPIhIAkQAFBeBKA9QBIA7A8hKQCcAvA0iPQA3iSjBgpQB7gsA6BoIAJASQAXAwgNAxIgJAeQg4CfitgvQgkBMg8AAQghAAgogXg");
	this.shape_2.setTransform(25.9,25);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,50);


(lib.pigeons = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._04_26_ex_4_5new_pigeon();
	this.instance.setTransform(-285,-145.8,1.2,1.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-285,-145.8,570,291.6);


(lib.photo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._04_26_ex_4_5new_people();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,552,367);


(lib.mapshape = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AiFaFQgYgNgdAHQgCgCgvgTQgfgNALgSQgRAMgZgEQgFgTgag1QgUgrgBgmQhYhZgoh9QgdgngngdQgHgHACgGIAFgNQgWALgxgLQgxgNgaANQgKAJgXAsQgSAjgaAGQgOABABgFQAEgIABgFQgJALgSgMQgTgLAJgLQgHAGgJgFQgMgGgMADQAAgEAFgEQADgFAAgFQgSAKgXgbQgYghgMgKIAAgzQgBgGgTggQgOgXAJgHQgLABgVgUQgcgbgJgGQAGgLgPgLQgMgIANgEQgSgBgYgZQgWgYgNgbQgmACg2gIQg+gKgagBQgMALgBANQgBAKAGARQgHgBgPACQgOABgHgCQgIgBgIgIIgKgHIgOAFQgMAHgIgEQgfgNhjgIQhdgJgqgVQABgDAEgFQAEgFAAgEQgMAKgTgMQgZgQgNAAQABgDAEgFQAEgEAAgFQgKALgNgJQgSgLgKAAQAAgDAEgEQAEgFAAgFQgNAKgWgLQgYgLgBgWQgKALgNgIQgRgMgLABQAAgDAFgFQAEgEAAgFQgNAJgXgLQgXgMgBgUQgLAKgMgJQgSgLgLABQABgDAEgFQAEgEAAgFQgJAIgGgDQgKgFgJAAQgIgHAEgNQAFgOgKgJQhhgGgxgEQhZgHgVgiIAHgbQAEgQgDgRQgGgSgZgcQgXgbgGgVQgJgIgIAEQgIADgJgIIAAgiQglgDgagcQgGgGghgxQgYAEgXgQQgXgSgYAFQgKgUADgZQACgYANgQIgTgYQgIgKAKgSQgcgogPgkQgTgsgGgxQgDgOAQgGQARgGgFgRQgggBgKgwQgJgtARgiQgDgCgOgXQgLgQgPgCQAAgHAFgJQAFgJgBgIQgJgPgPgsQgNgmgOgPQAQgLADgmQAEg2ACgIQgBgMgQgfQgNgYAFgbQABgSAPgNIAagUQACgWAGgNIASgiQAGgIgHgOQgIgRAAgEQABgEAIgIQAIgHAAgGIgEg6QgDgoAHgfQAPgPAIgLQANgTgKgFQAngkAkhbQAphsAVgfQgDgWAGgRIAOgdQgFgXAFgkIAMhEQAPhYgbgpIALgcQAHgQgBgRQAtAoAtAWQA7AdAngNQgVhDAeAXIgHgaQgFgRADgQQHyCUJ/BbICIAYQBUAOA2AFQDIAUEAAIQC9AGEuAAQALABgCgQQgBgZABgCQAegEANAVQAJAQgBAjQAZAdAzABQAfABBIgGQgDAOAMAIQAMAJgDAMQAJgQATAFQAIACAbAPQAXANANgBQASAAALgbQASAQArAFQAYADA0ACQgDAJgGAEQgHAFgCgJQgIAUgkANQgoAPgKAMQgHAFgDAAQgFACgCgHQgHADACAJQACAMgFAKQgKACgUAZQgQATgOgMQANANgOAHQgSAKACANQAQAJAigUQApgYAUAAQACAMgEAIIgHAPQALgCAJAEIAPAHQAigDAZggQAgABAWgQQANgIAVgaQAUgYAPgJQAYgPAhADQgBAPgWAOQgVAMABATQAFAQARgDQARgFAEAJQAPADAKAPQAPAXADACIAfgFQAMgCARAHQALADALgPQAOgUAGgDQAKgDAugDQAjgCAMgRQALgBgCARQgBAYABADQARADASgFQAVgHAMAAQgFAYASAOQAVAQAAAPQgLgGgLACQgIACgEgHQgIAOgOAAQgPAAgGAMQgNgCgOgFIgYgKQgMABgXAQQgSANgYgEQgGAEgHARQgGAQgHAFQgKACgDgFQgDgEgBgKQgFgCgLAOQgHAJgCgNQgmA4gOA4QATgBAJgfQAKgeAWACQABARgJAVQgKAVABASIgKAMQgGAGgKgBQAOAlgPA/QgTBJADAgQANAlACAIQAGAbgEAfQAAAIARAdQANAVgNAKQADAEAMACQALABAJAKQAtgHAVguQAGgNAWhPQgMgZgOg4QgPg6gLgYQAVgtgEhCQAMADADgJQACgDABgQIAWgRQALgKABgQQACABAGAEQAEADAFAAQAGgBAFgVQAFgRASAFQgJgIAAgSQAAgQAJgJQAPACAeACQAaAAAPAEIAAAJQgCAIACAAQAIAGAYAAQAcAAAIADQAAAUARAFQgHAVAKAhQALAkgFAeQgRgFgBANQgBAJACARQgOABgHANQgLATgDACQAHAPAKACQAPgDAJgOIAPgaQASghAlAHQgHAHACAHQACAGADgLQAVAhAEAKQANAdgMAOIAQAQQAJAMgQAGQAMAFAEARQADANgCAYQgSgFgIAOQgGAMgLgMQAJAOAAAMQgDgBgGgEQgEgEgFAAQAMAMgJAVQgLAbAAAJQgGACgGALQgDAFgLgKQAFAYAoAIQAwAKAKAJQAHgCAVgMQARgKAPgBQAjgeA9goQBbg8AJgHQAXgXAlg2QgCgGgHACQgKAGgG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");
	this.shape.setTransform(271.1,168.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,542.2,337.7);


(lib.map_outline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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FQAYADA0ACQgDAJgGAEQgHAFgCgJQgIAUgkANQgoAPgKALQgHAGgDAAQgFACgCgIQgHAEACAIQACAMgFALQgKACgUAZQgQATgOgMQANANgOAHQgSAKACANQAQAIAigTQApgYAUAAQACALgEAJQgGANgBACQALgCAJAEQANAGACAAQAigCAZggQAgABAWgQQANgJAVgZQAUgZAPgJQAYgOAhADQgBAPgWANQgVANABATQAFAQARgEQARgEAEAJQAPACAKAQQAPAXADACQABAAAegFQAMgCARAHQALACALgPQAOgTAGgDQAKgEAugCQAjgCAMgRQALgBgCARQgBAYABADQARADASgGQAVgHAMABQgFAYASAOQAVAQAAAOQgLgFgLACQgIACgEgHQgIAOgOAAQgPgBgGANQgNgCgOgFQgEgCgUgJQgMACgXAQQgSANgYgFQgGAFgHARQgGAQgHAFQgKACgDgFQgDgEgBgKQgFgCgLAOQgHAJgCgMQgmA3gOA3QATAAAJgeQAKgeAWABQABARgJAWQgKAUABARQgBABgJAMQgGAHgKgCQAOAlgPA/QgTBJADAgQANAlACAIQAGAbgEAeQAAAJARAdQANAVgNAKQADAEAMACQALABAJAKQAtgGAVgvQAGgNAWhPQgMgagOg3QgPg6gLgYQAVgtgEhCQAMADADgJQACgDABgRQAHgFAPgLQALgKABgQQACABAGAEQAEAEAFAAQAGgDAFgUQAFgRASAFQgJgIAAgRQAAgSAJgIQAPADAeAAQAaABAPAEQAAABAAAIQgCAIACABQAIAFAYAAQAcAAAIADQAAAUARAFQgHAVAKAhQALAkgFAeQgRgFgBAOQgBAIACARQgOABgHANQgLATgDACQAHAPAKACQAPgDAJgOQABgBAOgZQASghAlAHQgHAHACAGQACAHADgLQAVAhAEAKQANAdgMAOQACACAOAOQAJAMgQAFQAMAGAEARQADANgCAYQgSgFgIAOQgGALgLgLQAJAOAAAMQgDgBgGgEQgEgEgFAAQAMAMgJAVQgLAbAAAIQgGADgGALQgDAFgLgKQAFAYAoAIQAwAKAKAKQAHgDAVgMQARgKAPgBQAjgeA9goQBbg8AJgHQAXgXAlg2QgCgGgHADQgKAFgGgCIAAg8QAXgUA+gFQBcgHALgCQAigYAagkQAAgCgHgVQgDgJAKgKQgIgHgEgDQgHgGABgKQAEgBAOgMQAGgGALAKQgJgMAAgNQAPgPAXglQAXgkAQgPQAggIBsgbQBXgXA3gLQAPgGAHgLQAHgNgDgVQANAEAJgHQALgHAKABQAJg1AZggQgTg2ARhGQAahLAKggQARgFAHALQAFAGAFAOQANgDAOgNQARgPAHgDQAMAAARAKQAOAKARgDQgEANAOAaQAKAVgLAIQAcApAGA1QAEAIAcAQQAWAMgDAYQAbAKAJAGg");
	this.shape.setTransform(271.1,168.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,544.2,339.7);


(lib.circ = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600FF").ss(1,1,1).p("AkoAAIJRAA");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("AhNBNQgfggAAgtQAAgsAfghQAhgfAsAAQAtAAAgAfQAhAhgBAsQABAtghAgQggAhgtgBQgsABghghg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.7,-11,61.5,22);


(lib.chair_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#452E18").s().p("AAEAYIgEgDIgGgGQgHgGgCgJIgBAAIAAAAIgJAAIAQgcQgDAHgBAJQABAGABAEQADAHAGAHIAEAFIACABQAIAFALAAIAEAAIgXAGg");
	this.shape.setTransform(2,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A16B38").s().p("AAAAlQgJAAgIgFIgCgBIgGgFQgHgHgCgJQgCgFAAgFQAAgHAEgHIAEgHIADgEQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgFAFgHADIgLADIgDAAg");
	this.shape_1.setTransform(4.3,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#090603").ss(1,1,1,3,true).p("AhJAwICThf");
	this.shape_2.setTransform(6,-7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8F5F32","#402B16"],[0.008,1],-7.7,3.1,-5.5,6.9).s().p("Ag4BKIgIgEIgHgHQgJgIgDgLIAAgBIAAgBIgMAAICThfQAFgNAngNIAABcIgQAWIiIAtg");
	this.shape_3.setTransform(8.2,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-7.4,8.8,8.1);


(lib.bulb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhZBfQgygUgJgrQgKgoAmgoQAlgoA+gNQA8gOAzAVQAlAPAPAcQAFAJADALQAJAogmAoQglAog+ANQgXAGgXAAQgiAAgfgNg");
	this.shape.setTransform(-15.2,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ABaheQAlAPAPAcQAFAJADALQAJAogmAoQglAog+ANQg8AOgzgVQgygUgJgrQgKgoAmgoQAlgoA+gNQA8gOAzAVg");
	this.shape_1.setTransform(-15.2,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZBfQgygUgJgrQgKgoAmgoQAlgoA+gNQA8gOAzAVQAlAPAPAcQAFAJADALQAJAogmAoQglAog+ANQgXAGgXAAQgiAAgfgNg");
	this.shape_2.setTransform(-15.2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-5.8,30.4,21.7);


(lib.btntextmed = function() {
	this.initialize();

	// Layer 1
	this.btnMedTxtDyn_txt = new cjs.Text("Show answer", "bold 14px 'Trebuchet MS'");
	this.btnMedTxtDyn_txt.name = "btnMedTxtDyn_txt";
	this.btnMedTxtDyn_txt.textAlign = "center";
	this.btnMedTxtDyn_txt.lineHeight = 14;
	this.btnMedTxtDyn_txt.lineWidth = 104;
	this.btnMedTxtDyn_txt.setTransform(0.5,-7.6);

	this.addChild(this.btnMedTxtDyn_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-7.6,108.3,20.3);


(lib.btnshad2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.329)").s().p("AlSBnQgfAAgWgdQgYgfAAgrQAAgrAYgfQAVgdAfAAIKoAAQAeAAAWAdQAXAfAAArQAAArgXAfQgWAdgeAAgAl/hEQgWAdAAAnQAAAoAWAbQATAaAaAAIKnAAQAZAAATgaQAVgbAAgoQAAgngVgdQgTgYgZgBIqoAAQgaABgSAYg");
	this.shape.setTransform(64.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AlSBdQgaAAgTgaQgWgbAAgoQAAgnAWgdQASgYAagBIKoAAQAZABATAYQAVAdAAAnQAAAogVAbQgTAagZAAgAl3g9IAAAAQgUAaAAAjQAAAjAUAbQAQAUAVABIKnAAQAUgBAQgUQATgbAAgjQAAgjgTgaQgPgVgVgBIqoAAQgVABgPAVg");
	this.shape_1.setTransform(64.2,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.663)").s().p("AlSBTQgVgBgQgUQgUgbAAgjQAAgjAUgaIAAAAQAPgVAVgBIKoAAQAVABAPAVQATAaAAAjQAAAjgTAbQgQAUgUABgAlvg4IAAABQgSAXAAAgQAAAgASAXIAAABQANAQAQACIKnAAQAQgDAMgPQARgYAAggQAAghgRgXQgNgQgPgBIqoAAQgQACgMAPg");
	this.shape_2.setTransform(64.2,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlSBAQgMgCgJgNIgBAAQgPgUAAgdQAAgdAQgUIAAgBQAIgLAMgBIKpAAQAKABAJALQAPAVAAAdQAAAcgPAVIAAAAQgJAMgMADg");
	this.shape_3.setTransform(64.2,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.831)").s().p("AlSBKQgQgCgNgQIAAgBQgSgXAAggQAAggASgXIAAgBQAMgPAQgCIKoAAQAPABANAQQARAXAAAhQAAAggRAYQgMAPgQADgAlngyIAAABQgQAUAAAdQAAAdAPAUIABAAQAJANAMACIKmAAQAMgDAJgMIAAAAQAPgVAAgcQAAgdgPgVQgJgLgKgBIqpAAQgMABgIALg");
	this.shape_4.setTransform(64.2,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.161)").s().p("AlTByQgkgBgYghQgaghAAgvQAAguAaghQAZgiAjABIKoAAQAjgBAZAiQAZAhAAAuQAAAugZAiQgZAhgjABgAmHhJQgYAfAAAqQAAArAYAfQAWAdAfABIKnAAQAegBAWgdQAXgfAAgrQAAgrgXgeQgWgdgeAAIqoAAQgfAAgVAdg");
	this.shape_5.setTransform(64.2,11.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.6,0,85.3,22.8);


(lib.top_walking_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.top_head_01("single",0);
	this.instance.setTransform(0,-1.5,1.001,1,0,3.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.7,regY:-0.6,skewX:3.9,x:0.8,y:-1.6},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.6},0).wait(1).to({y:-0.1},0).wait(1).to({y:0.4},0).wait(1).to({y:0.9},0).wait(1).to({y:0.4},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.1},0).wait(1).to({y:-1.6},0).wait(1));

	// tors0
	this.instance_1 = new lib.top_torso_01("single",0);
	this.instance_1.setTransform(-0.7,0.3,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Layer 1
	this.instance_2 = new lib.top_bicep_01("single",0);
	this.instance_2.setTransform(-2.3,-29.7,1.008,0.828,0,172.2,-0.5);

	this.instance_3 = new lib.top_elbow_01("single",0);
	this.instance_3.setTransform(-7.3,-49.2,0.745,1.338,0,53.8,-98.9);

	this.instance_4 = new lib.top_bicep_01("single",0);
	this.instance_4.setTransform(-2,34.2);

	this.instance_5 = new lib.top_calf_01("single",0);
	this.instance_5.setTransform(-16,16.8);

	this.instance_6 = new lib.top_elbow_01("single",0);
	this.instance_6.setTransform(-2.9,70.1,1,1,0,0,0,6.1,11.1);

	this.instance_7 = new lib.top_hand_01("single",1);
	this.instance_7.setTransform(6.5,67);

	this.instance_8 = new lib.top_foot_01("single",1);
	this.instance_8.setTransform(-43.9,15.6);

	this.instance_9 = new lib.top_foot_01("single",0);
	this.instance_9.setTransform(0.1,-4.3,1,1,0,167.2,-12.8);

	this.instance_10 = new lib.top_thigh_01("single",0);
	this.instance_10.setTransform(-5.4,11.9,0.947,1,-2.7);

	this.instance_11 = new lib.top_hand_01("single",1);
	this.instance_11.setTransform(-11.5,-52.2,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{x:0.1,skewX:167.2,skewY:-12.8,y:-4.3,rotation:0}},{t:this.instance_8,p:{scaleX:1,x:-43.9,y:15.6,skewX:0,startPosition:1}},{t:this.instance_7,p:{x:6.5,y:67,scaleX:1,skewX:0}},{t:this.instance_6,p:{regX:6.1,regY:11.1,scaleX:1,skewY:0,x:-2.9,y:70.1,skewX:0}},{t:this.instance_5,p:{x:-16,y:16.8,skewX:0,skewY:0}},{t:this.instance_4,p:{scaleY:1,skewX:0,x:-2,y:34.2}},{t:this.instance_3,p:{x:-7.3,y:-49.2,skewX:53.8,skewY:-98.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.828,skewX:172.2,skewY:-0.5,x:-2.3,y:-29.7}}]}).to({state:[{t:this.instance_11,p:{x:-11.5,y:-52.2,skewX:180}},{t:this.instance_9,p:{x:-3.7,skewX:167.2,skewY:-12.8,y:-4.3,rotation:0}},{t:this.instance_8,p:{scaleX:0.845,x:-34.1,y:15.6,skewX:0,startPosition:1}},{t:this.instance_7,p:{x:4.5,y:65.3,scaleX:1,skewX:0}},{t:this.instance_6,p:{regX:-1.2,regY:1.9,scaleX:0.943,skewY:-3.6,x:-10.2,y:60.9,skewX:0}},{t:this.instance_5,p:{x:-5.2,y:16.8,skewX:0,skewY:0}},{t:this.instance_4,p:{scaleY:1,skewX:0,x:-2,y:34.2}},{t:this.instance_3,p:{x:-6,y:-50.4,skewX:53.8,skewY:-98.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.84,skewX:176.6,skewY:-0.5,x:-2.3,y:-29.7}},{t:this.instance_10,p:{x:-5.4,y:11.9,scaleX:0.947,rotation:-2.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{x:-7.7,y:-55,skewX:180}},{t:this.instance_9,p:{x:-9.9,skewX:178.2,skewY:-1.8,y:-11.3,rotation:0}},{t:this.instance_8,p:{scaleX:1,x:-16.9,y:15.9,skewX:0,startPosition:1}},{t:this.instance_7,p:{x:2.8,y:63.5,scaleX:1,skewX:0}},{t:this.instance_6,p:{regX:6.1,regY:11.1,scaleX:1,skewY:0,x:-3.9,y:67.4,skewX:0}},{t:this.instance_5,p:{x:9,y:16.8,skewX:0,skewY:0}},{t:this.instance_4,p:{scaleY:0.933,skewX:0,x:-2,y:34.2}},{t:this.instance_3,p:{x:-3.5,y:-49.9,skewX:61.7,skewY:-90.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.898,skewX:-179.8,skewY:7.5,x:-1.2,y:-29.9}},{t:this.instance_10,p:{x:2.1,y:10.2,scaleX:0.947,rotation:-2.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{x:12.1,y:10.2,scaleX:0.947,rotation:-2.7,skewX:0,skewY:0}},{t:this.instance_11,p:{x:-2.5,y:-59.5,skewX:180}},{t:this.instance_6,p:{regX:0,regY:0,scaleX:0.811,skewY:0,x:-10,y:-54.5,skewX:180}},{t:this.instance_9,p:{x:-25.9,skewX:167.2,skewY:-12.8,y:-9.3,rotation:0}},{t:this.instance_8,p:{scaleX:1,x:-6.9,y:13.6,skewX:0,startPosition:1}},{t:this.instance_7,p:{x:-6.7,y:57.8,scaleX:1,skewX:0}},{t:this.instance_3,p:{x:-5.7,y:64.6,skewX:0,skewY:-7.1,regX:6,regY:11.1,scaleX:0.825,scaleY:1,rotation:0}},{t:this.instance_5,p:{x:11,y:14.8,skewX:0,skewY:0}},{t:this.instance_4,p:{scaleY:0.826,skewX:0.4,x:-1.7,y:31.9}},{t:this.instance_2,p:{scaleY:0.953,skewX:-179.8,skewY:7.5,x:-1.2,y:-29.9}}]},1).to({state:[{t:this.instance_10,p:{x:12.6,y:9.9,scaleX:0.821,rotation:-2.7,skewX:0,skewY:0}},{t:this.instance_11,p:{x:0.8,y:-62.2,skewX:180}},{t:this.instance_3,p:{x:-10,y:-54.5,skewX:169.8,skewY:-10.2,regX:0,regY:0,scaleX:0.939,scaleY:1,rotation:0}},{t:this.instance_7,p:{x:-11.7,y:52.8,scaleX:0.897,skewX:0}},{t:this.instance_4,p:{scaleY:0.828,skewX:4.6,x:-3.2,y:30.2}},{t:this.instance_2,p:{scaleY:1.013,skewX:-179.4,skewY:7.5,x:-1.2,y:-29.9}},{t:this.instance_8,p:{scaleX:1.354,x:-30.6,y:-14.1,skewX:180,startPosition:0}},{t:this.instance_5,p:{x:0.3,y:-15.5,skewX:177.3,skewY:-1.2}}]},1).to({state:[{t:this.instance_9,p:{x:-3.7,skewX:0,skewY:0,y:5,rotation:12.8}},{t:this.instance_10,p:{x:9.8,y:9.4,scaleX:0.604,rotation:0,skewX:-2.7,skewY:-3.3}},{t:this.instance_11,p:{x:4.5,y:-64.5,skewX:180}},{t:this.instance_3,p:{x:-9.5,y:-55.7,skewX:169.1,skewY:-9.7,regX:0,regY:0,scaleX:0.992,scaleY:1,rotation:0}},{t:this.instance_7,p:{x:-11.7,y:51.3,scaleX:0.756,skewX:0}},{t:this.instance_4,p:{scaleY:0.828,skewX:4.6,x:-3.2,y:30.2}},{t:this.instance_2,p:{scaleY:1.013,skewX:-179.4,skewY:7.5,x:-1.2,y:-29.9}},{t:this.instance_8,p:{scaleX:1.354,x:-36.4,y:-14.1,skewX:180,startPosition:0}},{t:this.instance_5,p:{x:-5.2,y:-15.5,skewX:177.3,skewY:-1.2}}]},1).to({state:[{t:this.instance_9,p:{x:0.1,skewX:0,skewY:0,y:5,rotation:12.8}},{t:this.instance_8,p:{scaleX:1,x:-43.9,y:-15,skewX:180,startPosition:1}},{t:this.instance_7,p:{x:6.5,y:-66.4,scaleX:1,skewX:180}},{t:this.instance_6,p:{regX:6.1,regY:11.1,scaleX:1,skewY:0,x:-2.9,y:-69.5,skewX:180}},{t:this.instance_5,p:{x:-16,y:-16.1,skewX:180,skewY:0}},{t:this.instance_4,p:{scaleY:1,skewX:180,x:-2,y:-33.5}},{t:this.instance_3,p:{x:-7.3,y:49.8,skewX:126.2,skewY:98.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.828,skewX:7.8,skewY:0.5,x:-2.3,y:30.3}}]},1).to({state:[{t:this.instance_11,p:{x:-11.5,y:52.9,skewX:0}},{t:this.instance_9,p:{x:-3.7,skewX:0,skewY:0,y:5,rotation:12.8}},{t:this.instance_8,p:{scaleX:0.845,x:-34.1,y:-15,skewX:180,startPosition:1}},{t:this.instance_7,p:{x:4.5,y:-64.6,scaleX:1,skewX:180}},{t:this.instance_6,p:{regX:-1.2,regY:1.9,scaleX:0.943,skewY:3.6,x:-10.2,y:-60.3,skewX:180}},{t:this.instance_5,p:{x:-5.2,y:-16.1,skewX:180,skewY:0}},{t:this.instance_4,p:{scaleY:1,skewX:180,x:-2,y:-33.5}},{t:this.instance_3,p:{x:-6,y:51.1,skewX:126.2,skewY:98.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.84,skewX:3.4,skewY:0.5,x:-2.3,y:30.3}},{t:this.instance_10,p:{x:-5.4,y:-11.3,scaleX:0.947,rotation:0,skewX:-177.3,skewY:2.7}}]},1).to({state:[{t:this.instance_11,p:{x:-7.7,y:55.6,skewX:0}},{t:this.instance_9,p:{x:-9.9,skewX:0,skewY:0,y:12,rotation:1.8}},{t:this.instance_8,p:{scaleX:1,x:-16.9,y:-15.2,skewX:180,startPosition:1}},{t:this.instance_7,p:{x:2.8,y:-62.9,scaleX:1,skewX:180}},{t:this.instance_6,p:{regX:6.1,regY:11.1,scaleX:1,skewY:0,x:-3.9,y:-66.7,skewX:180}},{t:this.instance_5,p:{x:9,y:-16.1,skewX:180,skewY:0}},{t:this.instance_4,p:{scaleY:0.933,skewX:180,x:-2,y:-33.5}},{t:this.instance_3,p:{x:-3.5,y:50.6,skewX:118.3,skewY:90.9,regX:0,regY:0,scaleX:0.745,scaleY:1.338,rotation:0}},{t:this.instance_2,p:{scaleY:0.898,skewX:-0.2,skewY:-7.5,x:-1.2,y:30.5}},{t:this.instance_10,p:{x:2.1,y:-9.5,scaleX:0.947,rotation:0,skewX:-177.3,skewY:2.7}}]},1).to({state:[{t:this.instance_10,p:{x:12.1,y:-9.5,scaleX:0.947,rotation:0,skewX:-177.3,skewY:2.7}},{t:this.instance_11,p:{x:-2.5,y:60.1,skewX:0}},{t:this.instance_6,p:{regX:0,regY:0,scaleX:0.811,skewY:0,x:-10,y:55.1,skewX:0}},{t:this.instance_9,p:{x:-25.9,skewX:0,skewY:0,y:10,rotation:12.8}},{t:this.instance_8,p:{scaleX:1,x:-6.9,y:-13,skewX:180,startPosition:1}},{t:this.instance_7,p:{x:-6.7,y:-57.1,scaleX:1,skewX:180}},{t:this.instance_3,p:{x:-5.7,y:-64,skewX:180,skewY:7.1,regX:6,regY:11.1,scaleX:0.825,scaleY:1,rotation:0}},{t:this.instance_5,p:{x:11,y:-14.1,skewX:180,skewY:0}},{t:this.instance_4,p:{scaleY:0.826,skewX:179.6,x:-1.7,y:-31.3}},{t:this.instance_2,p:{scaleY:0.953,skewX:-0.2,skewY:-7.5,x:-1.2,y:30.5}}]},1).to({state:[{t:this.instance_10,p:{x:12.6,y:-9.3,scaleX:0.821,rotation:0,skewX:-177.3,skewY:2.7}},{t:this.instance_11,p:{x:0.8,y:62.9,skewX:0}},{t:this.instance_3,p:{x:-10,y:55.1,skewX:0,skewY:0,regX:0,regY:0,scaleX:0.939,scaleY:1,rotation:10.2}},{t:this.instance_7,p:{x:-11.7,y:-52.1,scaleX:0.897,skewX:180}},{t:this.instance_4,p:{scaleY:0.828,skewX:175.4,x:-3.2,y:-29.5}},{t:this.instance_2,p:{scaleY:1.013,skewX:-0.6,skewY:-7.5,x:-1.2,y:30.5}},{t:this.instance_8,p:{scaleX:1.354,x:-30.6,y:14.7,skewX:0,startPosition:0}},{t:this.instance_5,p:{x:0.3,y:16.1,skewX:2.7,skewY:1.2}}]},1).to({state:[{t:this.instance_9,p:{x:-3.7,skewX:167.2,skewY:-12.8,y:-4.3,rotation:0}},{t:this.instance_10,p:{x:9.8,y:-8.8,scaleX:0.604,rotation:0,skewX:-177.3,skewY:3.3}},{t:this.instance_11,p:{x:4.5,y:65.1,skewX:0}},{t:this.instance_3,p:{x:-9.5,y:56.4,skewX:10.9,skewY:9.7,regX:0,regY:0,scaleX:0.992,scaleY:1,rotation:0}},{t:this.instance_7,p:{x:-11.7,y:-50.6,scaleX:0.756,skewX:180}},{t:this.instance_4,p:{scaleY:0.828,skewX:175.4,x:-3.2,y:-29.5}},{t:this.instance_2,p:{scaleY:1.013,skewX:-0.6,skewY:-7.5,x:-1.2,y:30.5}},{t:this.instance_8,p:{scaleX:1.354,x:-36.4,y:14.7,skewX:0,startPosition:0}},{t:this.instance_5,p:{x:-5.2,y:16.1,skewX:2.7,skewY:1.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-58.7,102.6,132.7);


(lib.poof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,poof:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndStop("default");
		//this.frameActions._5.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A5CAD4"],[0.31,1],2.5,-9.8,0,2.5,-9.8,62.6).s().p("AgrEUQgWgUgRgdIgMASIgIALQgfAlgygQIgHgDQgpgcAMgtIAJgaIAcgRIg6AKQg8gdgVgsQgHgPgDgRIAEgCIgBgGQABAAAAgBQABAAABAAQAAgBAAAAQAAgBAAgBIAAgBIgDgLIgBgCIACgHIADgJQA0iRCUgRIAJgQQgCgcAMgbQBCiKCRAoQAWAGARAIQBjArg6BaIgHAKIAJADQCJAoAKCDQAHBghQAbQgKAEgNACIgBAAIgvgTQAXAggCAnQgCAvgXAcQgMAPgSAJQgRAJgXAFQgYAFgXAAQhDAAgugsgAlKAyIAAAAIgCgBIgBAAIgBgDIABAAIABgDIABgCIABgBIAAAFIABAFIgBAAgAlOAjIAAgBIABgLIABAHIAAAAIAAAAIAAABIgCAEIAAACIAAgCg");
	this.shape.setTransform(-1.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5BBBD").s().p("AhLEiIgLgNQhKAXglgZQAyAQAfgmIAIgLIAMgSQASAdAVAUQA+A7BjgUQAWgEASgKQARgJAMgOQAYgcACgwQACgngYggIAvAUIACAAQAMgDALgEQBQgbgIhgQgKiDiIgoIgKgCIAHgKQA6hbhjgrQgRgIgWgGQiRgohBCKQgNAbADAcIgKAQQiUASg0CRIgDAJIgCAGIABACIADALIABACQAAAAAAABQgBABAAAAQgBAAAAABQgBAAgBAAIACAHIgEACQACAQAHAPQAVAsA8AeIA6gLIgbARIgKAaIAAgGQgGAPgngRQgrgTgfhHIAAAAIgNgjQADgSAKgTIgBgHIAEAOIAAABIABgCIABgCIABgEIAAAAIAAgBIAAAAIgBgHIAAAAIgBgCIABABIAAABIACAGIAAgKQAEizDLAFIAAg3QAThhCRgfIgPgBQBpgdAaAxQA7AOAMAeQAgBMhEApQA/AOA3AiQA2AiAQBkQANBdh+AlIgYAGQAEARgBATQgEA5glAnIgCABIgBABQgLAMgOAJIgHAFQg4AkgyAAQhBAAg7g/gAlZAmIgBADIgBACIgBABIACACIAAAAIACABIABAAIABABIAAgBIgBgFIgBgFIgBABg");
	this.shape_1.setTransform(-0.6,-0.2);

	this.instance = new lib.poof7("synched",0);
	this.instance.setTransform(0.1,-10.8,1,1,0,0,0,79.5,71.6);

	this.instance_1 = new lib.poof5("synched",0);
	this.instance_1.setTransform(-62.2,31.3,1,1,0,0,0,39,33.1);

	this.instance_2 = new lib.poof4("synched",0);
	this.instance_2.setTransform(-67,-90,1,1,0,0,0,36.6,34.2);

	this.instance_3 = new lib.poof3("synched",0);
	this.instance_3.setTransform(81.3,34.1,1,1,0,0,0,44.8,32);

	this.instance_4 = new lib.poof2("synched",0);
	this.instance_4.setTransform(61.8,-73.8,1,1,0,0,0,41,39.4);

	this.instance_5 = new lib.poof1("synched",0);
	this.instance_5.setTransform(5.1,-20.5,1,1,0,0,0,25.9,25);

	this.instance_6 = new lib.poof3("synched",0);
	this.instance_6.setTransform(74.4,-13.2,0.622,0.622,0,0,0,44.8,32);

	this.instance_7 = new lib.poof1("synched",0);
	this.instance_7.setTransform(7,-58.7,0.618,0.618,0,0,0,25.9,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:5.1,y:-20.5,alpha:1}},{t:this.instance_4,p:{regX:41,regY:39.4,scaleX:1,scaleY:1,rotation:0,x:61.8,y:-73.8,alpha:1}},{t:this.instance_3,p:{regX:44.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:81.3,y:34.1,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:-67,y:-90,alpha:1}},{t:this.instance_1,p:{regX:39,regY:33.1,scaleX:1,scaleY:1,rotation:0,x:-62.2,y:31.3,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{regY:25,scaleX:0.618,scaleY:0.618,x:7,y:-58.7,alpha:1}},{t:this.instance_4,p:{regX:40.9,regY:39.5,scaleX:0.471,scaleY:0.471,rotation:1.5,x:92.2,y:-94.5,alpha:1}},{t:this.instance_6,p:{scaleX:0.622,scaleY:0.622,y:-13.2,alpha:1}},{t:this.instance_3,p:{regX:44.7,scaleX:0.489,scaleY:0.528,skewX:161.4,skewY:-18.6,x:57.5,y:-121.2,alpha:1}},{t:this.instance_2,p:{scaleX:0.512,scaleY:0.512,x:-69.3,y:-118.2,alpha:1}},{t:this.instance_1,p:{regX:39.1,regY:33.2,scaleX:0.617,scaleY:0.617,rotation:31.6,x:-42.6,y:-14.1,alpha:1}},{t:this.instance_5,p:{scaleX:0.54,scaleY:0.54,rotation:-22.1,x:-86.2,y:-13.1,alpha:1}}]},1).to({state:[{t:this.instance_7,p:{regY:24.9,scaleX:0.501,scaleY:0.501,x:9,y:-77.7,alpha:0.5}},{t:this.instance_4,p:{regX:40.9,regY:39.5,scaleX:0.395,scaleY:0.395,rotation:1.5,x:91.4,y:-113.4,alpha:0.5}},{t:this.instance_6,p:{scaleX:0.437,scaleY:0.437,y:-27.1,alpha:0.5}},{t:this.instance_3,p:{regX:44.7,scaleX:0.411,scaleY:0.443,skewX:161.4,skewY:-18.6,x:62.3,y:-135.8,alpha:0.5}},{t:this.instance_2,p:{scaleX:0.395,scaleY:0.395,x:-70.3,y:-133.2,alpha:0.5}},{t:this.instance_1,p:{regX:39,regY:33.1,scaleX:0.473,scaleY:0.473,rotation:31.6,x:-43.6,y:-29.2,alpha:0.5}},{t:this.instance_5,p:{scaleX:0.372,scaleY:0.372,rotation:-22.1,x:-87.1,y:-28.1,alpha:0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_242 = function() {
		//this.frameActions._242.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(242).call(this.frame_242).wait(1));

	// Layer 2
	this.position_mc = new lib.circ();
	this.position_mc.setTransform(577,65.4,0.999,0.999,11.3);

	this.timeline.addTween(cjs.Tween.get(this.position_mc).wait(1).to({scaleX:1,scaleY:1,rotation:13.9,x:578.9,y:66},0).wait(1).to({scaleX:1,scaleY:1,rotation:16.4,x:584.4,y:67.5},0).wait(1).to({rotation:19.2,x:590,y:69.4},0).wait(1).to({scaleX:1,rotation:22,x:595.5,y:71.5},0).wait(1).to({rotation:24.9,x:600.9,y:73.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:28,x:606.1,y:76.5},0).wait(1).to({rotation:31.2,x:611.2,y:79.4},0).wait(1).to({scaleX:1,rotation:34.6,x:616.1,y:82.7},0).wait(1).to({rotation:38.2,x:620.7,y:86.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:42,x:625.2,y:90},0).wait(1).to({rotation:46,x:629.4,y:94.1},0).wait(1).to({scaleX:0.99,rotation:50.1,x:633.2,y:98.5},0).wait(1).to({scaleY:1,rotation:55.2,x:636.7,y:103.1},0).wait(1).to({scaleX:0.99,rotation:61.5,x:639.7,y:108.1},0).wait(1).to({rotation:66.1,x:642.3,y:113.4},0).wait(1).to({scaleX:0.99,rotation:69.8,x:644.4,y:118.9},0).wait(1).to({scaleY:1,rotation:72.8,x:646.2,y:124.4},0).wait(1).to({scaleX:0.99,rotation:75.6,x:647.8,y:130.1},0).wait(1).to({rotation:78.1,x:649.1,y:135.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:80.6,x:650.1,y:141.6},0).wait(1).to({rotation:83,x:650.9,y:147.4},0).wait(1).to({scaleX:0.99,rotation:85.5,x:651.4,y:153.2},0).wait(1).to({rotation:88,x:651.7,y:159},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:90.6,y:164.9},0).wait(1).to({rotation:93.3,x:651.5,y:170.7},0).wait(1).to({scaleX:0.99,rotation:96.2,x:650.9,y:176.6},0).wait(1).to({rotation:99.2,x:650.1,y:182.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:102.5,x:648.9,y:188.1},0).wait(1).to({rotation:106.1,x:647.5,y:193.8},0).wait(1).to({scaleX:0.99,rotation:110,x:645.6,y:199.3},0).wait(1).to({scaleY:0.99,rotation:114.1,x:643.3,y:204.7},0).wait(1).to({scaleX:0.98,rotation:118.6,x:640.7,y:209.9},0).wait(1).to({rotation:123.4,x:637.6,y:214.9},0).wait(1).to({rotation:128.4,x:634.2,y:219.6},0).wait(1).to({scaleX:0.98,scaleY:0.99,rotation:133.6,x:630.3,y:224},0).wait(1).to({rotation:138.9,x:626,y:228},0).wait(1).to({scaleX:0.98,rotation:144.2,x:621.4,y:231.6},0).wait(1).to({scaleY:0.99,rotation:149.3,x:616.5,y:234.7},0).wait(1).to({scaleX:0.98,rotation:154.2,x:611.3,y:237.4},0).wait(1).to({rotation:158.8,x:605.9,y:239.7},0).wait(1).to({scaleX:0.98,rotation:163.5,x:600.4,y:241.6},0).wait(1).to({scaleY:0.99,rotation:168.2,x:594.9,y:242.9},0).wait(1).to({scaleX:0.98,rotation:170.9,x:589.1,y:243.9},0).wait(1).to({rotation:172.4,x:583.2,y:244.7},0).wait(1).to({scaleX:0.98,rotation:173.3,x:577.4,y:245.4},0).wait(1).to({scaleY:0.99,rotation:174.1,x:571.6,y:246},0).wait(1).to({scaleX:0.98,rotation:174.6,x:565.7,y:246.6},0).wait(1).to({rotation:175.1,x:559.9,y:247},0).wait(1).to({scaleX:0.98,scaleY:0.99,rotation:175.4,x:554,y:247.5},0).wait(1).to({rotation:175.8,x:548.2,y:247.9},0).wait(1).to({scaleX:0.98,rotation:176,x:542.4,y:248.3},0).wait(1).to({rotation:176.3,x:536.5,y:248.6},0).wait(1).to({scaleX:0.97,scaleY:0.99,rotation:176.5,x:530.7,y:248.9},0).wait(1).to({rotation:176.7,x:524.8,y:249.2},0).wait(1).to({scaleX:0.97,rotation:176.9,x:519,y:249.5},0).wait(1).to({rotation:177,x:513.1,y:249.8},0).wait(1).to({scaleX:0.97,scaleY:0.98,rotation:177.2,x:507.3,y:250.1},0).wait(1).to({rotation:177.3,x:501.4,y:250.3},0).wait(1).to({scaleX:0.97,rotation:177.5,x:495.6,y:250.5},0).wait(1).to({scaleY:0.98,rotation:177.6,x:489.7,y:250.7},0).wait(1).to({scaleX:0.97,rotation:177.7,x:483.9,y:250.9},0).wait(1).to({rotation:177.8,x:478,y:251.1},0).wait(1).to({scaleX:0.97,rotation:177.9,x:472.2,y:251.3},0).wait(1).to({scaleY:0.98,rotation:178,x:466.3,y:251.5},0).wait(1).to({scaleX:0.97,rotation:178.1,x:460.5,y:251.6},0).wait(1).to({rotation:178.2,x:454.6,y:251.8},0).wait(1).to({scaleX:0.97,scaleY:0.98,rotation:178.3,x:448.8,y:251.9},0).wait(1).to({rotation:178.4,x:442.9,y:252},0).wait(1).to({rotation:178.5,x:437.1,y:252.1},0).wait(1).to({scaleX:0.97,x:431.2,y:252.3},0).wait(1).to({scaleY:0.98,rotation:178.6,x:425.4,y:252.4},0).wait(1).to({scaleX:0.97,rotation:178.7,x:419.5,y:252.5},0).wait(1).to({rotation:178.8,x:413.7},0).wait(1).to({scaleX:0.96,rotation:178.9,x:407.8,y:252.6},0).wait(1).to({scaleY:0.98,x:402,y:252.7},0).wait(1).to({scaleX:0.96,rotation:179,x:396.1,y:252.8},0).wait(1).to({rotation:179.1,x:390.3},0).wait(1).to({scaleX:0.96,scaleY:0.98,rotation:179.2,x:384.4,y:252.9},0).wait(1).to({x:378.6},0).wait(1).to({scaleX:0.96,rotation:179.3,x:372.7},0).wait(1).to({rotation:179.4,x:366.9,y:253},0).wait(1).to({scaleX:0.96,scaleY:0.98,rotation:179.5,x:361},0).wait(1).to({x:355.2},0).wait(1).to({scaleX:0.96,rotation:179.6,x:349.3},0).wait(1).to({rotation:179.7,x:343.5},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:337.6},0).wait(1).to({rotation:179.8,x:331.8,y:252.9},0).wait(1).to({scaleX:0.96,rotation:179.9,x:325.9},0).wait(1).to({scaleY:0.98,rotation:180,x:320.1},0).wait(1).to({scaleX:0.96,rotation:180.1,x:314.2,y:252.8},0).wait(1).to({x:308.4},0).wait(1).to({scaleX:0.96,rotation:180.2,x:302.5,y:252.7},0).wait(1).to({scaleY:0.97,rotation:180.3,x:296.7},0).wait(1).to({scaleX:0.95,rotation:180.4,x:290.8,y:252.6},0).wait(1).to({rotation:180.5,x:285,y:252.5},0).wait(1).to({scaleX:0.95,scaleY:0.97,rotation:180.6,x:279.1,y:252.4},0).wait(1).to({rotation:180.7,x:273.3,y:252.3},0).wait(1).to({scaleX:0.95,rotation:180.8,x:267.4,y:252.2},0).wait(1).to({rotation:180.9,x:261.6,y:252.1},0).wait(1).to({scaleX:0.95,scaleY:0.97,rotation:181,x:255.7,y:251.9},0).wait(1).to({rotation:181.1,x:249.9,y:251.8},0).wait(1).to({rotation:181.2,x:244,y:251.6},0).wait(1).to({scaleX:0.95,rotation:181.3,x:238.2,y:251.4},0).wait(1).to({scaleY:0.97,rotation:181.4,x:232.3,y:251.3},0).wait(1).to({scaleX:0.95,rotation:181.5,x:226.5,y:251.1},0).wait(1).to({rotation:181.7,x:220.6,y:250.9},0).wait(1).to({scaleX:0.95,scaleY:0.97,rotation:181.8,x:214.8,y:250.6},0).wait(1).to({rotation:182,x:208.9,y:250.4},0).wait(1).to({scaleX:0.95,rotation:182.2,x:203.1,y:250.2},0).wait(1).to({rotation:182.3,x:197.2,y:249.9},0).wait(1).to({scaleX:0.95,scaleY:0.97,rotation:182.5,x:191.4,y:249.6},0).wait(1).to({rotation:182.7,x:185.6,y:249.3},0).wait(1).to({scaleX:0.95,rotation:183,x:179.7,y:248.9},0).wait(1).to({scaleY:0.97,rotation:183.2,x:173.9,y:248.6},0).wait(1).to({scaleX:0.94,rotation:183.5,x:168,y:248.2},0).wait(1).to({rotation:183.8,x:162.2,y:247.8},0).wait(1).to({scaleX:0.94,rotation:184.2,x:156.3,y:247.3},0).wait(1).to({scaleY:0.97,rotation:184.6,x:150.5,y:246.8},0).wait(1).to({scaleX:0.94,rotation:185.1,x:144.7,y:246.3},0).wait(1).to({rotation:185.7,x:138.9,y:245.7},0).wait(1).to({scaleX:0.94,rotation:186.4,x:133,y:245},0).wait(1).to({scaleY:0.97,rotation:187.4,x:127.3,y:244.3},0).wait(1).to({scaleX:0.94,rotation:188.7,x:121.4,y:243.4},0).wait(1).to({rotation:190.5,x:115.7,y:242.4},0).wait(1).to({scaleX:0.94,scaleY:0.97,rotation:193.7,x:110,y:241.2},0).wait(1).to({rotation:200.6,x:104.4,y:239.4},0).wait(1).to({scaleX:0.94,rotation:206.2,x:99.1,y:237.1},0).wait(1).to({rotation:211.6,x:94,y:234.2},0).wait(1).to({scaleX:0.94,scaleY:0.96,rotation:216.8,x:89.2,y:230.8},0).wait(1).to({rotation:221.8,x:84.7,y:227.1},0).wait(1).to({scaleX:0.94,rotation:226.6,x:80.6,y:223},0).wait(1).to({rotation:231.1,x:76.8,y:218.5},0).wait(1).to({scaleX:0.94,scaleY:0.96,rotation:235.4,x:73.3,y:213.8},0).wait(1).to({rotation:239.3,x:70.2,y:208.8},0).wait(1).to({rotation:243.1,x:67.4,y:203.7},0).wait(1).to({scaleX:0.93,scaleY:0.96,rotation:246.6,x:65,y:198.4},0).wait(1).to({rotation:249.9,x:62.9,y:192.9},0).wait(1).to({scaleX:0.93,rotation:253.1,x:61.1,y:187.4},0).wait(1).to({rotation:256.1,x:59.6,y:181.7},0).wait(1).to({scaleX:0.93,scaleY:0.96,rotation:259,x:58.4,y:176},0).wait(1).to({rotation:261.9,x:57.4,y:170.2},0).wait(1).to({scaleX:0.93,rotation:264.7,x:56.8,y:164.4},0).wait(1).to({scaleY:0.96,rotation:267.4,x:56.5,y:158.5},0).wait(1).to({scaleX:0.93,rotation:270.2,x:56.4,y:152.7},0).wait(1).to({rotation:272.9,x:56.6,y:146.8},0).wait(1).to({scaleX:0.93,rotation:275.7,x:57.1,y:141},0).wait(1).to({scaleY:0.96,rotation:278.5,x:57.9,y:135.2},0).wait(1).to({scaleX:0.93,rotation:281.4,x:58.9,y:129.5},0).wait(1).to({rotation:284.4,x:60.3,y:123.8},0).wait(1).to({scaleX:0.93,rotation:287.5,x:61.9,y:118.2},0).wait(1).to({scaleY:0.96,rotation:290.7,x:63.9,y:112.6},0).wait(1).to({scaleX:0.93,rotation:294.1,x:66.2,y:107.3},0).wait(1).to({rotation:297.6,x:68.8,y:102},0).wait(1).to({scaleX:0.93,scaleY:0.96,rotation:301.3,x:71.7,y:96.9},0).wait(1).to({rotation:305.1,x:74.9,y:92.1},0).wait(1).to({scaleX:0.92,rotation:309.2,x:78.5,y:87.4},0).wait(1).to({rotation:313.4,x:82.4,y:83.1},0).wait(1).to({scaleX:0.92,scaleY:0.96,rotation:317.8,x:86.6,y:79},0).wait(1).to({rotation:322.3,x:91.1,y:75.3},0).wait(1).to({scaleX:0.92,rotation:326.8,x:95.9,y:72},0).wait(1).to({scaleY:0.96,rotation:331.4,x:101,y:69},0).wait(1).to({scaleX:0.92,rotation:335.9,x:106.2,y:66.5},0).wait(1).to({rotation:340.4,x:111.7,y:64.4},0).wait(1).to({scaleX:0.92,rotation:346,x:117.1,y:62.7},0).wait(1).to({scaleY:0.95,rotation:350.8,x:122.9,y:61.6},0).wait(1).to({scaleX:0.92,rotation:353,x:128.8,y:60.8},0).wait(1).to({rotation:354.3,x:134.6,y:60.2},0).wait(1).to({rotation:355.2,x:140.4,y:59.7},0).wait(1).to({scaleX:0.92,scaleY:0.95,rotation:355.9,x:146.3,y:59.3},0).wait(1).to({rotation:356.4,x:152.1,y:59},0).wait(1).to({scaleX:0.92,rotation:356.8,x:158,y:58.7},0).wait(1).to({scaleY:0.95,rotation:357.1,x:163.8,y:58.4},0).wait(1).to({scaleX:0.92,rotation:357.4,x:169.7,y:58.2},0).wait(1).to({rotation:357.7,x:175.5,y:58},0).wait(1).to({scaleX:0.92,rotation:357.9,x:181.4,y:57.8},0).wait(1).to({scaleY:0.95,rotation:358.1,x:187.2,y:57.6},0).wait(1).to({scaleX:0.91,rotation:358.3,x:193.1,y:57.5},0).wait(1).to({rotation:358.4,x:198.9,y:57.3},0).wait(1).to({scaleX:0.91,rotation:358.6,x:204.8,y:57.2},0).wait(1).to({scaleY:0.95,rotation:358.7,x:210.6,y:57.1},0).wait(1).to({scaleX:0.91,rotation:358.8,x:216.5,y:57},0).wait(1).to({rotation:358.9,x:222.4},0).wait(1).to({scaleX:0.91,scaleY:0.95,rotation:359,x:228.2,y:56.9},0).wait(1).to({rotation:359.1,x:234},0).wait(1).to({scaleX:0.91,rotation:359.2,x:239.9,y:56.8},0).wait(1).to({rotation:359.3,x:245.8},0).wait(1).to({scaleX:0.91,scaleY:0.95,rotation:359.4,x:251.6},0).wait(1).to({x:257.5,y:56.7},0).wait(1).to({scaleX:0.91,rotation:359.5,x:263.3},0).wait(1).to({scaleY:0.95,rotation:359.6,x:269.2},0).wait(1).to({scaleX:0.91,rotation:359.7,x:275},0).wait(1).to({x:280.9},0).wait(1).to({scaleX:0.91,rotation:359.8,x:286.7},0).wait(1).to({scaleY:0.95,x:292.6,y:56.8},0).wait(1).to({scaleX:0.91,rotation:359.9,x:298.4},0).wait(1).to({x:304.3},0).wait(1).to({scaleX:0.9,rotation:360,x:310.1,y:56.9},0).wait(1).to({scaleY:0.95,x:316},0).wait(1).to({scaleX:0.9,rotation:360.1,x:321.8,y:57},0).wait(1).to({x:327.7},0).wait(1).to({scaleY:0.94,rotation:360.2,x:333.5,y:57.1},0).wait(1).to({scaleX:0.9,x:339.4},0).wait(1).to({rotation:360.3,x:345.2,y:57.2},0).wait(1).to({scaleX:0.9,x:351.1,y:57.3},0).wait(1).to({scaleY:0.94,rotation:360.4,x:356.9,y:57.4},0).wait(1).to({scaleX:0.9,x:362.8},0).wait(1).to({rotation:360.5,x:368.6,y:57.5},0).wait(1).to({scaleX:0.9,x:374.5,y:57.6},0).wait(1).to({scaleY:0.94,x:380.3,y:57.7},0).wait(1).to({scaleX:0.9,rotation:360.6,x:386.2,y:57.8},0).wait(1).to({x:392,y:57.9},0).wait(1).to({scaleX:0.9,scaleY:0.94,rotation:360.7,x:397.9,y:58},0).wait(1).to({x:403.7,y:58.1},0).wait(1).to({scaleX:0.9,x:409.6,y:58.2},0).wait(1).to({rotation:360.8,x:415.4,y:58.4},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:421.3,y:58.5},0).wait(1).to({rotation:360.9,x:427.1,y:58.6},0).wait(1).to({scaleX:0.89,x:433,y:58.7},0).wait(1).to({scaleY:0.94,x:438.8,y:58.9},0).wait(1).to({scaleX:0.89,rotation:361,x:444.7,y:59},0).wait(1).to({x:450.5,y:59.2},0).wait(1).to({scaleX:0.89,rotation:361.1,x:456.4,y:59.3},0).wait(1).to({scaleY:0.94,x:462.2,y:59.5},0).wait(1).to({scaleX:0.89,rotation:361.2,x:468.1,y:59.6},0).wait(1).to({x:473.9,y:59.8},0).wait(1).to({scaleX:0.89,rotation:361.3,x:479.8,y:60},0).wait(1).to({scaleY:0.94,x:485.6,y:60.1},0).wait(1).to({scaleX:0.89,rotation:361.4,x:491.5,y:60.3},0).wait(1).to({x:497.3,y:60.5},0).wait(1).to({scaleX:0.89,scaleY:0.94,rotation:361.5,x:503.2,y:60.7},0).wait(1).to({rotation:361.6,x:509,y:60.9},0).wait(1).to({scaleX:0.89,rotation:361.7,x:514.9,y:61.1},0).wait(1).to({rotation:361.8,x:520.7,y:61.3},0).wait(1).to({scaleY:0.94,rotation:361.9,x:526.6,y:61.6},0).wait(1).to({scaleX:0.89,rotation:362,x:532.4,y:61.8},0).wait(1).to({rotation:362.1,x:538.2,y:62},0).wait(1).to({scaleX:0.89,scaleY:0.93,rotation:362.3,x:544.1,y:62.3},0).wait(1).to({rotation:362.5,x:550,y:62.6},0).wait(1).to({scaleX:0.88,rotation:362.8,x:555.8,y:62.9},0).wait(1).to({rotation:363.3,x:561.6,y:63.3},0).wait(1).to({scaleX:0.88,scaleY:0.93,rotation:364.4,x:567.5,y:63.7},0).wait(1).to({rotation:369.4,x:573.3,y:64.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(547.2,52.4,59.5,25.9);


(lib.Panel4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{panel_3:0});

	// timeline functions:
	this.frame_5 = function() {
		this.frameActions._5.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 4
	this.instance = new lib.screen("synched",0);
	this.instance.setTransform(349.7,175,1,1,0,0,0,349.7,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:350,x:350,alpha:0.717},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.15},0).to({_off:true},1).wait(2));

	// Layer 1
	this.text = new cjs.Text("Pigeons: 311,000,000 people", "bold 18px 'Trebuchet MS'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.setTransform(442.9,322);

	this.text_1 = new cjs.Text("Pigeonholes: 6,000,000 hairs on a person’s head", "bold 18px 'Trebuchet MS'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(569.5,297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(6));

	// Layer 2
	this.instance_1 = new lib.map_outline("synched",0);
	this.instance_1.setTransform(340.1,149.2,0.85,0.85,0,0,0,271.1,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGwWmQgUgLgZAGIgqgSQgagLAJgPQgOAKgWgDQgEgQgWguQgRgkAAghQhLhLgihqQgZgigigZQgFgFABgFIAEgLQgSAJgpgKQgpgKgVALQgJAHgTAmQgQAdgWAGQgMAAABgEIAEgLQgHAJgQgJQgQgKAIgKQgGAGgHgFQgLgFgKACQAAgCAEgEQADgEAAgEQgQAIgTgXQgUgcgLgIIAAgsQAAgFgRgbQgLgUAHgGQgKABgRgRQgYgXgHgEQAEgKgMgJQgKgHAKgEQgPAAgUgWQgTgUgLgXQggACgugHQg1gJgWgBQgKAKgBALQgBAIAFAPQgFgBgNACIgSgBQgHgBgHgGIgIgHIgMAFQgKAFgHgDQgagLhVgHQhPgHgjgTQAAgCAEgEQADgEAAgEQgKAJgQgLQgVgNgLAAQAAgCAEgEQADgEAAgFQgJAKgLgHQgOgKgJAAQAAgCADgEQAEgEAAgEQgLAIgTgJQgUgKgBgSQgJAJgLgHQgPgKgJABQAAgDAEgEQAEgEAAgEQgLAIgTgJQgUgKgBgSQgJAJgLgHQgPgKgJABQAAgDAEgEQADgEAAgEQgHAHgGgDQgIgEgIAAQgGgGADgLQAEgLgIgIIh8gIQhMgHgSgdIAGgXQAEgOgDgOQgFgPgVgYQgUgWgFgTQgHgGgHADQgHACgIgGIAAgdQgfgDgWgXQgGgGgcgpQgUAEgUgPQgTgOgVAEQgIgRACgWQADgUALgOIgRgUQgGgIAIgQQgYgigNgfQgQgmgFgoQgDgMAOgFQAOgFgDgOQgcgCgJgoQgHgnAPgdQgDgBgMgTQgKgOgMgCQAAgGAEgIQAEgHgBgIQgHgMgNglQgLgggMgNQAOgJACghQAEguACgHQgCgKgNgaQgLgUAEgYQABgPANgLIAWgRQABgTAFgLIAQgdQAFgHgGgMQgHgOABgDQAAgEAHgGQAHgGAAgFIgEgyQgCgiAGgaQANgNAGgJQAMgQgJgFQAhgeAehOQAkhcARgaQgCgSAFgPIAMgYQgFgUAFgfIAKg5QANhLgXgkIAJgWQAGgOgBgPQAnAiAmATQAyAYAhgLQgSg5AZAUIgFgWQgEgOACgOQGnB+IgBNIBzAUQBHAMAuAFQCpARDZAGQChAFECAAQAJABgBgOQgBgUAAgDQAagCALARQAIAOgBAeQAVAYAsABQAaAAA9gEQgCALAKAHQAKAIgDAKQAIgNAQAEQAHACAXAMQAUALAKAAQAQAAAJgXQAQANAkAFQAVACArACQgCAHgFAEQgGAEgBgIQgHARgfALQgiANgIAKQgGAFgDAAQgEABgCgGQgGADACAHQABAKgEAJQgIACgRAWQgOAPgMgKQALAMgLAFQgQAJACALQAOAHAcgRQAjgUARAAQACAKgEAHIgFANQAJgCAHADIANAGQAdgCAWgbQAaABATgOQALgHASgWQARgVANgHQAUgNAdADQgCANgSALQgSALABAQQAEANAOgDQAPgDAEAHQAMACAJAOQANATACACIAagEQALgCAOAGQAJACAJgNQAMgQAGgDQAIgDAngCQAegBAKgPQAJgBgBAPQgBAUABACQAOADAQgFQARgGAKABQgEAUAQAMQASAOAAAMQgKgEgJABQgHACgEgGQgGAMgMAAQgNgBgFAKQgLgBgMgEIgVgJQgKABgTANQgQAMgUgEQgFAEgGAOQgFAOgGAEQgIACgDgFQgCgDgBgIQgFgCgJAMQgGAIgCgLQggAvgMAvQAQAAAIgaQAIgaATACQABAOgIASQgIASABAPIgIAKQgGAGgIgBQAMAfgNA1QgQA/ACAbQAMAfABAHQAFAXgDAaQAAAHAOAYQALATgLAIQADAEAKABQAJACAIAIQAmgGASgnQAFgMAThDQgLgVgLgwQgNgxgJgUQASgmgEg5QAKADADgIQABgCABgOIATgOQAKgJAAgNQACAAAFAEQAEADADAAQAGgCAEgRQAEgOAQAEQgIgHAAgPQAAgPAIgHQANACAZABQAWABAMADIAAAIQgBAGABABQAIAFAUAAQAXAAAHACQAAARAPAFQgGARAIAcQAKAfgFAaQgOgEAAALQgBAGABAQQgMAAgGALQgJAQgCACQAGANAIABQAMgCAIgMIANgWQAPgcAgAGQgGAGACAFQABAGADgKQARAdAEAIQALAZgKALIANAOQAIALgOAEQALAFADAOQACALgBAVQgPgFgHANQgFAJgJgKQAHAMAAAKQgDAAgEgEQgEgDgEAAQAKAKgHARQgKAYAAAHQgFACgFAJQgDAFgJgJQAEAVAiAHQApAHAIAJQAHgCARgKQAOgJANgBQAegaA0giQBNgyAIgGQATgUAgguQgBgFgGACQgJAFgFgCIAAgzQAUgRA0gD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");
	mask.setTransform(285.1,146.3);

	// notes
	this.instance_2 = new lib.photo("synched",0);
	this.instance_2.setTransform(337,145.5,1,1,0,0,0,276,183.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	// player shads
	this.instance_3 = new lib.mapshape();
	this.instance_3.setTransform(339.8,149,0.85,0.85,0,0,0,271.1,168.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,350);


(lib.Panel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{panel_2:0});

	// timeline functions:
	this.frame_6 = function() {
		this.frameActions._6.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 2
	this.instance = new lib.screen("synched",0);
	this.instance.setTransform(349.7,175,1,1,0,0,0,349.7,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:350,x:350,alpha:0.717},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.15},0).to({_off:true},1).wait(3));

	// btns
	this.instance_1 = new lib.pigeons();
	this.instance_1.setTransform(353.4,175.5,1,1,0,0,-0.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,350);


(lib.Panel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{panel_start:0});

	// timeline functions:
	this.frame_4 = function() {
		this.frameActions._4.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 2
	this.instance = new lib.map_outline("synched",0);
	this.instance.setTransform(340.1,172.2,1,1,0,0,0,271.1,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADRaUQgZgMgdAGQgCgBgvgUQgfgNAMgRQgSAMgZgEQgFgTgZg1QgTgrAAgmQhZhZgoh9QgdgogngdQgHgGACgGIAFgNQgVALgxgMQgygMgZANQgLAJgWAsQgSAjgbAGQgOAAACgEQADgIABgFQgJALgSgMQgTgLAJgMQgHAHgJgFQgMgGgMACQAAgDAFgFQADgEAAgFQgSAJgWgaQgYghgMgKIAAgzQgCgGgSggQgOgXAIgIQgLABgUgTQgdgbgJgGQAGgLgPgLQgMgIANgEQgRgBgYgZQgXgYgNgbQgmACg1gIQg/gKgagBQgLALgBANQgCAJAGASQgHgBgOACQgOAAgIgBQgIgBgIgIIgKgIIgOAGQgMAGgHgDQgfgNhkgIQhdgJgqgWQABgDAEgEQAEgFAAgFQgMALgTgNQgZgPgMAAQAAgDAEgFQAEgEAAgFQgKALgNgJQgRgLgLAAQAAgDAEgEQAFgFAAgFQgNAKgXgLQgXgMgCgVQgKALgMgJQgSgLgLABQABgDAEgFQAEgFAAgFQgNAKgXgLQgXgMgBgVQgLALgMgJQgSgLgLABQABgDAFgFQADgFAAgEQgJAIgGgDQgKgFgJAAQgIgIAFgMQAEgOgKgJQhggGgygEQhZgIgVghIAHgbQAEgRgCgQQgHgSgZgcQgXgbgFgVQgKgIgIADQgIADgJgHIAAgiQglgEgagbQgGgHghgwQgXAEgYgRQgXgRgYAFQgKgUADgZQACgYANgRIgTgXQgHgKAJgSQgcgogPglQgTgrgGgxQgDgOAQgGQARgGgEgRQghgBgKgwQgJgtASgiQgDgCgPgXQgLgQgPgCQAAgHAFgJQAFgJgBgJQgIgOgQgsQgNgmgOgPQAQgLADgmQAEg3ACgHQgBgMgQgfQgNgYAFgbQACgSAOgNIAagVQACgVAGgNIASgiQAGgJgGgOQgJgQAAgEQABgFAIgHQAJgHAAgGIgFg7QgDgnAIgfQAOgQAIgKQAOgTgKgGQAngjAjhbQAqhtAUgeQgDgWAGgSIAPgcQgGgXAGglIALhDQAPhYgagqIAKgbQAHgQAAgRQAsAoAuAWQA6AdAogOQgWhCAeAXIgHgaQgFgRAEgQQHxCUJ/BbICIAXQBUAPA2AFQDJAUD/AIQC7AFExABQAKABgBgRQgCgYABgDQAfgDAMAUQAKARgCAjQAZAdAzABQAfAABIgFQgDANAMAJQAMAIgDANQAKgQATAEQAHADAbAPQAXANANgBQASAAALgbQASAQArAFQAZADAzACQgCAJgHAEQgHAFgBgJQgJAUgkANQgoAPgKALQgGAGgEAAQgFACgBgIQgIAEACAIQACAMgFALQgKACgUAZQgPATgPgMQANANgNAHQgTAKACANQAQAIAjgTQAogYAUAAQACALgEAJIgHAPQALgCAJAEIAPAGQAigCAaggQAfABAWgQQANgJAVgZQAVgZAOgJQAYgOAiADQgCAPgWANQgVANABATQAFAQARgEQARgEAFAJQAOACALAQQAPAXACACIAfgFQAMgCARAHQALACALgPQAOgTAGgDQAKgEAugCQAjgCAMgRQALgBgCARQgBAYABADQARADASgGQAVgHAMABQgFAYASAOQAWAQAAAOQgLgFgMACQgIACgEgHQgHAOgPAAQgOgBgHAMQgNgBgOgFIgYgLQgMACgWAPQgTAOgYgFQgGAFgGARQgHAQgHAFQgKACgDgGQgDgDgBgKQgFgCgLAOQgGAJgDgNQgmA4gNA3QASAAAKgfQAJgeAWACQACARgKAVQgKAVABARIgKAMQgGAHgJgBQAOAlgQA+QgTBKAEAgQANAlABAIQAGAbgDAeQAAAJAQAcQANAWgNAKQAEAEALABQALACAJAKQAtgHAVguQAHgNAVhPQgMgagOg3QgPg6gLgYQAWgtgEhCQALADAEgJQABgDABgRIAWgQQAMgKAAgQQADAAAFAFQAEADAFAAQAGgCAGgUQAEgRASAFQgIgIgBgSQABgRAIgIQAPACAeABQAaABAPAEIAAAJQgCAIACAAQAJAGAXAAQAcAAAIADQAAAUARAFQgHAVAKAgQALAlgFAeQgQgFgCANQAAAIABASQgOABgHANQgLATgCACQAHAPAJACQAPgDAJgOIAPgaQASghAmAHQgIAHACAGQACAHAEgLQAUAhAEAJQAOAegMANIAPARQAJAMgQAFQANAGADARQADANgCAYQgRgFgJAOQgGALgKgLQAIAOAAAMQgDgBgFgEQgEgEgFAAQALAMgJAUQgLAcAAAIQgGADgFALQgEAFgLgKQAFAYAoAIQAxAJAJAKQAIgCAVgMQAQgKAPgBQAjgfA9goQBbg7AKgHQAWgXAmg2QgCgHgHADQgLAGgG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");
	mask.setTransform(305.4,170.4);

	// notes
	this.instance_1 = new lib.photo("synched",0);
	this.instance_1.setTransform(338,159.5,1,1,0,0,0,276,183.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// player shads
	this.instance_2 = new lib.mapshape();
	this.instance_2.setTransform(339.7,172,1,1,0,0,0,271.1,168.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.6,0.2,552,347);


(lib.note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{note1:0,note2:1,note3:2,note4:3,note5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 3
	this.instance = new lib.tail("synched",0);
	this.instance.setTransform(3,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// Layer 2
	this.instance_1 = new lib.stem("synched",0);
	this.instance_1.setTransform(3,-40.4);

	this.instance_2 = new lib.bulb("single",0);
	this.instance_2.setTransform(4,29.3);

	this.instance_3 = new lib.tail("synched",0);
	this.instance_3.setTransform(3,-40.4);

	this.instance_4 = new lib.stem("synched",0);
	this.instance_4.setTransform(-20,-37.4);

	this.instance_5 = new lib.bulb("single",0);
	this.instance_5.setTransform(-19,32.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ADNiLImZBkADNAoImZBk");
	this.shape.setTransform(0.5,-33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("ADNgxImZBj");
	this.shape_1.setTransform(0.5,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:0,x:4,y:29.3}},{t:this.instance_1,p:{x:3,y:-40.4}}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{startPosition:0,x:4,y:29.3}},{t:this.instance_1,p:{x:3,y:-40.4}}]},1).to({state:[{t:this.instance_2,p:{startPosition:1,x:4,y:29.3}},{t:this.instance_1,p:{x:3,y:-40.4}}]},1).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{startPosition:0,x:22,y:22.3}},{t:this.instance_1,p:{x:21,y:-47.4}}]},1).to({state:[{t:this.shape_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{startPosition:0,x:22,y:22.3}},{t:this.instance_1,p:{x:21,y:-47.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-41.4,52.3,86.6);


(lib.chair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.target3_mc = new lib.position();
	this.target3_mc.setTransform(31.1,20.8);

	this.target2_mc = new lib.position();
	this.target2_mc.setTransform(31.1,-21.3);

	this.target1_mc = new lib.position();
	this.target1_mc.setTransform(31.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target1_mc},{t:this.target2_mc},{t:this.target3_mc}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#714C27").s().p("AABACIgJAAIAIgCQACAAABgBQABAAAAAAQABAAAAAAQAAABAAAAIAEAAIgIACg");
	this.shape.setTransform(-26.6,-27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F4020").s().p("AAAABQgGAAgGgBIAKAAIAPABg");
	this.shape_1.setTransform(-26.4,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C4725").s().p("AgCEFQhXkpBZjgIAAAAIAHgDIAOABQAFACACADIASAYQgTCBgBBoQgBB6AVB3IgPAOQgGAGgDABIgKACg");
	this.shape_2.setTransform(-26.4,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB8755").s().p("AAREFQguiDAAiKQAAiQAwhsIALAAQhYDgBVEpg");
	this.shape_3.setTransform(-29.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.chair_leg("single",1);
	this.instance.setTransform(-17.8,15.2,0.419,0.419,180);

	this.instance_1 = new lib.chair_leg("single",1);
	this.instance_1.setTransform(-17.8,-15.4,0.419,0.419,0,0,180);

	this.instance_2 = new lib.chair_leg("single",0);
	this.instance_2.setTransform(14,15.9,0.419,0.419,0,180,0);

	this.instance_3 = new lib.chair_leg("single",0);
	this.instance_3.setTransform(14,-16.1,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8F5F32","#634222"],[0.008,1],16.9,-3.5,-15.9,5.3).s().p("ACpCrIj2gGIgigBIAAlHIAigBIBXgCIBIgCIBXgCIAAAAIAABJIAAAJIAABPIAAA9IAAB3gAioCjIAAlFIA5gBIAAFHgAhvijg");
	this.shape_4.setTransform(-1.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-27.9,49.9,53.1);


(lib.btnmed = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,disabled:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// text
	this.btnMedTxtDyn_mc = new lib.btntextmed();
	this.btnMedTxtDyn_mc.setTransform(19.6,5.3,1,1,0,0,0,19.6,5.3);

	this.timeline.addTween(cjs.Tween.get(this.btnMedTxtDyn_mc).wait(3).to({alpha:0.41},0).wait(1));

	// states
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A99B6").ss(1.5,1,1).p("AHLhwIuUAAQgjgBgZAiQgaAhAAAuQAAAvAaAhQAZAhAjABIOUAAQAjgBAZghQAZghAAgvQAAgugZghQgZgigjABg");
	this.shape.setTransform(1.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5BB7FE","#FFFFFF"],[0,1],15.6,16,15.7,-15.9).s().p("AnJByQgjgBgZghQgagiAAguQAAguAaghQAZgiAjABIOUAAQAjgBAZAiQAZAhAAAuQAAAugZAiQgZAhgjABg");
	this.shape_1.setTransform(1.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5A99B6").ss(1.5,1,1).p("AHKhwIuTAAQgkgBgZAiQgZAhAAAuQAAAvAZAhQAZAhAkABIOTAAQAkgBAZghQAZghAAgvQAAgugZghQgZgigkABg");
	this.shape_2.setTransform(1.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#24B5BF","#FFFFFF"],[0,1],2.1,16,2.2,-15.9).s().p("AnJByQgkgBgZghQgZgiAAguQAAguAZghQAZgiAkABIOTAAQAkgBAZAiQAZAhAAAuQAAAugZAiQgZAhgkABg");
	this.shape_3.setTransform(1.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5A99B6").ss(1.5,1,1).p("AHKhxIuTAAQgkAAgZAiQgZAhAAAuQAAAvAZAiQAZAhAkAAIOTAAQAjAAAZghQAZgiABgvQgBgugZghQgZgigjAAg");
	this.shape_4.setTransform(1.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#24B5BF","#FFFFFF"],[0,1],-65.4,-16,-65.3,15.9).s().p("AnJByQgkgBgZghQgZgiAAguQAAguAZghQAZgiAkAAIOTAAQAjAAAZAiQAZAhABAuQgBAugZAiQgZAhgjABg");
	this.shape_5.setTransform(1.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5BB7FE","#FFFFFF"],[0,1],48.1,16,48.2,-15.9).s().p("AnJByQgjgBgZghQgagiAAguQAAguAaghQAZgiAjABIOUAAQAjgBAZAiQAZAhAAAuQAAAugZAiQgZAhgjABg");
	this.shape_6.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.02)").s().p("ArvCxIAAlhIXfAAIAAFhg");
	this.shape_7.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

	// Layer 4
	this.btnMedShad_mc = new lib.btnshad2();
	this.btnMedShad_mc.setTransform(-77.6,-5.5,1.335,1.074,0,0,0,3.9,2.6);
	this.btnMedShad_mc.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.btnMedShad_mc).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-17.7,150.5,35.5);


(lib.Player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,sit:13,"look left":18,"look right":22,stand:29,standing:33});

	// timeline functions:
	this.frame_11 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_17 = function() {
		//this.frameActions._17.call(this, this);
		console.log("sitting down");
		    if(this.objct.double === true){
		        if (this.objct.targ === this.objct.chair.targets[1]) {
		            this.gotoAndPlay("look right");
		            //this.shad.gotoAndPlay("look right");
		            } else if (this.objct.targ === this.objct.chair.targets[2]) {
		            this.gotoAndPlay("look left");
		            //this.shad.gotoAndPlay("look left");
		            }
		    }else{
		        this.stop();
		    }
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		//this.frameActions._32.call(this, this);
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(6).call(this.frame_17).wait(4).call(this.frame_21).wait(4).call(this.frame_25).wait(7).call(this.frame_32).wait(2).call(this.frame_34).wait(1));

	// Layer 3
	this.center_mc = new lib.circ();
	this.center_mc.setTransform(-17.8,0.1,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.center_mc).wait(35));

	// Layer 2
	this.dyn_txt = new cjs.Text("2", "bold 14px 'Trebuchet MS'");
	this.dyn_txt.name = "dyn_txt";
	this.dyn_txt.textAlign = "center";
	this.dyn_txt.lineHeight = 16;
	this.dyn_txt.lineWidth = 16;
	this.dyn_txt.setTransform(10.9,13.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.dyn_txt).wait(35));

	// Layer 1
	this.instance = new lib.top_walking_01("synched",0);
	this.instance.setTransform(6.4,0.1,0.585,0.585);

	this.instance_1 = new lib.top_bicep_01("single",0);
	this.instance_1.setTransform(-4.5,-18.4,0.585,0.585,0,180,0);

	this.instance_2 = new lib.top_elbow_01("single",0);
	this.instance_2.setTransform(-5.1,-39.4,0.585,0.585,0,180,0,6,11.1);

	this.instance_3 = new lib.top_hand_01("single",1);
	this.instance_3.setTransform(0.5,-37.6,0.585,0.585,0,180,0);

	this.instance_4 = new lib.top_head_01("single",0);
	this.instance_4.setTransform(-3.3,-0.7,0.586,0.585,0,3.8,1.3);

	this.instance_5 = new lib.top_torso_01("single",0);
	this.instance_5.setTransform(-3.8,0.3,0.585,0.585,0,180,0);

	this.instance_6 = new lib.top_bicep_01("single",0);
	this.instance_6.setTransform(-4.5,20.1,0.585,0.585);

	this.instance_7 = new lib.top_elbow_01("single",0);
	this.instance_7.setTransform(-5.1,41.1,0.585,0.585,0,0,0,6,11.1);

	this.instance_8 = new lib.top_hand_01("single",1);
	this.instance_8.setTransform(0.5,39.3,0.585,0.585);

	this.instance_9 = new lib.top_foot_01("single",0);
	this.instance_9.setTransform(-3.3,-6.9,0.585,0.585,0,167.2,-12.8);

	this.instance_10 = new lib.top_foot_01("single",0);
	this.instance_10.setTransform(-3.3,6.6,0.585,0.585,12.8);

	this.instance_11 = new lib.top_calf_01("single",1);
	this.instance_11.setTransform(-7.2,-8.2,0.433,0.572,0,-3,8.5,-4.7,1.3);

	this.instance_12 = new lib.top_calf_01("single",1);
	this.instance_12.setTransform(-8.4,7.3,0.497,0.572,0,177.5,-7,-4.7,1.4);

	this.instance_13 = new lib.top_torso_01("single",0);
	this.instance_13.setTransform(-47.8,0,0.587,0.382,0,180,0);

	this.instance_14 = new lib.top_thigh_01("single",0);
	this.instance_14.setTransform(-40.2,-6.4,0.804,0.53,0,-6.3,-5.7,-4.9,1.4);

	this.instance_15 = new lib.top_thigh_01("single",0);
	this.instance_15.setTransform(-40.2,6.2,0.804,0.53,0,-175.2,4.2,-4.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_10,p:{x:-3.3,scaleX:0.585,scaleY:0.585,rotation:12.8,y:6.6,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-3.3,scaleX:0.585,scaleY:0.585,skewX:167.2,skewY:-12.8,y:-6.9}},{t:this.instance_8,p:{x:0.5,y:39.3,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_7,p:{x:-5.1,y:41.1,regX:6,regY:11.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_6,p:{scaleY:0.585,x:-4.5,scaleX:0.585,skewX:0,skewY:0,y:20.1}},{t:this.instance_5,p:{x:-3.8,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-3.3,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_3,p:{skewX:180,skewY:0,x:0.5,y:-37.6,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:6,skewX:180,skewY:0,x:-5.1,y:-39.4,regY:11.1,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_1,p:{scaleY:0.585,x:-4.5,scaleX:0.585,skewX:180,skewY:0,y:-18.4}}]},1).to({state:[{t:this.instance_10,p:{x:-9.6,scaleX:0.585,scaleY:0.585,rotation:12.8,y:6.6,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-9.6,scaleX:0.585,scaleY:0.585,skewX:167.2,skewY:-12.8,y:-6.9}},{t:this.instance_8,p:{x:-10.6,y:37.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_7,p:{x:-16.2,y:38.9,regX:6,regY:11.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_6,p:{scaleY:0.523,x:-15.6,scaleX:0.585,skewX:0,skewY:0,y:20.1}},{t:this.instance_12,p:{regX:-4.7,scaleX:0.497,x:-8.4,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_11,p:{regY:1.3,scaleX:0.433,x:-7.2,y:-8.2,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-14.8,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-14.4,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_3,p:{skewX:-179.7,skewY:0.3,x:-10.6,y:-34.9,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:6.1,skewX:-179.7,skewY:0.3,x:-16.1,y:-36.8,regY:11.1,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_1,p:{scaleY:0.499,x:-15.6,scaleX:0.585,skewX:180,skewY:0,y:-18.4}}]},1).to({state:[{t:this.instance_10,p:{x:-9.3,scaleX:0.545,scaleY:0.545,rotation:7.3,y:7.2,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-9.3,scaleX:0.545,scaleY:0.545,skewX:172.7,skewY:-7.3,y:-7.3}},{t:this.instance_15,p:{regX:-4.8,regY:1.6,scaleX:0.804,scaleY:0.53,x:-40.2,y:6.2,skewX:-175.2,skewY:4.2}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.525,x:-16.5,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_14,p:{regY:1.4,scaleX:0.804,scaleY:0.53,x:-40.2,y:-6.4,regX:-4.9,skewX:-6.3,skewY:-5.7}},{t:this.instance_13,p:{scaleX:0.587,scaleY:0.382,x:-47.8,skewY:0,y:0,skewX:180}},{t:this.instance_11,p:{regY:1.4,scaleX:0.453,x:-15.3,y:-8.1,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-51.6,scaleX:0.577,scaleY:0.577,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-56.5,scaleX:0.577,scaleY:0.577,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-27.6,y:-18,scaleX:0.577,scaleY:0.577,skewX:-175.5,skewY:4.5}},{t:this.instance_7,p:{x:-53.3,y:-26,regX:-5.9,regY:1.2,scaleX:1.302,scaleY:0.568,skewX:9.6,skewY:10.9}},{t:this.instance_6,p:{scaleY:0.376,x:-51.7,scaleX:0.577,skewX:-146.4,skewY:24.5,y:-16.8}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-27.8,y:18.4,scaleX:0.577,scaleY:0.577,rotation:-5.5}},{t:this.instance_2,p:{regX:-5.8,skewX:170.4,skewY:-10.9,x:-53.6,y:25.8,regY:1.1,scaleX:1.349,scaleY:0.568,rotation:0}},{t:this.instance_1,p:{scaleY:0.385,x:-51.7,scaleX:0.577,skewX:-38,skewY:-22.8,y:16.8}}]},1).to({state:[{t:this.instance_10,p:{x:-10.2,scaleX:0.545,scaleY:0.545,rotation:7.3,y:7.2,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-10.2,scaleX:0.545,scaleY:0.545,skewX:172.7,skewY:-7.3,y:-7.3}},{t:this.instance_15,p:{regX:-5,regY:1.5,scaleX:0.816,scaleY:0.537,x:-40.1,y:7.1,skewX:-175.2,skewY:4.2}},{t:this.instance_12,p:{regX:-4.7,scaleX:0.497,x:-16.5,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_14,p:{regY:1.5,scaleX:0.816,scaleY:0.537,x:-40,y:-7.1,regX:-4.9,skewX:-6.3,skewY:-5.7}},{t:this.instance_13,p:{scaleX:0.595,scaleY:0.387,x:-46.8,skewY:0,y:0,skewX:180}},{t:this.instance_11,p:{regY:1.3,scaleX:0.433,x:-15.3,y:-8.2,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-57.8,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-27,y:-15.4,scaleX:0.585,scaleY:0.585,skewX:179.5,skewY:-0.5}},{t:this.instance_7,p:{x:-51.6,y:-27.1,regX:-5.9,regY:1.1,scaleX:1.321,scaleY:0.576,skewX:17.6,skewY:18.9}},{t:this.instance_6,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-140.3,skewY:24.5,y:-17.1}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-27,y:14.7,scaleX:0.585,scaleY:0.585,rotation:0.5}},{t:this.instance_2,p:{regX:-5.9,skewX:161,skewY:-20.4,x:-51.6,y:27,regY:1.2,scaleX:1.368,scaleY:0.576,rotation:0}},{t:this.instance_1,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-39.7,skewY:-24.5,y:17}}]},1).to({state:[{t:this.instance_10,p:{x:-10.2,scaleX:0.545,scaleY:0.545,rotation:7.3,y:7.2,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-10.2,scaleX:0.545,scaleY:0.545,skewX:172.7,skewY:-7.3,y:-7.3}},{t:this.instance_15,p:{regX:-5,regY:1.5,scaleX:0.816,scaleY:0.537,x:-40.1,y:7.1,skewX:-175.2,skewY:4.2}},{t:this.instance_12,p:{regX:-4.7,scaleX:0.497,x:-16.5,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_14,p:{regY:1.5,scaleX:0.816,scaleY:0.537,x:-40,y:-7.1,regX:-4.9,skewX:-6.3,skewY:-5.7}},{t:this.instance_13,p:{scaleX:0.595,scaleY:0.387,x:-46.8,skewY:0,y:0,skewX:180}},{t:this.instance_11,p:{regY:1.3,scaleX:0.433,x:-15.3,y:-8.2,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-57.8,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-27,y:-15.4,scaleX:0.585,scaleY:0.585,skewX:179.5,skewY:-0.5}},{t:this.instance_7,p:{x:-51.6,y:-27.1,regX:-5.9,regY:1.1,scaleX:1.321,scaleY:0.576,skewX:17.6,skewY:18.9}},{t:this.instance_6,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-140.3,skewY:24.5,y:-17.1}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-27,y:14.7,scaleX:0.585,scaleY:0.585,rotation:0.5}},{t:this.instance_2,p:{regX:-5.9,skewX:161,skewY:-20.4,x:-51.6,y:27,regY:1.2,scaleX:1.368,scaleY:0.576,rotation:0}},{t:this.instance_1,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-39.7,skewY:-24.5,y:17}}]},2).to({state:[{t:this.instance_10,p:{x:-14.2,scaleX:0.543,scaleY:0.547,rotation:0,y:12.9,skewX:7.3,skewY:5.3}},{t:this.instance_9,p:{x:-10.2,scaleX:0.548,scaleY:0.542,skewX:172.6,skewY:-9.4,y:-6.5}},{t:this.instance_15,p:{regX:-5,regY:1.6,scaleX:0.814,scaleY:0.539,x:-40.1,y:12.7,skewX:-172.6,skewY:4.7}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.404,x:-16.5,regY:1.6,skewY:-9,y:13.1,skewX:177.5}},{t:this.instance_14,p:{regY:3.2,scaleX:0.9,scaleY:0.535,x:-12.9,y:-8.1,regX:28.4,skewX:-14,skewY:-15.4}},{t:this.instance_13,p:{scaleX:0.596,scaleY:0.387,x:-46.8,skewY:-2.1,y:10.3,skewX:180}},{t:this.instance_11,p:{regY:1.4,scaleX:0.431,x:-15.3,y:-7.2,scaleY:0.571,skewY:6.5,skewX:-3}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:-2.1,y:10.8,skewX:180}},{t:this.instance_4,p:{x:-56.8,scaleX:0.585,scaleY:0.586,skewX:-65.7,skewY:-70.3,y:11.3}},{t:this.instance_8,p:{x:-27,y:-14.1,scaleX:0.586,scaleY:0.585,skewX:179.5,skewY:-2.6}},{t:this.instance_7,p:{x:-26.8,y:-14,regX:14.7,regY:6.4,scaleX:1.307,scaleY:0.582,skewX:-3,skewY:-3.4}},{t:this.instance_6,p:{scaleY:0.398,x:-50.7,scaleX:0.577,skewX:-147.1,skewY:16.8,y:-6.6}},{t:this.instance_3,p:{skewX:0.5,skewY:-1.6,x:-28.5,y:16.8,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:14.1,skewX:142.1,skewY:-40.8,x:-30.1,y:19.3,regY:6.2,scaleX:1.385,scaleY:0.569,rotation:0}},{t:this.instance_1,p:{scaleY:0.431,x:-50.7,scaleX:0.593,skewX:-40.5,skewY:-26.2,y:27.4}}]},2).to({state:[{t:this.instance_10,p:{x:-14.2,scaleX:0.543,scaleY:0.547,rotation:0,y:12.9,skewX:7.3,skewY:5.3}},{t:this.instance_9,p:{x:-10.2,scaleX:0.548,scaleY:0.542,skewX:172.6,skewY:-9.4,y:-6.5}},{t:this.instance_15,p:{regX:-5,regY:1.5,scaleX:0.814,scaleY:0.539,x:-40.1,y:9,skewX:-164.9,skewY:12.4}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.404,x:-16.5,regY:1.6,skewY:-9,y:13.1,skewX:177.5}},{t:this.instance_14,p:{regY:3.2,scaleX:0.9,scaleY:0.535,x:-12.9,y:-8.1,regX:28.4,skewX:-12.3,skewY:-13.7}},{t:this.instance_13,p:{scaleX:0.596,scaleY:0.387,x:-46.8,skewY:-2.1,y:8.6,skewX:180}},{t:this.instance_11,p:{regY:1.4,scaleX:0.431,x:-15.3,y:-7.2,scaleY:0.571,skewY:6.5,skewX:-3}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:-2.1,y:9,skewX:180}},{t:this.instance_4,p:{x:-56.6,scaleX:0.585,scaleY:0.586,skewX:-65.7,skewY:-70.3,y:8.3}},{t:this.instance_8,p:{x:-27,y:-14.1,scaleX:0.586,scaleY:0.585,skewX:179.5,skewY:-2.6}},{t:this.instance_7,p:{x:-26.8,y:-14,regX:14.7,regY:6.5,scaleX:1.307,scaleY:0.582,skewX:0.2,skewY:-0.2}},{t:this.instance_6,p:{scaleY:0.398,x:-50.7,scaleX:0.577,skewX:-147.1,skewY:16.8,y:-8.4}},{t:this.instance_3,p:{skewX:0.5,skewY:-1.6,x:-28.5,y:16.8,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:14.1,skewX:142.1,skewY:-40.8,x:-30.1,y:17.6,regY:6.2,scaleX:1.385,scaleY:0.569,rotation:0}},{t:this.instance_1,p:{scaleY:0.431,x:-50.7,scaleX:0.593,skewX:-40.5,skewY:-26.2,y:25.7}}]},1).to({state:[{t:this.instance_10,p:{x:-10.2,scaleX:0.545,scaleY:0.545,rotation:7.3,y:7.2,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-10.2,scaleX:0.545,scaleY:0.545,skewX:172.7,skewY:-7.3,y:-7.3}},{t:this.instance_15,p:{regX:-5,regY:1.5,scaleX:0.816,scaleY:0.537,x:-40.1,y:7.1,skewX:-175.2,skewY:4.2}},{t:this.instance_12,p:{regX:-4.7,scaleX:0.497,x:-16.5,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_14,p:{regY:1.5,scaleX:0.816,scaleY:0.537,x:-40,y:-7.1,regX:-4.9,skewX:-6.3,skewY:-5.7}},{t:this.instance_13,p:{scaleX:0.595,scaleY:0.387,x:-46.8,skewY:0,y:0,skewX:180}},{t:this.instance_11,p:{regY:1.3,scaleX:0.433,x:-15.3,y:-8.2,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-57.8,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-27,y:-15.4,scaleX:0.585,scaleY:0.585,skewX:179.5,skewY:-0.5}},{t:this.instance_7,p:{x:-51.6,y:-27.1,regX:-5.9,regY:1.1,scaleX:1.321,scaleY:0.576,skewX:17.6,skewY:18.9}},{t:this.instance_6,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-140.3,skewY:24.5,y:-17.1}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-27,y:14.7,scaleX:0.585,scaleY:0.585,rotation:0.5}},{t:this.instance_2,p:{regX:-5.9,skewX:161,skewY:-20.4,x:-51.6,y:27,regY:1.2,scaleX:1.368,scaleY:0.576,rotation:0}},{t:this.instance_1,p:{scaleY:0.391,x:-50.7,scaleX:0.585,skewX:-39.7,skewY:-24.5,y:17}}]},1).to({state:[{t:this.instance_10,p:{x:-14.2,scaleX:0.543,scaleY:0.547,rotation:0,y:-13.1,skewX:172.7,skewY:-5.3}},{t:this.instance_9,p:{x:-10.2,scaleX:0.548,scaleY:0.542,skewX:7.4,skewY:9.4,y:6.4}},{t:this.instance_15,p:{regX:-5,regY:1.6,scaleX:0.814,scaleY:0.539,x:-40.1,y:-12.8,skewX:-7.4,skewY:-4.7}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.404,x:-16.5,regY:1.6,skewY:9,y:-13.3,skewX:2.5}},{t:this.instance_14,p:{regY:3.2,scaleX:0.9,scaleY:0.535,x:-12.9,y:7.9,regX:28.4,skewX:-166,skewY:15.4}},{t:this.instance_13,p:{scaleX:0.596,scaleY:0.387,x:-46.8,skewY:2.1,y:-10.5,skewX:0}},{t:this.instance_11,p:{regY:1.4,scaleX:0.431,x:-15.3,y:7.1,scaleY:0.571,skewY:-6.5,skewX:-177}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:2.1,y:-10.9,skewX:0}},{t:this.instance_4,p:{x:-56.8,scaleX:0.585,scaleY:0.586,skewX:-114.3,skewY:70.3,y:-11.4}},{t:this.instance_8,p:{x:-27,y:13.9,scaleX:0.586,scaleY:0.585,skewX:0.5,skewY:2.6}},{t:this.instance_7,p:{x:-26.8,y:13.9,regX:14.7,regY:6.4,scaleX:1.307,scaleY:0.582,skewX:-177,skewY:3.4}},{t:this.instance_6,p:{scaleY:0.398,x:-50.7,scaleX:0.577,skewX:-32.9,skewY:-16.8,y:6.5}},{t:this.instance_3,p:{skewX:179.5,skewY:1.6,x:-28.5,y:-17,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:14.1,skewX:37.9,skewY:40.8,x:-30.1,y:-19.5,regY:6.2,scaleX:1.385,scaleY:0.569,rotation:0}},{t:this.instance_1,p:{scaleY:0.431,x:-50.7,scaleX:0.593,skewX:-139.5,skewY:26.2,y:-27.6}}]},2).to({state:[{t:this.instance_10,p:{x:-14.2,scaleX:0.543,scaleY:0.547,rotation:0,y:-13.1,skewX:172.7,skewY:-5.3}},{t:this.instance_9,p:{x:-10.2,scaleX:0.548,scaleY:0.542,skewX:7.4,skewY:9.4,y:6.4}},{t:this.instance_15,p:{regX:-5,regY:1.5,scaleX:0.814,scaleY:0.539,x:-40.1,y:-9.1,skewX:-15.1,skewY:-12.4}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.404,x:-16.5,regY:1.6,skewY:9,y:-13.3,skewX:2.5}},{t:this.instance_14,p:{regY:3.2,scaleX:0.9,scaleY:0.535,x:-12.9,y:7.9,regX:28.4,skewX:-167.7,skewY:13.7}},{t:this.instance_13,p:{scaleX:0.596,scaleY:0.387,x:-46.8,skewY:2.1,y:-8.7,skewX:0}},{t:this.instance_11,p:{regY:1.4,scaleX:0.431,x:-15.3,y:7.1,scaleY:0.571,skewY:-6.5,skewX:-177}},{t:this.instance_5,p:{x:-50.6,scaleX:0.585,scaleY:0.585,skewY:2.1,y:-9.2,skewX:0}},{t:this.instance_4,p:{x:-56.6,scaleX:0.585,scaleY:0.586,skewX:-114.3,skewY:70.3,y:-8.4}},{t:this.instance_8,p:{x:-27,y:13.9,scaleX:0.586,scaleY:0.585,skewX:0.5,skewY:2.6}},{t:this.instance_7,p:{x:-26.8,y:13.8,regX:14.7,regY:6.5,scaleX:1.307,scaleY:0.582,skewX:179.8,skewY:0.2}},{t:this.instance_6,p:{scaleY:0.398,x:-50.7,scaleX:0.577,skewX:-32.9,skewY:-16.8,y:8.2}},{t:this.instance_3,p:{skewX:179.5,skewY:1.6,x:-28.5,y:-17,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:14.1,skewX:37.9,skewY:40.8,x:-30.1,y:-17.7,regY:6.2,scaleX:1.385,scaleY:0.569,rotation:0}},{t:this.instance_1,p:{scaleY:0.431,x:-50.7,scaleX:0.593,skewX:-139.5,skewY:26.2,y:-25.8}}]},1).to({state:[{t:this.instance_10,p:{x:-9.3,scaleX:0.545,scaleY:0.545,rotation:7.3,y:7.2,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-9.3,scaleX:0.545,scaleY:0.545,skewX:172.7,skewY:-7.3,y:-7.3}},{t:this.instance_15,p:{regX:-4.8,regY:1.6,scaleX:0.804,scaleY:0.53,x:-40.2,y:6.2,skewX:-175.2,skewY:4.2}},{t:this.instance_12,p:{regX:-4.8,scaleX:0.525,x:-16.5,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_14,p:{regY:1.4,scaleX:0.804,scaleY:0.53,x:-40.2,y:-6.4,regX:-4.9,skewX:-6.3,skewY:-5.7}},{t:this.instance_13,p:{scaleX:0.587,scaleY:0.382,x:-44.8,skewY:0,y:0,skewX:180}},{t:this.instance_11,p:{regY:1.4,scaleX:0.453,x:-15.3,y:-8.1,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-48.6,scaleX:0.577,scaleY:0.577,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-53.5,scaleX:0.577,scaleY:0.577,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-24.6,y:-18,scaleX:0.577,scaleY:0.577,skewX:-175.5,skewY:4.5}},{t:this.instance_7,p:{x:-50.3,y:-26,regX:-5.9,regY:1.2,scaleX:1.302,scaleY:0.568,skewX:9.6,skewY:10.9}},{t:this.instance_6,p:{scaleY:0.376,x:-48.7,scaleX:0.577,skewX:-146.4,skewY:24.5,y:-16.8}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-24.8,y:18.4,scaleX:0.577,scaleY:0.577,rotation:-5.5}},{t:this.instance_2,p:{regX:-5.8,skewX:170.4,skewY:-10.9,x:-50.6,y:25.8,regY:1.1,scaleX:1.349,scaleY:0.568,rotation:0}},{t:this.instance_1,p:{scaleY:0.385,x:-48.7,scaleX:0.577,skewX:-38,skewY:-22.8,y:16.8}}]},4).to({state:[{t:this.instance_10,p:{x:-14.1,scaleX:0.585,scaleY:0.585,rotation:12.8,y:6.6,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-14.1,scaleX:0.585,scaleY:0.585,skewX:167.2,skewY:-12.8,y:-6.9}},{t:this.instance_8,p:{x:-15.1,y:37.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_7,p:{x:-20.7,y:38.9,regX:6,regY:11.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_6,p:{scaleY:0.523,x:-20.1,scaleX:0.585,skewX:0,skewY:0,y:20.1}},{t:this.instance_12,p:{regX:-4.7,scaleX:0.497,x:-12.9,regY:1.4,skewY:-7,y:7.3,skewX:177.5}},{t:this.instance_11,p:{regY:1.3,scaleX:0.433,x:-11.7,y:-8.2,scaleY:0.572,skewY:8.5,skewX:-3}},{t:this.instance_5,p:{x:-19.3,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-18.9,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_3,p:{skewX:-179.7,skewY:0.3,x:-15.1,y:-34.9,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:6.1,skewX:-179.7,skewY:0.3,x:-20.6,y:-36.8,regY:11.1,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_1,p:{scaleY:0.499,x:-20.1,scaleX:0.585,skewX:180,skewY:0,y:-18.4}}]},1).to({state:[{t:this.instance_10,p:{x:-6.3,scaleX:0.585,scaleY:0.585,rotation:12.8,y:6.6,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-6.3,scaleX:0.585,scaleY:0.585,skewX:167.2,skewY:-12.8,y:-6.9}},{t:this.instance_8,p:{x:-2.5,y:39.3,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_7,p:{x:-8.1,y:41.1,regX:6,regY:11.1,scaleX:0.585,scaleY:0.585,skewX:0,skewY:0}},{t:this.instance_6,p:{scaleY:0.585,x:-7.5,scaleX:0.585,skewX:0,skewY:0,y:20.1}},{t:this.instance_5,p:{x:-6.8,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:-6.3,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_3,p:{skewX:180,skewY:0,x:-2.5,y:-37.6,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:6,skewX:180,skewY:0,x:-8.1,y:-39.4,regY:11.1,scaleX:0.585,scaleY:0.585,rotation:0}},{t:this.instance_1,p:{scaleY:0.585,x:-7.5,scaleX:0.585,skewX:180,skewY:0,y:-18.4}}]},1).to({state:[{t:this.instance_10,p:{x:-4.9,scaleX:0.585,scaleY:0.585,rotation:9.8,y:6.6,skewX:0,skewY:0}},{t:this.instance_9,p:{x:-4.9,scaleX:0.585,scaleY:0.585,skewX:170.7,skewY:-9.3,y:-6.9}},{t:this.instance_5,p:{x:3.8,scaleX:0.585,scaleY:0.585,skewY:0,y:0.3,skewX:180}},{t:this.instance_4,p:{x:0.7,scaleX:0.586,scaleY:0.585,skewX:3.8,skewY:1.3,y:-0.7}},{t:this.instance_8,p:{x:-0.7,y:-28,scaleX:0.505,scaleY:0.585,skewX:180,skewY:0}},{t:this.instance_7,p:{x:0.3,y:-33.8,regX:6,regY:11.2,scaleX:0.448,scaleY:0.585,skewX:-166.5,skewY:13.5}},{t:this.instance_6,p:{scaleY:0.431,x:1.5,scaleX:0.585,skewX:180,skewY:0,y:-18.4}},{t:this.instance_3,p:{skewX:0,skewY:0,x:-0.5,y:30.9,scaleX:0.505,scaleY:0.585,rotation:0}},{t:this.instance_2,p:{regX:6,skewX:0,skewY:0,x:0.3,y:35.7,regY:11.2,scaleX:0.448,scaleY:0.585,rotation:-13.5}},{t:this.instance_1,p:{scaleY:0.431,x:2.2,scaleX:0.585,skewX:0,skewY:0,y:20.3}}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-10.8,regY:0.3,x:-1.5,y:0.3,startPosition:1},0).wait(1).to({x:-3.1,startPosition:2},0).wait(1).to({x:-4.8,startPosition:3},0).wait(1).to({x:-6.4,startPosition:4},0).wait(1).to({x:-3.1,startPosition:5},0).wait(1).to({x:0.1,startPosition:6},0).wait(1).to({x:-1.5,startPosition:7},0).wait(1).to({x:-3.1,startPosition:8},0).wait(1).to({x:-4.8,startPosition:9},0).wait(1).to({x:-6.4,startPosition:10},0).wait(1).to({x:-3.4,startPosition:11},0).wait(1).to({regX:0,regY:0,x:6.4,y:0.1,startPosition:0},0).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-34.6,72.7,78.1);


(lib.players = function() {
	this.initialize();

	// Layer 1
	this.player_mc = new lib.Player();

	this.addChild(this.player_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-37.5,73.6,80.9);


(lib.Notes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_9 = function() {
		//this.frameActions._9.call(this, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 4
	this.poof_mc = new lib.poof();
	this.poof_mc.setTransform(-0.3,11.3,0.348,0.348,0.3);

	this.timeline.addTween(cjs.Tween.get(this.poof_mc).wait(10));

	// Layer 1
	this.notable_mc = new lib.note();
	this.notable_mc.setTransform(0.2,-1.2,0.537,0.537);

	this.timeline.addTween(cjs.Tween.get(this.notable_mc).wait(1).to({regX:-12.2,regY:-0.2,rotation:3,x:-6.4,y:-1.7,alpha:0.889},0).wait(1).to({rotation:6.1,x:-6.3,y:-2,alpha:0.778},0).wait(1).to({rotation:9.1,y:-2.4,alpha:0.667},0).wait(1).to({rotation:3.5,x:-6.4,y:-1.7,alpha:0.556},0).wait(1).to({rotation:-2.1,y:-1.1,alpha:0.444},0).wait(1).to({rotation:-7.6,x:-6.3,y:-0.5,alpha:0.333},0).wait(1).to({rotation:-0.9,x:-6.4,y:-1.2,alpha:0.222},0).wait(1).to({rotation:5.8,x:-6.3,y:-2,alpha:0.111},0).wait(1).to({rotation:12.6,x:-6.2,y:-2.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-23.5,28.1,46.5);


(lib.notes = function() {
	this.initialize();

	// Layer 1
	this.note_mc = new lib.Notes();
	this.note_mc.setTransform(5.1,7.8,0.537,0.537);

	this.addChild(this.note_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-4.8,15.1,25);


(lib.Panel2 = function(mode,startPosition,loop) {
	console.log("lib.Panel2");

	


	this.initialize(mode,startPosition,loop,{panel_1:0,finished_chairs:7});

	// timeline functions:
	// this.frame_6 = function() {
	// 	this.frameActions._6.call(this, this);
	// }
	// this.frame_8 = function() {
	// 	this.frameActions._8.call(this, this);
	// }

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(2).call(this.frame_8).wait(1));

	// notes_mc
	this.notes_mc = new lib.notes();
	this.notes_mc.setTransform(-20,5);

	this.timeline.addTween(cjs.Tween.get(this.notes_mc).wait(9));

	// play_btn
	this.start_btn = new lib.btnmed();
	this.start_btn.setTransform(360.5,319.5,1,1,0,0,0,0.5,-0.5);

	this.stop_btn = new lib.btnmed();
	this.stop_btn.setTransform(360,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stop_btn},{t:this.start_btn}]}).wait(9));

	// paths
	this.path_mc = new lib.Path();

	this.timeline.addTween(cjs.Tween.get(this.path_mc).wait(9));

	// players
	this.players_mc = new lib.players();

	this.timeline.addTween(cjs.Tween.get(this.players_mc).wait(9));

	// chairs
	this.chair1_mc = new lib.chair();
	this.chair1_mc.setTransform(123.1,149.4);

	this.chair2_mc = new lib.chair();
	this.chair2_mc.setTransform(233.8,151.4);

	this.chair3_mc = new lib.chair();
	this.chair3_mc.setTransform(344.5,151.4);

	this.chair4_mc = new lib.chair();
	this.chair4_mc.setTransform(455.2,151.4);

	this.chair5_mc = new lib.chair();
	this.chair5_mc.setTransform(566.1,151.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chair5_mc},{t:this.chair4_mc},{t:this.chair3_mc},{t:this.chair2_mc},{t:this.chair1_mc}]}).wait(9));

	// chair shads
	this.instance = new lib.chair("synched",0);
	this.instance.setTransform(134.7,156.1,1.1,1.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance.cache(-34,-30,54,57);

	this.instance_1 = new lib.chair("synched",0);
	this.instance_1.setTransform(247.5,156.1,1.1,1.1);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_1.cache(-34,-30,54,57);

	this.instance_2 = new lib.chair("synched",0);
	this.instance_2.setTransform(360.3,156.1,1.1,1.1);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_2.cache(-34,-30,54,57);

	this.instance_3 = new lib.chair("synched",0);
	this.instance_3.setTransform(473.1,156.1,1.1,1.1);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_3.cache(-34,-30,54,57);

	this.instance_4 = new lib.chair("synched",0);
	this.instance_4.setTransform(585.8,156.1,1.1,1.1);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_4.cache(-34,-30,54,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(9));

	// player shads
	this.playerShads_mc = new lib.players();
	this.playerShads_mc.setTransform(54.8,84.5,1,1,0,0,0,54.8,84.5);

	this.timeline.addTween(cjs.Tween.get(this.playerShads_mc).wait(9));


	console.log("Panel 2");
  var root = this;
  //var lib = viz.lib;
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
  //var songInstance = createjs.Sound.createInstance("04_26_ex_4_5new_loop.mp3");
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
      soundToPlay = new Sound("loop.mp3", songDuration, 0, -1);

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

  initViz();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-37.5,651.7,375.3);


// stage content:
(lib._04_26_ex_4_5new_moby = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;