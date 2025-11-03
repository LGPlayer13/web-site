const linkList = document.getElementById("linkList");

for (let i = 0; i < linkArray.length; i++) {
    link = linkArray[i];
    let imgDisplay = (link.hasImg == 0) ? "" : `<img src="/images/linkimgs/${link.imgLink}icon.png">`;
    let supDisplay = (link.sup == "") ? "" : `<br><sup style="vertical-align:baseline;">${link.sup}</sup>`;
    linkList.innerHTML += `<a class="bubble ${link.color}text" style="background-image:url(/images/linkimgs/${link.imgLink}bg.jpg);background-position:${link.bgPos};--bgcolor:${link.bgColor};--bdcolor:${link.bdrColor};" href="${link.link}">${imgDisplay}<h3>${link.name}<span>${link.alt}</span></h3><p>${link.desc}${supDisplay}</p></a>`;
}

const linkListChildren = linkList.querySelectorAll("a");

for (let i = 0; i < linkListChildren.length; i++) {
    ref = linkListChildren[i].href;
    if (!(ref.includes("localhost") || ref.startsWith("https://lgplayer13.neocities.org"))) {linkListChildren[i].target = "_blank";}
}