function Soundboard() {}

Soundboard.prototype.init = function ()
{
  var self = this,
      sounds = [['paul', 'jim', 'rich', 'craig'],['james', 'aurelien', 'tidy', 'max'],['steff']],
      html = '';

  $.each(sounds, function (key, row) {

    html += '<div class="row">\n';

    $.each(row, function (key, sound) {
      createjs.Sound.registerSound("sounds/"+sound+".m4a", sound);

      html += '<div class="col-md-3">\n'
         + '  <button style="background: url(images/'+sound+'.jpg) no-repeat" data-name="'+sound+'"><span>'+sound.toUpperCase()+'</span></button>\n'
         + '</div>\n';
    });
    
    html += '</div>\n';
  });

  $('div#soundboard').append(html);

  $('button').click(function () {
    var name = $(this).data('name');
    createjs.Sound.play(name);
  });
}
