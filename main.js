document.addEventListener('DOMContentLoaded', function(){
	
	let el = document.querySelector("#bg-change");

	el.addEventListener('click', function(){
		/*code written here will be to change the background once u click it*/

		let r = Math.floor(Math.random()*255+50);
		let g = Math.floor(Math.random()*255+50);
		let b = Math.floor(Math.random()*255+50);
		let a = Math.floor(Math.random()*255+50);
		let c = 'rgb(' + r + ',' + g +',' + b+')';

		document.body.style.background = c;


	})
	console.log(el);

	//colour
	let ar = ["mischevious", "soft", "sultry", "fierce", "loyal", "enthusiastic" , "realistic", "silly", "unique", "childlike", "energetic", "dedicated" , "clever",
	"tenatious", "resilient", "callous", "determined" , "devious", "rejuvinating", "refreshing", "popular"]; 

	//sibling
	let ar1 = ["calm", "messy", "dysfunctional", "creative", "mischevious", "retrospective", "crazy", "annoying", "funny", "childish",
	"mature", "dreamlike", "slow", "fast", "intelligent"]; 

	//birth month
	let ar2 = ["serendipitous", "callous", "definitive", "cool", "clever", "fond", "great", "hopeful", "illogical", "jokester",
	"kind", "languid"];

	//dream job
	let ar3 = ["hardworking", "admirable", "brute", "revolutionary", "inventive", "fascinating", "great", "hopeful"];

	//zodiac
	let ar4 = ["aesthetic", "bossy", "covert", "dreamy", "quick", "witty", "well-read", "nerdy", "thoughtful", "foreboding",
	"forthright", "simplistic"];

	//celeb crush
	let ar5 = ["interesting", "gorgeous", "smart", "dazzling", "elegant", "extravagent", "eloquent", "egocentric", "visionary", "genius",
	"intelligent", "pretty"];

	//kids
	let ar6 = ["handful", "rambunctious", "intelligent", "mature", "silly", "stubborn", "energetic", "academic", "artistic", "understanding",
	"empathetic", "short-tempered"];

	/*filling out the form and handling it below*/

	let btn = document.querySelector("button");
	btn.addEventListener ("click", function(){
		/*read the stuff you put into each of the elements*/
		
		let n = ar1 [Math.floor(Math.random()*ar1.length -1)];
		let v = ar [Math.floor(Math.random()*ar.length -1)];
		let a = ar2 [Math.floor(Math.random()*ar.length -1)];

		let s = document.querySelector("#sib").value;
		let m = document.querySelector("#desc2").value;
		let bi = document.querySelector("#desc3").value;

		let blank1 = document.querySelector("#blank1"); //sibling
		let blank2 = document.querySelector("#blank2"); //colour
		let blank3 = document.querySelector("#blank3"); //birth month

		let sibling = document.querySelector("#sib");
		let colour = document.querySelector("#col");
		let birth = document.querySelector("#birth");

		blank1.innerHTML = n;
		blank2.innerHTML = v;
		blank3.innerHTML = a;

		sibling.innerHTML = s;
		colour.innerHTML = m;
		birth.innerHTML = bi;

		

		console.log(n,v,a);
		console.log(s,m,b);
	})
})