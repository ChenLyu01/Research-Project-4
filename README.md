[Research Project Four Demo](http://www.06-90.com/projects/p4/index.html). 



## Welcome to my Research Project Four

Here, I have to say that the game engine which I used is Phaser and its URL is [Phaser](http://phaser.io/). The link of my previous project is [Research Project Three](https://github.com/ChenLyu01/Research-Project-3).

This is also a technical research for [Navigable Video](http://www.06-90.com/final/finalprojectChenLyu.html). In this project, I want to increase some special effects to the Navigable Video. 

### Required technology

In the picture below.

![Image text](https://github.com/ChenLyu01/Research-Project-4/blob/master/image/image1.png) 

I spent a lot of time studying this program. To be honest, I still don't fully understand it. Because I think this effect is the coolest of all the Phaser examples. I want to learn and study with you.





- Code without the game engine
Just using the traditional HTML5 language to write such particle effect, for me, I can't make it. It beyond my abilities! But I really like this pixel style animation.  






- Code after using the Phaser

```
var canvas = this.textures.createCanvas('pad', 48, 42).source[0].image;
var ctx = canvas.getContext('2d');
ctx.drawImage(source, 0, 0);
```
These three sentences, it means that an object canvas is created an instantiated the canvas. After that, we can use ctx's events to draw graphics. **ctx.drawImage(source, 0, 0)** It means to draw "source[0].image" on X = 0 and Y = 0 coordinate axis.  


```
var imageData = ctx.getImageData(0, 0, 48, 42);

```
The meaning of this is to say that **getImageData** This event can get data from one block of this picture. 

```
var i = 0; i < imageData.data.length; i += 4
```
This is very obvious. The program is decomposing the image data into data blocks with multiples of 4. 


![Image text](https://github.com/ChenLyu01/Research-Project-4/blob/master/image/image2)
The picture looks really cool. But don't forget to see these few lines at the bottom
```

x++;

if (x === 48)
{
	x = 0;
	y++;
}

```
This line of code indicates that the program is scanning the picture horizontally. After it read 48 pixels in the direction of the X axis it moves the Y axis.



### Source code description

```
var r = imageData.data[i];
var g = imageData.data[i + 1];
var b = imageData.data[i + 2];
var a = imageData.data[i + 3];	
```
These codes means getting the data frome each pixel, they are red green and blue. The last one is the Alpha transparent channel.  


```
var str = Phaser.Math.RND.pick(dialogue) 
```
Here is a random value from a one-dimensional array. **In real games, these data are not randomly selected. **Only in this way can we see this video from different perspectives. Here, I will provide another picture to illustrate this point.


```
var startX = Phaser.Math.Between(0, 1024);
var startY = Phaser.Math.Between(0, 768);

var dx = 210 + x * 3;
var dy = 244 + y * 3;
```

The above codes meanning get random values in a certain interval.


![Image text](https://github.com/ChenLyu01/Research-Project-4/blob/master/image/image2)

A lot of mosaic flew out


```
var image = this.add.image(startX, startY, 'honeycomb3mini').setScale(0);

color.setTo(r, g, b, a);

image.setTint(color.color);
```
This line of code is a little simple. They're going to color the mosaic. It can be seen that the effect of Htlm5 is pretty good.


```
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

```
This code is interesting, but I still don't quite understand how can the pixel point picture   ‘fly’。 


### Reference
[The official example 1](https://labs.phaser.io/edit.html?src=src\actions\place%20on%20a%20circle%20multi.js) 

[The official example 2](https://labs.phaser.io/edit.html?src=src\actions\place%20on%20a%20circle%20multi.js) 
