class HeapSort extends AbstractSort {
    constructor(array) {
        super(array);
    }

    sort() {
        super.sort();
        for (let i = this._array.length / 2 - 1; i >= 0; i--) {
            this._heapify(this._array.length, i);
        }
        for (let i = this._array.length - 1; i >= 0; i--) {
            this._swap(0, i);
            this._heapify(i, 0);
        }
        return this._indexes;
    }

    _swap(a, b) {
        super._swap(a, b);
    }

    _heapify(n, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        this._indexes.push({ index1: l, index2: largest, type: 'cmp' });
        if (l < n && this._array[l] > arr[largest]) {
            largest = l;
        }
        this._indexes.push({ index1: r, index2: largest, type: 'cmp' });
        if (r < n && this._array[r] > arr[largest]) {
            largest = r;
        }
        if (largest != i) {
            this._swap(i, largest);
            this._heapify(n, largest);
        }
    }
}