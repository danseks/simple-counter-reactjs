import React from "react";
export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			count1: 0,
			count2: 0,
			count3: 0,
			count4: 0,
			count5: 0
		};
		this.timerID = setInterval(() => this.timeCounter(), 1000);
	}

	componentDidUpdate() {
		if (this.state.count == 10) {
			this.setState({ count: 0 });
			this.setState({ count1: this.state.count1 + 1 });
		}

		if (this.state.count1 == 10) {
			this.setState({ count1: 0 });
			this.setState({ count2: this.state.count2 + 1 });
		}

		if (this.state.count2 == 10) {
			this.setState({ count2: 0 });
			this.setState({ count3: this.state.count3 + 1 });
		}

		if (this.state.count3 == 10) {
			this.setState({ count3: 0 });
			this.setState({ count4: this.state.count4 + 1 });
		}
		if (this.state.count4 == 10) {
			this.setState({ count4: 0 });
			this.setState({ count5: this.state.count5 + 1 });
		}
		if (this.state.count5 == 10) {
			this.setState({ count5: 0 });
			//this.setState({ count: this.state.count + 1 });
		}
	}

	timeCounter = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div className="bigCounter">
				<div className="calendar">
					<i className="far fa-clock" />
				</div>
				<div className="four">{this.state.count5}</div>
				<div className="four">{this.state.count4}</div>
				<div className="four">{this.state.count3}</div>
				<div className="three">{this.state.count2}</div>
				<div className="two">{this.state.count1}</div>
				<div className="one">{this.state.count}</div>
			</div>
		);
	}
}
