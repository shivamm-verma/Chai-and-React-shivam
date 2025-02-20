## Day1
git init (delete .git folder if don't want Version)
```
npx create-react-app 01basicreact (slow type)
```
{check for possible *scripts* in Package.json}
```
npm run start
npm run dev
npm run build
```

[create project using Vite]
```
npm create vite@latest (then, npm i)
yarn create vite (then, yarn)
```

## Day2
### [notes]
- in vite+react, we can create and save a component like shivam.jsx and recall it in the main.jsx , using the similar protocols.
```jsx
import ShivamDamn from "./Shivam.jsx"
<ShivamDamn/>
```

[vite+react]
-And in React only, we will save the file as Shivam.js, and follow the similar protocols.
- in main.jsx, all the components are called.
- in App.jsx, function App(){...} is defined which returns html like:
```jsx
function App() {
	return(
		<>
		<h1>Hello there</h1>
		<p> Nice to meet you!</p>
		</>
	)}
```

export default App;

- in main.jsx, it'd be like just with similar protocols(rules):
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
```
in reactdom, call
```jsx
<App/>
<ShivamDamn/>
```

(make sure these are exported in there .jsx files)

- similar progress is in just React, only diffrence is that the files(component files) are created in .js format, like Shivam.js

-- in React only, the main file is index.js & in Vite+React, the main file is main.jsx

- the component function name must start with a Uppercase letter like Blog(), not blog()

- by convention, If file is returning HTML code, then the file extension must be .jsx, but if the file only returning Javascript code, then it should be .js only

## Day3 
### (customReactJs)

- functions can be written in the main.jsx and can be recalled in it. (not suggested btw)
```jsx
const newFunc = function () {
	return (
		<>
		<h1>new function here.</h1>
		</>
	)
}
```
& in render >>> < newFunc/ >

- We can also store value of constants in any components(app.jsx,shivam.jsx) and store value string number or anything else.
And recall in the return tag in {} (mind: only constants can be called, not statements)

## Day4
### basics/hooks

- the UI changing is taken care by React.
-to define a variable, whose value is to be updated in the UI, then we define it by:
```jsx
import {useState} from "react";		//(hooks)
let [counter, setCounter] = useState(15);
```
- when we are to change the value, we do:
```javascript
setCounter(counter+1)		// or.	
setCounter(counter-1)		// or.		
setCounter(counter="Invalid")	
```	

## Day5
### React Fibres(Virt DOM)
- take a look: https://github.com/acdlite/react-fiber-architecture
~important points~
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. (React's fastness and non reloading of th website=+++)
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
- Other key features include the ability to pause, abort, or reuse work as new updates come in;
the ability to assign priority to different types of updates; and new concurrency primitives.
- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
- The `key points` are:
		- In a UI, it's not necessary for every update to be applied immediately;
		in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
		- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, 
		an update from a data store.
		- A push-based approach requires the app (you, the programmer) to decide how to schedule work.
		A pull-based approach allows the framework (React) to be smart and make those decisions for you.
~

## Day6
### Tailwind and props

- Tailwind installation in a React Application
	- visit: https://tailwindcss.com/docs/guides/vite
	- or -->>>
```
npm create vite@latest my-project -- --template react
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- ++ changes in tailwind.config.js + index.css

- more components are here: https://www.devui.io/components
- And, Tailblocks: https://tailblocks.cc/

[props]
in card.jsx
```jsx
function Card({aboutWho}) {
	<p>My name is {aboutWho}</p>
	... }
```
then in App.jsx we can,
```jsx
<Card aboutWho="Shivam Verma" />
```
- props are used in components, for changing any name, link , photo, etc. in a component,
(could be for displaying card or showing photo, etc.)

## Day7
### [interview questions]
-  if userState counter(=15), setCounter exists, then if:
code;
```jsx
const btnAddVal = () => {
	single batch considered~ {{{ setCounter(counter+1)	// only 16 will be printed
	setCounter(counter+1)	// only 16 will be printed
	setCounter(counter+1)	// only 16 will be printed
	setCounter(counter+1) }}}	// only 16 will be printed, because Fibre words/updates website in patches
}
```
- so to do so,do:
code;
```js
const btnAddVal = () => {
	setCounter((prevCounter) => prevCounter + 1)	// 16 will be printed
	setCounter((prevCounter) => prevCounter + 1)	// 17 will be printed
	setCounter((prevCounter) => prevCounter + 1)	// 18 will be printed
	setCounter((prevCounter) => prevCounter + 1)	// 19 will be printed (final updation)
}
```
->> this is a callback present in the setCounter <<-
- refer: https://medium.com/@mayank___17/react-hooks-is-setcounter-counter-1-the-correct-syntax-600a574c0ad3

## Day8
- in jsx file, syntac for changing bgc of element will be like this:
```jsx
<div
className="ouliine none px-3 py-2 inset-x-0 bg-white text-black ..."
style={{backgroundColor: "red"}}> </div>
```

- `onClick` only takes function inside it.

## Day9
### hooks - [`useEffect`, `useRef`, `useCallback`]
- `useCallback` - lets you put a fucntion in cache, enhances Optimization and memoization.
- `useEffect` - fixes multiple re renders that react does not allow.
```javascript
useEffect(() => {
	passwordGenerator();
}, [length, numAllowed, charAllowed, passwordGenerator]);
```
- `useEffect` calls for the  first-est time.

- `useRef` - Does Not Cause Re-renders
	If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
	To avoid this, we can use the `useRef` Hook.
- `useRef` can track renders count in a react project;
```javascript
const renderCount = useRef(0)
	useEffect(() => {
		renderCount.current += 1
	}, [length, numAllowed, charAllowed, passwordGenerator]);
```
- pass useRefin any input (atrr>>> ref={passwordRef})
- in js, we can update Document title by;
```javascript
document.title = renderCount.current
document.title = "Login Page"
```

[Copy to Clipboard]
-`window obj.` works in react, not in NextJs(server side rendering).
- How to copy to clipboard;
```javascript
const copyToClipboard = useCallback(() => {
	passwordRef.current.select()
	window.navigator.clipboard.writeText(password);
}, [password]);
```
- use>>> `passwordRef.current.select();`
	to select a useRef entity.
-use>>> `passwordRef.current?.setSelectionRange(0, 5);`
	to select from Fixed range.

## Day10
{custom hooks, Currency Converter}
- custom hooks, or simply hooks starts with "use" like `useState`, `useEffect`, `useShivamMessage`.
- [new hook- useId()]
	```const id = useId()```
	- generates unique IDs that can be passed to accessibility attributes.
- Read more docs here at: 
	- https://legacy.reactjs.org/docs/hooks-custom.html
	- https://www.freecodecamp.org/news/how-to-create-react-hooks/

## Day11
[React Router]
- https://reactrouter.com/en/main/start/tutorial
- To Install: npm install react-router-dom
- {Interview} "a" is NOT used in React, because it refreshes the Whole page. Instead use "Link"
- To make a Header NavLink of fixed color after visiting, use {isActive} ;
```jsx
<li>
	<NavLink
		to="/"
		className={({ isActive }) =>
		`block py-2 pr-4 pl-3 duration-200 ${
			isActive ? "text-orange-700" : "text-gray-700"
		} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
		}>
		Home
	</NavLink>
</li>
```
- Router is used in main.jsx
- you need to create a `Layout.jsx` like this;
```jsx
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
return (
	<>
	<Header />
	<Outlet />
	<Footer />
	</>
);
}
```

- <Outlet/> is where your other code will lie.
- Look up docs in React Router dom:
## Day12
### [Loader in React-router-dom]
- learn Loader in Router (in react router dom)
```jsx
<Route 
	loader={GithubInfoLoader}
	path="github" 
	element={<Github />}/>
```

- To optimise(optimization) and fast load up an API, then Look at ending of `<Github/>` or `Github.jsx` file:
```js
export const GithubInfoLoader = async () => {
const response = await fetch("https://api.github.com/users/shivamm-verma");
return response.json();
};
```
Then, use hook: 
```jsx
import { useLoaderData } from "react-router-dom";
```

## Day13
### [Context API/ useContext]

- UserContext is like a "Global Variable/Provider"
- use 10ThemeChanger and 09miniContext projects to revise `useContext` and create contexts.
- also we can create a hook using `useContext` to not import everything everywhere.

## Day14
### [Context & Local Storage]
### Todo App

- Context again repeated today.
- Local Storage is little hard.
- 
