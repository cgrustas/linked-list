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
    if (this.#head === null) {
      this.#head = new Node(value, null);
    } else {
      let temp = this.#head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value, null);
    }
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
    let size = 0;
    let temp = this.#head;
    while (temp !== null) {
      size++;
      temp = temp.nextNode;
    }
    return size;
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
    if (this.#head === null) return this.#head;

    let temp = this.#head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  /**
   * Removes the last element from the list
   * @returns {void}
   */
  pop() {
    if (this.#head === null) return;

    let prev = this.#head;
    if (prev.nextNode === null) {
      this.#head = null;
      return;
    }

    let curr = prev.nextNode;
    while (curr.nextNode !== null) {
      prev = prev.nextNode;
      curr = curr.nextNode;
    }
    prev.nextNode = null;
  }

  /**
   * Checks if the passed in value is in the list
   * @param {*} value - the element of data to be found in the list
   * @returns true if the passed in value is in the list, otherwise false
   */
  contains(value) {
    if (this.#head === null) return false;
    let temp = this.#head;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  /**
   * Finds the index of the node containing the value in the list
   * @param {*} value - the element of data to be found
   * @returns {Number|null} the index of the node containing value, or null if not found
   */
  find(value) {
    if (this.#head === null) return null;

    let temp = this.#head;
    let index = 0;
    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }
    return null;
  }

  /**
   * Represents LinkedList objects as strings
   * @returns {string} formatted LinkedList (e.g. ( value ) -> ( value ) -> ( value ) -> null)
   */
  toString() {
    let string = "";
    let temp = this.#head;
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    string += "null";
    return string;
  }
}
