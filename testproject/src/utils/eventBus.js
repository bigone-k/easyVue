import Vue from "vue";

export const eventBus = new Vue({
    methods: {
        updateEmit(date) {
            this.$emit('updateEmit', date)
        }
    }
})