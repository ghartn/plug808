import React, { Component } from "react";
import { Sampler, Distortion } from "tone";
import plug808 from "../samples/plug808.mp3";

const C3 = 130.81;
const MAX_FREQ = 523.35;

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoaded: false };

		this.sampler = new Sampler(
			{ C3: plug808 },
			{
				onload: () => {
					this.setState({ isLoaded: true });
				}
			}
		).toMaster();

		this.distortion = new Distortion(0).toMaster();
	}

	_plug808 = e => {
		if (!this.sampler || !this.state.isLoaded) {
			return;
		}
		this.sampler.releaseAll();
		let { innerHeight, innerWidth } = window;
		let { offsetX, offsetY } = e.nativeEvent;
		console.log(`window: ${innerWidth} x ${innerHeight}`);
		console.log(`click: ${offsetX} x ${offsetY}`);
		let heightPercent = 1.0 - offsetY / innerHeight;
		let widthPercent = offsetX / innerWidth;
		let frequency = heightPercent * (MAX_FREQ - C3) + C3;
		if (this.distortion) {
			this.distortion.distortion = widthPercent;
			this.sampler.connect(this.distortion);
		}
		this.sampler.triggerAttack(frequency);
	};

	render() {
		return (
			<div
				className="flex flex-1 min-h-full w-full justify-center items-center"
				onClick={this._plug808}
			>
				<h1 className="pointer-events-none font-bold text-2xl">plug808.mp3</h1>
			</div>
		);
	}
}
