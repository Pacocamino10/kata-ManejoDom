const dl = document.createElement("dl");
const dt = document.createElement("dt");
const dd = document.createElement("dd");
const contenido = document.createTextNode("hola");

document.body.appendChild(dl);

const dt1 = document.createElement("dt");
dt1.textContent = "Red Telefónica Conmutada (RTC)";
const dd1 = document.createElement("dd");
dd1.textContent =
  "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.";

dl.appendChild(dt1);
dl.appendChild(dd1);

const dt2 = document.createElement("dt");
dt2.textContent = "Red Digital de Servicios Integrados (RDSI)";
const dd2 = document.createElement("dd");
dd2.textContent =
  "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI";

dl.appendChild(dt2);
dl.appendChild(dd2);

const dt3 = document.createElement("dt");
dt3.textContent = "Línea de Abonado Digital Asimétrica (ADSL)";
const dd3 = document.createElement("dd");
dd3.textContent =
  "Se basa en la conversión de una línea RTC en una línea de alta velocidad.Para acceder a Internet es necesario un módem ADSL.";
dl.appendChild(dt3);
dl.appendChild(dd3);

const dt4 = document.createElement("dt");
dt4.textContent = "Fibra Óptica";
const dd4 = document.createElement("dd");
dd4.textContent =
  "	Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial.";

dl.appendChild(dt4);
dl.appendChild(dd4);

// boton

const btn = document.createElement("BUTTON");
const btn2 = document.createElement("BUTTON");

dl.appendChild(btn);
dl.appendChild(btn2);
btn.textContent = "añadir";
btn2.textContent = "borrar";

btn.addEventListener("click", añadir);
btn2.addEventListener("click", borrar);

function añadir() {
  let prompNombre =prompt("Escribe el nombre");
  let prompDef = prompt("escribe la definicion");


  const dtm = document.createElement("dt");
  dtm.textContent =prompNombre;
  const ddm = document.createElement("dd");
  ddm.textContent = prompDef;
  console.log( dtm.textContent);

  dl.appendChild(dtm);
  dl.appendChild(ddm);
}

function borrar() {
    let eleccion =prompt("Indica la posicion a borrar empezando desde 1");

    const listaDef = dl.childNodes;
    
   const listaFinal = dl.getElementsByTagName('dt');
    console.log(listaFinal);

  
    for (let i = 0; i < listaFinal.length; i++) {
           console.log(typeof eleccion);
           if(parseInt(eleccion)===i){
            listaFinal.item(parseInt(eleccion)).remove();
            listaDef.item(parseInt(eleccion)).nextSibling.remove();
            break;
           }
        }
        

    
}
