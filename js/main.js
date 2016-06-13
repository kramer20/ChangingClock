function (currentClock) {
	var todayDate = new Date ();

	var hour = todayDate.getHours();
	var minute = todayDate.getMinutes();
	var second = todayDate.getSeconds();

	hour = zeroAdd(hour);
	minute = zeroAdd(minute);
	second = zeroAdd(second);

	document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second + ":";

	var time = setTimeout(function(){ startTime () }, 1000);
}

function zeroAdd(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}