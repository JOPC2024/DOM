let empleado1 = [1,1,1,1];
let empleado2 = [1,1,1,1];
let preciosProd = [200,180,160,150];
function pestanas(pes)
{
    let ident1 = document.getElementById('empleado1');
    let ident2 = document.getElementById('empleado2');
    let ident3 = document.getElementById('reporte');
    //let guardar = 0
    let report = document.getElementById('contenido');
    if(pes=='empleado1')
    {
        ident1.style.cssText='filter:brightness(100%);';
        ident2.style.cssText='filter:brightness(70%);';
        ident3.style.cssText='filter:brightness(70%);';
        report.innerHTML='<article><fieldset><legend>ProductosVendidos</legend><table><tr><td><label>Aqua</label></td><td><input type="number" id="aqua" min="1" max="100"></td></tr><tr><td><label>Emoción</label></td><td><input type="number" id="emocion" min="1" max="100"></td></tr><tr><td><label>Alegría</label></td><td><input type="number" id="alegria" min="1" max="100"></td></tr><tr><td><label>Frescura</label></td><td><input type="number" id="frescura" min="1" max="100"></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td><button id="guardar" onclick="guardar(\'empleado1\')">Guardar</button></td><td></td></tr><tr><td></td><td></td><td></td></tr></table></fieldset></article>';
        document.getElementById('aqua').value=empleado1[0];
        document.getElementById('emocion').value=empleado1[1];
        document.getElementById('alegria').value=empleado1[2];
        document.getElementById('frescura').value=empleado1[3];
    }
    else if(pes=='empleado2')
    {
        ident1.style.cssText='filter:brightness(70%);';
        ident2.style.cssText='filter:brightness(100%);';
        ident3.style.cssText='filter:brightness(70%);';
        report.innerHTML='<article><fieldset><legend>ProductosVendidos</legend><table><tr><td><label>Aqua</label></td><td><input type="number" id="aqua" min="1" max="100"></td></tr><tr><td><label>Emoción</label></td><td><input type="number" id="emocion" min="1" max="100"></td></tr><tr><td><label>Alegría</label></td><td><input type="number" id="alegria" min="1" max="100"></td></tr><tr><td><label>Frescura</label></td><td><input type="number" id="frescura" min="1" max="100"></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td><button id="guardar" onclick="guardar(\'empleado2\')">Guardar</button></td><td></td></tr><tr><td></td><td></td><td></td></tr></table></fieldset></article>';
        document.getElementById('aqua').value=empleado2[0];
        document.getElementById('emocion').value=empleado2[1];
        document.getElementById('alegria').value=empleado2[2];
        document.getElementById('frescura').value=empleado2[3];
    }
    else if(pes=='reporte')
    {
        ident1.style.cssText='filter:brightness(70%);';
        ident2.style.cssText='filter:brightness(70%);';
        ident3.style.cssText='filter:brightness(100%);';
        report.innerHTML='<article><fieldset><legend>Reporte</legend><table><tr><td><label>Juana</label></td><td></td><td><label>Pedro</label></td><td></td></tr><tr><td><label>Aqua</label></td><td id="11"><label>1</label></td><td><label>Aqua</label></td><td id="21"><label>1</label></td></tr><tr><td><label>Emocion</label></td><td id="12"><label>1</label></td><td><label>Emocion</label></td><td id="22"><label>1</label></td></tr><tr><td><label>Alegria</label></td><td id="13"><label>1</label></td><td><label>Alegria</label></td><td id="23"><label>1</label></td></tr><tr><td><label>Frescura</label></td><td id="14"><label>1</label></td><td><label>Frescura</label></td><td id="24"><label>1</label></td></tr><tr><td id="total1"></td><td></td><td id="total2"></td><td></td></tr><tr><td></td><td><button id="generar" onclick="generar()">Generar</button></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td id="mes"></td></tr></table></fieldset></article>';
    }
}
function guardar(tipo)
{
    let aqua = document.getElementById('aqua').value;
    let emocion = document.getElementById('emocion').value;
    let alegria = document.getElementById('alegria').value;
    let frescura = document.getElementById('frescura').value;
    if(Number.isInteger(parseInt(aqua)) && Number.isInteger(parseInt(emocion)) && Number.isInteger(parseInt(alegria)) && Number.isInteger(parseInt(frescura)))
    {

        if(tipo == 'empleado1')
        {
            empleado1[0] = aqua;
            empleado1[1] = emocion;
            empleado1[2] = alegria;
            empleado1[3] = frescura;
            alert(empleado1);
        }
        else if(tipo == 'empleado2')
        {
            empleado2[0] = aqua;
            empleado2[1] = emocion;
            empleado2[2] = alegria;
            empleado2[3] = frescura;
            alert(empleado2);
        }
    }
    else
    {
        alert('uno de los datos no es un numero favor de volverlo a intentar');
    }
}
function generar()
{
    let total1=0;
    let total2=0;

    for(let i=0;i<4;i++)
    {
        document.getElementById((11+i).toString()).innerHTML='<label>'+empleado1[i]+'</label>';
        total1+=(empleado1[i]*preciosProd[i]);
    }
    for(let i=0;i<4;i++)
    {
        document.getElementById((21+i).toString()).innerHTML='<label>'+empleado2[i]+'</label>';
        total2+=(empleado2[i]*preciosProd[i]);
    }
    document.getElementById('total1').innerHTML='<label>Total: </label><label>'+total1+'USD</label>';
    document.getElementById('total2').innerHTML='<label>Total: </label><label>'+total2+'USD</label>';
    if(total1>total2)
    {
        document.getElementById('total1').innerHTML='<label>Empleado del Mes: </label><label>Juana</label>';
    }
    else if(total1<total2)
    {
        document.getElementById('mes').innerHTML='<label>Empleado del Mes: </label><label>Pedro</label>';
    }
    else
    {
        document.getElementById('mes').innerHTML='<label>Empleado del Mes: </label><label>empate</label>';
    } 
}