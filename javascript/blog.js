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
[ "posts/2025-12-31-Devlog-Year-Recap.html", encodeURI ( '2025 Recapped - Devlog' ), "devlog" ],
[ "posts/2025-12-06-Blog-Be-Thankful.html", encodeURI ( 'To Be Thankful - Blog' ), "blog" ],
[ "posts/2025-11-02-Blog-Nothing-Changes.html", encodeURI ( 'Nothing Changes - Blog' ), "blog" ],
[ "posts/2025-10-04-Blog-Break-Tension.html", encodeURI ( 'Break the Tension - Blog' ), "blog" ],
[ "posts/2025-09-03-Blog-Big-Ideas.html", encodeURI ( 'Big Ideas - Blog' ), "blog" ],
[ "posts/2025-08-01-Blog-End-Summer.html", encodeURI ( 'End Of Summer - Blog' ), "blog" ],
[ "posts/2025-07-03-Blog-Two-Weeks.html", encodeURI ( 'Two Weeks - Blog' ), "blog" ],
[ "posts/2025-06-02-Blog-Sophomore-Year.html", encodeURI ( 'Sophomore Year Review - Blog' ), "blog" ],
[ "posts/2025-05-23-Devlog-LabII-Alpha1.html", encodeURI ( 'Labyrinths II (Alpha 1) - Devlog' ), "devlog" ],
[ "posts/2025-05-03-Blog-Will-Calls.html", encodeURI ( 'Will Calls - Blog' ), "blog" ],
[ "posts/2025-04-07-Blog-Over-Ocean.html", encodeURI ( 'Over the Ocean - Blog' ), "blog" ],
[ "posts/2025-03-11-Devlog-New-Album.html", encodeURI ( 'Fragments of Waves - Devlog' ), "devlog" ],
[ "posts/2025-03-02-Blog-Worrywort.html", encodeURI ( 'Worrywort - Blog' ), "blog" ],
[ "posts/2025-02-03-Blog-Part-III.html", encodeURI ( 'Part III - Blog' ), "blog" ],
[ "posts/2025-01-03-Blog-Daydreaming.html", encodeURI ( 'Daydreaming - Blog' ), "blog" ],
[ "posts/2024-12-31-Devlog-Year-Recap.html", encodeURI ( '2024 Recapped - Devlog' ), "devlog" ],
[ "posts/2024-12-01-Blog-Theatre-Kid.html", encodeURI ( 'The Non-Theatre Theatre Kid - Blog' ), "blog" ],
[ "posts/2024-11-16-Devlog-G1R-v1.1.html", encodeURI ( 'George 1R Update 1.1 - Devlog' ), "devlog" ],
[ "posts/2024-11-02-Blog-Yet-Again.html", encodeURI ( 'Yet Again - Blog' ), "blog" ],
[ "posts/2024-06-06-OldBlog-Freshman-Year.html", encodeURI ( 'Freshman Year Review - Old Blog' ), "blog" ]
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
let relativePath = ".";
if ( url.includes("posts/") ) {
    relativePath = "..";
    document.querySelector("main").innerHTML += `<div class="fade"><div id="nextprev"></div></div>`;
}

//Generate the Header HTML, a series of list items containing links.
let headerHTML = '<ul> <li><a href="' + relativePath + '/index.html">Home</a></li>' + 
'<li><a href="' + relativePath + '/archive.html">Archive</a></li>' +
'<li><a href="' + relativePath + '/about.html">About</a></li> </ul>';

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
        return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postsArray[i][0].slice(6,16) + " \u00BB " + postTitle_i + '</a></li>';
    } else {
        return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i + '</a></li>';
    }
}

let postListHTML = "<ul>";
for ( let i = 0; i < postsArray.length; i++ ) { postListHTML += formatPostLink(i); }
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
    nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if ( currentIndex === 0 ) {
    prevlink = postsArray[currentIndex + 1][0];
    nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a> | <a href="'+ relativePath + '/' + prevlink +'">Previous Post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
    nextlink = postsArray[currentIndex - 1][0];
    nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
    nextlink = postsArray[currentIndex - 1][0];
    prevlink = postsArray[currentIndex + 1][0];
    nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a> | <a href="' + relativePath + '/'+ prevlink +'">Previous Post \u00BB</a>';
}

//-----------------------------

//==[ 4. INSERTING THE SECTIONS INTO OUR ACTUAL HTML PAGES ]==

/*Here we check if each relevant div exists. If so, we inject the correct HTML!
  NOTE: All of these sections are optional to use on any given page. For example, if there's 
  one particular blog post where we don't want the footer to appear, 
  we simply don't put a <div id="footer"> on that page.*/

if (document.getElementById("nextprev")) { document.getElementById("nextprev").innerHTML = nextprevHTML; }
if (document.getElementById("postlistdiv")) { document.getElementById("postlistdiv").innerHTML = postListHTML; }
if (document.getElementById("recentpostlistdiv")) { document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML; }
if (document.getElementById("header")) { document.getElementById("header").innerHTML = headerHTML; }
if (document.getElementById("blogTitleH1")) { document.getElementById("blogTitleH1").innerHTML = blogTitle; }
if (document.getElementById("postTitleH1")) { document.getElementById("postTitleH1").innerHTML = currentPostTitle; }
if (document.getElementById("postDate")) { document.getElementById("postDate").innerHTML = niceDate; }
if (document.getElementById("footer")) { document.getElementById("footer").innerHTML = footerHTML; }

//Dynamically set the HTML <title> tag from the postTitle variable we created earlier
//The <title> tag content is what shows up on browser tabs
if (document.title === "Blog Post") {
    document.title = 'LG Productions • ' + currentPostTitle;

    document.querySelector(".indicator").style.setProperty("--indicMsg", `'Post #${(postsArray.length - currentIndex)}'`);
    document.querySelector(".fade").style.width = "45%";

    const root = document.documentElement;
    root.style.setProperty("--bgGradient1", "rgba(67, 65, 3, 0.87)");
    root.style.setProperty("--bgGradient2", "rgba(103, 85, 8, 0.87)");
}

// Adding the assigned classes to each post (LG-made!)
const postList = document.querySelector("#postlistdiv");
const postListChildren = postList.querySelectorAll("li");

let blogPosts = 0;
let devlogPosts = 0;

for (let i = 0; i < postListChildren.length; i++) {
    postListChildren[i].classList.add(postsArray[i][2]);
    if (postsArray[i][2] == "blog") { blogPosts += 1; }
    else if (postsArray[i][2] == "devlog") { devlogPosts += 1; }
}

document.getElementById("blogCount").innerHTML = "Blog (" + blogPosts + ")";
document.getElementById("devlogCount").innerHTML = "Devlog (" + devlogPosts + ")";