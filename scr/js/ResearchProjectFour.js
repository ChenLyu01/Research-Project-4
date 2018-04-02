
		var config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			backgroundColor: '#2d2d2d',
		
			scene: {
				preload: preload,
				create: create
			}
		};

		var game = new Phaser.Game(config);


		function preload ()
		{
			//this.load.setBaseURL('http://localhost/');
			this.load.setBaseURL('http://www.06-90.com/projects/p4/');
			this.load.image('bg', 'image/BG.png');
			this.load.image('actor', 'image/actor3.png');
			this.load.image('honeycomb3mini', 'image/honeycomb3mini.png');
			this.load.image('honeycomb1', 'image/honeycomb1.png');
			this.load.image('honeycomb2', 'image/honeycomb2.png');
		}

		function create ()
		{
			
			var group = this.add.group();
			group.classType = Phaser.GameObjects.Text;
			this.add.image(340, 300, 'bg');		
			
			var line1 = new Phaser.Geom.Line(100, 200, 100 + 4 * 162, 200);
			var group1 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group1.getChildren(), line1);
			
			var line2 = new Phaser.Geom.Line(100 + 81, 200+46, 100 + 81 +3* 162, 200+46);
			var group2 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group2.getChildren(), line2);			

			var line3 = new Phaser.Geom.Line(100, 200+1 * 93, 100 + 4 * 162, 200+1 * 93);
			var group3 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group3.getChildren(), line3);
			
			var line4 = new Phaser.Geom.Line(100 + 81 , 200+ 46+1 * 93, 100 + 81 +3* 162 , 200+ 46+1 * 93);
			var group4 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group4.getChildren(), line4);	
			
			var line5 = new Phaser.Geom.Line(100, 200+2 * 93, 100 + 4 * 162, 200+2 * 93);
			var group5 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group5.getChildren(), line5);	
			

			var source = this.textures.get('actor').source[0].image;
				var canvas = this.textures.createCanvas('pad', 48, 42).source[0].image;
				var ctx = canvas.getContext('2d');

				ctx.drawImage(source, 0, 0);

				var imageData = ctx.getImageData(0, 0, 48, 42);

				var x = 0;
				var y = 0;
				var color = new Phaser.Display.Color();

				for (var i = 0; i < imageData.data.length; i += 4)
				{
					var r = imageData.data[i];
					var g = imageData.data[i + 1];
					var b = imageData.data[i + 2];
					var a = imageData.data[i + 3];

					if (a > 0)
					{
						// var startX = 1024/2;
						// var startY = 800;

						var startX = Phaser.Math.Between(0, 1024);
						var startY = Phaser.Math.Between(0, 768);

						var dx = 210 + x * 3;
						var dy = 244 + y * 3;

						var image = this.add.image(startX, startY, 'honeycomb3mini').setScale(0);

						color.setTo(r, g, b, a);

						image.setTint(color.color);

						this.tweens.add({

							targets: image,
							duration: 2000,
							x: dx,
							y: dy,
							scaleX: 1,
							scaleY: 1,
							angle: 360,
							delay: i / 1.5,
							yoyo: true,
							repeat: -1,
							repeatDelay: 6000,
							hold: 6000

						});
					}

					x++;

					if (x === 48)
					{
						x = 0;
						y++;
					}
				}
				
		}




