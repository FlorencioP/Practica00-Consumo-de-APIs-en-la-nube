function rand() {

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari 
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue"); 

            var datos = JSON.parse(this.responseText);


            resultados = "<table  class='tg' style='margin : 0 auto;'>" +
                "<thead>" +
                "<tr>" +
                "<th class='tg-73oq'>Nombre</th>" +
                "<th class='tg-73oq'>Categoria</th>" +
                "<th class='tg-73oq'>Origen</th>" +
                "<th class='tg-73oq'>Imagen</th>" +
                "</tr>" +
                "</thead>" +


                "<tbody>" +
                "<tr>" +
                "<td class='tg-73oq'>" + datos.meals[0].strMeal + "</td>" +
                "<td class='tg-73oq'>" + datos.meals[0].strCategory + "</td>" +
                "<td class='tg-73oq'>" + datos.meals[0].strArea + "</td>" +
                "<td class='tg-73oq'> <img src=" + datos.meals[0].strMealThumb + " alt = 'imagen de la comida'> </td>" +
                "</tr>" +
                "</tbody>" +
                "</table>"


            document.getElementById("comidas").innerHTML = resultados;
        }
    };
    xmlhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
    xmlhttp.send();
}



function buscarPorcomida() {

    var busc = document.getElementById("busc").value;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari 
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue"); 

            var datos = JSON.parse(this.responseText);


            resultados = "<table class='tg'>" +
                "<thead>" +
                "<tr>" +
                "<th class='tg-73oq'>Nombre</th>" +
                "<th class='tg-73oq'>Categoria</th>" +
                "<th class='tg-73oq'>Origen</th>" +
                "<th class='tg-73oq'>Imagen</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>"
            for (var i = 0; i < datos.meals.length; i++) {
                resultados += "<tr>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strMeal + "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strCategory + "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strArea + "</td>" +
                    "<td class='tg-73oq'> <img src=" + datos.meals[i].strMealThumb + " alt = 'imagen de la comida'> </td>" +
                    "</tr>"
            }
            resultados += "</tbody>" +
                "</table>"


            document.getElementById("comidas").innerHTML = resultados;
        }
    };
    xmlhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=" + busc);
    xmlhttp.send();


}