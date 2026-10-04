export const getHeight = (node) => {
    if (node === null) return 0;
    const leftHeigth = getHeight(node.left);
    const rightHeigth = getHeight(node.right);
    return Math.max(leftHeigth, rightHeigth) + 1; // important to add 1
}