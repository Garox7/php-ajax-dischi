new Vue({
    el: '#app',
    data: {
        genre: 'all',
        arr_genres: [],
        arr_discs: [],
        urlDiscs: location.href + 'api/discs.php',
        urlGenres: location.href + 'api/genre.php',
    },
    created() {
        axios.get(this.urlDiscs)
            .then(axiosResponse => this.arr_discs = axiosResponse.data);

        axios.get(this.urlGenres)
            .then(axiosResponse => this.arr_genres = axiosResponse.data);
    },
    methods: {
        getList() {
            axios.get(this.urlDiscs, {
                params: {
                    genre: this.genre,
                }
            })
                .then(axiosResponse => this.arr_discs = axiosResponse.data);
        }
    }
})