let theme = 0;
let t = {
  change:function(variable,value){document.documentElement.style.setProperty(("--").concat(variable),value)},
  update:function(){
    if (theme == 0) {
      t.change("box-bg","#d68a2b")
      t.change("box-bdr","#b37116")
      t.change("infbox-bg","#d38c33")
      t.change("infbox-bdr","#52330b")
      t.change("minibox-bg","#c67e24")
      t.change("neatbox-hover","#d99744")
      t.change("linkbutton-default","#f3a039")
      t.change("linkbutton-hover","#ffbe6d")
      t.change("linkbutton-bdr","#ac6c1d")
      t.change("marquee-bg","#e49636")
      t.change("topnav-bg","#ffb03a")
      t.change("topnav-hover","#ffc773")
      t.change("text-color","#000000")
      t.change("text-colordev","#4a4a4a")
      t.change("text-shadow","#52350c")
      t.change("link-default","#ffb676")
      t.change("link-visited","#fcb271")
      t.change("link-hover","#ffd0a7")
      t.change("link-active","#ebc5a4")
      t.change("footer-bg","#cd7f1d");
    } else if (theme == 1) {
      t.change("box-bg","#32cf2c")
      t.change("box-bdr","#16b31e")
      t.change("infbox-bg","#33d342")
      t.change("infbox-bdr","#0b5212")
      t.change("minibox-bg","#23c02b")
      t.change("neatbox-hover","#50de57")
      t.change("linkbutton-default","#37e930")
      t.change("linkbutton-hover","#72ff6d")
      t.change("linkbutton-bdr","#22ac1d")
      t.change("marquee-bg","#3ecb39")
      t.change("topnav-bg","#27dc30")
      t.change("topnav-hover","#54ef5c")
      t.change("text-color","#000000")
      t.change("text-colordev","#4a4a4a")
      t.change("text-shadow","#0f520c")
      t.change("link-default","#76ff89")
      t.change("link-visited","#76ff7d")
      t.change("link-hover","#b6ffba")
      t.change("link-active","#adedb0")
      t.change("footer-bg","#20c428");
    } else if (theme == 2) {
      t.change("box-bg","#2bd6bc")
      t.change("box-bdr","#16b39b")
      t.change("infbox-bg","#33d3b3")
      t.change("infbox-bdr","#0b523e")
      t.change("minibox-bg","#27c4ac")
      t.change("neatbox-hover","#50dec2")
      t.change("linkbutton-default","#30e9d5")
      t.change("linkbutton-hover","#6dffe8")
      t.change("linkbutton-bdr","#1dac9c")
      t.change("marquee-bg","#39cbae")
      t.change("topnav-bg","#27dcb8")
      t.change("topnav-hover","#4cf1d0")
      t.change("text-color","#000000")
      t.change("text-colordev","#4a4a4a")
      t.change("text-shadow","#0c5244")
      t.change("link-default","#89ffe8")
      t.change("link-visited","#89ffdd")
      t.change("link-hover","#d0fff6")
      t.change("link-active","#b0ede1")
      t.change("footer-bg","#1fc8b5");
    } else if (theme == 3) {
      t.change("box-bg","#4f2bd6")
      t.change("box-bdr","#3e16b3")
      t.change("infbox-bg","#532fdc")
      t.change("infbox-bdr","#1d0b52")
      t.change("minibox-bg","#4724c6")
      t.change("neatbox-hover","#5d37eb")
      t.change("linkbutton-default","#5839f3")
      t.change("linkbutton-hover","#866dff")
      t.change("linkbutton-bdr","#351dac")
      t.change("marquee-bg","#5b36e4")
      t.change("topnav-bg","#5b3aff")
      t.change("topnav-hover","#8167ff")
      t.change("text-color","#ffffff")
      t.change("text-colordev","#bbbbbb")
      t.change("text-shadow","#23146c")
      t.change("link-default","#b2a3ff")
      t.change("link-visited","#ac9cfa")
      t.change("link-hover","#cbc1ff")
      t.change("link-active","#beb3f7")
      t.change("footer-bg","#4825ca");
    }
    t.save();
  },
  switch:function(){
    theme = selectTheme.selectedIndex
    t.update();
  },
  save:function(){localStorage.setItem("theme", JSON.stringify({theme:theme}))},
  load:function(){
    var savedTheme = JSON.parse(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") !== null) {
      if (typeof savedTheme.theme !== "undefined") {
        theme = savedTheme.theme
        document.getElementById("selectTheme").selectedIndex = savedTheme.theme
      }
      t.update();
    }
  }
}

t.load();
  
var selectTheme = document.getElementById("selectTheme");
selectTheme.onchange = t.switch;
// thanks to fractyl for this handy code