# React-JS-Tutorial  
https://reactjs.org/tutorial/tutorial.html  
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial  
https://github.com/enaqx/awesome-react  
https://www.quora.com/Whats-the-best-place-to-learn-React-js  
https://egghead.io/lessons/ (Video Tutorial).  

#

# React  JS

## What is React Js ?  
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.  
React has a few different kinds of components, but we’ll start with React.Component subclasses:  
  
**render()** - The render method returns a description of what you want to see on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a lightweight description of what to render.   
  
## What is JSX    
It stands for javascript extension. JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.  
  
Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.  
  
The following code can be written in html   
```   
var nav = (  
    <ul id="nav">  
      <li><a href="#">Home</a></li>  
      <li><a href="#">About</a></li>  
      <li><a href="#">Clients</a></li>  
      <li><a href="#">Contact Us</a></li>  
    </ul>   
);  
```    
Now the above code can be written using JSX , here is the code   
```  
var nav = React.createElement(  
   "ul",  
   { id: "nav" },  
   React.createElement(  
      "li",  
      null,  
      React.createElement(  
         "a",   
         { href: "#" },  
         "Home"  
      )  
   ),  
   React.createElement(  
      "li",  
      null,  
      React.createElement(  
         "a",  
         { href: "#" },  
         "About"  
      )  
   ),  
   React.createElement(  
      "li",  
      null,        
      React.createElement(      
         "a",    
         { href: "#" },  
         "Clients"        
      )      
   ),    
   React.createElement(  
      "li",                    
      null,                  
      React.createElement(                
         "a",              
         { href: "#" },            
         "Contact Us"          
      )        
   )      
); ```    
  
In the above code snippet, JSX using React.ceateElement() method to convert the Html code to jsx. JSX provides a concise and familiar syntax for defining a tree structure with attributes that does not require learning a templating language or leaving JavaScript. Both of which are can be a win when building large applications.   

For more details, please go through the link below.   
**https://www.reactenlightenment.com/react-jsx/5.1.html  
https://reactjs.org/docs/introducing-jsx.html**  
  
## How to create a sample react app. 
npm install -g create-react-app (if create-react-app not found)  
npx create-react-app my-app  
Then to start the application , redirect to my-app in command line and   
Run the below command  
npx start  
  
To start coding in react using browser compiler, use below link 
https://codepen.io/JohnPaulFich/pen/MXmzzM     
  
