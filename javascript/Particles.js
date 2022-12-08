class Particles{
  constructor(num){
    this.particles = [];
    this.particleNum = num;
    this.type = "particle"
    this.wind = -10
  }
  static animationLoop = function(el, wind){
    $(el).css({
      top: ((Math.random() * 45) - 45)+'vh',
      left: (Math.random() * 100) + 'vw',
    })
    $(el).animate({
      top: (100 + (Math.random() * 25))+'vh',
      left:( (wind>0)? "+=": "-=") + (Math.abs(wind) + (Math.random() * Math.abs(wind))) + "vw",
    }, 10000 + (Math.random()*20000), function(){
      Particles.animationLoop(el);
    }
    )
 }
}

Particles.prototype.shower = function(){
  for(let i = 0; i<this.particleNum; i++){
    let confetti = $(document.createElement('span'))
    $(confetti).addClass(['small', 'medium', 'large'].getRandom() + ' ' + this.type)
    $(confetti).addClass(['', 'z-index8'].getRandom())
    $(confetti).addClass(['close', 'far', 'near'].getRandom())
    Particles.animationLoop(confetti, this.wind);
    $('body').append(confetti)
  }
}