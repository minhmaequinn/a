// HEADER

// USE lowercase FOR ALL OPTIONS


var logotype	= "graphic"		// LOGO TYPE | graphic | text |
var logolink	= "index.html"		// LINK FOR LOGO
var logoalign	= "left"		// ALIGN LOGO | left | center | right |


// TEXT LOGO

var logoslog	= "yes"					// SHOW SLOGAN | yes | no |
var logotext	= "Your Website Title"			// TEXT LOGO TEXT
var sublogo	= "Slogan or phone number 847-555-5555"	// LOGO SLOGAN




// COPYRIGHT 2020 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



document.write('<div id="headerdiv" class="td-'+logoalign+'">');

   if (logotype == "graphic") {

document.write('<a href="'+logolink+'"><img src="picts/logo.png" class="logo-respond logo-fade '+logoalign+'-div"></a>');

   }

   if (logotype == "text") {

document.write('<div class="textlogo logo-fade td-'+logoalign+'">');

document.write('<a href="'+logolink+'">'+logotext+'</a><br>');

   if (logoslog == "yes") {

document.write('<div class="logoslogan td-'+logoalign+'">');

document.write('<a href="contact.htm">'+sublogo+'</a><br>');

document.write('</div>');

document.write('</div>');

   }

   }






// HEADER ICON 1 (DELETE TO REMOVE)

document.write('<div class="header-ico1 icohov printhide">');
document.write('<a href="resources.htm"><img src="picts/icons/icon_search-white.png" class="ico1-img" alt="Search"></a>');
document.write('</div>');






// HEADER ICON 2 (DELETE TO REMOVE)

document.write('<div class="header-ico2 icohov printhide">');
document.write('<a href="contact.htm"><img src="picts/icons/icon_contact-white.png" class="ico2-img" alt="Contact"></a>');
document.write('</div>');






document.write('</div>');


