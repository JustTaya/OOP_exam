class QuadraticProbing {
    constructor(n) {
        this._size = n;
        this._table = new Array(n);
        this._empty = new Array(n);
        for (let i = 0; i < n; ++i) {
            this._table[i] = 0;
            this._empty[i] = true;
        }
    }

    insertKey(key) {
        let index = 0;
        let arr = [];
        for (let i = 0; i < n; i++) {
            index = (key + i * i) % this._size;
            arr.push(index);
            if (this._empty[index]) {
                this._table[index] = key;
                this._empty[index] = false;
                return { indexes: arr ,  pos: index };
            }
        }
        return { indexes: arr ,  pos: -1 };
    }

    searchKey() {
        let index = 0;
        let arr = [];
        for (let i = 0; i < n; i++) {
            index = (key + i * i) % this._size;
            if (!this._empty[index] && _table[index] === key) {
                this._table[index] = key;
                this._empty[index] = false;
                return { indexes: arr ,  pos: index };
            }
        }
        return { indexes: arr ,  pos: -1 };
    }

    get table() {
        return this._table;
    }
}