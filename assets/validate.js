$(document).ready(function() {
    $("#form").validate({
        rules: {
            name: {
              required:true,
              minlength:5
            },
            email: {
              required:true,
              
            },
            address: {
              required:true,
              minlength:5
            },
            mobile: {
              required:true,
              minlength:10,
              maxlength:10
            },
            message: {
                required:true
            }
  
        }
    })
  })
