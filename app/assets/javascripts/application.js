// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require materialize

function http (uri, data, type = "POST") {
                return new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();
                    xhr.open(type, uri);
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            try{
                                resolve(xhr.responseText);
                            }catch(err){
                                console.log("JSON format error!",err);
                            }
                        } else {
                            reject(xhr);
                            console.log(xhr);
                        }
                    };
                    xhr.send(data);
                });
            }