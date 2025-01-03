let theme = 0;
let t = {
  change:function(variable,value){document.documentElement.style.setProperty(("--").concat(variable),value)},
  update:function(){
    if (theme == 0) {
      t.change("container-bg","#d68a2b")
      t.change("sector-bg","#c67e24")
      t.change("bubble-bg","#b17121")
      t.change("embed-bg","#d99744")
      t.change("faq-bg","#d1882d")
      t.change("marquee-bg","#e49636")
      t.change("topnav-bg","#e79e42")
      t.change("topnav-hover","#fdba66")
      t.change("border1","#b37116")
      t.change("border2","#52330b")
      t.change("sitelinkbutton-default","#f3a039")
      t.change("sitelinkbutton-hover","#ffbe6d")
      t.change("sitelinkbutton-bdr","#ac6c1d")
      t.change("link-default","#ffb676")
      t.change("link-hover","#ffd0a7")
      t.change("link-active","#ebc5a4")
      t.change("scrollbar-hover","#ffca9c")
      t.change("footer-bg","#cd7f1d")
      t.change("background","linear-gradient(135deg, #271b61, #3c2e84)")
      imgsrcChange("georgie","/images/site_gregoe.png")
      imgsrcChange("coryy","/images/site_cor the e.png")
      imgsrcChange("sidgang","/images/site_sids_gang.png");
    } else if (theme == 1) {
      t.change("container-bg","#2bd643")
      t.change("sector-bg","#24c22c")
      t.change("bubble-bg","#21b135")
      t.change("embed-bg","#50de57")
      t.change("faq-bg","#2dd135")
      t.change("marquee-bg","#36e43f")
      t.change("topnav-bg","#27dc30")
      t.change("topnav-hover","#54ef5c")
      t.change("border1","#16b31e")
      t.change("border2","#0b5212")
      t.change("sitelinkbutton-default","#37e930")
      t.change("sitelinkbutton-hover","#72ff6d")
      t.change("sitelinkbutton-bdr","#22ac1d")
      t.change("link-default","#76ff89")
      t.change("link-hover","#b6ffba")
      t.change("link-active","#adedb0")
      t.change("scrollbar-hover","#9cfa9d")
      t.change("footer-bg","#1dcd36")
      t.change("background","linear-gradient(135deg, #271b61, #3c2e84)")
      imgsrcChange("georgie","/images/site_gregoe.png")
      imgsrcChange("coryy","/images/site_cor the e.png")
      imgsrcChange("sidgang","/images/site_sids_gang.png");
    } else if (theme == 2) {
      t.change("container-bg","#2bd6cb")
      t.change("sector-bg","#24c6bb")
      t.change("bubble-bg","#21b1a7")
      t.change("embed-bg","#44d9cf")
      t.change("faq-bg","#2dd1c6")
      t.change("marquee-bg","#36e4d8")
      t.change("topnav-bg","#27dcd0")
      t.change("topnav-hover","#54efe5")
      t.change("border1","#16b3a9")
      t.change("border2","#0b524d")
      t.change("sitelinkbutton-default","#30e9d5")
      t.change("sitelinkbutton-hover","#6dffe8")
      t.change("sitelinkbutton-bdr","#1dac9c")
      t.change("link-default","#89ffe8")
      t.change("link-hover","#d0fff6")
      t.change("link-active","#b0ede1")
      t.change("scrollbar-hover","#9cfadf")
      t.change("footer-bg","#1dcdc1")
      t.change("background","linear-gradient(135deg, #271b61, #3c2e84)")
      imgsrcChange("georgie","/images/site_gregoe.png")
      imgsrcChange("coryy","/images/site_cor the e.png")
      imgsrcChange("sidgang","/images/site_sids_gang.png");
    } else if (theme == 3) {
      t.change("container-bg","#4f2bd6")
      t.change("sector-bg","#3f24c2")
      t.change("bubble-bg","#3921b1")
      t.change("embed-bg","#6850de")
      t.change("faq-bg","#492dd1")
      t.change("marquee-bg","#5336e4")
      t.change("topnav-bg","#5b3aff")
      t.change("topnav-hover","#775cff")
      t.change("border1","#3116b3")
      t.change("border2","#140b52")
      t.change("sitelinkbutton-default","#5839f3")
      t.change("sitelinkbutton-hover","#866dff")
      t.change("sitelinkbutton-bdr","#351dac")
      t.change("link-default","#b2a3ff")
      t.change("link-hover","#cbc1ff")
      t.change("link-active","#beb3f7")
      t.change("scrollbar-hover","#ac9cfa")
      t.change("footer-bg","#4825ca")
      t.change("background","linear-gradient(135deg, #271b61, #3c2e84)")
      imgsrcChange("georgie","/images/site_gregoe.png")
      imgsrcChange("coryy","/images/site_cor the e.png")
      imgsrcChange("sidgang","/images/site_sids_gang.png");
    } else if (theme == 4) {
      const selectElement = document.getElementById('selectTheme');
      selectElement.value = 'george';
      // this will automatically switch back to the george theme
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

function imgsrcChange(classname, image) {
  var images = document.getElementsByClassName(classname);
  for (var i = 0; i < images.length; i++) {
    images[i].src = image;
  }
}
// thanks to fractyl for this handy code