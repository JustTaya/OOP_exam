<template>
  <div>
    Листы
    <div id="container">
      <div id="graph-container"></div>
    </div>
    <input v-model="nodevalue" type="number">
    <button @click="addNode(nodevalue)">Add</button>
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
      listView: new ListView()
    };
  },
  methods: {
    addNode_begin(value) {
      generateFromArray(listView.addNode_begin(value));
    },
    addNode_end(value) {
		generateFromArray(listView.addNode_end(value));
    },
    async deleteNode(value) {
		generateFromArray(listView.deleteNode(value));
    },
    findNode(value) {},
    changeNode(value) {},
    generateFromArray(array) {
      if (array.length > 0) {
        this.s.graph.addNode({
          id: "n" + this.nodesCount++,
          label: array[0],
          x: this.nodesCount,
          y: Math.random() % 5,
          size: 5,
          color: "#D500F9"
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
      container: "graph-container"
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