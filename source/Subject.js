//Посадові особи: міністерство, організація, підрозділ, співробітник
class Subject {
    constructor(ministry, organization, unit, employee) {
        this._ministry = ministry;
        this._organization = organization;
        this._unit = unit;
        this._employee = employee;
        this._key = null;
    }

    get ministry() {
        return this._ministry;
    }

    set ministry(value) {
        this._ministry = value;
    }

    get organization(){
        return this._organization;
    }

    set organization(value){
        this._organization=value;
    }

    get unit(){
        return this._unit;
    }

    set unit(value){
        this._unit=value;
    }

    get employee(){
        return this._employee;
    }

    set employee(value){
        this._employee=value;
    }

    get key(){
        return this._key;
    }

    set key(value){
        this._key=value;
    }
}