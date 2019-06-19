<template>
    <div>
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<input v-model="nodevalue" type="number">
		<button @click="regenerate(nodevalue)">Generate</button>
		<button @click="sort1">Insert Sort</button> <!-- // ! Change Sort name -->
		<button @click="sort2">Quick sort</button> <!-- // ! Change Sort name -->
		<button @click="sort3">Heap sort</button> <!-- // ! Change Sort name -->
		<button @click="sort4">Radix sort</button> <!-- // ! Change Sort name -->
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
				sorted: null,
				nodevalue: "1",
				listView: null,
				sortedListView: null
			}
		},
		methods: {
			sort1() {
				let resArray = []; // ! Return sorted array here
				addSortedFromArray(resArray);
			},
			sort2() {
				let resArray = []; // ! Return sorted array here
				addSortedFromArray(resArray);
			},
			sort3() {
				let resArray = []; // ! Return sorted array here
				addSortedFromArray(resArray);
			},
			sort4() {
				let resArray = []; // ! Return sorted array here
				addSortedFromArray(resArray);
			},
			regenerate(value) {
				this.sorted.clearList();
				let count = parseInt(this.nodevalue);
				for (let i = 0; i < count; i++) {
					let newVal = Math.random() % 100;
					this.addSingleNode(newVal);
				}
			},
			addSingleNode(value) {
				this.generateFromArray(this.listView.addNode_end(value));
			},
			addNode(value, pos) {
				this.s.graph.addNode({
					id: 'n' + this.nodesCount++,
					label: value,
					x: this.nodesCount,
					y: pos,
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
					this.addNode(array[i], 1);
				}
			},
			addSortedFromArray(array) {
				if (array.length > 0) {
					let tmp='n'+this.nodesCount++;
					this.s.graph.addNode({
						id: tmp,
						label: array[0],
						x: this.nodesCount,
						y: 3,
						size: 10,
						color: '#D500F9'
					});
					this.s.refresh();
				}
				for (let i = 1; i < array.length; i++) {
					this.addNode(array[i], 3);
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