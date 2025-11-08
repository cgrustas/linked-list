/**
 * Represents a node in a linked list
 */
export class Node {
  #value;
  #nextNode;

  constructor() {
    this.#value = null;
    this.#nextNode = null;
  }

  /**
   * @returns a single element of data
   */
  get value() {
    return this.#value;
  }

  /**
   * @returns pointer to the next node in the list
   */
  get nextNode() {
    return this.#nextNode;
  }
}
