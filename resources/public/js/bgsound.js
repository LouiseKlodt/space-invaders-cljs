function bgsound() {
  console.log('bgsound!');
  var sound = new Howl({
    src: ['/static/space-invaders.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });
  return sound;
}
// var soundid = sound.play();
//
function bangsound() {
  var explosion = new Howl({
    src: ['/static/explosion.wav'],
    volume: 0.8,
    onend: function() {
      console.log('Explosion!');
    }
  });
  return explosion;
}
