const Storage2= (items, sizeEach) => { return items * sizeEach}

const Storage = new Vue({
  el: '#Storage',
  data: {
    items: 6,
    sizeEach: 2
  },
  computed: {
    Storage1: function () {
      const i = parseInt(this.items)
      const j = parseInt(this.sizeEach)
      return `The storage space is ${Storage2(i, j)}.`
    }
  }
})