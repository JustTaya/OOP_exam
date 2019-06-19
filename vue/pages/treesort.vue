<template>
    <div class="tree-page">
        <canvas-panel></canvas-panel>
        <modal-window v-show="modalShow" @datapassed="passData"></modal-window>
    </div>
</template>

<script>
    module.exports = {
        name: "tree-sort",
        data: function() {
            return {
                modalShow: false
            }
        },
        methods: {
            async passData(value) {
                // * Value has 4 fields which are accessable via value.param1 .. value.param4
                // ! Use this.modalShow = true to show modal window
                console.log(value);
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.modalShow = false;
            }
        },
        components: {
            'canvas-panel': httpVueLoader('../components/canvasPanel.vue'),
            'modal-window': httpVueLoader('../components/modalWindow.vue')
        }
    }
</script>

<style scoped>
    .tree-page {
        position: absolute;
        height: calc(100% - 40px - 80px);
        width: calc(100% - 32px);
        margin: 0px 16px;
    }
</style>