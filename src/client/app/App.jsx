import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BookList from "./components/BookList.jsx";
import AddBooksISBN from "./components/AddBooksISBN.jsx";

 class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			books: []
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:9000/books`)
			.then(res => this.setState({ books: res.data }))
			.catch(err => console.log(err))
			
	}
	render() {
		return (
			<AddBooksISBN />
			<Switch>
				<div>
					<Route exact path='/' component={BookList}/>
					<Route path='/book' component={Book}/>
				</div>
			</Switch>

		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('react')
)
