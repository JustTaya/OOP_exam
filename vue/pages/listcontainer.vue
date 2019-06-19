<template>
  <div>
    Зв'язний список
    <div id="container">
      <div id="graph-container"></div>
    </div>
    <input v-model="nodekey" type="number">
    <button @click="addNode_begin(nodekey)">Add to Begin</button>
    <button @click="addNode_end(nodekey)">Add to End</button>
    <button @click="addNode_index(nodekey)">Add after Index</button>
    <button @click="deleteNode(nodekey)">Delete</button>
    <button @click="findNode(nodekey)">Find</button>
    <button @click="changeNode(nodekey)" disabled>Change</button>
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
				nodekey: "1",
      			listView: null
			}
		},
		methods: {
			addNode_begin(key) {
				this.generateFromArray(this.listView.addNode_begin(key,null));
			},
			addNode_end(key) {
				this.generateFromArray(this.listView.addNode_end(key,null));
			},
			async addNode_index(key) {
				let afterValue = prompt("After key:", 1);
				let result=this.listView.addNode_after(key,null, afterValue);
				let index = this.listView.searchNode(afterValue);
				if (index != undefined && index != -1) {
					await this.findNode(afterValue);
					this.generateFromArray(result);
				}
			},
			async deleteNode(key) {
				let index = this.listView.searchNode(key);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#ff0000';
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 2500));
					this.generateFromArray(this.listView.deleteNode(key));
				}
			},
			addNode(key,value) {
				this.s.graph.addNode({
					id: 'n' + this.nodesCount++,
					label: key+'\n'+value,
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
			async findNode(key) {
				let index = this.listView.searchNode(key);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#00E676'
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 1000));
					this.s.graph.nodes()[index].color = '#D500F9'
					this.s.refresh();
				}
			},
			changeNode(key) {
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
						label: array[0].key+'\n'+array[0].value,
						x: this.nodesCount,
						y: 1,
						size: 10,
						color: '#D500F9'
					});
					this.s.refresh();
				}
				for (let i = 1; i < array.length; i++) {
					this.addNode(array[i].key,array[i].value);
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