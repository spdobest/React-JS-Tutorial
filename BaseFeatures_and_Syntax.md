# React Js Base Features and Syntax  
  
## Local environment set up for React Js  
1. Install node -  
2. Install create-react-app => npm install create-react-app -g   
  
### Now ceate a React application using the create-react-app command  
=> create-react-app MyApp  
now redirect to MyApp through command line  
To start the react application  
=> npm start  
It will open the web application in a new browser window  
**Lets understand the file and folder structure**  
  
**package.json**  
**src** This folder actually contains the project source code and it contains few pre-generated files  
**app.css**  
**app.js**  
**index.css**  
**index.js**  gets access to the root element in our DOM. It contains render() method to draw the ui in the web broswer.  

**node_modules**  It contains all the dependencies and sub-dependencies of our project. Whatever dependencies you will add using npm install command, that folder will download and store inside node_modules.You should not edit any of the node module files.  
**public** It is the root folder which get served by the web server at the end.  
**Index.html inside public**  we can not write any html code here. 
manifest.json - it ocntains the meta data of our application.
**logo.svg** it is logo of react , which will be displayed after running the application.  
   
## React Component  

**Component**  it is a class which is extended our other custom component. Whatever screen we will design , each screen is an custom component which extends **Component** class.It contains render() method which is responsible to render the view to the screen. render method returns html component.  
  
**jsx**  
```
class App extends Component {
  render() {
    return (
      // <div className="App">
      //    <h1>Hello SIbaprasad, welcome to React js</h1>
      // </div>
      React.createElement('div',null,React.createElement('h1',{className:'App'},'Hello SIbaprasad, welcome to React js'))
    );
  }
}
export default App;
```  
The above code is written in JSX format. If we write it using html , everything should be inside one tag (here inside <div>) {className:'App'} - is nothing but the style we defined to the jsx - App.css   
``` 
    <div className="App">
      <h1>Hello SIbaprasad, welcome to React js</h1>
    </div>
  <h1>Hello SIbaprasad, welcome to React js</h1> // it will show error
```  
   
   
