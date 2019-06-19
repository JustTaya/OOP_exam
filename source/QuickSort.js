class QuickSort extends AbstractSort {
    constructor(array) {
        super(array);
    }
    sort() {
        super.sort();
        this._sort(0, this._array.length - 1)
    }

    _sort(lo, hi) {
        if (lo < hi) {
            let p = this._partition(lo, hi);
            this._sort(lo, p - 1);
            this._sort(p + 1, hi);
        }
    }

    _swap(a, b) {
        super._swap(a, b);
    }

    _partition(lo, hi) {
        let pivot = this._array[hi];
        let i = lo;
        for (let j = lo; j < hi; j++) {
            if (this._array[j] < pivot) {
                this._swap(i, j);
                i++;
            }
        }
        this._swap(i, hi);
        return i;
    }
}