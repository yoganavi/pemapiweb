// document.querySelector('.navbar').classList.add('home');

let kontainer = document.querySelector('#kontainer'),
img = document.querySelector('.secA.secAnimate img'),
secA1 = document.querySelector('.secA1'),
secAP=document.querySelectorAll('.secA.secAnimate p'),
secAP2=document.querySelector('.secA.secAnimate'),
logopemapi = document.querySelector('.navItem'),
navbar = document.querySelector('[data-navbar]'),
navlink = document.querySelector('[data-navlink]');
// pemapi = document.querySelector('.navBrandAnimate');

// ! boolean scroll position
let lastscroll = 0,
down = false,
done=false;
// ! // boolean scroll position

ScrollOut({
	threshold : .1,
	scrollingElement: "#kontainer",
	onShown: function(el) {
		let aa=el.classList[0];

		// remove the class
		el.classList.remove('animate__'+aa , 'animate__animated');

		// force reflow
		void el.offsetWidth;

		// re-add the animated cl
		el.classList.add('animate__'+aa , 'animate__animated');

		if(el.classList[1]=='secA1'){
			// document.querySelector('.navbar').classList.add('scroll');
			document.querySelector('.navbar img').classList.add('scroll');
			navbar.dataset.navbar='';
		}else{
			navbar.dataset.navbar='trans';
		}

		if(el.classList[1]==='animate__c2a'){
			navlink.dataset.navlink="white";
		}else{
			navlink.dataset.navlink="";
		};
		// if(el.classList[1]==='secA1'){
		// 	document.querySelector('.navbar').classList.remove('scroll');
		// 	document.querySelector('.navbar img').classList.remove('scroll');
		// };
		console.log(el.classList[1]);
		
		// if(el.classList[1]==='animate__c2a'){
		// 	document.querySelector('.navbar').classList.add('bg-transp');
		// 	pemapi.classList.add('txtwhite');
		// 	navlink.forEach(e=>e.classList.remove('txtblack'));
		// }else{
		// 	if(el.classList[1]!='secA1' && el.classList[1]!='animate__fadeIn'){
		// 		navlink.forEach(e=>e.classList.add('txtblack'));
		// 	}
		// 	pemapi.classList.remove('txtwhite');
		// 	document.querySelector('.navbar').classList.remove('bg-transp');
		// }; 
		// if(el.classList[1]==='secE' || el.classList[1]==='secG'){
		// 	document.querySelector('.navbar').classList.add('bg-transp');
		// }
		// if(el.classList[1]==='secI'){
		// 	document.querySelector('.navbar').style.opacity='0';
		// 	pemapi.style.opacity='0';
		// }
		// if(el.classList[1]==='i2img'){
		// 		el.classList[1].add('animate')
		// }else{
		// 	document.querySelector('.navbar').style.opacity='1';
		// 	pemapi.style.opacity='1';
		// }
		// ! secD animate
		// let myanimateD = document.querySelectorAll('.d2 [data-scroll]');

		// if(el.classList[1]=='secE'||el.classList[1]=='secC'){
		// 	myanimateD.forEach(el => {
		// 		el.classList.remove('animate__fadeInRight' , 'animate__bounceInLeft');
		// 	});
		// 	myanimateD[0].classList.add('animate__bounceOutLeft');
		// 	myanimateD[1].classList.add('animate__bounceOutRight');
		// }else if(el.classList[0]=='d3'){
		// 	myanimateD.forEach(el => {
		// 		el.classList.remove('animate__bounceOutRight' , 'animate__bounceOutLeft');
		// 	});
		// 		myanimateD[0].classList.add('animate__bounceInLeft');
		// 		myanimateD[1].classList.add('animate__fadeInRight')
		// };
		// ! / secD animate
	},
	
});

kontainer.addEventListener('scroll',()=>{
	let scrollpos=kontainer.scrollTop;
	down = scrollpos > lastscroll;
	lastscroll = scrollpos;
	// console.log(down);
	// console.log(secD.offsetTop);
	// console.log(kontainer.scrollTop);
	// console.log(secAP2.dataset.scroll);
	if(kontainer.scrollTop > 50 && kontainer.scrollTop < 400 && down == true && done==false){
		// pemapi.classList.add('sliding', 'home');
		secAP.forEach(el => {
			el.style.color='black';
			el.style.transition='.5s';
		});
		// navlink.forEach(e=>e.classList.add('txtblack'));
		done=true;
	}else if(kontainer.scrollTop < 400 && down == false && done==true){
		// pemapi.classList.add('home');
		// navlink.forEach(e=>e.classList.remove('txtblack'));
		// pemapi.classList.remove('sliding');
		done=false;
	};
	if(kontainer.scrollTop < 50){
			secAP.forEach(el => {
				el.style='';
			})
	};
	// ! animate secD
	// if(kontainer.scrollTop >= secD.offsetTop+20 && kontainer.scrollTop <= secD.offsetTop+300 && down==true || kontainer.scrollTop <= secD.offsetTop-10 && kontainer.scrollTop >= secD.offsetTop-200 && down==false){
	// 	myanimateD.forEach(el => {
	// 		el.classList.remove('animate__bounceInRight' , 'animate__bounceInLeft');
	// 	});
	// 	myanimateD[0].classList.add('animate__bounceOutLeft');
	// 	myanimateD[1].classList.add('animate__bounceOutRight');
	// 	console.log('object');
	// }else if(kontainer.scrollTop >= secD.offsetTop+20 && kontainer.scrollTop <= secD.offsetTop+300 && down==false || kontainer.scrollTop <= secD.offsetTop-10 && kontainer.scrollTop >= secD.offsetTop-200 && down==true){
	// 	myanimateD.forEach(el => {
	// 		el.classList.remove('animate__bounceOutRight' , 'animate__bounceOutLeft');
	// 	});
	// 	myanimateD[0].classList.add('animate__bounceInLeft');
	// 	myanimateD[1].classList.add('animate__bounceInRight');
	// };
	// ! / animate secD
});

// console.log(document.querySelectorAll('#bodyall'));
// window.onresize=()=>{
// 	if(window.innerWidth < 960){
// 		document.querySelector('#kontainer').style.fontSize='2px'
// 	}else{
// 		document.querySelector('#kontainer').style.fontSize='15px'

// 	};
// };
// console.log(document.querySelector('.secD').innh);
// setTimeout(() => {
// 	if(window.innerWidth < 1300){
// 		pemapi.style.top=secA1.offsetTop+50+"px";
// 	}else{
// 		pemapi.style.top=secA1.offsetTop+0+"px";
// 	};
// }, 200);


arrayy=[
	{nama: 'abe',umur:20,pekerjaan: 'staff'},
	{nama: 'ade',umur:20,pekerjaan: 'staff'},
	{nama: 'afa',umur:30,pekerjaan: 'manager'},
	{nama: 'ama',umur:30,pekerjaan: 'manager'},
	{nama: 'aga',umur:40,pekerjaan: 'dirut'}
]
// let sort=arrayy.map(e=>e.pekerjaan);
arrayy.forEach(e => {
	console.log(e.umur);
});






