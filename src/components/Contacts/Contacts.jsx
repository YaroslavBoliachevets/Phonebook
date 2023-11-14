import React, {Component} from "react";

class Contacts extends Component {

	render() {

		return (
			<>
			<ul>
				{this.props.contacts.map(({id, name, number})  => (
					<li key={id}>
						<p>{name}</p>
						<p>{number}</p>
						<button type="button" onClick={()=> {this.props.onClick(id)}}>удалить</button>
					</li>
				))}
			</ul>
			</>
		)
	}
};

export default Contacts;