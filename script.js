var Rows;
var bodyText = [
  "The Cloud of the digital is relentlessly material.",
  "Internet does not get rid of the traditional geographic boundaries: it consecrates them.",
  "Our value and self worth is quantified by site-specific data points.",
  "All of our activity is being physically sold in within the racks of the internet.",
  "It's a horizontal relationship of solidarity where you recognize that your struggles are not identical but are enmeshed with each other.",
  "Instead of just fighting to improve social media, digital rights advocates, instance operators, coders and others have an opportunity to build atop an interoperable, open protocol, breaking out of the platform lock-in world we’re in now.",
];
async function doWork(s) {
  try {
    const res = await s.getMyData();
    Rows = s.collapseKeys("Title", "Author", "Link", "Notes", "Search");
    generateBox(Rows);
    domorework();
  } catch (err) {
    console.log(err);
  }
}
function domorework() {
  const snow = window.scrollX;
  document.getElementById("index").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "P") {
      generateWindow(e.target);
      $(function () {});
      // $(function () {
      //   $(".windowframe").resizable();
      // });
    }
  });
  var ulwidth = document.body.clientWidth;
  var sec = ulwidth / (bodyText.length + 1);
  generateText(sec);
  generatetype();
  typedtext();
  generateimage();
  changeback(sec);
  let cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });
  document.getElementById("openall").addEventListener("click", opwids);
  document.getElementById("ranall").addEventListener("click", ranall);
  document.getElementById("collall").addEventListener("click", collall);
}
function opwids() {
  const tempdiv = document.querySelectorAll(".article");
  console.log("we were here");
  for (x of tempdiv) {
    generateWindow(x);
  }
}
function ranall() {
  const tempdiv = document.querySelectorAll(".window");
  for (temp of tempdiv) {
    var x = window.innerWidth;
    var y = window.innerHeight;
    var ranY = Math.random() * (y / 2);
    var ranX = Math.random() * x;
    var whereX = window.scrollX;
    temp.style.left = `${ranX + whereX}px`;
    temp.style.top = `${ranY}px`;
    console.log(temp);
  }
}
function collall() {
  const tempdiv = document.querySelectorAll(".coll");
  for (x of tempdiv) {
    collElm(x);
  }
}
function generateText(sec) {
  const mydiv = document.querySelector(".stuff");
  bodyText.forEach((value, index) => {
    var y =
      window.innerHeight -
      document.querySelector(".divfooter").offsetHeight -
      document.querySelector(".header").offsetHeight -
      100;
    var x = window.innerWidth - window.innerWidth / 4;
    var ranY = Math.random() * y;
    var ranX = Math.random() * (x / 2);
    const cdiv = document.createElement("span");
    cdiv.className = "textEtho";
    cdiv.setAttribute(
      "style",
      `position:absolute; left:${
        sec * (index + 1) + ranX
      }px; top:${ranY}px; width:${20}vw;`
    );
    cdiv.innerText = `"${value}"`;
    mydiv.appendChild(cdiv);
    // if (cdiv.offsetHeight + ranY + 50 >= y) {
    //   console.log(cdiv);
    //   const me =
    //     window.innerHeight -
    //     document.querySelector(".divfooter").offsetHeight -
    //     cdiv.offsetHeight;
    //   cdiv.setAttribute(
    //     "style",
    //     `position:absolute; left:${
    //       sec * (index + 1) + ranX
    //     }px; top:${me}px; width:${40}vw;`
    //   );
    //   // ranY -
    //   // cdiv.offsetHeight -
    //   // document.querySelector(".divfooter").offsetHeight

    //   console.log("this is working " + cdiv.style.top);
    // }
    const backdiv = document.createElement("div");
    backdiv.className = "backdiv";
    const leftdiv = Number(cdiv.style.left.replace("px", ""));
    const topdiv = Number(cdiv.style.top.replace("px", ""));
    backdiv.setAttribute(
      "style",
      `position:absolute;
    left:${leftdiv}px;
    top:${topdiv}px; width:${25}vw; height:${
        cdiv.offsetHeight
      }px; background-color:#ffffff; z-index:0; transform: skew(${
        Math.random() * 7
      }deg, ${365 - Math.random() * 6}deg);`
    );
    mydiv.appendChild(backdiv);
  });
}
//generate the indexbox
function generateBox(r) {
  const div = document.querySelector(".articlebox");
  const frag = document.createDocumentFragment();
  for (x of r) {
    let link = document.createElement("p");
    link.style.display = "inline";
    link.setAttribute("href", "#");
    link.setAttribute("linkname", `${x["Link"]}`);
    link.className = "article";
    link.innerText = `${x["Title"]}`;
    let divtemp = document.createElement("div");
    divtemp.className = "articlediv";
    divtemp.appendChild(link);
    frag.appendChild(divtemp);
  }
  div.appendChild(frag);
  $(".articlebox").draggable();
}
function generateWindow(link) {
  const mydiv = document.querySelector(".windowbox");
  var x = window.innerWidth;
  var y = window.innerHeight;
  var ranY = Math.random() * (y / 2);
  var ranW = Math.random() * 200 + 300;
  var ranX = Math.random() * x;
  var whereX = window.scrollX;
  while (ranX + ranW > x - 100) {
    ranX = Math.random() * x;
  }
  const maindiv = document.createElement("div");
  maindiv.className = "window";
  maindiv.setAttribute(
    "style",
    `left:${ranX + whereX}px; top:${ranY}px; width:${ranW}px`
  );
  maindiv.classList.add("open");
  const bardiv = document.createElement("div");
  bardiv.className = "bar";
  const closebtn = document.createElement("button");
  const colbtn = document.createElement("button");
  const spantext = document.createElement("a");
  const framebox = document.createElement("iframe");
  closebtn.className = "close";
  closebtn.innerText = "X";
  closebtn.setAttribute("onclick", "closewin(this)");
  colbtn.className = "coll";
  colbtn.innerText = "▽";
  colbtn.setAttribute("onclick", "collwin(this)");
  spantext.className = "titlebox";
  spantext.setAttribute("href", `${link.getAttribute("linkname")}`);
  spantext.setAttribute("text", `${link.innerText}`);
  spantext.setAttribute("target", "_blank");
  // console.log(`${link}`);
  framebox.className = "windowframe";
  framebox.style.display = "block";
  framebox.src = `${link.getAttribute("linkname")}`;
  bardiv.appendChild(closebtn);
  bardiv.appendChild(spantext);
  bardiv.appendChild(colbtn);
  maindiv.appendChild(bardiv);
  maindiv.appendChild(framebox);

  mydiv.appendChild(maindiv);
  $(".window").draggable({});
}
function closewin(elem) {
  // elem.Parentnode.remove();
  elem.parentNode.parentNode.remove();
}
function collwin(elem) {
  // elem.Parentnode.remove();
  checkElm(elem);
  //elem.parentNode.parentNode.remove();
}
function collElm(element) {
  element.parentNode.parentNode.classList.toggle("open");
  element.parentNode.parentNode.lastChild.style.display = "none";
  const temp = element.parentNode.querySelector(".titlebox");
  temp.innerText = temp.getAttribute("text");
  element.innerText = "▲";
}
function checkElm(element) {
  if (!element.parentNode.parentNode.classList.toggle("open")) {
    element.parentNode.parentNode.lastChild.style.display = "none";
    const temp = element.parentNode.querySelector(".titlebox");
    temp.innerText = temp.getAttribute("text");
    element.innerText = "▲";
    //element.parentNode.parentNode.style.filter = "none";
  } else {
    element.parentNode.parentNode.classList.add("open");
    element.parentNode.parentNode.lastChild.style.display = "block";
    const temp = element.parentNode.querySelector(".titlebox");
    temp.innerText = "";
    element.innerText = "▽";
    //element.parentNode.parentNode.style.filter = "blur(2px)";
  }
}
function changeback() {
  let wii = document.body.clientWidth;
  let sc = window.scrollX;
  let bb = window.innerWidth;
  let temp = sc / bb;
  temp = Math.floor(temp);
  const textb = document.getElementById(`typed${temp - 0}`);
  if (temp % 2 == 0) {
    document.body.style.backgroundColor = "rgb(239, 239, 239)";
    textb.style.backgroundColor = "#FFFFFF";
  } else {
    document.body.style.backgroundColor = "#FEFF03";
    if (temp != 7) textb.style.backgroundColor = "#FEFF03";
  }
  window.requestAnimationFrame(changeback);
}
function generatetype() {
  let wii = document.body.clientWidth;
  let bb = window.innerWidth;
  let temp = wii / 8;
  temp = Math.floor(temp);
  const thisdiv = document.querySelector(".headofhead");
  for (let i = 0; i < 7; i++) {
    const tempdiv = document.createElement("div");
    tempdiv.setAttribute("id", `typed${i}`);
    tempdiv.className = "typedc";
    tempdiv.setAttribute(
      "style",
      `width:30vw; position:absolute; left:${bb * (i + 2) - 800}px`
    );
    // tempdiv.innerText = "This is just a test";
    thisdiv.appendChild(tempdiv);
  }
}
function typedtext() {
  new TypeIt("#typed0", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(2000)
    .type("Who owns the Internet?")
    .pause(2500)
    .type(" Who actually owns this thing we are so attached to?")
    .go();
  new TypeIt("#typed1", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type('Who <span class="boldtext">runs</span> the Internet?')
    .pause(2000)
    .type("</br>")
    .pause(500)
    .type('Who <span class="boldtext">controlls</span> the Internet?')
    .pause(2000)
    .type("</br>")
    .pause(500)
    .type('and Who <span class="boldtext">uses</span> the Internet?')
    .go();
  new TypeIt("#typed2", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type("Any Ideas?")
    .pause(6000)
    .type("</br>")
    .pause(500)
    .type("We didn't know either.")
    .pause(2000)
    .type("</br>")
    .pause(500)
    .type("So we started reading....")
    .go();
  new TypeIt("#typed3", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type("And in the end, ")
    .pause(6000)
    .type("</br>")
    .pause(500)
    .type("the truth is ")
    .pause(2000)
    .type('"they" own the internet:')
    .pause(3000)
    .type("</br>")
    .pause(500)
    .type('<button id="button1" onclick="showStill2()">.G.A.F.A.M</button>')
    .pause(2000)
    .type('<button id="button2" onclick="showStill2()">...And more</button>')
    .go();
  new TypeIt("#typed4", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type("But,")
    .pause(3000)
    .type("</br>")
    .pause(500)
    .type('"We" can create our own.')
    .go();
  new TypeIt("#typed5", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type(
      "This project is <span class=boldtext>our</span> attempt to create a "
    )
    .pause(2000)
    .type("<span class=boldtext>platform/website</span>")
    .pause(1000)
    .type(" that both serves the community of students ")
    .pause(2000)
    .type("and aims to promote ")
    .pause(2000)
    .type('<span class="boldtext">autonomous</span> habits for using the web.')
    .type("</br>")
    .pause(2000)
    .type("We aim to incrementally ")
    .pause(1000)
    .type("implement features to the platform ")
    .pause(500)
    .type(
      'that transforms the <span class="boldtext">student archive</span> to '
    )
    .pause(1000)
    .type("a general purpose tool for students. ")
    .pause(1500)
    .type("</br>")
    .pause(500)
    .type("An archive they can contribute to in any creative way:")
    .pause(1000)
    .type("</br>")
    .pause(500)
    .type("Collaborate, Share, Document, Publish, Distribute and")
    .pause(1000)
    .type(" ...")
    .go();
  new TypeIt("#typed6", {
    speed: 120,
    waitUntilVisible: true,
  })
    .pause(1000)
    .type("We do not seek <span class=boldtext>tech solutionism</span>.")
    .pause(2000)
    .type("</br>")
    .pause(500)
    .type("Rather our goal is to practice using technology ")
    .pause(2000)
    .type("as a tool to promote communities’ autonomy.")
    .pause(2000)
    .type("</br>")
    .pause(500)
    .type(
      'To create a vision of <span class="boldtext">decentralized web</span> '
    )
    .pause(1000)
    .type("that does not replicate the vertical gap ")
    .pause(400)
    .type("between individual’s access to it.")
    .pause(1500)
    .type("</br>")
    .pause(500)
    .type("But instead paves the way ")
    .pause(1000)
    .type("for a collective unity, ")
    .pause(1000)
    .type('a <span class="boldtext">Horizontal</span> solidarity.')
    .pause(1500)
    .type("</br>")
    .pause(4000)
    .type("”Big words” huh?")
    .go();
}
function generateimage() {
  const mydiv = document.querySelector(".imagebox");
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 6; i++) {
    let tempimage = document.createElement("img");
    tempimage.className = "imagecontent";
    tempimage.setAttribute("id", `imagecontent${i + 1}`);
    tempimage.setAttribute("src", `./images/scan${i + 1}.png`);
    tempimage.setAttribute("style", "width:30vw;");
    frag.appendChild(tempimage);
  }
  mydiv.appendChild(frag);
}
const sheet = new Sheets("1s8wVp_Bqu60LEIQDyGr5LgvKkZ5s7HskPZtSCK8u0N4");
doWork(sheet);
