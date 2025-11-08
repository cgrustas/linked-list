/**
 * Represents a node in a linked list
 */
export class Node {
  #value;
  #nextNode;

  constructor(value = null, nextNode = null) {
    this.#value = value;
    this.#nextNode = nextNode;
  }

  /**
   * Appends a node to the end of the chain
   * @param {*} value - the value to append
   * @returns {void}
   */
  append(value) {
    if (!this.#nextNode) {
      this.#nextNode = new Node(value, null);
      return;
    }

    this.#nextNode.append(value);
  }

  /**
   * Returns the total number of elements in the chain (including this node)
   * @returns {number} size of the chain
   */
  size() {
    if (!this.#nextNode) return 1;

    return 1 + this.#nextNode.size();
  }

  /**
   * Returns the last node in the chain (including this node)
   * @returns {Node} tail node
   */
  tail() {
    if (!this.#nextNode) return this;

    return this.#nextNode.tail();
  }

  /**
   * Removes the last node in the chain (excluding this node)
   * @returns {void}
   */
  pop() {
    if (!this.#nextNode) {
      return;
    } else if (this.#nextNode.isLast()) {
      this.#nextNode = null;
    } else {
      this.#nextNode.pop();
    }
  }

  /**
   * Checks if this is the last node in the chain
   * @returns {boolean} true if this is the last node, false otherwise
   */
  isLast() {
    if (!this.#nextNode) {
      return true;
    }
    return false;
  }

  /**
   * Checks if the given value is in the chain
   * @param {*} value - the element of data to be found in the chain
   * @returns true if the passed in value is in the chain, otherwise false
   */
  contains(value) {
    if (this.#value === value) return true;
    else if (this.#nextNode) return this.#nextNode.contains(value);
    else return false;
  }

  /**
   * Finds the index of the node containing the given value in the chain
   * @returns {Number|null} the index of the node containing value, or null if not found
   */
  find(value) {
    if (this.#value === value) return 0;
    else if (this.#nextNode) {
      const result = this.#nextNode.find(value);
      return result === null ? null : 1 + result;
    } else return null;
  }

  /**
   * Represents this chain of nodes as a string
   * @returns {string} formatted linked list (e.g. ( value ) -> ( value ) -> ( value ) -> null)
   */
  toString() {
    if (!this.#nextNode) return `( ${this.#value} ) -> null`;

    return `( ${this.#value} ) -> ` + this.#nextNode.toString();
  }
}
