function bki(x, λ, f=2) {
    let p = Math.pow(λ,2)
    let t = x / (p/10000)

    if(t<=18.5){document.getElementById("durum").innerHTML ="Zayıf"
    }if(t>=18.5 && t<=24.9){document.getElementById("durum").innerHTML ="Normal Kilolu"
    }if(t>=25 && t<=29.9){document.getElementById("durum").innerHTML ="Fazla Kilolu"
    }if(t>=30 && t<=34.9){document.getElementById("durum").innerHTML ="I.Derece obez"
    }if(t>=35 && t<=39.9){document.getElementById("durum").innerHTML ="II.Derece obez"
    }if(t>=40){document.getElementById("durum").innerHTML ="III.Derece morbid obez"}
    return t.toFixed(f)
}
function calculate() {
    let x = Number(kilo.value)
    let λ = Number(boy.value)
    res.innerText = "BMI(x, λ) = "+ bki(x, λ)
}
function doTable() {

    const L = [135, 140, 145, 150, 155, 160, 165, 170,175,
                180, 185, 190, 195, 200]
    let str = "<table border ='5'>";
    let a = L.map((λ) => ' Cm = '+λ)
    str += "<tr><td></td>"+ header(a) +"</td></tr>";

    for (let x=110; x>=35; x-=5) { 
       let a = L.map((λ) => "<td>"+bki(x, λ)+ "</td>")
       str += "<tr>" +oneLine(a, x)+"</tr>"
    }
    str += "</table>";

    return str;
} 

let header  = (a) => '<td>'+ a.join('</td><td>') 
let oneLine = (a, x) => '<td> kg = '+x+' </td> '+ a.join(' ');
    
    title.innerText = document.title
    sample.innerText = bki+' \n'+doTable
    calculate()
    out.innerHTML = doTable()