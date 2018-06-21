$(document).ready(function () {
     //prevent error: "Error: Dropzone already attached." 
      Dropzone.autoDiscover = false;   
      $("#file-up").dropzone({       
        url: "index.php/?act=save&what=dropzone&plain=1",
        addRemoveLinks: true,
        dictDefaultMessage:"HERE",
        maxFilesize: 256, // MB // you can add more or less
        acceptedFiles: ".jpeg, .jpg, .jpe, .bmp, .png, .gif, .ico, .tiff, .tif, .svg, .svgz, \n\
                         .doc,.docx,.txt, .pdf,.rtf,.xlsx,.xls,.xlsb,.csv, .ppt,\n\
                        .zip,.zipx,.tar,.gz,.z,.rar", // files you accepting
         
        success: function (file, response) {
            var imgName = response;
            file.previewElement.classList.add("dz-success");
            $('#up-ack').html(response); // get the file upload responses
        },
      
        error: function (file, response) {
            file.previewElement.classList.add("dz-error");
             $('#up-ack').css('color','red').html(response);
        }
    });      
}); 