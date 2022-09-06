let loadonce=true;

ScrollOut({
	threshold : function(){
		if(window.pageYOffset < 600){
			if(window.pageYOffset < 10){
				return -3
			};
			return 0
			
		}else{
			return .6
		}
	},
	onShown: function(el) {
		let aa=el.classList[0];

		// remove the class
		// console.log(aa);
			el.classList.remove('animate__'+aa , 'animate__animated');

		// force reflow
		void el.offsetWidth;
		console.log(aa);
		// if(aa==='headShake'){
		// }
		// re-add the animated cl
		if(loadonce && el.classList[1]=='myanimate'){
			setTimeout(() => {
				el.classList.add('animate__'+aa , 'animate__animated');
			loadonce=false; 
			}, 500);
		}else{
			el.classList.add('animate__'+aa , 'animate__animated');
		};

	},	
	onChange: function(el) {

		let aa=el.classList[0];
		let ab=el.dataset.scroll;
		// console.log(aa);
		// if(aa==='a1a' && loadonce){
		// 	el.classList.add('animate__'+aa , 'animate__animated')
		// 	el.dataset.scroll='in';
		// 	loadonce=false; 
		// 	// el.style.transition='1s';
		// };
		if(aa==='bounceIn'){
			if(ab=='out'){
				el.classList.remove('animate__'+aa);
				el.classList.add('animate__backOutLeft')
			}
			if(ab=='in'){
				el.classList.remove('animate__backOutLeft');
			}
		}	

  },
});

// const proses=(aa)=>{
// 	const timer = aa===1? 3000 : aa===2? 1000 : aa;
// 	// return new Promise((resolve,reject)=>{
// 		setTimeout(() => {
// 			let hasil=(aa===1? 'makan' : aa===2? 'minum' : 'nyemil')
// 			return console.log(hasil);
// 		}, timer);
// 	// })
// }

// proses(1);
// proses(2);
// proses(4000);
	

