<template>
    <div>
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<input v-model="nodevalue" type="number">
		<button @click="addNode_begin(nodevalue)">Add to Begin</button>
		<button @click="addNode_end(nodevalue)">Add to End</button>
		<button @click="addNode_index(nodevalue)">Add after Index</button>
		<button @click="deleteNode(nodevalue)">Delete</button>
		<button @click="findNode(nodevalue)">Find</button>
		<button @click="changeNode(nodevalue)" disabled>Change</button>

		<modal-window v-show="modalShow" @datapassed="passData"></modal-window>
    </div>
</template>

<script>
    module.exports = {
		name: "list-sort",
		data: function() {
			return {
				nodesCount: 0,
				edgesCount: 0,
				s: null,
				nodevalue: "1",
      			listView: null,
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
			addNode_begin(value) {
				this.generateFromArray(this.listView.addNode_begin(value));
			},
			addNode_end(value) {
				this.generateFromArray(this.listView.addNode_end(value));
			},
			async addNode_index(value) {
				let afterValue = prompt("After value:", 1);
				let result = this.listView.addNode_after(value, afterValue);
				let index = this.listView.searchNode(afterValue);
				if (index != undefined && index != -1) {
					await this.findNode(afterValue);
					this.generateFromArray(result);
				}
			},
			async deleteNode(value) {
				let index = this.listView.searchNode(value);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#ff0000';
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 2500));
					this.generateFromArray(this.listView.deleteNode(value));
				}
			},
			addNode(value) {
				this.s.graph.addNode({
					id: 'n' + this.nodesCount++,
					label: value,
					x: this.nodesCount,
					y: 1,
					size: 10,
					color: '#D500F9'
				});
				if (this.nodesCount > 1) {
						this.s.graph.addEdge({
						id: 'e' + this.edgesCount++,
						source: 'n' + (this.nodesCount - 2),
						target: 'n' + (this.nodesCount - 1),
						size: 2,
						color: '#AA00FF'
					});
				}
				this.s.refresh();
			},
			async findNode(value) {
				let index = this.listView.searchNode(value);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#00E676'
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 1000));
					this.s.graph.nodes()[index].color = '#D500F9'
					this.s.refresh();
				}
			},
			changeNode(value) {
				let newValue = parseInt(prompt("Enter new value", 1));
			},
			generateFromArray(array) {
				this.s.kill();
				this.s = new sigma({
					graph: {
						nodes: [],
						edges: []
					},
					container: 'graph-container'
				});
				this.nodesCount = 0;
				this.edgesCount = 0;
				if (array.length > 0) {
					let tmp='n'+this.nodesCount++;
					this.s.graph.addNode({
						id: tmp,
						label: array[0],
						x: this.nodesCount,
						y: 1,
						size: 10,
						color: '#D500F9'
					});
					this.s.refresh();
				}
				for (let i = 1; i < array.length; i++) {
					this.addNode(array[i]);
				}
			}
		},
        mounted() {
			this.listView = new ListView();
			this.s = new sigma({
				graph: {
					nodes: [],
					edges: []
				},
				container: 'graph-container'
			});
        },
        components: {
            'modal-window': httpVueLoader('../components/modalWindow.vue')
        }
    };
</script>

<style scoped>
	#graph-container {
		top: 120px;
		bottom: 0;
		left: 0;
		right: 0;
		position: absolute;
	}
</style>