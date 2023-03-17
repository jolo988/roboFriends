import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// react.component used to change one section of app w/out needing to update everything
// changing individual pieces
// app.js 'smart component' bc of state

export class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
// super() used to call react.component class
// app component has 2 states (robots, searchfield)
// app owns the state: any component that has state
// -> uses class syntax this.xyz
// constructor creates this.state 
// Once changed -> pass down as props(properties)
// -> to components and render info
// ex. pass onsearchchange to searchbox to render
// when change in searchbox -> lets app know ->
// runs onsearchchange funct w/ event (the search event results)
// -> updates STATE searchfield
// info from searchbox -> communicate to cardlist
// -> filters robot state -> runs filteredrobots

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users }))
	}
	// fetch: makes request to server api or whichever site
	// fetch from api -> response via json -> update users w/ set state
	// -> receive user/robot info


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}
	// Need =(event)=> bc created a custom function
	// don't use this.state.searchfield = xyz to set state
	// event.target.value - gives value of search chain

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className= 'tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}
// render() triggered by change of state in component of app
// state change occurs -> Invoke components 
// (collecting from the root of app all the components that requested a re-render)

// if taking a while to load (robots = 0) -> 'loading'
export default App;


// to use states - must create classes
// must always have render()
// robots from robots.js is now passed as prop here; 
// App (state) allowed to change robots

// onsearchchange = function created to listen to event from searchbox


