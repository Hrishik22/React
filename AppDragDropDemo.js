import React, { Component } from 'react';
import './App.css';

class AppDragDropDemo extends Component{
	state = {
		tasks: [
			{name:"Learn Angular", category:"wip", bgcolor:"yellow"},
			{name:"Learn React", category:"wip", bgcolor:"red"},
			{name:"Learn Vue", category:"completed", bgcolor:"green"}
		]
	}

	onDragStart = (ev, id) => {
		console.log('drastart:', id);
		ev.dataTransfer.setData('id', id);
	}
	onDrageOver = (ev) =>{
		ev.preventDefault();
	}
	onDrop = (ev, cat) =>{
		let id = ev.dataTransfer.getData("id");
		let tasks = this.state.tasks.filter((tasks) => {
			if(tasks.name === id){
				tasks.category = cat;
			}
			return tasks;
		});
		this.setState({
			...this.state,
			tasks
		});

	}
	render(){
		var tasks ={
			wip: [],
			completed: []
		}
		this.state.tasks.forEach((t) => {
			tasks[t.category].push(
					<div key={t.name}
						onDragStart = {(e) => this.onDragStart(e, t.name)}
						draggable
						className="draggable"
						style={{backgroundColor: t.bgcolor}}
					>
					{t.name}
					</div>
				);
		});

		return(
				<div className="container">
					<h2>Drag Drop Demo</h2>
					<div className="row">
						<div className="col-md-6 wip">
							{tasks.wip}
						</div>
						<div className="col-md-6 droppable"
							onDrageOver = {(e) => this.onDrageOver(e)}
							onDrop = {(e) => this.onDrop(e, 'completed')}
						>
							{tasks.completed}
						</div>
					</div>
				</div>
			);
	}

}

export default AppDragDropDemo;