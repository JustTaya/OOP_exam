<template>
    <div>
        Листы
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<input v-model="nodevalue" type="text">
		<button @click="addNode(nodevalue)">Add</button>
    </div>
</template>

<script>
    module.exports = {
		name: "list",
		data: function() {
			return {
				count: 0,
				s: null,
				nodevalue: 0
			}
		},
		methods: {
			addNode(value) {
				this.s.graph.addNode({
					id: 'n' + this.count++,
					label: value,
					x: this.count,
					y: 1,
					size: 5,
					color: '#D500F9'
				});
				if (this.count > 1) {
						this.s.graph.addEdge({
						id: 'e' + this.count,
						source: 'n' + (this.count - 2),
						target: 'n' + (this.count - 1),
						size: 2,
						color: '#AA00FF'
					});
				}
				this.s.refresh();
			},
			generateFromArray(array) {
				if (array.length > 0) {
					this.s.graph.addNode({
						id: 'n' + this.count++,
						label: array[0],
						x: this.count,
						y: Math.random() % 5,
						size: 5,
						color: '#D500F9'
					});
				}
				for (let i = 1; i < array.length; i++) {
					addNode(array[i]);
				}
			}
		},
        mounted() {
			this.s = new sigma({
					graph: {
						nodes: [],
						edges: []
					},
					container: 'graph-container'
				})
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