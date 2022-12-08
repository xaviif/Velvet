const colors = [
  ['#86242A', '#AD4337', "#DE4E2E", '#E49173', "#BB5963"],
  ['#454541', '#8A9169', "#EFD4B5", "#D0CD77", "#B28677"],
  ['#6E889A', '#B4B9A7', "#D5DCCC", "#F4F6E5", "#E5A267"],
  ['#2B262D', '#313944', "#708283", "#C5B3A5", "#DCCFBA"],
  ['#161C1A', '#393B32', "#F9F6EC", "#D4CFB2", "#9A6D66"],
  ['#E3DFB9', '#A4BBA4', "#559493", "#3A6E78", "#49474E"],
]
const fonts = ["Open Sans", "Oswald", "Playfair Display", "Raleway", "Roboto", "Roboto Mono", "Roboto Slab", "Titillium Web", "Ubuntu"]
const bkPosition = ["top", "left", "center", "right", "bottom"]
const textures = ['none', 'fabric', 'gradient', 'dots5', "beanstalk", "denim", "dotgrid", "square", "sowhite", "whitewall"]
const bkSize = ["cover", "contain", "100%"];
let textAlign = ["left", "center", "right"]
let currentViewport = ""
Array.prototype.getRandom = function(){return this[Math.floor(Math.random() * (this.length ))]};
$.fn.random = function() { return this.eq(Math.floor(Math.random() * this.length));}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
