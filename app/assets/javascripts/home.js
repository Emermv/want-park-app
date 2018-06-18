document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    builtModal();
  });

function builtModal(open=false){
	 var elems = document.querySelectorAll('.modal');
    var instance = M.Modal.init(elems, {});
    if(open){
    	instance[0].open();
    }
}