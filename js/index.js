// gsap.to('.img',{ y: 100 })
let kontainer1= document.querySelector('.kontainer1');
let secA = document.querySelectorAll('.secAA');

let tl = gsap.timeline({
	scrollTrigger:{
		trigger: ".secanim",
		start: "0%",
		end: "100%",
		scrub: 1,
	},
});
// let st2 = gsap.timeline({
// 	scrollTrigger:{
// 		trigger: ".secanim",
// 		start: "0%",
// 		end: "100%",
// 		scrub: 1,
// 		pin: true,
// 	},
// });

tl.fromTo('.text', {y: 0 }, {y: 200 });

console.log('a');

window.addEventListener('scroll', function () {
	if(window.scrollY > 1000){
		kontainer1.classList.add('snap');
		secA.forEach( a => {
				a.classList.add('snap');
		});
	};
	if(window.scrollY < 500){
		kontainer1.classList.remove('snap');
		secA.forEach( a => {
				a.classList.remove('snap');
		});
	};
});