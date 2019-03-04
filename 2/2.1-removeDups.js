// Remove Dups

// In: Head of unsorted Singly Linked List
// Out: Head of list
// Constraints: O(1) space complexity
// Assumptions: Always keep first instance of any duplicate
// Edge Cases: Circular List (assume no), empty list, 1 node list

// While not at the end of the list
// create pointer to current node
// iterate through rest of list
// if node.value equals current node.value
// set prevNode.next equal to node.next

const removeDups = head => {
  let nodeTracker = {};
  let currNode = head;
  let prevNode;
  while (currNode !== null) {
    if (nodeTracker[currNode.value]) {
      prevNode.next = currNode.next;
    } else {
      nodeTracker[currNode.value] = true;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
};

const removeDups = head => {
  let origNode = head;
  while (origNode.next !== null) {
    let currNode = origNode.next;
    let prevNode = origNode;
    while (currNode.next !== null) {
      if (currNode.value === origNode.value) {
        prevNode.next = currNode.next;
        currNode = currNode.next;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    origNode = origNode.next;
  }
};
