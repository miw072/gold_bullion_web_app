===============================================================================
                             CSE134B SUNDOGS
                               COINFLIP - HW4
===============================================================================

# # # # # # # # # # # # # # # 
#      Application Use      #
# # # # # # # # # # # # # # #

Navigation:
	Start with index.html as the login/signup page. All other pages are named
	as such:

	index.html - Login/signup page with demo
	wire2.html - Home page with Total Coin Value and graphs for all coins
	wire3.html - My Coin page with details on owned gold.silver/platinum coins
	edit.html - Coin update page, customers can edit quantity and premium for a certain item
	wire5.html - New Item page that is the mock-up for adding a new coin item

	Clicking on the AG (silver) or PT (platinum) boxes on the side nav will
	navigate you to the corresponding metal coin page.

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
	Firefox doesn't support date type input for our implementation.

Internet Explorer:
	IE doesn't support date type input for our implementation.
	 
# # # # # # # # # # # # # # # 
#    Implementation Tech    #
# # # # # # # # # # # # # # #

HTML:
	We built our HTML based on the previous implementation of DreamTeam's HW3.
	We added some ids for some tags for our javascript file.
	We added script part for getting ask/bid/change price in wire2.html and wire3.html.

SASS/CSS:
	We built our CSS based on the previous implementation of DreamTeam's HW3.
	We added some CSS style for the new HTML tags.

Javascript:
	We built out javascript based on the previous implementation of DreamTeam's HW3.
	We also added much more implementation for our functions.
	
	1>.In main.js: 
	   (1)We added variable to get the metal type for gold/silver/platinum. 
	   (2)For wire2.html, we added javascript to get access to the firebase database, get each information of each item in a certain user,
	      count total and add it html.
	   (3)We added javascript to get access to the firebase database to fetch the information about the historical price of the three kind of metals.
		  
 	2>.In wire3.js:
	   The functions in this page are used to:
	   (1)get access to the database
	   (2)get information(item, current metal price)
	   (3)count total value for a item
	   (4)display the information in html
	   (5)add edit button navigate to update page
	   
	3>.In database.js
	   The functions in this page are used to:
	   (1)get access to the database
	   (2)display all coin types in this metal
	   (3)display all information attached with the item
	   (4)allow users to update quantity and premium
	   (5)the messages displayed in this page can change according to the quantity users typed in
	   (6)when click save button, save new data to database
	   (7)when click delete button, delete item information from database
	   
	4>.In additem.js
	   The functions in this page are used to:
	   (1)get access to the database
	   (2)display all coin types in this metal
	   (3)display all information attached with the item
	   (4)allow users to select and update all information
	   (5)when click save button, save new data to database

	5>.In InsertGraphData.js
		The functions in this page are used to:
	   (1) get access to the Quandl to fetch the information 
	   (2) store the data into the firebase database

	6>.In loggin.js
		The functions in this page are used to:
	   (1) allow user to sign up or log in to our application 
	   (2) user authentication uses two method: 1. traditional email and password 2.
	   		third party log in including facebook and google( you must use localhost to access the page to 
	   		make this work)
	   
	Note: (1)All our javascript implementation is based on jquery. The basic logic part is: 
		  get information from database -> display it on the page -> get users input -> update page -> update database 
		  (2)We use firebase database as our back-end service, the APIs we used are from firebase docs and jquery docs.


# # # # # # # # # # # # # # # 
#        Thank you!         #
# # # # # # # # # # # # # # #

Hope you enjoy our implementation for the pure client-side web application for gold bullion investment.
If you have any suggestions and ideas, please feel free to contact us at zeh003@ucsd.edu


Best,
CSE134B Sundogs

