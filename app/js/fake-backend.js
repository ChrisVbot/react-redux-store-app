import faker from 'faker';

const generateProducts = () => {
	let products = [];
		for (let i=1; i<26;i+=1) {
		let product = {
			productName: faker.commerce.productName(),
			color: faker.commerce.color(),
			price: faker.commerce.price(),
			productAdjective: faker.commerce.productAdjective(),
			productMaterial: faker.commerce.productMaterial(),
			id: i,
			text: faker.lorem.paragraphs(),
			image: faker.random.image()
		}
		products.push(product);
	}
	return products;
}


const fakeDatabase = {
	names: [
		{
		  "id": 1,
		  "first_name": "Nicholas",
		  "last_name": "Parker",
		  "email": "nparker0@baidu.com",
		  "gender": "Male",
		  "city": "‘Abasān al Kabīrah",
		  "catch_phrase": "Multi-channelled needs-based alliance"
		}, {
		  "id": 2,
		  "first_name": "Carol",
		  "last_name": "Cole",
		  "email": "ccole1@utexas.edu",
		  "gender": "Female",
		  "city": "Paloh",
		  "catch_phrase": "Seamless dedicated attitude"
		}, {
		  "id": 3,
		  "first_name": "Jean",
		  "last_name": "Lewis",
		  "email": "jlewis2@liveinternet.ru",
		  "gender": "Female",
		  "city": "Paris 12",
		  "catch_phrase": "Cross-platform systemic artificial intelligence"
		}, {
		  "id": 4,
		  "first_name": "Bobby",
		  "last_name": "Griffin",
		  "email": "bgriffin3@i2i.jp",
		  "gender": "Male",
		  "city": "Pakemitan Dua",
		  "catch_phrase": "Open-architected 3rd generation productivity"
		}, {
		  "id": 5,
		  "first_name": "Roy",
		  "last_name": "Fisher",
		  "email": "rfisher4@loc.gov",
		  "gender": "Male",
		  "city": "Mirandela",
		  "catch_phrase": "Future-proofed 5th generation knowledge base"
		}, {
		  "id": 6,
		  "first_name": "Margaret",
		  "last_name": "Jones",
		  "email": "mjones5@businesswire.com",
		  "gender": "Female",
		  "city": "Ban Na Muang",
		  "catch_phrase": "Quality-focused foreground alliance"
		}, {
		  "id": 7,
		  "first_name": "Jessica",
		  "last_name": "Howell",
		  "email": "jhowell6@alexa.com",
		  "gender": "Female",
		  "city": "Maracanaú",
		  "catch_phrase": "Proactive client-driven open architecture"
		}, {
		  "id": 8,
		  "first_name": "Debra",
		  "last_name": "Chavez",
		  "email": "dchavez7@ihg.com",
		  "gender": "Female",
		  "city": "Tall Ḩamīs",
		  "catch_phrase": "Mandatory 24/7 flexibility"
		}, {
		  "id": 9,
		  "first_name": "Irene",
		  "last_name": "Black",
		  "email": "iblack8@artisteer.com",
		  "gender": "Female",
		  "city": "Jixian",
		  "catch_phrase": "Focused impactful model"
		}, {
		  "id": 10,
		  "first_name": "Frances",
		  "last_name": "Davis",
		  "email": "fdavis9@omniture.com",
		  "gender": "Female",
		  "city": "Verrettes",
		  "catch_phrase": "Extended interactive emulation"
		}
	],
	products: generateProducts(),
	reviews: [
		{
			productID: 1,
			reviews: [
				{
					id: 1,
					reviewer: 'Bob',
					text: 'Good product! I use it every day'
				},
				{
					id: 2,
					reviewer: 'Jane',
					text: 'It\'s ok'
				}
			]
		}, {
			productID: 2,
			reviews: [
				{
					id: 1, 
					reviewer: 'Billy',
					text: 'Great stuff :D'
				},
				{
					id: 2,
					reviewer: 'Jill',
					text: 'I love it!!!'
				}
			]
		},
		{
			productID: 3,
			reviews: []
		}, {
			productID: 4,
			reviews: []
		}, {
			productID: 5,
			reviews: []
		}, {
			productID: 6,
			reviews: []
		}, {
			productID: 7,
			reviews: []
		}, {
			productID: 8,
			reviews: []
		}, {
			productID: 9,
			reviews: []
		}, {
			productID: 10,
			reviews: []
		}, {
			productID: 11,
			reviews: []
		}, {
			productID: 12,
			reviews: []
		}, {
			productID: 13,
			reviews: []
		}, {
			productID: 14,
			reviews: []
		}, {
			productID: 15,
			reviews: []
		}, {
			productID: 16,
			reviews: []
		}, {
			productID: 17,
			reviews: []
		}, {
			productID: 18,
			reviews: []
		}, {
			productID: 19,
			reviews: []
		}, {
			productID: 20,
			reviews: []
		}, {
			productID: 21,
			reviews: []
		}, {
			productID: 22,
			reviews: []
		}, {
			productID: 23,
			reviews: []
		}, {
			productID: 24,
			reviews: []
		}, {
			productID: 25,
			reviews: []
		},
	]
}


const delay = (ms) => 
	new Promise(resolve => setTimeout(resolve, ms));

export const fetchNames = (request) => 
	delay(1000).then(() => {
		if (Math.random() > 0.8) {
			throw new Error('Something went wrong :(')	
		}
		switch(request.method) {
			case 'GET':
				return fakeDatabase.names;
			case 'FIND':
				return fakeDatabase.names.find((name) => 
					name.id === request.id
				)
			default: 
				return 'Request denied!';
		}
	});

export const addAnotherName = (name) => 
	delay(500).then(() => {
		const newID = fakeDatabase.names.length + 1;
		name["id"] = newID;
		fakeDatabase.names.push(name);
		return name;
	});

export const fetchProducts = (request) => 
	delay(500).then(() => {
		if (Math.random() > 0.8) {
			throw new Error('Server is mad at us')
		}
		switch(request.method) {
			case 'GET':
				return fakeDatabase.products;
			case 'FIND':
				return fakeDatabase.products.find((product) => 
					product.id === request.id
				)
			default: 
				return 'Request denied!';
		}
	});

export const fetchProductReviews = (id) => 
	delay(500).then(() => {
		const prod = fakeDatabase.reviews.find((review) => 
			review.productID === id)
		if (prod) {
			return prod.reviews;
		} else {
			return null;
		}
	})

export const addReview = (productId, review) =>
	delay(300).then(() => {
		const product = fakeDatabase.reviews.find((rev) =>
			rev.productID === productId
		)
		review['id'] = product.reviews.length + 1;
		product.reviews.push(review);
		return product.reviews;
	})


