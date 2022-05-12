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
	let ar3 = ["hardworking", "admirable", "brute", "revolutionary", "inventive", "fascinating", "great", "hopeful", "nerdy", "thoughtful", "foreboding"];

	//zodiac
	let ar4 = ["aesthetic", "bossy", "covert", "dreamy", "quick", "witty", "well-read", "nerdy", "thoughtful", "foreboding",
	"forthright", "simplistic"];

	//celeb crush
	let ar5 = ["interesting", "gorgeous", "smart", "dazzling", "elegant", "extravagent", "eloquent", "egocentric", "visionary", "genius",
	"intelligent", "pretty"];

	//kids
	let ar6 = ["handful", "rambunctious", "intelligent", "mature", "silly", "stubborn", "energetic", "academic", "artistic", "understanding",
	"empathetic", "short-tempered"];

	//location
	let ar7 = ["aesthetic", "bossy", "covert", "dreamy", "quick", "witty", "well-read", "nerdy", "thoughtful", "foreboding",
	"forthright", "simplistic"];

	//hobby
	let ar8 = ["serendipitous", "callous", "definitive", "cool", "clever", "fond", "great", "hopeful", "illogical", "jokester",
	"kind", "languid"];

	//happy
	let ar9 = ["calm", "messy", "dysfunctional", "creative", "mischevious", "retrospective", "crazy", "annoying", "funny", "childish",
	"mature", "dreamlike", "slow", "fast", "intelligent"]; 

	//mash
	let ar10 = ["Mansion", "Apartment", "Shack", "House","Mansion", "Apartment", "Shack", "House","Mansion", "Apartment", "Shack", "House","Mansion", "Apartment", "Shack", "House","Mansion", "Apartment", "Shack", "House"];

	/*filling out the form and handling it below*/

	let btn = document.querySelector("button");
	btn.addEventListener ("click", function(){

		/*read the stuff you put into each of the elements*/
		
		let n = ar1 [Math.floor(Math.random()*ar1.length -1)]; //sibling
		let v = ar [Math.floor(Math.random()*ar.length -1)]; //colour
		let a = ar2 [Math.floor(Math.random()*ar.length -1)]; //month
		let c = ar3 [Math.floor(Math.random()*ar.length -1)]; //job
		let d = ar4 [Math.floor(Math.random()*ar.length -1)]; //zodiac
		let f = ar5 [Math.floor(Math.random()*ar.length -1)]; //crush
		let g = ar6 [Math.floor(Math.random()*ar.length -1)]; //kids
		let l = ar7 [Math.floor(Math.random()*ar.length -1)]; //location
		let hb = ar8 [Math.floor(Math.random()*ar.length -1)]; //hobby
		let hp = ar9 [Math.floor(Math.random()*ar.length -1)]; //happy
		let msh = ar10 [Math.floor(Math.random()*ar.length -1)] //mash

		let s = document.querySelector("#sib").value;
		let m = document.querySelector("#desc2").value;
		let bi = document.querySelector("#desc3").value;
		let h = document.querySelector("#desc4").value;
		let z = document.querySelector("#desc5").value;
		let cr = document.querySelector("#desc6").value;
		let k = document.querySelector("#desc7").value;
		let loc = document.querySelector("#desc8").value;
		let hob = document.querySelector("#desc9").value;
		let hap = document.querySelector("#desc10").value;

		let blank1 = document.querySelector("#blank1"); //sibling
		let blank2 = document.querySelector("#blank2"); //colour
		let blank3 = document.querySelector("#blank3"); //birth month
		let blank4 = document.querySelector("#blank4"); //dream job
		let blank5 = document.querySelector("#blank5"); //zodiac
		let blank6 = document.querySelector("#blank6"); //crush
		let blank7 = document.querySelector("#blank7"); //kids
		let blank8 = document.querySelector("#blank8"); //location
		let blank9 = document.querySelector("#blank9"); //hobby
		let blank10 = document.querySelector("#blank10"); //happy
		let blank11 = document.querySelector("#blank11"); //mash

		let sibling = document.querySelector("#sib");
		let colour = document.querySelector("#col");
		let birth = document.querySelector("#birth");
		let job = document.querySelector("#job");
		let zodiac = document.querySelector("#zodiac");
		let crush = document.querySelector("#crush");
		let kids = document.querySelector("#kids");
		let location = document.querySelector("#location");
		let hobby = document.querySelector("#hobby");
		let happy = document.querySelector("#happy");

		blank11.innerHTML = msh;
		blank1.innerHTML = n;
		blank2.innerHTML = v;
		blank3.innerHTML = a;
		blank4.innerHTML = c;
		blank5.innerHTML = d;
		blank6.innerHTML = f;
		blank7.innerHTML = g;
		blank8.innerHTML = l;
		blank9.innerHTML = hb;
		blank10.innerHTML = hp;

		sibling.innerHTML = s;
		colour.innerHTML = m;
		birth.innerHTML = bi;
		job.innerHTML = h;
		zodiac.innerHTML = z;
		crush.innerHTML = cr;
		kids.innerHTML = k;
		location.innerHTML=loc;
		hobby.innerHTML = hob;
		happy.innerHTML = hap;

		console.log(n,v,a);
		console.log(s,m,bi);
	})
})