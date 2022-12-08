class Page{
  constructor(arr){
    this.template = $(".pageTemplate").random().html()
    this.arr = arr;
    this.arr.id = "page_"+arr.index;
    this.arr.info = Pieces.getRandom()
    this.arr.sectionID = "article_" + pageCounter
    this.inView = "landing"
  }
}

Page.prototype.display = function(){
  let newPage = Mustache.render(this.template, this.arr);
  //parse string as an html element
  document.getElementById('fullpage').insertAdjacentHTML("beforeend", newPage)
  this.$ = $("#"+this.arr.sectionID)
  let texture = textures.getRandom();
  this.$.addClass(texture)

  let superthis = this;
  let palette = colors.getRandom();
  this.$.css({
    backgroundColor: palette[0],
    color: palette[3],
    fontFamily: fonts.getRandom(),
    filter: `blur(${Math.min(Math.max( Math.random(), 0.1), 0.95)}px) saturate(${(Math.random()*80)}%)`
  })

  this.$.find(".primary-bkColor").css({
    backgroundColor: palette[0]
  })
  this.$.find(".sec-bkColor").css({
    backgroundColor: palette[1]
  })
  this.$.find(".accent-bkColor").css({
    backgroundColor: palette[4]
  })
  this.$.find(".borderColor").css({
    borderColor: palette[4]
  })
  this.$.find('.quote').css({
    fontFamily: fonts.getRandom(),
  })
  this.$.find('.quoteText').css({
    fontFamily: fonts.getRandom(),
    color: palette[4]
  })

  this.$.find('.textFont').css({
    fontFamily: fonts.getRandom(),
    color: palette[3]
  })
  this.$.find('.infoTitle').html(this.arr.info.title.getRandom())
  this.$.find('.quoteText').text(this.arr.info.quote.getRandom())
  this.$.find('.repeat-10').html((function(){
    let quote = superthis.arr.info.quote.getRandom()
    let build = "";
    for(let i = 0; i<10; i++) {
      build += `<p style='text-shadow: black ${Math.random()}px ${Math.random()}px ${Math.random()}px;${(Math.random()*4 < 1)? `filter: blur(${Math.random()}px) saturate(${Math.random()*100}%);` : ""}'>\"${quote}\"</p><br>`;
    }
    return build
  })())
  this.$.find('.headshot').css({
    backgroundImage: `url("${superthis.arr.info.headshot.getRandom()}")`,
    height: this.$.find('.headshot').width(),
  })
  this.$.find('.longDesc').html(this.arr.info.longDesc.getRandom())
  this.$.find('.bkImg').each(function(i){
    $(this).css({
        backgroundImage: `url("${superthis.arr.info.imgs.getRandom()}")`,
        backgroundPosition: bkPosition.getRandom() + " " + bkPosition.getRandom() ,
        backgroundSize: bkSize.getRandom() + " " + bkSize.getRandom(),
        backgroundAttachment: (Math.random()*2>1)? "fixed" : ""
      })
  })
  

  if(this.$.hasClass('gradient')) {
    let rgb1 = hexToRgb(palette[0])
    let rgb2 = hexToRgb(palette[1])
    let rgba1 = `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, ${Math.min(Math.max( Math.random(), 0.35), 1)})`
    let rgba2 = `rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, ${Math.min(Math.max( Math.random(), 0.35), 1)})`
    this.$.css({
      background: `linear-gradient(180deg, ${rgba1} 45%, ${rgba2} 100%)`,
    })
  }else if(this.$.hasClass('bkImg')) {
    this.$.css({
      backgroundImage: `url("${superthis.arr.info.imgs.getRandom()}")`,
      backgroundPosition: bkPosition.getRandom() + " " + bkPosition.getRandom() ,
      backgroundAttachment: ((Math.random()*2>1) && !this.$.hasClass('noAttachment')) ? "fixed" : ""
    })
  }else if(this.$.hasClass('templ8')){
    this.$.find('p').each(function(i){
      $(this).css({
        textAlign: textAlign.getRandom(),
        opacity: Math.random()
      })
    })
  }
  
}
