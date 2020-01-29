new Vue({
    el: '#vue-app-one',
    data: {
        output:''
    },
    methods: {
        readRefs: function(){
            this.output=this.$refs.input.value;//tu prends tout les ref dans la balise d'id de l'instance
        }
    }
});
