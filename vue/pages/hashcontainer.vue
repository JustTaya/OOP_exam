<template>
    <div>
		Generte array with size of <input v-model="hashsize" type="number">
        <button @click="initHash(hashsize)">Generate</button><br><br>
        <input v-model="hashvalue" type="number">
		<button @click="addKey(hashvalue)">Add</button>
		<button @click="colorNode(hashvalue)">Find</button>

        <table ref="hashTable"></table>

        <modal-window v-show="modalShow" @datapassed="passData"></modal-window>
    </div>
</template>

<script>
    module.exports = {
        name: "hash-container",
        data: function() {
            return {
                hashsize : "1",
                hashvalue : "1",
                cuckoo: null,
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
            },
            addKey() {

            },
            findKey(value) {
                
            },
            colorNode(index) {
                let foundNode = document.getElementById('node' + index);
                if (foundNode != null)
                    foundNode.classList.add('selectedTd');
            },
            uncolorNode(index) {
                let foundNode = document.getElementById('node' + index);
                if (foundNode != null)
                    foundNode.classList.remove('selectedTd');
            },
            renderTable(array) {
                this.$refs.hashTable.innerHTML = "";
                let len = array.length;
                let firstRow = document.createElement('tr');
                let secondRow = document.createElement('tr');
                for (let i = 0; i < len; i++) {
                    let newTd = document.createElement('td');
                    newTd.innerHTML = i;
                    firstRow.appendChild(newTd);
                    let newIdTd = document.createElement('td');
                    newIdTd.innerHTML = array[i].value == undefined ? '-' : array[i].value;
                    newIdTd.id = 'node' + i;
                    if (array[i].selected) {
                        newIdTd.classList.add('selectedTd');
                    }
                    secondRow.appendChild(newIdTd);
                }
                this.$refs.hashTable.appendChild(firstRow);
                this.$refs.hashTable.appendChild(secondRow);
            },
            initHash(value) {
                // * Init array with given number of nodes
            }
        },
        mounted() {
            this.initHash();
        },
        components: {
            'modal-window': httpVueLoader('../components/modalWindow.vue')
        }
    };
</script>

<style scoped>

    table {
        border-collapse: collapse;
        margin-bottom: 16px;
    }

    td {
        padding: 8px 16px;
        text-align: center;
    }

    tr {
        color: white;
        background: black;
    }

    table tr + tr {
        color: gray !important;
        background: white !important;
    }

    .selectedTd {
        background: red;
        color: white;
    }
</style>