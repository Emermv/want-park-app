 $(document).on("ajax:success","form#edit-user-form",(e,data)=>{
       console.log(data);
       console.log(e);
       if(e.detail && e.detail[1]=="OK"){
            swal({
  title: "Actualizado correctamente!",
  text:"Para que los cambios se apliquen correctamente es necesario autenticarse otra vez!",
  icon: "success",
  button: "ok",
}).then((restart)=>{
	location.pathname="/login/index";
});
       }else{
          swal({
  title: "Error",
  text: "Ocurrió un error inesperado, por favor intentelo otra vez!",
  icon: "error",
  button: "ok",
});
       }


 });

  $(document).on("ajax:error","form#edit-user-form",(e,data)=>{
       console.log(data);
       console.log(e);
      swal({
  title: "Error",
  text: "Ocurrió un error inesperado, por favor intentelo otra vez!",
  icon: "error",
  button: "ok",
});

 });
