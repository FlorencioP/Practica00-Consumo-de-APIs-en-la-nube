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

                "<th class='tg-73oq'>Ingredientes</th>" +
                //"<th class='tg-73oq'>Instrucciones</th>" +

                "<th class='tg-73oq'>Origen</th>" +
                "<th class='tg-73oq'>Imagen</th>" +
                "</tr>" +
                "</thead>" +


                "<tbody>" +
                "<tr>" +
                "<td class='tg-73oq'>" + datos.meals[0].strMeal + "</td>" +
                "<td class='tg-73oq'>" + datos.meals[0].strCategory + "</td>" +




                "<td class='tg-73oq'>";


            if (datos.meals[0].strIngredient1 != "") { resultados += datos.meals[0].strIngredient1 + ": " + datos.meals[0].strMeasure1 + " <br> " };
            if (datos.meals[0].strIngredient2 != "") { resultados += datos.meals[0].strIngredient2 + ": " + datos.meals[0].strMeasure2 + " <br> " };
            if (datos.meals[0].strIngredient3 != "") { resultados += datos.meals[0].strIngredient3 + ": " + datos.meals[0].strMeasure3 + " <br> " };
            if (datos.meals[0].strIngredient4 != "") { resultados += datos.meals[0].strIngredient4 + ": " + datos.meals[0].strMeasure4 + " <br> " };
            if (datos.meals[0].strIngredient5 != "") { resultados += datos.meals[0].strIngredient5 + ": " + datos.meals[0].strMeasure5 + " <br> " };
            if (datos.meals[0].strIngredient6 != "") { resultados += datos.meals[0].strIngredient6 + ": " + datos.meals[0].strMeasure6 + " <br> " };
            if (datos.meals[0].strIngredient7 != "") { resultados += datos.meals[0].strIngredient7 + ": " + datos.meals[0].strMeasure7 + " <br> " };
            if (datos.meals[0].strIngredient8 != "") { resultados += datos.meals[0].strIngredient8 + ": " + datos.meals[0].strMeasure8 + " <br> " };
            if (datos.meals[0].strIngredient9 != "") { resultados += datos.meals[0].strIngredient9 + ": " + datos.meals[0].strMeasure9 + " <br> " };
            if (datos.meals[0].strIngredient10 != "") { resultados += datos.meals[0].strIngredient10 + ": " + datos.meals[0].strMeasure10 + " <br> " };
            if (datos.meals[0].strIngredient11 != "") { resultados += datos.meals[0].strIngredient11 + ": " + datos.meals[0].strMeasure11 + " <br> " };
            if (datos.meals[0].strIngredient12 != "") { resultados += datos.meals[0].strIngredient12 + ": " + datos.meals[0].strMeasure12 + " <br> " };
            if (datos.meals[0].strIngredient13 != "") { resultados += datos.meals[0].strIngredient13 + ": " + datos.meals[0].strMeasure13 + " <br> " };
            if (datos.meals[0].strIngredient14 != "") { resultados += datos.meals[0].strIngredient14 + ": " + datos.meals[0].strMeasure14 + " <br> " };
            if (datos.meals[0].strIngredient15 != "") { resultados += datos.meals[0].strIngredient15 + ": " + datos.meals[0].strMeasure15 + " <br> " };
            if (datos.meals[0].strIngredient16 != "") { resultados += datos.meals[0].strIngredient16 + ": " + datos.meals[0].strMeasure16 + " <br> " };
            if (datos.meals[0].strIngredient17 != "") { resultados += datos.meals[0].strIngredient17 + ": " + datos.meals[0].strMeasure17 + " <br> " };
            if (datos.meals[0].strIngredient18 != "") { resultados += datos.meals[0].strIngredient18 + ": " + datos.meals[0].strMeasure18 + " <br> " };
            if (datos.meals[0].strIngredient19 != "") { resultados += datos.meals[0].strIngredient19 + ": " + datos.meals[0].strMeasure19 + " <br> " };
            if (datos.meals[0].strIngredient20 != "") { resultados += datos.meals[0].strIngredient20 + ": " + datos.meals[0].strMeasure20 + " <br> " };


            resultados += "</td>" +
                //"<td class='tg-73oq'>" + datos.meals[0].strInstructions + "</td>" +
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

var temp;

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


                temp = "<tr>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strMeal + "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strCategory + "</td>" +
                    "<td class='tg-73oq'>";

                if (datos.meals[i].strIngredient1 != "") { temp += datos.meals[i].strIngredient1 + ": " + datos.meals[i].strMeasure1 + " <br> " };
                if (datos.meals[i].strIngredient2 != "") { temp += datos.meals[i].strIngredient2 + ": " + datos.meals[i].strMeasure2 + " <br> " };
                if (datos.meals[i].strIngredient3 != "") { temp += datos.meals[i].strIngredient3 + ": " + datos.meals[i].strMeasure3 + " <br> " };
                if (datos.meals[i].strIngredient4 != "") { temp += datos.meals[i].strIngredient4 + ": " + datos.meals[i].strMeasure4 + " <br> " };
                if (datos.meals[i].strIngredient5 != "") { temp += datos.meals[i].strIngredient5 + ": " + datos.meals[i].strMeasure5 + " <br> " };
                if (datos.meals[i].strIngredient6 != "") { temp += datos.meals[i].strIngredient6 + ": " + datos.meals[i].strMeasure6 + " <br> " };
                if (datos.meals[i].strIngredient7 != "") { temp += datos.meals[i].strIngredient7 + ": " + datos.meals[i].strMeasure7 + " <br> " };
                if (datos.meals[i].strIngredient8 != "") { temp += datos.meals[i].strIngredient8 + ": " + datos.meals[i].strMeasure8 + " <br> " };
                if (datos.meals[i].strIngredient9 != "") { temp += datos.meals[i].strIngredient9 + ": " + datos.meals[i].strMeasure9 + " <br> " };
                if (datos.meals[i].strIngredient10 != "") { temp += datos.meals[i].strIngredient10 + ": " + datos.meals[i].strMeasure10 + " <br> " };
                if (datos.meals[i].strIngredient11 != "") { temp += datos.meals[i].strIngredient11 + ": " + datos.meals[i].strMeasure11 + " <br> " };
                if (datos.meals[i].strIngredient12 != "") { temp += datos.meals[i].strIngredient12 + ": " + datos.meals[i].strMeasure12 + " <br> " };
                if (datos.meals[i].strIngredient13 != "") { temp += datos.meals[i].strIngredient13 + ": " + datos.meals[i].strMeasure13 + " <br> " };
                if (datos.meals[i].strIngredient14 != "") { temp += datos.meals[i].strIngredient14 + ": " + datos.meals[i].strMeasure14 + " <br> " };
                if (datos.meals[i].strIngredient15 != "") { temp += datos.meals[i].strIngredient15 + ": " + datos.meals[i].strMeasure15 + " <br> " };
                if (datos.meals[i].strIngredient16 != "") { temp += datos.meals[i].strIngredient16 + ": " + datos.meals[i].strMeasure16 + " <br> " };
                if (datos.meals[i].strIngredient17 != "") { temp += datos.meals[i].strIngredient17 + ": " + datos.meals[i].strMeasure17 + " <br> " };
                if (datos.meals[i].strIngredient18 != "") { temp += datos.meals[i].strIngredient18 + ": " + datos.meals[i].strMeasure18 + " <br> " };
                if (datos.meals[i].strIngredient19 != "") { temp += datos.meals[i].strIngredient19 + ": " + datos.meals[i].strMeasure19 + " <br> " };
                if (datos.meals[i].strIngredient20 != "") { temp += datos.meals[i].strIngredient20 + ": " + datos.meals[i].strMeasure20 + " <br> " };



                temp += "</td>" +
                    "<td class='tg-73oq'>" + datos.meals[i].strArea + "</td>" +
                    "<td class='tg-73oq'> <img src=" + datos.meals[i].strMealThumb + " alt = 'imagen de la comida'> </td>" +
                    "</tr>";

                comidas.push(temp);





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
        "<th class='tg-73oq'>Ingredientes</th>" +
        //"<th class='tg-73oq'>Instrucciones</th>" +
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