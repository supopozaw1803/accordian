var getacctitles = document.getElementsByClassName("acctitle");
console.log(getacctitles);//HTMLCollection

var getactiveacctitles=document.querySelectorAll('.accontent');
// console.log(getactiveacctitles);NodeLists

for(var x=0;x<getacctitles.length;x++){
	// console.log(x);
	// console.log(getacctitles[x]);

										// event  type
	getacctitles[x].addEventListener('click',function(e){
		// console.log(e.target);
		// console.log(this);
		this.classList.toggle('active');


		var getcontent=this.nextElementSibling;
		// console.log(getcontent);

		// getcontent.style.height=getcontent.scrollHeight+"px";

		if(getcontent.style.height){
			 getcontent.style.height=null; //beware can't set 0
		}else{
			 getcontent.style.height=getcontent.scrollHeight+"px";
		}
	})

	if(getacctitles[x].classList.contains('active')){
		getactiveacctitles[x].style.height=getactiveacctitles[x].scrollHeight+"px";
	}
};
