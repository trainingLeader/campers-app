
//Funcion que se encarga de manipular el evento click de las opciones del menu
//de navegacion principal
const initMenu = () =>{
        document.querySelectorAll('.optMenu').forEach((val,id) =>{
          val.addEventListener("click",(e) =>{
            const dato = e.target.dataset.opcion;
            console.log(dato);
            e.preventDefault();
            e.stopImmediatePropagation();
          })  
        })
}
//************************************************************************ */
export {
    initMenu
}
