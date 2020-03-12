const { ListNode, deserializeList, serializeList } = require('../utils');

// 2. medium
/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list. 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const initHolder = new ListNode(0);
  let result = initHolder;
  let carry = 0;
  let p1 = l1;
  let p2 = l2;

  while (p1 || p2) {
    const val1 = p1 ? p1.val : 0;
    const val2 = p2 ? p2.val : 0;
    const tmpResult = val1 + val2 + carry;

    carry = Math.floor(tmpResult / 10);
    result.next = new ListNode(tmpResult % 10);
    result = result.next;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }

  if (carry > 0) {
    result.next = new ListNode(carry)
  }

  return initHolder.next;
}

console.log(serializeList(addTwoNumbers(deserializeList([2, 4, 5]), deserializeList([3, 4, 5]))));
