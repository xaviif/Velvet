let pageCounter = 0;
let inView = ""
let firstPage = new Page(Pieces[0])
let particle = new Particles(75);
particle.shower()
firstPage.display();
$('#fullpage').on('scroll', () =>{
  currentSec = $(document.elementFromPoint(0, $(document).scrollTop()).closest('section'))
  inView = currentSec
  if(!$(currentSec).hasClass('seen')){
    $(currentSec).addClass('seen') 
    pageCounter++;
    let newPage = new Page({
      sectionID: "article_"+pageCounter,
    })
    newPage.display();
  }
})