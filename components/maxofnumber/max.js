

const maxofnumber = new Vue({
  el: '#maxofnumber',
  data: {
    first: 6,
    second: 2
  },
  computed: {
    maxofnumber: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      if(i>j){
          return i;      
        }
      else
      {
        return j; 
      }
    }
  }
})