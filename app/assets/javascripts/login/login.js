document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    let user=localStorage.getItem("new_user");
     localStorage.setItem("autentication",false);
    console.log(user);
    if(user){
    	let obj=JSON.parse(user);
    	$("#email").val(obj.usuario);
    }
     $(document).on("ajax:success","form#login-form",(e,data)=>{
      
       if(e.detail[0] && e.detail[0].state){
         localStorage.setItem("autentication",true);
         localStorage.setItem("new_user",JSON.stringify(e.detail[0].data));
         window.location.pathname='/main/index';
       }else{
       	$("#login-form-message").parent().removeClass("hide");
       	for(let key in e.detail[0].fields){
       		if(key==0){
       				$(this).find("[name='"+e.detail[0].fields[key]+"']").focus();
       		}
       	
       		$(this).find("[name='"+e.detail[0].fields[key]+"']").addClass('invalid');
    

       	}
        

       }
       

    });

 });