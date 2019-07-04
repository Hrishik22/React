import React, { Component } from 'react';

class Appapi extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componantDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoaded: true,
					items: data,
				})
			});
	}
	render(){
		var {isLoaded, items} = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>
		}
		else{

			return(
					<div>
						
						<ul>
							{items.map(item => (

							<li key={item.id}>
								{item.name}
							</li>	

							))}
						</ul>

					</div>
			);
		}
			
			
	}

}

export default Appapi;