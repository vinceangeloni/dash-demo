// Initial initialization and event listeners


$(document).ready(function() {
	$("#columnA").sortable({ opacity: 0.6, connectWith: '#columnB', forcePlaceholderSize: true });
	$("#columnB").sortable({ opacity: 0.6, connectWith: '#columnA', forcePlaceholderSize: true });
	$(".boxSmall, .boxLarge").hover(function() {
		$(this).prepend('<span class="closeButton"></span>');
		$(".closeButton").click(function() {
			$(this).parent().remove(); 
		});
	},
	function() {
		$(".closeButton").remove();
	});
	
});