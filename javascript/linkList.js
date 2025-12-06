const lists = document.querySelectorAll(".linkList");

for (let i = 0; i < linkArray.length; i++) {
    link = linkArray[i];
    let supDisplay = (link.sup == undefined) ? "" : `<br><sup style="vertical-align:baseline;">${link.sup}</sup>`;
    
    if (link.alt == undefined) {link.alt = "";}
    if (link.ver == undefined) {link.ver = "";}
    if (link.genres == undefined) {link.genres = "";} else {link.genres = `<br><b>Genres:</b> ${link.genres}`;}
    if (link.bgPos == undefined) {link.bgPos = "center";}
    
    let content = `
    <a class="linkBubble" style="--bg: url(/images/linkimgs/${link.imgLink}bg.jpg);--pos: ${link.bgPos};" href="${link.link}">
        <h3>${link.name}<span>${link.alt}</span><span class="float">${link.ver}</span></h3>
        <p>${link.desc}${supDisplay}${link.genres}</p>
    </a>`;
    
    lists[link.list].innerHTML += content;
}

const linkListChildren = document.querySelectorAll("a.linkBubble");

for (let i = 0; i < linkListChildren.length; i++) {
    ref = linkListChildren[i].href;
    if (!(ref.includes("localhost") || ref.startsWith("https://lgplayer13.neocities.org"))) {linkListChildren[i].target = "_blank";}
}