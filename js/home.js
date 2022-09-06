let kontainer = document.querySelector('#kontainer'),
img = document.querySelector('.secA.secAnimate img'),
secA1 = document.querySelector('.secA1'),
secAP=document.querySelectorAll('.secA.secAnimate p'),
secAP2=document.querySelector('.secA.secAnimate'),
navbar = document.querySelector('[data-navbar]'),
navlink = document.querySelector('[data-navlink]'),
logopemapi = document.querySelector('.navItem'),
transp = false;

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

		console.log(el.classList[1]);
		if(el.classList[0]==='c2a'){
			navlink.dataset.navlink="white";
			navbar.dataset.navbar="transp";
			transp=true;
		}else{
			transp=false;
			navlink.dataset.navlink="";
			navbar.dataset.navbar="";
		};
	},
	
});

kontainer.addEventListener('scroll',()=>{
	let scrollpos=kontainer.scrollTop;
	down = scrollpos > lastscroll;
	lastscroll = scrollpos;

	// if(kontainer.scrollTop > 100 && kontainer.scrollTop < 300 && down == true && done==false){
	// 	secAP.forEach(el => {
	// 		el.style.color='black';
	// 		el.style.transition='.5s';
	// 	});
	// 	navlink.forEach(e=>e.classList.add('txtblack'));
	// 	done=true;
	// }else if(kontainer.scrollTop < 400 && down == false && done==true){
	// 	done=false;
	// };
	// if(kontainer.scrollTop < 50){
	// 		secAP.forEach(el => {
	// 			el.style='';
	// 		})
	// };

	if(kontainer.scrollTop > 100 && transp==false){
		navbar.dataset.navbar="shrink";
	}else if(kontainer.scrollTop < 300){
		navbar.dataset.navbar="";
	}
});