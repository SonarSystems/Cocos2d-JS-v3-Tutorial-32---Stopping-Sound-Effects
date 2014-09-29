
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    tag:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);

        tag = cc.audioEngine.playEffect(res.Collide_Sound, true);

        this.scheduleOnce(StopSound, 4);

        return true;
    }
});

var StopSound = function()
{
	//cc.audioEngine.stopAllEffects();
	cc.audioEngine.stopEffect(tag);
};

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

