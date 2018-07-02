document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var user_error_explanation=$("#user_error_explanation");

    builtModal();
    $(document).on("ajax:success","form#new-user-form",(e,data)=>{
       console.log(data);
       console.log(e);
       localStorage.setItem("new_user",JSON.stringify(e.detail[0]));
       window.location.pathname='/login/index';

    });
    $(document).on("ajax:error","form#new-user-form",(e,data)=>{
       console.log(data);
       console.log(e);
       let errors=new Array();
       for(let key in e.detail[0]){
        errors=errors.concat(e.detail[0][key]);
        $("#user_"+key).addClass("invalid");
       }
      
var output = Mustache.render(`<ul>{{#errors}}<li>{{.}}</li>{{/errors}}</u>`, {
    errors:errors
});
user_error_explanation.html(output);
user_error_explanation.parent().removeClass("hide");
    });
  });
 function notify(title,content){
    let div=document.createElement("div");
    div.innerHTML=content;
    swal( title,{
    content:div
    });
 }

function builtModal(open=false){
	 var elems = document.querySelectorAll('.modal');
    var instance = M.Modal.init(elems, {});
    if(open){
    	instance[0].open();
        localStorage.removeItem("new_user");
    }
}
