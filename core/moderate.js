export class Insignificant {
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
        let styles = "./../styles/insignificant.css";
        return styles;
    }
}