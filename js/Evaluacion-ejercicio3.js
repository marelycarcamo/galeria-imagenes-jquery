$(document).ready(function(){
 
   imagen=0; 

   // Añade las imagenes a la caja 
   $("#bt-agregar").click(function(){
      url = "imagenes/imagen" + ++imagen + ".jpg";
      $(`<img src="${url}">`).appendTo("#imagenes");
      imagen = imagen==10? 0:pass 
   });


   // Elimina la última imagen de la caja
   $("#bt-eliminar").click(function(){
      imagen--;
      $("#imagenes>img:last").remove();
      imagen = imagen<0? 0:pass
   });


   // Desvanece la imagen
   $("#imagenes").on("mouseenter","img",function(){
      $(this).fadeTo("slow",0);
   });


   //Reaparece la imagen desvanecida
      $("#imagenes").on("mouseleave","img",function(){
      $(this).fadeTo("slow",1);
   });

       
});























