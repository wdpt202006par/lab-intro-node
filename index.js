class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => a - b)
    // this.items.sort(function (a, b) {
    //   if (a < b) return -1;
    //   if (a > b) return 1;
    //   if (a === b) return 0;
    // });
    
    
    this.length++;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let maximum = Math.max(...this.items)
    // let maximum = -Infinity;
    // this.items.forEach(item => {
    //   if (item > maximum) maximum = item;
    // });

    return maximum;
  }

  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let minimum = Math.min(...this.items)
    // let minimum = Infinity;
    // this.items.forEach(item => {
    //   if (item < minimum) minimum = item;
    // });

    return minimum;
  }

  sum() {
    const sum = this.items.reduce((acc, item) => acc + item, 0);
    // let sum = 0;
    // this.items.forEach(item => sum += item)

    return sum;
  }

  avg() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }
    
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
