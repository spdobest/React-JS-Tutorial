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
  
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.  
  
A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.  
  
Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.  
  
**JSX** is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.  
  
When creating components, you have the choice between two different ways:  
  
Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) =>   
const cmp = () => { return <div>some JSX</div> }   
(using ES6 arrow functions as shown here is recommended but optional)      
  
class-based components (also referred to as "containers", "smart" or "stateful" components) =>   
```
class Cmp extends Component { 
render () { 
   return <div>some JSX</div> 
   } } 
```  
## Props  and State   
**props  and state**  are CORE concepts of React. Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).  
  
### Props 
**props**  allow you to pass data from a parent (wrapping) component to a child (embedded) component.  
  
Example:
```   
AllPosts Component:  

const posts = () => {
    return (
        <div>
            <Post title="My first Post" />
        </div>
    );
}
```  
Here, title  is the custom property (prop ) set up on the custom Post  component. We basically replicate the default HTML attribute behavior we already know (e.g. <input type="text">  informs the browser about how to handle that input).  
  
Post Component:  
```  
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```  
The Post  component receives the props  argument. You can of course name this argument whatever you want - it's your   function definition, React doesn't care! But React will pass one argument to your component function => An object, which    contains all properties you set up on <Post ... /> .  
  
{props.title}  then dynamically outputs the title  property of the props  object - which is available since we set the title  property inside AllPosts  component (see above).  

### State  
  
Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.  
  
Example:  
  
NewPost Component:  
  
class NewPost extends Component { // state can only be accessed in class-based components!  
    state = {  
        counter: 1  
    };    
   
    render () { // Needs to be implemented in class-based components! Needs to return some JSX!  
        return (  
            <div>{this.state.counter}</div>  
        );  
    }  
}  
  
Here, the NewPost  component contains state . Only class-based components can define and use state . You can of course pass the state  down to functional components, but these then can't directly edit it.  
  
state  simply is a property of the component class, you have to call it state  though - the name is not optional. You can then access it via this.state  in your class JSX code (which you return in the required render()  method).  
  
Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from    outside!  
  
## To Which Events Can You Listen?  
In the last lecture, we saw that you can react to the onClick event - but to which other events can you listen? You can find a list of supported events here:   
https://reactjs.org/docs/events.html#supported-events    
  
###### Clipboard Events  
**Event names:**  
onCopy onCut onPaste  
**Properties:**  
DOMDataTransfer clipboardData  
  
###### Composition Events   
**Event names:**  
onCompositionEnd onCompositionStart onCompositionUpdate
**Properties:**  
string data
###### Keyboard Events  
**Event names:**  
onKeyDown onKeyPress onKeyUp  
**Properties:**  
boolean altKey  
number charCode  
boolean ctrlKey  
boolean getModifierState(key)  
string key  
number keyCode  
string locale  
number location  
boolean metaKey  
boolean repeat  
boolean shiftKey  
number which  
  
###### Focus Events   
**Event names:**  
onFocus onBlur    
These focus events work on all elements in the React DOM, not just form elements.  
**Properties:**   
DOMEventTarget relatedTarget     
  
###### Form Events   
**Event names:**  
onChange onInput onInvalid onSubmit    
For more information about the onChange event, see Forms.    
    
###### Mouse Events  
**Event names:**  
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit    
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave    
onMouseMove onMouseOut onMouseOver onMouseUp    
The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.    
    
**Properties:**  
boolean altKey  
number button  
number buttons  
number clientX  
number clientY    
boolean ctrlKey  
boolean getModifierState(key)  
boolean metaKey  
number pageX  
number pageY    
DOMEventTarget relatedTarget  
number screenX  
number screenY  
boolean shiftKey  
###### Selection Events  
**Event names:**  
onSelect
###### Touch Events  
**Event names:**  
onTouchCancel onTouchEnd onTouchMove onTouchStart  
  
**Properties:**  
boolean altKey    
DOMTouchList changedTouches  
boolean ctrlKey  
boolean getModifierState(key)  
boolean metaKey  
boolean shiftKey    
DOMTouchList targetTouches  
DOMTouchList touches  
  
###### UI Events  
**Event names:**  
onScroll  
**Properties:**  
number detail  
DOMAbstractView view  
###### Wheel Events  
**Event names:**    
onWheel
**Properties:**  
number deltaMode  
number deltaX  
number deltaY  
number deltaZ  
  
###### Media Events 
**Event names:**  
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting  
  
###### Image Events   
**Event names:**  
onLoad onError
###### Animation Events    
**Event names:**  
onAnimationStart onAnimationEnd onAnimationIteration  
**Properties:**  
string animationName  
string pseudoElement    
float elapsedTime      
###### Transition Events 
**Event names:**  
onTransitionEnd  
**Properties:**  
string propertyName  
string pseudoElement  
float elapsedTime  

###### Other Events    
Event names:  
onToggle  
  
### Function Components Naming  
In the next lecture, we'll learn how to manage state in functional components (instead of class-based components).  
In case you're getting an error with the code shown in the next lecture, simply assign a capitalized variable name to the   variable that holds your functional component.  
  
Example:  
Use  
const App = () => { ... }  
instead of  
  
const app = () => { ... }  
Technically, that's not required but depending on your project setup, the built-in linter (a code quality checking tool) that comes with create-react-app might not like the lowercase variable name.  
  
You can also avoid this by creating projects with the right react-scripts version, which I would recommend for this course anyways (see the setup video, lecture 26)  
  
create-react-app my-app --scripts-version 1.1.5  
   
