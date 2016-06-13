
function currentClock() {
	var todayDate = new Date ();

	var hour = todayDate.getHours();
	var minute = todayDate.getMinutes();
	var second = todayDate.getSeconds();

	hour = (hour == 0) ? 12 : hour;
    hour = (hour > 12) ? hour - 12 : hour;

	hour = zeroAdd(hour);
	minute = zeroAdd(minute);
	second = zeroAdd(second);

	document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}

setInterval(currentClock,1000);

function zeroAdd(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}