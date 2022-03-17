    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(data){
  
    if(data.target.status ==200){
        const valasz = data.target.response;
        const lista = JSON.parse(valasz);
        console.log(valasz);
        console.log(lista);
        const printpic = `<img src="${lista.file}" alt="random_cat_pic">`;
        document.getElementById('cat_pic').innerHTML = printpic;
    }
    }
    xhttp.open("GET", "https://aws.random.cat/meow")
    xhttp.send();