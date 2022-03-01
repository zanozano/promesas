//DESAFIO PROMESAS
const getDataAlbum = async (id) => {
	const url = 'https://jsonplaceholder.typicode.com/photos';
	const response = await fetch(url);
	try {
		//VERIFICAR SI LA API ESTA FUNCIONANDO
		if (response.status == 200) {
			const datos = await response.json();
			//FILTRADO 20 PRIMEROS TITULOS
			const titleAlbum = datos.filter((data) => data.albumId == id);
			return titleAlbum;
		} else {
			console.log(`Se ha producido un error al cargar la API. ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};
//MENSAJE PROMESA
const getPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('La información enviada correctamente.');
	}, 3000);
});
//ASINCRONO DE PROMESA Y RESULTADO API
const getTittle = async (id) => {
	const getResultApi = await getDataAlbum(id); //RESULTADO API
	console.log(`Titulo de albumes`);
	if (true) {
		getResultApi.slice(0, 20).forEach((element) => {
			console.log(`${element.id} - ${element.title}`);
			let node = document.createElement('li'); //SE CREA LI
			node.setAttribute('class', 'mb-2 mt-4'); //CLASS AL NODO
			let textnode = document.createTextNode(`${element.id} - ${element.title}`); //SE CREA EL TEXTO DENTRO
			node.appendChild(textnode); //SE AGREGA EL TEXTO A CADA NODO
			document.getElementById('list').appendChild(node); //SE PINTA ESE NODO DENTRO DE HTML
			let photo = document.createElement('img'); //SE CREA EL TAG IMG
			photo.setAttribute('src', `${element.thumbnailUrl}`); // SE ASIGNA LA URL A CADA IMG
			document.getElementById('list').appendChild(photo); // SE PINTA LA IMG EN EL HTML
		});
	}
	const resultPromise = await getPromesa; //PROMESA
	console.log(resultPromise); //MENSAJE ENVIADO
};
//LLAMAR A ALBUMNES
getTittle(1);
