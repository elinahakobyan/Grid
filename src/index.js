import * as PIXI from 'pixi.js';


export class Game extends PIXI.Application {
	constructor() {
		super({
			width: window.innerWidth,
			height: window.innerHeight,
		})



		document.body.appendChild(this.view);
		this.loadAssets()

	}

	loadAssets() {
		this.loader.add("nkar", '/assets/logo.png')
		this.loader.load(() => {
			this.setRisezeListener();
			this.createElement()
		})
	};

	createElement() {

		let w = window.innerWidth;
		let h = window.innerHeight;
		for (let i = 1; i <= 3; i++) {
			for (let j = 1; j <= 3; j++) {
				this.nkar = PIXI.Sprite.from('nkar')
				if (w < 3 * this.nkar.width || h < 3 * this.nkar.height) {
					if (w > h) {
						this.nkar.scale.set(h / (3 * this.nkar.height))
					} else {
						this.nkar.scale.set(w / (3 * this.nkar.width))
					}
				}
				this.nkar.anchor.set(0.5)
				this.nkar.x = i * Math.floor(w / 3) - Math.floor(w / 6)
				this.nkar.y = j * Math.floor(h / 3) - Math.floor(h / 6)
				this.stage.addChild((this.nkar))
			}

		}

	}
	setRisezeListener() {

		window.addEventListener("resize", () => {

		});


	}

}
new Game();