function themesound() {
  console.log('bgsound!');
  var sound = new Howl({
    src: ['/static/space-invaders.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.6,
    onend: function() {
      console.log('Finished!');
    }
  });
  return sound;
}
// var soundid = sound.play();

function bangsound() {
  console.log('bangsound!');
  var explosion = new Howl({
    src: ['/static/explosion.wav'],
    volume: 0.6,
    onend: function() {
      console.log('Explosion!');
    }
  });
  return explosion;
}

function shootsound() {
  console.log('shootsound!');
  var shoot = new Howl({
    src: ['/static/shoot.wav'],
    volume: 0.6,
    onend: function() {
      console.log('Shooting!');
    }
  });
  return shoot;
}
