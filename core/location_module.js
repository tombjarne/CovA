/*import {Insignificant} from "./insignificant";
import {Moderate} from "./moderate";
import {Severe} from "./severe";
*/

/*
    Listeners
 */

document.addEventListener("load", renderLocationInput(), true);
//document.body.addEventListener("change", renderLocationInput());

function retrieveLocationInput(request, parent, btn) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./../servlet/autocomplete.py", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            let content = response.results;
            let container = false;

            for(let i = 0; i < response.length;i++){
                let resultItem = document.createElement('DIV');
                resultItem.className = 'result-item';

                let resultItemContext = document.createElement('P');
                resultItemContext.innerHTML = content[i].name;
                resultItemContext.className = "result-item-context";
                resultItemContext.id = content[i].id.toString();
                resultItemContext.onclick = function () {
                    sessionStorage.setItem('country', this.innerHTML);
                    sessionStorage.setItem('countryId', this.id);
                    btn.id = 'submit-btn-active';
                }

                while (container == false){
                    parent.appendChild(resultItem);
                    container = true;
                }

                resultItem.append(resultItemContext);
            }

        } else {
            console.log("an error has occured, please try again later");
        }
    };
    xhttp.send(request);
}

function renderLocationInput() {
    console.log(sessionStorage.getItem("optIn"));
    if(sessionStorage.getItem("optIn") == "0"){
        let root = document.childNodes[1];

        let promptContainer = document.createElement('DIV');
        promptContainer.id = 'prompt-container';

        let promptHeading = document.createElement('H1');
        promptHeading.innerHTML = 'Please specify your location';
        promptHeading.class = 'prompt-heading';

        let promptAdvice = document.createElement('P');
        promptAdvice.innerHTML = 'You can also skip this process by clicking the skip button';
        promptAdvice.class = 'prompt-advice';

        let searchBarWrapper = document.createElement('DIV');
        searchBarWrapper.id = "search-bar-wrapper";

        let searchBar = document.createElement('INPUT');
        searchBar.type = 'text';
        searchBar.placeholder = 'Search';
        searchBar.id = 'searchbar';
        searchBar.onkeyup = function () {
            let input = this.value;
            retrieveLocationInput(input, this, btn);
        }

        let btnWrapper = document.createElement('DIV');
        btnWrapper.id = "btn-wrapper";

        let submitBtn = document.createElement('A');
        submitBtn.className = 'submit-btn';
        submitBtn.innerHTML = "Submit";
        submitBtn.onlick = function () {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", "./../servlet/location_log.py", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 201) {
                    let response = this.responseText; //awaits json
                    let newStyle = "./../assets/styles/"+response.severeness+".css";
                    let oldStyle = document.getElementsByTagName('link').item(0);

                    sessionStorage.setItem('countryTimer',response.timestamp);
                    sessionStorage.setItem('severeness', response.severeness);
                    sessionStorage.setItem('deaths', response.details.deaths);
                    sessionStorage.setItem('infected', response.details.infected);

                    document.getElementsByTagName('head').item[0].replaceChild(newStyle, oldStyle);
                    root.removeChild(promptContainer);

                } else {
                    console.log("an error has occured, please try again later");
                }
            };
            xhttp.send(request);
            sessionStorage.setItem("optIn", "1");
        }

        let skipBtn = document.createElement('A');
        skipBtn.className = 'skip-btn';
        skipBtn.innerHTML = "Skip";
        skipBtn.onclick = function () {
            root.removeChild(promptContainer);
            sessionStorage.setItem("optIn", "2");
            window.location = "index.html";
        }

        root.appendChild(promptContainer);
        promptContainer.appendChild(promptHeading);
        promptContainer.appendChild(promptAdvice);
        promptContainer.appendChild(searchBarWrapper);
        searchBarWrapper.appendChild(searchBar);
        promptContainer.appendChild(btnWrapper);
        btnWrapper.appendChild(submitBtn);
        btnWrapper.appendChild(skipBtn);
    } else {
        let root = document.childNodes[1];
        console.log(root);

        let optInWrapper = document.createElement("DIV");
        optInWrapper.className = "opt-in-wrapper";
        optInWrapper.onclick = function () {
            sessionStorage.setItem("optIn", "0");
            window.location = "index.html";
        }

        let optInHeading = document.createElement("P");
        optInHeading.className = "opt-in-heading";
        optInHeading.innerHTML = "change options";

        root.appendChild(optInWrapper);
        optInWrapper.appendChild(optInHeading);
    }
}