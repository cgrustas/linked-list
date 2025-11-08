/**
 * Represents a node in a linked list
 */
export class Node {
  value;
  nextNode;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
