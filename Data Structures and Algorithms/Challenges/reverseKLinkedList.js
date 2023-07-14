var reverseKGroup = function (head, k) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    let curr = dummyNode;
    let prev = dummyNode;
    let next = dummyNode;

    let count = 0;

    while (curr.next) {
        curr = curr.next;
        count++;
    }

    while (count >= k) {
        curr = prev.next;
        next = curr.next;

        for (let i = 1; i < k; i++) {
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = curr.next;
        }
        prev = curr;
        count -= k;
    }

    return dummyNode.next;
};