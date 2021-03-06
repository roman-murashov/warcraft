var Tile = global.Load('./map/tile');

function ManagerTiles () {
	this.layerOne = [];
	this.layerTwo = [];
	this.collision = [];

	this.lengthX = 960 / 32;
	this.lengthY = 608 / 32;

	for (var i = 0; i < this.lengthX; i++) {
		for (var j = 0; j < this.lengthY; j++) {
			this.layerOne.push(new Tile(i, j, 0, 14));
		};
	};

	for (var i = 0; i < 8; i++) {
		this.layerTwo.push(new Tile(5, i, 2, 1));
	};

	for (var i = 0; i < 12; i++) {
		this.layerTwo.push(new Tile(8, i + 7, 2, 1));
	};

	for (var i = 0; i < 10; i++) {
		this.layerTwo.push(new Tile(12, i, 2, 1));
	};
}

ManagerTiles.prototype.loadContent = function(Image) {
	var texture = new Image();

	//texture.src = './images/miscs/' + (map == 1 ? 'Summer' : map == 2 ? 'Wasteland' : 'Winter') + ' Tiles.png';
	texture.src = './images/miscs/Summer Tiles.png';

	this.layerOne.forEach(function (item) {
		item.loadContent(texture);
	});
	this.layerTwo.forEach(function (item) {
		item.loadContent(texture);
	});
};

ManagerTiles.prototype.draw = function() {
	this.layerOne.forEach(function (item) {
		item.draw();
	});
	this.layerTwo.forEach(function (item) {
		item.draw();
	});
};

module.exports = ManagerTiles;