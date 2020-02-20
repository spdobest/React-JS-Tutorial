# React Tutorial - Udemy 

**How to setup online web tools to practice react js coding**  
  
**1. Go to codeine.io  
2. Now set up for react js**  
There r 3 Windows for html, css and javascript  
  
**3.Click on setting in React window**  
In the first edit text - select - Bable  
In the first edit text - select -  react.min.js  
In the second edit text - select -  race-dom.min.js  
  
**In HTML window**    
```   
<div class = "person">
  <h1>Siba</h1>
  <h2>Age is 29 </h2>
</div>

<div class = "person">
  <h1>Sibaprasad </h1>
  <h2>Age is 29 </h2>
</div>

<div class = "person">
  <h1>Sibaprasad </h1>
  <h2>Age is 29 </h2>
</div>  
```   
  
**In CSS window**   
```   
.person {
  display: inline-block;
  margin: 10px;
  boarder: 1px solid  #eee;
  box-shadow: 0 2px 2px  #ccc;
  width: 200px;
  padding: 10px
} 
```   
In React Window  
Nothing   
it will show 3 square boxes in horizontall menner with content  

To repeate the content we need to write more code in HTML , to avoid these, write once and reuse again and again using react native code  
  
**HTML COde**    
<div id="p1"></div>    
**CSS code remains same**  
**ReactJs WindowCode**  
```  
function Person(props){
  return(
    <div className = "person">
  <h1>Name: Sibaprasad</h1>
  <h1>Age : 29</h1>
  <h2>Job : SOftware Developer </h2>
</div>
  );
}
ReactDOM.render(<Person/>, document.querySelector("#p1"));
```  

**Person - is a class contains details of the person**  
**Props - Stands for properties for the Model class**  
In the above code , React code will create the html element programmaticaly and put the code in the **<div> Element with id = p1**  
  
In next step we will make this more dynamic  
  
**HTML COde**    
<div id="p1"></div>  
<div id="p2"></div>  
<div id="p3"></div>  
<div id="p4"></div>  
  
**ReactJs WindowCode**  
```  
function Person(props){
  return(
    <div className = "person">
  <h1>{props.name}</h1>
  <h1>Age : {props.age}</h1>
  <h2>Job : {props.job} </h2>
</div>
  );
}

ReactDOM.render(<Person name ="Person 1" age = "55" job = "CEO"/>, document.querySelector("#p1"));
ReactDOM.render(<Person name ="Person 2" age = "40" job = "Manager"/>, document.querySelector("#p2"));
ReactDOM.render(<Person name ="Person 3" age = "35" job = "Technical Lead"/>, document.querySelector("#p3"));
ReactDOM.render(<Person name ="Person 4" age = "30" job = "Software Engineer"/>, document.querySelector("#p4")); 
```    
  
Now it will show the horzontal list of boxes with all the details above mentioned. Here we created only person component and reusing it in many places.  
  
##  Why React ?  
1. UI state becomes difficult to manage with vanila javascript (For every portion of the web application we need to write manually and its very difficult to maintain the code)  
2. Focus on Business Logic, Not on preventing your app from exploding  
  
## Single Page and Multi Page Application  
**Single Page** Only one HTML page with content is dynamically loaded by client at run time. Content is load using React. Typically only one ReactDOM.render() call  
**Multi Page** Multiple HTML page where content is render on server.  
 
 ##  Deeper React Component and React Internals  
 Folder structure is important in React native project  
 **component** - where all component classes will be inside the folder.  
 **Asserts** - where we will put all the Image and resources file inside this folder  
 **Cockpit** - where we can put files like App.js and App.css files inside there  
 **Contsainre**- it will contains the html and css files  
   
 ##  Stateless and Statefull COmponent  
 State Hoock  
 Class based vs Functional Component  
 **Component Life Cycle**  
 ![alt tag](https://github.com/spdobest/React-JS-Tutorial/blob/master/Documents/ClassBasedComponent_vs_FunctionalComponent.png)     
   
  ![alt tag](https://github.com/spdobest/React-JS-Tutorial/blob/master/Documents/ComponentLifeCycle_creation.png)    
    
  ![alt tag](https://github.com/spdobest/React-JS-Tutorial/blob/master/Documents/ComponentLifeCycle.png)     
  
  ![alt tag](https://github.com/spdobest/React-JS-Tutorial/blob/master/Documents/lifecycle_component_update.png)  

 ### useEffect  
 
  ## https://www.netguru.com/codestories/react-native-component-lifecycle
   
 
 ### Cleanup work using useEffect  
