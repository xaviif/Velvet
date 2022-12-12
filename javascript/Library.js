const colors = [
  //Primary, Secondary, Text Primary, Text Secondary, Accent
  ['#2B2118', '#6F1A07', "#F7F3E3", '##ECF0F1',"#A8763E"],
  ["#040F16", "#0B4F6C", "#01BAEF", "#FBFBFF", "#B80C09"],
  ["#262626", "#ACBFA4", "#E2E8CE", "#FF7F11", "#FF1B1C"],
  ["#FE4A49", "#2AB7CA", "#E6E6EA", "#F4F4F8", "#FED766"],
  ["#C7E8F3", "#BF9ACA", "#41393E", "#8E4162", "#EDA2C0"],
  ["#D68FD6", "#DEFFF2", "#000009", "#464F51", "#0FF4C6"],
  ["#D4F2DB", "#CEF7A0", "#69353F", "#914D76", "#BA9790"],
  ["#D6C3C9", "#B49082", "#07090F", "#98473E", "#A37C40"],
  ["#B80C09", "#6B2B06", "#B7B5B3", "#E5E7E6", "#141301"],
  ["#0D090A", '#361F27', '#EAF2EF', '#912F56', '#521945'],
  ['#64113F', '#DE4D86', '#F7CACD', '#F29CA3', '#84E6F8'],
  ['#25291C', '#989C94', '#E3E7D3', '#E6E49F', '#BDC2BF'],
  ['#28112B', '#453643', '#8DAA91', '#788475', '#5E5D5C'],
  ['#653239', '#AF7A6D', '#EAF9D9', '#CCC7B9', '#E2D4BA'],
  ['#2F0601', '#553A41', '#A3E7FC', '#32908F', '#26C485'],
  ['#272727', '#FED766', '#009FB7', '#696773', '#EFF1F3'],
  ['#412722', '#DF2935', '#F5F3BB', '#DFA06E', '#86BA90']

]
const fonts = ["Open Sans", "Oswald", "Playfair Display", "Raleway", "Roboto", "Roboto Mono", "Roboto Slab", "Titillium Web", "Ubuntu"]
const bkPosition = ["top", "left", "center", "right", "bottom"]
const textures = ['fabric', 'gradient', 'dots5', "beanstalk", "denim", "dotgrid", "square", "sowhite", "whitewall"]
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
