import { Node } from "./Node.js";

/**
 * Represents a linked list
 */
export class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  /**
   * Adds a new node containing the given value to the end of the list
   * @param {*} value - a single element of data to store in the new node
   * @returns {void}
   */
  append(value) {
    if (!this.#head) {
      this.#head = new Node(value, null);
      return;
    }

    this.#head.append(value);
  }

  /**
   * Adds a new node containing the given value to the start of the list
   * @param {*} value - a single element of data to store in the new node
   * @returns {void}
   */
  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  /**
   * Traverses the list, and returns the total number of nodes in the list
   * @returns {Number} linked list size
   */
  size() {
    if (!this.#head) {
      return 0;
    }

    return this.#head.size();
  }

  /**
   * Returns the first node in the list
   * @returns {Node|null} first node in list, null if empty
   */
  head() {
    return this.#head;
  }

  /**
   * Returns the last node in the list
   * @returns {Node|null} first node in list, null if empty
   */
  tail() {
    if (!this.#head) return this.#head;

    return this.#head.tail();
  }

  /**
   * Removes the last element from the list
   * @returns {void}
   */
  pop() {
    if (!this.#head) return;
    else if (this.#head.isLast()) this.#head = null;
    else this.#head.pop();
  }

  /**
   * Checks if the passed in value is in the list
   * @param {*} value - the element of data to be found in the list
   * @returns true if the passed in value is in the list, otherwise false
   */
  contains(value) {
    if (!this.#head) return false;

    return this.#head.contains(value);
  }

  /**
   * Finds the index of the node containing the value in the list
   * @param {*} value - the element of data to be found
   * @returns {Number|null} the index of the node containing value, or null if not found
   */
  find(value) {
    if (!this.#head) return null;

    return this.#head.find(value);
  }

  /**
   * Represents LinkedList objects as strings
   * @returns {string} formatted LinkedList (e.g. ( value ) -> ( value ) -> ( value ) -> null)
   */
  toString() {
    if (!this.#head) return "null";
    return this.#head.toString();
  }
}
