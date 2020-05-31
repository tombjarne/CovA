function showCoDetails() {

    let root = document.getElementById("co-details-preview").parentNode;
    if(root.childElementCount === 1) {

        let infectedNum = 0;
        let recoveredNum = 0;
        let country = sessionStorage.getItem("country");
        let index;
        let query = "";
        let xhttp = new XMLHttpRequest();

        /*
        if(country != undefined){
            console.log(country);
            query += "/live/country/"+country;
            index = 1;
        } else {
            query = "summary";
        }
         */

        query = "summary";

        xhttp.open("GET", "https://api.covid19api.com/"+query, true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(index == 1){
                    index = JSON.parse(this.responseText).length;
                    result = JSON.parse(this.responseText)[index];
                }
                result = JSON.parse(this.responseText);
                infectedNum = JSON.stringify(result.Global.TotalConfirmed);
                recoveredNum = JSON.stringify(result.Global.TotalRecovered);

                let detailsWrapper = document.createElement("DIV");
                detailsWrapper.className = "co-details-parent";
                detailsWrapper.id = "co-details-parent";

                let country = document.createElement("H4");
                country.className = "co-details";
                country.innerHTML = "Global";

                let infectedWrapper = document.createElement("DIV");
                infectedWrapper.className = "co-details-wrapper";

                let infected = document.createElement("P");
                infected.className = "co-details";
                infected.innerHTML = "Infected: ";

                let infectedNumber = document.createElement("P");
                infectedNumber.className = "co-details-highlight";
                infectedNumber.innerHTML = infectedNum;

                let healthyWrapper = document.createElement("DIV");
                healthyWrapper.className = "co-details-wrapper";

                let healthy = document.createElement("P");
                healthy.className = "co-details";
                healthy.innerHTML = "Recovered: ";

                let healthyNumber = document.createElement("P");
                healthyNumber.className = "co-details-highlight";
                healthyNumber.innerHTML = recoveredNum;

                root.appendChild(detailsWrapper);
                detailsWrapper.appendChild(country);
                detailsWrapper.appendChild(infectedWrapper);
                infectedWrapper.appendChild(infected);
                infectedWrapper.appendChild(infectedNumber);
                detailsWrapper.appendChild(healthyWrapper);
                healthyWrapper.appendChild(healthy);
                healthyWrapper.appendChild(healthyNumber);

                added = true;
            }
        };
        xhttp.send();
    } else {
        root.removeChild(document.getElementById("co-details-parent"));
        added = false;
}
}

function next() {
    let obj = document.getElementById("data-explorer-mock");
    let relPath = obj.src.split('/assets')[0];
    let imageList = [relPath + "/assets/img/sample-1.jpg", relPath + "/assets/img/sample-2.jpg", relPath + "/assets/img/sample-3.jpg"];

    if(obj.src.includes(imageList[0])){
        obj.src = imageList[1];
        document.getElementById("data-explorer-mock").src = imageList[1];
    }

    if(obj.src.includes(imageList[1])){
        obj.src = imageList[2];
    }

    if(obj.src.includes(imageList[2])){
        obj.src = imageList[3];
    }

    if(obj.src.includes(imageList[3])){
        obj.src = imageList[0];
    }
}

function toggleMap(obj) {
    let map = document.getElementById("data-explorer-wrapper");
    if(map.style.display != "flex"){
        map.style.display = "flex";
        obj.innerHTML = "Close map";
    } else {
        map.style.display = "none";
        obj.innerHTML = "Explore the map";
    }
}

function extendSection(bool) {
    let section = document.getElementById("datasets-wrapper");

    if(bool === true){
        section.style.display = "flex";
        document.getElementById("cta-arrow").style.display = "none";
    } else {
        section.style.display = "none";
        document.getElementById("cta-arrow").style.display = "flex";
    }
}