/*function lookupData() {
    fetch("world.php")
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').textContent = data;
    })
    .catch(error => {
        // Handle any errors
        console.error("Error", error);
        document.getElementById('result').textContent = 'Failed to fetch data.';
    })
}


document.getElementById("lookup").addEventListener("click", lookupData);
*/


document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("lookup");

        search.addEventListener("click", function(){

            fetch("http://localhost/info2180-lab5/world.php")
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').textContent = data;
            })
            .catch(error => {
                // Handle any errors
                console.error("Error", error);
                document.getElementById('result').textContent = 'Failed to fetch data.';
            })
        });
})
