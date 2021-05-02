const app = new Vue({
    el: "#app",
    data: {
        images: ["img/cactus.jpg",
            "img/horses.jpg",
            "img/trees.jpg",
            "img/wheat.jpg"],
        currentIndex: 0,
    },
    methods: {
        currentImage() {
            return this.images[this.currentIndex];
        },
        onDotClick(a) {
            this.currentIndex = a;
        },
        forward() {
            this.currentIndex++
            if (this.currentIndex >= this.images.length) {
                this.currentIndex = 0;
            }
        },
        backward() {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.images.length-1;
            }
        },
    }
})