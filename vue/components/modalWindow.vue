<template>
    <div class="blurredbcg">
        <div class="modal-window">
            <h3>Insert data</h3>
            <label for="field1">Field 1</label><br>
            <input type="text" name="field1" v-model="field1"><br><br>

            <label for="field2">Field 2</label><br>
            <input type="text" name="field2" v-model="field2"><br><br>

            <label for="field3">Field 3</label><br>
            <input type="text" name="field3" v-model="field3"><br><br>

            <label for="field4">Field 4</label><br>
            <input type="text" name="field4" v-model="field4"><br><br>

            <button @click="returnData">Pass</button>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: "modal-window",
        data: function() {
            return {
                field1: '',
                field2: '',
                field3: '',
                field4: ''
            }
        },
        methods: {
            returnData() {
                this.$emit('datapassed', {
                    param1: this.field1,
                    param2: this.field2,
                    param3: this.field3,
                    param4: this.field4
                });
                this.field1 = '';
                this.field2 = '';
                this.field3 = '';
                this.field4 = '';
            }
        }
    };
</script>

<style scoped>

    .blurredbcg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #00000088;
        z-index: 9999999;
    }

    .modal-window {
        position: fixed;
        z-index: 10000000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
        background: white;
        padding: 0px 16px 16px 16px;
        border-radius: 4px;
    }

    .modal-window input {
        width: 120px;
        padding: 4px 8px;
    }

    .modal-window label {
        text-align: center;
    }
</style>