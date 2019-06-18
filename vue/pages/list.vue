<template>
    <div>
        Однозв'язний список
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<input v-model="nodevalue" type="number">
		<button @click="addNode_begin(nodevalue)">Add to Begin</button>
		<button @click="addNode_end(nodevalue)">Add to End</button>
		<button @click="addNode_index(nodevalue)">Add after Index</button>
		<button @click="deleteNode(nodevalue)">Delete</button>
		<button @click="findNode(nodevalue)">Find</button>
		<button @click="changeNode(nodevalue)">Change</button>
    </div>
</template>

<script>
    module.exports = {
		name: "list",
		data: function() {
			return {
				nodesCount: 0,
				edgesCount: 0,
				s: null,
				nodevalue: 1,
      			listView: null
			}
		},
		methods: {
			addNode_begin(value) {
				this.generateFromArray(this.listView.addNode_begin(value));
			},
			addNode_end(value) {
				this.generateFromArray(this.listView.addNode_end(value));
			},
			addNode_index(value) {
				let index = this.listView.searchNode(value);
				let afterValue = prompt("After value:", 1);
				let result=this.listView.addNode_after(value, afterValue);
				console.log(result);
				this.generateFromArray(result);
			},
			async deleteNode(value) {
				let index = this.listView.searchNode(value);
				this.s.graph.nodes()[index].color = '#ff0000';
				this.s.refresh();
				await new Promise(resolve => setTimeout(resolve, 2500));
				this.generateFromArray(this.listView.deleteNode(value));
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
			findNode(value) {
				this.s.graph.nodes()[value].color = '#00E676'
				this.s.refresh();
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