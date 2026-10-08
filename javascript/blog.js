/*Welcome to the script file! Your 1st time here, you should update
  the BASIC INFO section to include your name and website/social 
  media link (if desired). Most of the time, you will just come
  here to update the POSTS ARRAY. However, you can also edit or
  add your own scripts to do whatever you like!*/

//TABLE OF CONTENTS
  // 1. Basic Info
  // 2. Posts Array
  // 3. Creating HTML Sections to Be Inserted (Header, Footer, etc)
  // 4. Inserting the Sections Into our Actual HTML Pages

//-----------------------------

//==[ 1. BASIC INFO ]==

let blogName = "LG Productions Blog";
let authorName = "LG";
let authorLink = "https://lgplayer13.neocities.org/"; // Enter your website, social media, etc. Some way for people to tell you they like your blog! (Leaving it empty is okay too)

//-----------------------------

//==[ 2. POSTS ARRAY ]==

/*Each time you make a new post, add the filepath here at the top of postsArray.
  This will cause all the right links to appear and work.
  NOTE: It's important to follow this exact naming convention, because the scripts
  below are expecting it ( 'posts/YYYY-MM-DD-Title-of-Your-Post.html', ). You can
  alter the scripts if you want to use a different naming convention*/
/*UPDATE: as of version 1.3, you may omit the date if you would like. But if you
  use a date it must still follow that format.*/

let postsArray = [
//[ "posts/2026-08-15-Expert-Streamer.html", encodeURI ( "Now That I'm an Expert Streamer" ), 2 ],
[ "posts/2026-10-03-Five-Points.html", encodeURI ( "Devlog: Five Points for The G!" ), 1768, "web site, rant" ],
[ "posts/2026-06-07-Junior-Year.html", encodeURI ( "The Junior Year Review" ), 5457, "summary, venting" ],
[ "posts/2026-05-04-Blue-Moon.html", encodeURI ( "Blue Moon" ), 2570, "life, school" ],
[ "posts/2026-04-07-Cant-Remember.html", encodeURI ( "A Dream I Can't Remember" ), 2714, "life, rant" ],
[ "posts/2026-03-01-Wrong-Way.html", encodeURI ( 'Wrong Way' ), 2127, "random, reflection" ],
[ "posts/2026-02-16-Web-404.html", encodeURI ( 'Web Design 404' ), 1868, "school, rant, coding" ],
[ "posts/2026-02-02-Stranded-Lullaby.html", encodeURI ( 'Stranded Lullaby' ), 1730, "anxiety, reflection, venting" ],
[ "posts/2026-01-07-Another-Day.html", encodeURI ( 'Maybe Another Day...' ), 1833, "life, random" ],
[ "posts/2025-12-31-Year-Recap.html", encodeURI ( '2025 Recapped (Idling...)' ), 2170, "recap, projects" ],
[ "posts/2025-12-06-Be-Thankful.html", encodeURI ( 'To Be Thankful' ), 1675, "anxiety, web site" ],
[ "posts/2025-11-02-Nothing-Changes.html", encodeURI ( 'Nothing Changes' ), 1735, "social, venting" ],
[ "posts/2025-10-04-Break-Tension.html", encodeURI ( 'Break the Tension' ), 2079, "school, social, rant" ],
[ "posts/2025-09-03-Big-Ideas.html", encodeURI ( 'Big Ideas' ), 2108, "school, projects" ],
[ "posts/2025-08-01-End-Summer.html", encodeURI ( 'End Of Summer' ), 1779, "random, rant" ],
[ "posts/2025-07-03-Two-Weeks.html", encodeURI ( 'Two Weeks' ), 3440, "world trip" ],
[ "posts/2025-06-02-Sophomore-Year.html", encodeURI ( 'The Sophomore Year Review' ), 3408, "summary, venting" ],
[ "posts/2025-05-23-LabII-Alpha1.html", encodeURI ( 'Devlog: LABY 2???' ), 1448, "projects, nerd" ],
[ "posts/2025-05-03-Will-Calls.html", encodeURI ( 'Will Calls' ), 2681, "projects, school, rant" ],
[ "posts/2025-04-07-Over-Ocean.html", encodeURI ( 'Over the Ocean' ), 2806, "school, social" ],
[ "posts/2025-03-11-New-Album.html", encodeURI ( 'Fragments of Waves' ), 957, "projects" ],
[ "posts/2025-03-02-Worrywort.html", encodeURI ( 'Worrywort' ), 2612, "social, venting, deep" ],
[ "posts/2025-02-03-Part-III.html", encodeURI ( 'Part III' ), 1975, "school, social" ],
[ "posts/2025-01-03-Daydreaming.html", encodeURI ( 'Daydreaming' ), 1719, "holiday, social, venting" ],
[ "posts/2024-12-31-Year-Recap.html", encodeURI ( '2024 Recapped (Now Presenting)' ), 979, "recap, projects" ],
[ "posts/2024-12-01-Theatre-Kid.html", encodeURI ( 'The Non-Theatre Theatre Kid' ), 1295, "school, fun" ],
[ "posts/2024-11-16-G1R-v1.1.html", encodeURI ( 'Devlog: G1R v1.1 is out!' ), 566, "projects, george" ],
[ "posts/2024-11-02-Yet-Again.html", encodeURI ( 'Yet Again' ), 1178, "random" ],
[ "posts/2024-06-06-Freshman-Year.html", encodeURI ( 'The Freshman Year Review' ), 2089, "school, venting" ]
];

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*CAUTION!! BEGINNING OF MORE ADVANCED SECTION!
  For default functionality, you DO NOT have to touch anything beyond this point.
  Things get more complicated here, so if you are unfamiliar with Javascript,
  your site may break. That's okay though, you can always paste back in the code
  from the Zonelets starter files :) */

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//==[ 3. GENERATING THE HTML SECTIONS TO BE INSERTED ]==

let url = window.location.pathname;

//The date format to look for is 4 digits, hyphen, 2 digits, hyphen, 2 digits, hyphen.
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

//Check if you are in posts (if so, the links will have to go up a directory)
let relativePath = "blog";
if ( url.includes("posts/") ) {
    relativePath = "..";
}

//Generate the Header HTML, a series of list items containing links.
/* oh no you don't
let headerHTML = '<ul> <li><a href="' + relativePath + '/index.html">Home</a></li>' + 
'<li><a href="' + relativePath + '/archive.html">Archive</a></li>' +
'<li><a href="' + relativePath + '/about.html">About</a></li> </ul>';
*/

//Generate the Footer HTML, which uses the variables defined in the BASIC INFO section above to list info about the site.
//Note: feel free to remove the references to Zonelets and Neocities! Just be careful not to delete any necessary HTML closing tags or other syntax.
let footerHTML = "<hr><p>" + blogName + " is written by <a href='" + authorLink + "'>" + authorName + "</a>, built with <a href='https://zonelets.net/'>Zonelets</a>, and hosted by <a href='https://neocities.org/'>Neocities!</a></p>";

//To do the following stuff, we want to know where we are in the posts array (if we're currently on a post page).
let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));
//Depending on the web server settings (Or something?), the browser url may or may not have ".html" at the end. If not, we must add it back in to match the posts array. (12-19-2022 fix)
if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
    if ( postsArray[i][0] === currentFilename ) {
        currentIndex = i;
    }
}

//Convert the post url to readable post name. E.g. changes "2020-10-10-My-First-Post.html" to "My First Post"
//Or pass along the "special characters" version of the title if one exists
function formatPostTitle(i) {
    // Check if there is an alternate post title
    if ( postsArray[i].length > 1 ) {
        //Remember how we had to use encodeURI for special characters up above? Now we use decodeURI to get them back.
        return decodeURI(postsArray[i][1]);
    } else {
        //If there is no alternate post title, check if the post uses the date format or not, and return the proper title
        if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
          return postsArray[i][0].slice(17,-5).replace(/-/g," ");
        } else {
          return postsArray[i][0].slice(6,-5).replace(/-/g," ");
        }
    }
}

//Get the current post title and date (if we are on a post page)
let currentPostTitle = "";
let niceDate = "";
if ( currentIndex > -1 ) {
    currentPostTitle = formatPostTitle( currentIndex );
    //Generate the "nice to read" version of date
    if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
        let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
        let month = "";
        if ( monthSlice === "01") { month = "January";}
        else if ( monthSlice === "02") { month = "February";}
        else if ( monthSlice === "03") { month = "March";}
        else if ( monthSlice === "04") { month = "April";}
        else if ( monthSlice === "05") { month = "May";}
        else if ( monthSlice === "06") { month = "June";}
        else if ( monthSlice === "07") { month = "July";}
        else if ( monthSlice === "08") { month = "August";}
        else if ( monthSlice === "09") { month = "September";}
        else if ( monthSlice === "10") { month = "October";}
        else if ( monthSlice === "11") { month = "November";}
        else if ( monthSlice === "12") { month = "December";}
        niceDate = month + " " + postsArray[currentIndex][0].slice( 14,16 ) + ", " + postsArray[currentIndex][0].slice( 6,10 );
    }
}

//Generate the Post List HTML, which will be shown on the "Archive" page.

function formatPostLink(i) {
    let postTitle_i = "";
    if ( postsArray[i].length > 1 ) {
        postTitle_i = decodeURI(postsArray[i][1]);
    } else {
        if ( postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
            postTitle_i = postsArray[i][0].slice(17,-5).replace(/-/g," ");
        } else {
            postTitle_i = postsArray[i][0].slice(6,-5).replace(/-/g," ");
        }
    }
    if ( postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
        if (document.title.includes("Home")) { return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postsArray[i][0].slice(6,16) + " \u00BB " + postTitle_i; }
        else { return `<li><time>${postsArray[i][0].slice(6,16)}</time><span>\u00BB</span><a href="` + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i; }
    } else {
        return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i;
    }
}

let postListHTML = "<ul>";
for ( let i = 0; i < postsArray.length; i++ ) {
    /* tags = "";
    if (postsArray[i][3]) { tags = `<span>${postsArray[i][3]}</span>`; } */
    postListHTML += formatPostLink(i) + "</a></li>";
}
postListHTML += "</ul>";

//Generate the Recent Post List HTML, which can be shown on the home page (or wherever you want!)
let recentPostsCutoff = 1; //Hey YOU! Change this number to set how many recent posts to show before cutting it off with a "more posts" link.
let recentPostListHTML = "<ul>";
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
    recentPostListHTML += formatPostLink(i);
}
/*If you've written more posts than can fit in the Recent Posts List,
  then we'll add a link to the archive so readers can find the rest of
  your wonderful posts and be filled with knowledge.*/
if ( (postsArray.length > recentPostsCutoff) && (67 > 69) ) {
    recentPostListHTML += '<li class="moreposts"><a href=' + relativePath + '/blog>\u00BB more posts</a></li></ul>';
} else {
    recentPostListHTML += "</ul>";
}

//Generate the Next and Previous Post Links HTML
let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

/*If you're on the newest blog post, there's no point to
 a "Next Post" link, right? And vice versa with the oldest 
 post! That's what the following code handles.*/
if ( postsArray.length < 2 ) {
    nextprevHTML = '<a class="bubble off">prev</a><a href="/blog.html">blog</a><a class="bubble off">next</a>';
} else if ( currentIndex === 0 ) {
    prevlink = postsArray[currentIndex + 1][0];
    nextprevHTML = '<a href="../'+ prevlink +'">prev</a><a href="/blog.html">blog</a><a class="bubble off">next</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
    nextlink = postsArray[currentIndex - 1][0];
    nextprevHTML = '<a class="bubble off">prev</a><a href="/blog.html">blog</a><a href="../' + nextlink +'">next</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
    nextlink = postsArray[currentIndex - 1][0];
    prevlink = postsArray[currentIndex + 1][0];
    nextprevHTML = '<a href="../'+ prevlink +'">prev</a><a href="/blog.html">blog</a><a href="../' + nextlink +'">next</a>';
}

//-----------------------------

//==[ 4. INSERTING THE SECTIONS INTO OUR ACTUAL HTML PAGES ]==

/*Here we check if each relevant div exists. If so, we inject the correct HTML!
  NOTE: All of these sections are optional to use on any given page. For example, if there's 
  one particular blog post where we don't want the footer to appear, 
  we simply don't put a <div id="footer"> on that page.*/

if (document.getElementById("blogInfo")) { document.getElementById("blogInfo").innerHTML += `<span>post #${(postsArray.length - currentIndex)}</span><span>|</span>` + nextprevHTML; }
if (document.getElementById("postlistdiv")) { document.getElementById("postlistdiv").innerHTML = postListHTML + '<p>This blog is powered by <a href="http://zonelets.net/">Zonelets</a>.<img src="images/sprites/storyteller.png" alt="Pop reading a book, concerned" title="i can only imagine the horrors within those pages"></p>'; }
if (document.getElementById("recentpostlistdiv")) { document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML; }
// if (document.getElementById("header")) { document.getElementById("header").innerHTML = headerHTML; }
if (document.getElementById("postTitle")) { document.getElementById("postTitle").innerHTML = currentPostTitle; }
if (document.getElementById("postDate")) { document.getElementById("postDate").innerHTML = niceDate + ' | <span id="words" />'; }

//Dynamically set the HTML <title> tag from the postTitle variable we created earlier
//The <title> tag content is what shows up on browser tabs
if (document.title === "Blog Post") {
    document.title = 'LG Productions • ' + currentPostTitle;

    if (postsArray[currentIndex][3]) { document.getElementById("blogTitle").innerHTML += `<span id="tag">${postsArray[currentIndex][3]}</span>`; }
/* 
    const navbox = document.getElementById("blogNav");
    const sections = document.getElementById("blogText").querySelectorAll('h2');

    for (let i = 0; i < sections.length; i++) {
        let id = sections[i].id;
        navbox.innerHTML += `<a href="#${id}">section ${id}.</a>`;
    }
*/
}

// Add necessary subtitles + word count
const r = document.querySelector(':root');
const subtitle = getComputedStyle(r).getPropertyValue('--subtitle');

if (subtitle.length > 0) {
    document.getElementById("postTitle").innerHTML += ` <span>${subtitle}</span>`;
}
if (document.getElementById("words")) {
    document.getElementById("words").innerHTML = postsArray[currentIndex][2] + " words";
    
}

// Counting up the woerds
const postList = document.querySelector("#postlistdiv");
let postListChildren;

if (postList) {
    postListChildren = postList.querySelectorAll("#postlistdiv li");
    let wordCount = 0;

    for (let i = 0; i < postListChildren.length; i++) {
        if (postsArray[i][2] != undefined) {wordCount += Number(postsArray[i][2]);}
    }

    console.log("Total word count (approximately): " + wordCount);
}
