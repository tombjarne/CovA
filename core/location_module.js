/*
import {Insignificant} from "./insignificant";
import {Moderate} from "./moderate";
import {Severe} from "./severe";
*/

/*
    Listeners
 */

var alreadyInvoked = false;

document.addEventListener("load", renderLocationInput(), true);
//document.body.addEventListener("change", renderLocationInput());

function retrieveLocationInput(request, parent, btn) {
    let xhttp = new XMLHttpRequest();
    let response;

    removeAutoComplete();
    xhttp.open("GET", "http://localhost:5000/autocomplete?country="+request, true);
    //xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            if(JSON.parse(this.responseText)){
                response = this.responseText;
                createAutoComplete(response, parent);
            }
        } else {

        }
    };
    xhttp.onerror = function() {}
    xhttp.send();
}

function createAutoComplete(response, parent) {
    response = JSON.parse(response);

    for(let i = 0; i < 3;i++){
        let resultItem = document.createElement('DIV');
        resultItem.className = 'result-item';

        let resultItemContext = document.createElement('P');
        resultItemContext.innerHTML = response[i].country;
        resultItemContext.className = "result-item-context";
        resultItemContext.id = response[i].country;
        resultItemContext.onclick = function () {
            sessionStorage.setItem('country', this.innerHTML);
            sessionStorage.setItem('countryId', this.id);
            document.getElementById("searchbar").value = sessionStorage.getItem("country");
            document.getElementById("submit-btn").setAttribute('disabled', false);
            removeAutoComplete();
        }

        if(document.getElementById(resultItemContext.id) == null){
            parent.parentNode.appendChild(resultItem);
            resultItem.append(resultItemContext);
        }
    }

}

function removeAutoComplete() {
    let fields = document.getElementsByClassName("result-item");
    let parent = document.getElementById("search-bar-wrapper");
    for(let i = 0; i < fields.length; i++){
        parent.removeChild(fields[i]);
    }
}

function renderLocationInput() {
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

        let btnWrapper = document.createElement('DIV');
        btnWrapper.id = "btn-wrapper";

        let submitBtn = document.createElement('A');
        submitBtn.className = 'submit-btn';
        submitBtn.id ="submit-btn";
        submitBtn.innerHTML = "Submit";
        submitBtn.setAttribute('disabled', true);
        submitBtn.onclick = function () {
            /*let xhttp = new XMLHttpRequest();
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


            }
            xhttp.send(request);

             */
            root.removeChild(promptContainer);
            sessionStorage.setItem("optIn", "1");
        }

        let skipBtn = document.createElement('A');
        skipBtn.className = 'skip-btn';
        skipBtn.innerHTML = "Skip";
        skipBtn.onclick = function () {
            root.removeChild(promptContainer);
            sessionStorage.setItem("optIn", "2");
            location.reload();
        }

        let searchBar = document.createElement('INPUT');
        searchBar.type = 'text';
        searchBar.placeholder = 'Search';
        searchBar.id = 'searchbar';
        searchBar.onkeydown = function () {
            let input = this.value;
            retrieveLocationInput(input, this, submitBtn);
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

        let optInWrapper = document.createElement("DIV");
        optInWrapper.className = "opt-in-wrapper";
        optInWrapper.onclick = function () {
            sessionStorage.setItem("optIn", "0");
            location.reload();
        }

        let optInHeading = document.createElement("P");
        optInHeading.className = "opt-in-heading";
        optInHeading.innerHTML = "change options";

        root.appendChild(optInWrapper);
        optInWrapper.appendChild(optInHeading);
    }
}