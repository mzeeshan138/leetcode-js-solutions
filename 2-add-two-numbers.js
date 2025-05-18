/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current = current.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummyHead.next;
};
