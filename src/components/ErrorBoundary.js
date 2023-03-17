import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}
	// if this gets triggered -> will render <h1>

	render() {
		if (this.state.hasError) {
			return <h1>Oooopps. That's not good</h1>
		}
		return this.props.children
	}
	// if error -> show h1 tag msg
	// if no error -> render the child (like cardless)


}



export default ErrorBoundary


// this is the error handling message/page the user will see 
// will wrap the component (like cardless) with error boundary component 
// -> If component(like cardless) fails -> will be caught by errorboundary class

