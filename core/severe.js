export class Severe {
    constructor(country, date) {
        this.country = country;
        this.date = date;
    }

    getCountry() {
        return this.country;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        if(date > this.date) {
            this.date = date;
        }
    }

    getStyles() {
        let styles = "./../styles/severe.css";
        return styles;
    }
}