function change_type(el,on,off){
   el.value=el.checked?on:off;
}

function number_only(e){
	console.log(e);
	let key=document.all?e.keyCode:e.which;
	let char="";
	console.log(key);
}