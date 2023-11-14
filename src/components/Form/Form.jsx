import React, {Component} from "react";
import { nanoid } from 'nanoid';

class Form extends Component {

	state = {
		name:'',
		number:'',
	}

	handleName = (e) => {
		const {name, value} =e.currentTarget;
		this.setState({[name]:value});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {name, number} = this.state;
		const id = nanoid();
		const newContact = {name, number, id};

		this.props.addNewContact(newContact);
		this.reset();
	}

	reset = () => {
		this.setState({
			name:'',
			number:'',
		})
	}


	render() {
		return (
			<>
			<form action="" onSubmit={this.onSubmit}>
				<label htmlFor=""> имя
					<input type="text" value={this.state.name} name="name" onChange={this.handleName}/>
				</label>
				<label htmlFor=""> номер
					<input type="tel" value={this.state.number} name="number" onChange={this.handleName}/>
				</label>
				<button type="submit">Добавить</button>
			</form>
			</>
		)
	}
};

export default Form;