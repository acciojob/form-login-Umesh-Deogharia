function getFormvalue() {
	event.preventDefault();
    //Write your code here
	let fname = document.getElementById('fname');
	let lname = document.getElementById('lname');

	alert(`${fname.value} ${lname.value}`);
}
