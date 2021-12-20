window.addEventListener('DOMContentLoaded', function () {
	// get the form elements defined in your form HTML above
	let form = document.getElementById('form');
	let status = document.getElementById('status');

	// Success and Error functions for after the form is submitted
	function success() {
		form.reset();
		status.classList.add('success');
		status.innerHTML = 'Success!';
	}

	function error() {
		status.classList.add('error');
		status.innerHTML = 'Oops! Something went wrong.';
	}

	// handle the form submission event
	async function handleSubmit(event) {
		event.preventDefault();
		let data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => {
				success();
			})
			.catch((error) => {
				error();
				console.log(error);
			});
	}
	form.addEventListener('submit', handleSubmit);
});
