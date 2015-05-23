function addEvent(obj, evt, fn, capture) {
	evt = evt.replace('on', '');
	if( obj.attachEvent )
		obj.attachEvent('on' + evt, fn);
	else {
		if( !capture ) capture = false;
		obj.addEventListener(evt, fn, capture);
	}
}

function moveDiv(obj, distance, speed) {
	if( !distance ) distance = 250;
	if( !speed ) speed = 500; // In Milliseconds
	
	if( !obj.style.marginLeft )
		obj.style.marginLeft = 0 + 'px';
		
	var timer = null,
		startTime = (new Date).getTime(),
		elapsed = null,
		d = null,
		dir = 'right',
		current_distance = obj.style.marginLeft.replace('px', '');
		
	if( distance <  current_distance)
		dir = 'left';
	
	timer = setInterval(function() {
		elapsed = (new Date).getTime() - startTime;
		
		if( elapsed < speed ) { // Do the animation
			if( dir == 'right' ) {
				d = elapsed / speed * distance;
				obj.style.marginLeft = d + 'px';
			}else {
				d = elapsed / speed * distance;
				d = current_distance - d;
				obj.style.marginLeft = d + 'px';
			}
			
		}else { // Stop the animation
			clearInterval(timer);
			obj.style.marginLeft = distance + 'px';
			
		}
	}, 5);
}