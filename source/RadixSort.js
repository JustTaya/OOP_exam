class RadixSort extends AbstractSort {
    constructor(array) {
        super(array);
    }

    sort() {
        super.sort();
        let m = this._getMax(this._array.length);
        for (let exp = 1; (m / exp) > 0; exp *= 10) {
            this._countSort(this._array.length, exp);
        }
    }

    _getMax(n) {
        let mx = this._array[0];
        for (let i = 1; i < this._array.length; i++) {
            if (this._array[i] > mx) {
                mx = this._array[i];
            }
        }
        return mx;
    }

    _countSort(n, exp) {
        let output = new Array(n);
        let i, count = new Array(10);
        for (let value of count) {
            value = 0;
        }
        for (let i = 0; i < n; i++) {
            count[Math.floor(_array[i] / exp)]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = this._array[i];
            count[(arr[i] / exp) % 10]--;
        }
        for (let i = 0; i < n; i++) {
            this._array[i] = output[i];
        }
    }
}
