new Vue({
    el: '#app',
    data: {
        discs: [],
        urlApi: location.href + 'api.php',
    },
    created() {
        axios.get(this.urlApi)
            .then(axiosResponse => {
                this.discs = axiosResponse.data;
                console.log('array dischi:', this.discs)
            });
    },
})