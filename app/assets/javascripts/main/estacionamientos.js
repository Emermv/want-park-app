

$(document).on("ajax:success","form#new-estacionamiento-form",(e,data)=>{
       console.log(data);
       console.log(e);
       parking_tag.push(e.detail[0])
       $('#new-parking-modal').modal('close');
     /* Mustache.render(`<ul>{{#errors}}<li>{{.}}</li>{{/errors}}</u>`, {
       errors:errors
      });*/

 });

$(document).on("ajax:error","form#new-estacionamiento-form",(e,data)=>{
       console.log(data);
       console.log(e);
       let error_explanation=$("#estacionamiento-error_explanation");
      var output ="";

       if(typeof e.detail[0] =="object"){
         let errors=new Array();
         let is_first=false;
       for(let key in e.detail[0]){
        errors=errors.concat(e.detail[0][key]);
        $("#estacionamiento_"+key).addClass("invalid");
        if(!is_first){
        	is_first=true;
        	$("#estacionamiento_"+key).focus();
        }
       }
if(errors.length<=2){
  $('.stepper').openStep(1, function(e){
    console.log(e);
  });
}else{
  $('.stepper').openStep(2, function(e){
    console.log(e);
  });
}
output = Mustache.render(`<ul>{{#errors}}<li>{{.}}</li>{{/errors}}</u>`, {
    errors:errors
});
       }else{
        output=`<strong>`+e.detail[1]+`</strong>`;
       }

error_explanation.html(output);
error_explanation.removeClass("hide");
 });
 function new_parking(){
  var elems = document.querySelectorAll('#new-parking-modal');
   var instance = M.Modal.init(elems, {});
  instance[0].open();
 }
