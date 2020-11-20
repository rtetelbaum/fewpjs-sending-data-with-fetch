function submitData(name, email) {
	const userData = {
		name: name,
		email: email
	}

	const body = document.querySelector("body")

	return fetch(`http://localhost:3000/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(userData),
		})
		.then(response => response.json())
		.then(userData => {
			console.log(userData)
			const userId = userData.id
			body.append(userId)
		})
		.catch(error => {
			body.append(error.message)
		})
}

submitData("roman", "roman@roman.com")