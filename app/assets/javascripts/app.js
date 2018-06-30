
//= require rails-ujs
//= require turbolinks
//= require_tree ./base
//= require materialize
//= require_tree ./main

function form_submit(submit){
    let el=document.getElementById(submit);
    console.log(el);
    el.click();
}