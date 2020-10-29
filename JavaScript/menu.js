var datos;

var pageNumber = 1;
var pageSize = 5;

//var comidas = ["a", "b", "c"];
var comidas = [];

var comidasHtml = "";
var pagination;
var pageCont;


function rand() {
    comidas = [];
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari 
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert("llegue"); 

            datos = JSON.parse(this.responseText);


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
    comidas = [];
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

            datos = JSON.parse(this.responseText);


            //resultados = "<table class='tg' style='margin : 0 auto;'>" +
            //"<thead>" +
            //"<tr>" +
            //"<th class='tg-73oq'>Nombre</th>" +
            //"<th class='tg-73oq'>Categoria</th>" +
            //"<th class='tg-73oq'>Origen</th>" +
            //"<th class='tg-73oq'>Imagen</th>" +
            //"</tr>" +
            //"</thead>" +
            //"<tbody>"




            for (var i = 0; i < datos.meals.length; i++) {

                comidas.push("<tr>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strMeal + "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strCategory + "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strArea + "</td>" +
                    "<td class='tg-73oq'> <img src=" + datos.meals[i].strMealThumb + " alt = 'imagen de la comida'> </td>" +
                    "</tr>");

            }

            pageCont = Math.ceil(comidas.length / pageSize);
            console.log(comidas);
            showcomidas(comidas)
                //resultados += "</tbody>" +
                //"</table>"


            //document.getElementById("comidas").innerHTML = resultados;


        }
    };
    xmlhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=" + busc);
    xmlhttp.send();


}


//Paginacion

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function nextPage() {
    pageNumber++;
    showcomidas(pagination)
}

function previusPage() {
    pageNumber--;
    showcomidas(pagination)
}

function showcomidas(_comidas) {

    var pagination = paginate(comidas, pageSize, pageNumber);
    //console.log("nextPage", pagination)


    comidasHtml = "<table class='tg' style='margin : 0 auto;'>" +
        "<thead>" +
        "<tr>" +
        "<th class='tg-73oq'>Nombre</th>" +
        "<th class='tg-73oq'>Categoria</th>" +
        "<th class='tg-73oq'>Origen</th>" +
        "<th class='tg-73oq'>Imagen</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";



    pagination.forEach(element => {
        //console.log(element)
        comidasHtml += element;
    });


    comidasHtml += "</tbody> </table>";


    //if(pageNumber){
    //if(pageNumber)´¨
    //}

    //Manera mas simple con logica

    comidasHtml += pageNumber > 1 ? " <button onclick='previusPage()'>Anterior</button>" : "<button disabled > Anterior </button>";
    comidasHtml += pageNumber < pageCont ? (" <button onclick='nextPage()'>Siguiente</button>") : " <button disabled >Siguiente</button>";




    document.getElementById("comidas").innerHTML = "";
    document.getElementById("comidas").innerHTML = comidasHtml;
}

//showcomidas(comidas);