// 21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let rs = new ListNode(null);
  const head = rs;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      rs.next = l1;
      l1 = l1.next;
    } else {
      rs.next = l2;
      l2 = l2.next;
    }

    rs = rs.next;
  }

  rs.next = l1 ?  l1 : l2;

  return head.next;
};
