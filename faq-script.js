// Begin FAQ SCRIPT



// COPYRIGHT 2020 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



// TOGGLE SINGLE DIV

function toggleLayer( whichLayer )
{
  var elem, vis;
  if( document.getElementById )
    elem = document.getElementById( whichLayer );
  else if( document.all )
      elem = document.all[whichLayer];
  else if( document.layers )
    elem = document.layers[whichLayer];
  vis = elem.style;
  
  if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)
    vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
  vis.display = (vis.display==''||vis.display=='block')?'none':'block';
}



// OPEN ALL DIVS

function openAllDivs(id) {
 for (i=1;i<=100;i++) {
var divname = 'faq'+i;

if (document.getElementById(divname)) {
 var divStyle = document.getElementById(divname).style;
 divStyle.display=(id==divname)?'block':'block';
 }
 }
 }



// CLOSE ALL DIVS

function closeAllDivs(id) {
 for (i=1;i<=100;i++) {
var divname = 'faq'+i;

if (document.getElementById(divname)) {
 var divStyle = document.getElementById(divname).style;
 divStyle.display=(id==divname)?'block':'none';
 }
 }
 }
