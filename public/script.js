$(function(){
	
	var peerReviewCanvas = $('#peer-review')[0];
	var peerReviewCtx = peerReviewCanvas.getContext('2d');
	var colors = [
		'yellow',
		'purple',
		'silver',
		'green',
		'red',
		'blue',
		'orange',
		'fuschia',
		'cyan'
	]
	
	// Draw peer review chart
	peerReviewCtx.fillText("Peer Review", 90, 10);
	for(var i = 0; i < 11; i++) {
		peerReviewCtx.fillText(10 - i, 10, 30 + i * 20);
		peerReviewCtx.moveTo(25, 30 + i * 20);
		peerReviewCtx.lineTo(200, 30 + i * 20);
	}
	peerReviewCtx.stroke();
	
	// Draw peer review bars
	$.ajax({
		url: '/peerReview.json',
		dataType: 'json',
		success: function(data) {
			var categories = Object.keys(data);
			categories.forEach(function(category, index){
				var value = data[category];
				console.log(value);
				var x = 30 + index * 10;
				var y = 30 + (10-value) * 20;
				var height = value * 20;
				
				peerReviewCtx.fillStyle = colors[index];
				peerReviewCtx.fillRect(x, y, 5, height);
				peerReviewCtx.fillRect(100, 80 + 20 * index, 10, 10);
				peerReviewCtx.strokeText(category, 120, 90 + 20 * index);
				
			});
			
			/*// Draw Labels
			categories.forEach(function(category, index){
				peerReviewCtx.fillText(category, 100, 30 + 20 * index);
			});*/
		}
	});
	
	// Draw the point distrubtion graph
	
	$.ajax({
		url: '/pointDistribution.json':
		success: function(data) {
			var people = Object.keys(data);
			var total = Object.values(data).reduce(functions(acc, value){
				return acc + vale;
			}, 0);
			people.forEach(function(person) {
				var percent = data[person] / total;
			});
		}
	});
	
});