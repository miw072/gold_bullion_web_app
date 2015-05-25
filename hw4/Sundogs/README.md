===============================================================================
                             CSE134B DREAM TEAM
                               COINFLIP - HW3
===============================================================================

# # # # # # # # # # # # # # # 
#      Application Use      #
# # # # # # # # # # # # # # #

Navigation:
	Start with index.html as the login/signup page. All other pages are named
	as such:

	index.html - Login/signup page with demo
	wire2.html - Home page with Total Coin Value and graphs for all coins
	wire3.html - My Gold page with details on owned gold coins
	wire4.html - Gold Item page that looks at a specific gold coin
	wire5.html - New Item page that is the mock-up for adding a new coin

	Clicking on the AG (silver) or PT (platinum) boxes on the side nav will
	simply navigate you to the AU (gold) page [wire3.html] as this mock-up
	only implements the My Gold page.

Responsive Design:
	THe high-fidelity mock switches to mobile view when the screen size 
	reaches a width of 1000px or below.



# # # # # # # # # # # # # # # 
#   Cross-Platform Issues   #
# # # # # # # # # # # # # # #

Chrome:
	We mainly developed on Chrome, so there were issues with compatibility in
	that department. 

Firefox:
	Firefox also seemed to work perfectly well with no issues. Did not note any
	major problems, if any problems at all, with that browser. The only slight
	difference that we noticed is that the dropdown selector in wire5.html was 
	styled a little bit differently in Firefox (not as nice looking as we would
	have hoped and seen in Chrome).

Safari:
	Here, the dropdown selector in wire5.html was also a little bit different, 
	although not as ugly as in Firefox. One of the major issues we bumped into,
	however, was that a lot of our SVG elements were not showing. This turned
	out to be this really annoying problem that with SVG symbols, all other 
	browsers let you call "use" before declaring the symbol EXCEPT Safari. 
	This required an insane amount of browsing through all the files and 
	doing a move of that line of code below the symbol declaration for pretty
	much every single SVG element we used. Overall, testing on Safari brought
	out the key point that some browsers will care about the order of certain
	markup while others wont. 

	Another thing we noticed is that Safari renders fonts a little bit 
	differently from all the other browsers, and especially font-size. We used
	font-size: 0 to bring some divs flush close to each other but on Safari
	that doesn't work for some strange reason, so we compensated with some
	white-space: nowrap so that our mobile toggling selectors didn't overflow.

Internet Explorer:
	Okay this one actually scared us a ton at first because the entire layout 
	was whack. Turns out after some research, the "main" semantic element isn't
	supported in IE, so the padding we had used for that element didn't have
	any effect at all. To fix this, we simply switched out the "main" element
	for a "section" element with a specific class and styled it the same
	as we had with the "main" element.



# # # # # # # # # # # # # # # 
#     Validation Issues     #
# # # # # # # # # # # # # # #	

HTML:
	All the HTML validation checked out so there was no problem there.

CSS:
	The errors in CCS validation were broken down into only two problems:

	Property fill Doesn't Exist:
		CSS3 validator doesn't recognize fill as a valid attribute, but
		as we tested it with Chrome, Firefox, Safari, and IE, we're willing
		to forgo solving of this validation flag to implement the fill 
		attribute. After some further research, this seems to be a bug in 
		the validator, much like the one that will be described next.

	Calc() parse errors:
		Anywhere we used calc() in our CSS, the CSS validator threw a parse
		error. However, with research, we determined that this was a bug with 
		the CSS validator. 

		Source: https://www.w3.org/Bugs/Public/show_bug.cgi?id=18913 



# # # # # # # # # # # # # # # 
#    Implementation Tech    #
# # # # # # # # # # # # # # #

HTML:
	We used HTML5 so this technology was pretty straightforward. Perhaps
	the one noteworthy thing is our use of SVG, particularly for icons
	from IcoMoon.io (source: https://icomoon.io/) to save us the time
	of actually designing our own icons

SASS/CSS:
	We wrote all of our CSS using SASS that compiled into CSS. We used 
	SASS in a way that the syntax was identical to that of simply using
	CSS. The only additions we utilized SASS for were as follows:

		1) SASS Variables - easier refactoring of color themes
		2) SASS Nesting   - easier for the developer to nest attributes, mainly
			                used as a security fall-back against conflicting 
			                styling as we were merging files and work
		3) SASS Mixins    - For any CSS attributes that needed all the extra
		                    prefix declarations for moz, webkit, etc., we used
		                    simple @include mixins from SASS to avoid having to
		                    type all the prefixes ourselves.

    Otherwise, all of our SASS was written exactly the same as CSS. We simply
    employed the SASS to save some time and organize common themes easier. 

    The SASS file is located in sass/style.scss.
    The CSS file is located in style/style.css.


Javascript:
	We used a little bit a Javascript, not much, to accomplish these goals:

		1) Importing top navigation, side navigation, and footer on all pages.
		   This allowed us to be able to just change the common elements in one 
		   place and have it affect all 5 pages rather than have to go through 
		   every single page for changes. This was done through simple document
		   write statements (with extra input in to the function for the side
		   navigation, this let us easily specify which side navigation button
		   should be 'pressed'). These import functions are all in main.js and
		   are:
		   		- loadTopNav()
		   		- loadTopNavPersist()
		   		- loadSideNav(selected)
		   		- loadFooter()

		2) Creating the graphs. This was done using a library called Chart.js.
		   Source: http://www.chartjs.org/

		3) Handling navigation toggle buttons. This is when the application is 
		   shrunk down to mobile size where the toggle buttons of information
		   and chart appear. Instead of having those buttons navigate to
		   different pages, we thought it made more sense that they would 
		   toggle what information is already on the page. This was done with
		   jQuery on click events. 
		   Source: https://jquery.com/



# # # # # # # # # # # # # # # 
#        Thank you!         #
# # # # # # # # # # # # # # #

We hope you enjoyed our high-fidelity mock-up of CoinFlip, the simple 
application for managing your entire coin collection! Feel free to 
contact us with any feedback, comments, suggestions, or concerns.

Best,
CSE134B Dream Team

