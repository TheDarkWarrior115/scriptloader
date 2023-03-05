localStorage.setItem("setup","true");

if(window.matchMedia('(prefers-color-scheme: dark)').matches===true){
		localStorage.setItem("theme","dark");
	}else{
		localStorage.setItem("theme","light");
};

localStorage.setItem("main",`

var lightstyle=document.createElement("style");
lightstyle.innerHTML="button {background-color:white;color:black}";
lightstyle.id="lightstyle";

var darkstyle=document.createElement("style");
darkstyle.innerHTML="button {background-color:black;color:lightgrey}";
darkstyle.id="darkstyle";

document.head.appendChild(darkstyle);
document.head.appendChild(lightstyle);

if(localStorage.getItem("theme")==="dark"){document.querySelector("#lightstyle").disabled=true};
if(localStorage.getItem("theme")==="light"){document.querySelector("#darkstyle").disabled=true};

var projectbutton = document.createElement("button");
var settingsbutton = document.createElement("button");
var formatbutton = document.createElement("button");

projectbutton.innerHTML="Projects";
settingsbutton.innerHTML="Settings";
formatbutton.innerHTML="Format";

document.body.appendChild(projectbutton);
document.body.appendChild(settingsbutton);
document.body.appendChild(formatbutton);

function project() {

}
`)
