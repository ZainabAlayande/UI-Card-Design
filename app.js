let body = document.querySelector("body");
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.marginTop = "10%";


const root = document.querySelector("#root")
root.style.backgroundImage = "linear-gradient(to right, #862e9c, #e34881)";
root.style.height = "50%";
root.style.width = "50%";
root.style.textAlign = "center";
root.style.padding = "1% 0% 3% 0%";
root.style.borderRadius = "8px";

let rootInnerPtag = `<p class="ptag">UI CARD DESIGN</p>`;
root.innerHTML = rootInnerPtag;

let ptag = document.querySelector(".ptag")

ptag.style.color = "#f1dcf9";
ptag.style.fontSize = "30px";
ptag.style.fontWeight = "700";

let whiteBox = document.createElement("div");

whiteBox.style.width = "60%";
whiteBox.style.height = "60%";
whiteBox.style.backgroundColor = "#f9f0ff";
whiteBox.style.alignItems = "center";
whiteBox.style.borderRadius = "4px";
whiteBox.style.display = "grid";
whiteBox.style.gridTemplateRows = "80% 10% 10%";
whiteBox.style.rowGap = "4px";
whiteBox.style.padding = "4% 4%";
whiteBox.style.marginLeft = "16%";

let first = document.createElement("div");

first.style.backgroundColor ="#eebdf9";
first.style.borderRadius = "4px";
first.style.height = "100%";

let second = document.createElement("div");


second.style.backgroundColor = "#eebdf9";
second.style.borderRadius = "4px";
second.style.width = "60%";
second.style.height = "100%";

let third = document.createElement("div");

third.style.backgroundColor = "#eebdf9";
third.style.borderRadius = "4px";
third.style.width = "30%";
third.style.height = "100%";
third.style.margin = "0% 0% 0% 0%";

let image = document.createElement("img");

image.src = "./loginicon.svg";

image.style.width ="90%";
image.style.height ="9cd0%";

first.appendChild(image);

whiteBox.appendChild(first);
whiteBox.appendChild(second);
whiteBox.appendChild(third),

root.appendChild(whiteBox);