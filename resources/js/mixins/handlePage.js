// handlePage (mixin)
export const handlePage = {
    created() {
        // some code
    },
    data() {
        return {
            // some data
        }
    },
    methods: {
        maxheight() {
            let sb = document.getElementsByClassName("sidebar");
            let cw = document.getElementsByClassName("content-wrapper");
            // console.log(cw[0]);
            cw[0].setAttribute("style", "min-height:" + sb[0].clientHeight + "px;");
        }
    }
};