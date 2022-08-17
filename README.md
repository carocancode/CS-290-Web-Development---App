# CS-290-Web-Development---App

<img src="https://i.imgur.com/XidtXq5.gif" width=800><br>


In this assignment, you’ll write a client-side application using React. You will use HTML page layout tags and CSS rules to design the page layout, tables, and form controls. In addition, you'll use React to render the content.

Note : The material you need to know to complete this assignment is covered in Modules 4 and 5 (in addition to material covered in earlier modules).

Be sure to periodically review Assignment 4 FAQs & Tips (Links to an external site.) thread in the Ed discussion board (pinned at the top) Learning Outcomes

What is CSS and how do we use it in web applications? (Module 4 MLO 1)
What are some of the important CSS properties & what is the CSS block model? (Module 4 MLO 2)
What is the Document Object Model, or DOM? (Module 4 MLO 3)
How can we modify the DOM tree? (Module 4 MLO 4)
What are DOM events and how can we use them to create interactive web applications? (Module 4 MLO 5)
What is the React framework? (Module 5 MLO 1)
What are destructuring expressions in JavaScript and how do we use them? (Module 5 MLO 2)
What is JSX and how do we define components using JSX? (Module 5 MLO 3)
What is the State Hook and what are its uses? (Module 5 MLO 4)
How can we write Single Page Applications (SPAs) using React Router? (Module 5 MLO 5)
How can we define and use forms in React apps? (Module 5 MLO 6)

Basic Instructions

Develop a web app as a Single Page Application (SPA) using React, React Router, HTML, and CSS rules. The website will include the following 3 pages, incorporate component files, use React Router for routing between pages, and use CSS rules for page layout:

Home page.
Order page.
Stores page.

Understand the file structure A4-react-shopping-flowchart.png Download the Starter Code and Data

Instead of creating a new React app, download the assignment4.zip Download assignment4.zip archive, which includes the starter code.
Unzip it into a directory and then run npm install in the directory where you have unzipped the file.
The zip file has the boilerplate code for a React app with the following changes and additions
    The package.json file has been modified to include the dependencies react-router-dom (with version 5.x) and react-icons.
The App.js file has been modified to import data from 2 data files items.js and stores.js.
        These data files are in the directory src/data.
        You may add objects to these data files, but do not delete what already exists in them. We recommend leaving them as is.
        App.js must import the data into variables items and stores from these files.
During testing, we may replace the two data files with a different set of test files with the same names.
    The properties of the objects and the type of their values in the test files will match the properties of the objects in the files provided to you.
    However, the values of these properties as well as the number of objects in the test files can be different from the files provided to you.

Create Additional Files

You must create a separate file for each page and React component you define.
Inside the /src folder, create a /pages folder and in this folder create three files for 3 pages of your app (you can choose different names for your files)
    HomePage.js
    OrderPage.js, and
    StoresPage.js
Inside the /src folder, create a /components folder and in this folder create one file for each of the following React components:
    Nav
    GroceryTable
    GroceryRow
    SelectQuantity
    StoreTable
    StoreRow
    ZipSearch
Note:
    You are not required to use the same names for the React components as we have listed above. The names are provided here as an example.
    (Optional) Define additional React components if you want.

Implement Global Design Features

Add semantic page layout HTML tags to the App.js file:
    The <header> tag will include a heading level 1 <h1> tag to specify the app's name (be creative) and a paragraph <p> that describes it (such as a short, catchy slogan).
    The <nav> tag will call the Nav.js component file you made earlier. This component will import Link from the React Router Dom. The function will include a <nav> tag with <Link>s to each of three pages.  
    The <main> tag will include the <Route> tags to import each page's content.
    The <footer> tag will include the student's name in a copyright statement: © year first last.

    Home Page

    This page renders when the app starts up. In the return section of this page's function, add an
    tag that includes: A heading level 2

to introduce the page. A paragraph

to tell users what to do.

Order Page

This page renders when a user clicks on the global navigational control. In the return section of this page's function, add an
tag that includes: A heading level 2
to introduce the page. A paragraph

to tell users what to do. A
that displays data from the variable items. This HTML table will be created by a React component (GroceryTable in our example) and will include: A row that specifies these three columns for an item's: Name Price Quantity Rows of data that render in the . Each row of data must display the name, price and quantity of the item, and must be created by another React component (GroceryRow in our example). Use the map function to render the rows of data. There should be one row for each item in the variable items. Within each row, the quantity value must use another React component (SelectQuantity in our example) that provides a control via 2 icons to increment and decrement the quantity of the item in the row. The initial value of the quantity must be zero. The user must not be able to set the quantity to less than 0 or greater than 10. You can use Exercise Counter Component in Exploration - State and React Hooks as a starting point for this component.

Store Page

This page renders when a user clicks on the global navigational control. In the return section of this page's function, add an
tag that includes: A heading level 2

    to introduce the page. A paragraph

    to tell users what to do. A
    that displays data from the variable stores. This HTML table will be created by a React component (StoreTable in our example) and will include: A row which specifies these three columns: City State Zip Rows of data that render in the . Each row of data must be created by another React component (StoreRow in our example). Use the map function to render the rows of data. There should be one row for each store in the variable stores. A React component (ZipSearch in our example) that creates a with , , and number control for a user to enter their 5-digit zip code, and a to submit the data. An alert (or other dynamic message) that displays the response message, which includes the data entered (rather than submitting the form).

    Design the frontend with CSS

    Add, update, and override the default rules listed in the existing App.css file that resides in the /src folder. Experiment! Refer to Exploration — Introduction to CSS and Frontend Design and Exploration — CSS Methods. Do not copy color and spacing from the demonstration site; define your own fonts, colors, and spacing. Do not use an outside stylesheet or templating system.

    Login to Replit to copy the Global Stylesheet (Links to an external site.) (from Exploration — Introduction to CSS and Frontend Design).
    Paste stylesheet comment/prompts into your App.css file.
    (Optional) Import a Google font.
    (Optional) Define color variables to use in the following rules.
    Define the body rule's values for text color, background color, font, font size, margin, and padding properties. Do not choose white, black, Times New Roman font, or auto.
    Define the nav, nav a, and nav a:hover rules' values for background-color, color, border, font-size, font-weight, line-height, margin, padding, text-decoration, and vertical alignment properties. The goal is to design anchors that are fat enough for a finger to touch and to differentiate them from regular text anchors. 
    Define the header and footer rules' values for background-color, color, border, font-size, font-weight, margin, and padding properties.
    Define the main rule's values for background-color, color, border, and padding to differentiate it from the header and footer.
    (Optional) Add h1 and h2 rules to update the font-family and colors.
    Define the table rule to collapse the borders.
    Define the table tr, th, and td rules' values for border and padding properties.
    (Optional) Define a subtle row color changes using :nth-child(#).
    Define the form input and button rules' values for padding and font properties. The font should match the body font rule. The input should easier to type in due to an increase in padding.
    (Optional) Define fieldset, legend, and label rules to improve usability. 
    (Optional) Define the :focus, :valid, :invalid, and ::placeholder rules for input and button.

About
No description, website, or topics provided.
Topics
Resources
Readme
Stars
0 stars
Watchers
1 watching
Forks
0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Languages

JavaScript 55.3%
CSS 35.6%
