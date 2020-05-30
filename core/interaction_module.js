function showCoDetails() {
    let root = document.getElementById("co-details-preview").parentNode;
    if(root.childElementCount === 1) {

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
        infected.innerHTML = "Infected: 4534532";

        let infectedNumber = document.createElement("P");
        infectedNumber.className = "co-details-highlight";

        let healthyWrapper = document.createElement("DIV");
        healthyWrapper.className = "co-details-wrapper";

        let healthy = document.createElement("P");
        healthy.className = "co-details";
        healthy.innerHTML = "Healthy: 3423345";

        let healthyNumber = document.createElement("P");
        healthyNumber.className = "co-details-highlight";

        root.appendChild(detailsWrapper);
        detailsWrapper.appendChild(country);
        detailsWrapper.appendChild(infectedWrapper);
        infectedWrapper.appendChild(infected);
        infectedWrapper.appendChild(infectedNumber);
        detailsWrapper.appendChild(healthyWrapper);
        healthyWrapper.appendChild(healthy);
        healthyWrapper.appendChild(healthyNumber);

        added = true;
    } else {
        root.removeChild(document.getElementById("co-details-parent"));
        added = false;
    }
}