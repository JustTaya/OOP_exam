//all sorts return the array of actions to build visualisation
class AbstractSort {
    constructor(array) {
        if (this.constructor === AbstractSort) {
            throw new TypeError('Abstract class "AbstractSort" cannot be instantiated directly.');
        }
        this._array = array;
        this._indexes = [];
    }

    sort() {
    }

    _swap(a, b) {
        this._indexes.push({ index1: a, index2: b, type: 'swap' });
        let tmp = this._array[a];
        this.this._array[a] = this._array[b];
        this.this._array[b] = tmp;
    }
}