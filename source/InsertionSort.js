class InsertionSort extends AbstractSort {
    constructor(array) {
        super(array);
    }

    sort() {
        super.sort();
        for (let i = 1; i < this._array.length; i++) {
            let currentValue = this._array[i];
            let previousPosition = i - 1;
            while (previousPosition >= 0 && array[previousPosition] > currentValue) {
                this._swap(previousPosition + 1, previousPosition);
                previousPosition--;
            }
        }
    }

    _swap(a, b) {
        super._swap(a, b);
    }
}