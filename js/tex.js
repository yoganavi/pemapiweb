// create new array random number max 99 with array lenght 10
	let arr = [];
	for(let i=0;i<10;i++){
		arr.push(Math.floor(Math.random()*99));
	};

// find prime number from arr using filter function
	let prime = arr.filter(el=>{
		for(let i=2;i<el;i++){
			if(el%i==0){
				return false;
			};
		};
		return true;
	}
	);
	console.log(prime);
	
	// let prime = [];
	// for(let i=0;i<arr.length;i++){
	// 	let isPrime = true;
	// 	for(let j=2;j<arr[i];j++){
	// 		if(arr[i]%j==0){
	// 			isPrime = false;
	// 			break;
	// 		}
	// 	}
	// 	if(isPrime){
	// 		prime.push(arr[i]);
	// 	}
	// }
	// console.log(prime);
