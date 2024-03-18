function Calculate(){
    let p = document.getElementById("p").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let f = document.getElementById("f").value;

    let total = parseFloat(p) + parseFloat(c) + parseFloat(d) + parseFloat(f);
    document.getElementById("demo").innerHTML = `Your Total Number is  ${total}`;

    const per =(total/400)*100;
    document.getElementById("demo1").innerHTML = `Your Total percentage is  ${per}` + " %   ";


};