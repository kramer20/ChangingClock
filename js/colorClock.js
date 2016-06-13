
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

	color = "#"+hour+minute+second;

	document.body.style.backgroundColor = color;
	
	document.getElementById("colorClock").innerHTML = color;
}

    setInterval(currentClock,1000);

function zeroAdd(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}