function Soundboard()
{
    createjs.Sound.registerSound("sounds/paul.m4a", "paul");
}

Soundboard.prototype.init = function ()
{
    var self = this;

    $('button').click(function () {
        self.playSound($(this).data('name'));
    });
}

Soundboard.prototype.playSound = function (name)
{
    var instance = createjs.Sound.play(name);
}
