localStorage.setItem("setup","true");
localStorage.setItem("main",`

if(window.matchMedia('(prefers-color-scheme: dark)').matches===true){
		localStorage.setItem("theme","dark");
	}else{
		localStorage.setItem("theme","light");
};

var lightstyle=document.createElement("style");
lightstyle.innerHTML="button {background-color:white;color:black}body{background-color:white;color:black}";
lightstyle.id="lightstyle";

var darkstyle=document.createElement("style");
darkstyle.innerHTML="button {background-color:black;color:lightgrey}body{background-color:black;color:lightgrey}";
darkstyle.id="darkstyle";

document.head.appendChild(darkstyle);
document.head.appendChild(lightstyle);

if(localStorage.getItem("theme")==="dark"){document.querySelector("#lightstyle").disabled=true;};
if(localStorage.getItem("theme")==="light"){document.querySelector("#darkstyle").disabled=true;};

var projectbutton = document.createElement("button");
var settingsbutton = document.createElement("button");
var formatbutton = document.createElement("button");
var updatebutton = document.createElement("button");

projectbutton.innerHTML="Projects";
settingsbutton.innerHTML="Settings";
formatbutton.innerHTML="Format";
updatebutton.innerHTML="Check For Update"

document.body.appendChild(projectbutton);
document.body.appendChild(updatebutton);
document.body.appendChild(settingsbutton);
document.body.appendChild(formatbutton);

function project(a) {
	var x = window.open("","Settings","fullscreen=yes");
	
	function load(val) {window.opener().eval("localStorage.getItem("+val+")")};
	x.function load(val) {window.opener().eval("localStorage.getItem("+val+")")}
	
	x.document.body.innerHTML = "<button>Import Project</button><br><h1>Projects:</h1><br>";
	
	x.function Import() {
	var knownprojects = window.opener().localStorage.getItem("knownprojects").split(";");
	document.body.innerHTML = "<input placeholder='Import Custom Project' type='file' accept='.js'><button onclick = ></button>"
	for(i=0;i>knownprojects.length;i++){}
	
	}
	x.focus();
	if(localStorage.getItem("Projects_List")){
	var y = getItem("Projects_List");
	y = y.split(",");
	var z = ""
	for(i=0;i>y.length;i++){
			z+="<button onclick='load(this.innerHTML)'>"+y.at(i)+"</button><br>"
		}
	x.document.body.innerHTML += z;
	
	}else{x.document.body.innerHTML+="<h1>No Projects</h1>"}
	 
};
projectbutton.onclick = "project()"
`);
import("update.js");
