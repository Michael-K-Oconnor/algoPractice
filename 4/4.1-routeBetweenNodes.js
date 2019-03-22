// Route between Nodes
// In: Node1, Node2
// Out: Boolean, true if there is a route between Nodes
// Constraints: n/a
// Assumptions: Directed graph
// Cases: Not connected, connected both directions, connected one direction

// Create two queues
// add Node1 and Node2 to respective queues
// while queue1 and queue2 are not empty
// if queue1 is not empty
// dequeue queue1
// check if node is Node2
// enqueue connected nodes
// return false

const routeBetweenNodes = (node1, node2) => {
  if (node1 === node2) return true;
  let queue1 = [];
  let queue2 = [];
  queue1.push(node1);
  queue2.push(node2);
  while (queue1.length || queue2.length) {
    if (queue1.length) {
      let currNode = queue1.splice(0, 1);
      if (currNode === node2) return true;
      currNode.visited1 = true;
      for (let node of currNode.adjacent) {
        if (!node.visited1) {
          queue1.push(node);
        }
      }
    }
    if (queue2.length) {
      let currNode = queue2.splice(0, 1);
      if (currNode === node1) return true;
      currNode.visited2 = true;
      for (let node of currNode.adjacent) {
        if (!node.visited2) {
          queue2.push(node);
        }
      }
      return false;
    }
  }
};
