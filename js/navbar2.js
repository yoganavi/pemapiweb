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

let pageid = document.querySelector('#navbar').className,
mycss = document.querySelector('.mycss'),
secA = document.querySelector('.secA'),
navbrand=document.querySelector('.navBrand'),
tekskartu=document.querySelectorAll('.kartu p.fadeInDown'),
navimg=document.querySelector('.navImg');

navbrand.innerHTML='pemapi';
navimg.classList.add('show');
window.addEventListener('scroll',()=>{
	if(window.scrollY > 50){
		document.querySelector('.navbar').classList.add('scroll');
		secA.classList.remove('mTop');
		navbrand.classList.add('scroll');
		navimg.classList.add('scroll3');
	}else{
		document.querySelector('.navbar').classList.remove('scroll');
		secA.classList.remove('mTop');
		secA.classList.add('mTop');
		navbrand.classList.remove('scroll');
		navimg.classList.remove('scroll3');
	};
});

tekskartu.forEach((aa,i) => {
	aa.style.animationDelay=i*0.2+'s'
	aa.style.animationDuration='.4s'
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
	

