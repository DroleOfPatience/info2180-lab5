document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("lookup");


    
    search.addEventListener("click", function(){
        var place = document.getElementById("country").value;
        jax = new XMLHttpRequest();
        jax.open('GET', `http://localhost/info2180-lab5/world.php?country=${place}`)
        
        jax.onload = function(){
            if(jax.status==200){
                console.log("place")
                document.getElementById('result').innerHTML = this.responseText;
            }else{
                console.log("Error")
                document.getElementById('result').innerHTML = 'Failed to fetch data.';
            }
        }
        jax.send();
        
    });
})
