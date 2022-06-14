var app = new Vue({
    el: '#app',
    data: {
        form : 'tampilanutama.html',
        pilih:'',  
    },
    methods: {
        click ()
        {
            return this.form = this.pilih;
        }
    }
})