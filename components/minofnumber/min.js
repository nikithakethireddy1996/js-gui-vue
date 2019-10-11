const minofnumber = new Vue({
    el: '#minofnumber',
    data: {
      first: 6,
      second: 2
    },
    computed: {
      minofnumber: function () {
        const i = parseInt(this.first)
        const j = parseInt(this.second)
        if(i<j){
            return i;      
          }
        else
        {
          return j; 
        }
      }
    }
  })