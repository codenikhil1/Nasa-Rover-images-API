var nasaImages = $("#nasa-images");

$('form button').click(function(e){
	e.preventDefault();

	var date = $('#datepicker').val();

	let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date+"&api_key=DEMO_KEY";
	console.log(url);
	$.get(url,function(data){
		var photos = data.photos;
		if(photos.length === 0){
				alert('No photo Available');
				return;
		}
		$('#nasa-images img').remove();

		for(let photo of photos){
			 nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
		}
	})

})