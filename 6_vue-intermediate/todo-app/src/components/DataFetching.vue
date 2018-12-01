<script>
export default {
    render(h) {
        return h(null);
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            products: [],
        }
    }
    methods: {
        fetchData() {
            axios.get('products/1')
            .then({data} => this.products = data);
        }
    }
}
</script>