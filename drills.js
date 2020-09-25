const BinarySearchTree = require('./BinarySearchTree');

function testData() {
    let BST = new BinarySearchTree;
    BST.insert(25);
    BST.insert(15);
    BST.insert(50);
    BST.insert(10);
    BST.insert(24);
    BST.insert(35);
    BST.insert(70);
    BST.insert(4);
    BST.insert(12);
    BST.insert(18);
    BST.insert(31);
    BST.insert(44);
    BST.insert(66);
    BST.insert(90);
    BST.insert(22);
  
    return BST;
  
  }
  
function preOrder(bst) {
  console.log(bst.key);
  if(bst.left){
    preOrder(bst.left);
  }
  if(bst.right) {
    preOrder(bst.right);
  }
}
  
function inOrder(bst) {
  if(bst.left) {
    inOrder(bst.left)
  }
  console.log(bst.key);
  if(bst.right) {
    inOrder(bst.right);
  }
}

function postOrder(bst) {
  if (bst.left) {
    postOrder(bst.left);
  }
  if (bst.right) {
    postOrder(bst.right);
  }
  console.log(bst.key);
}

// preOrder(testData());
// inOrder(testData());
 postOrder(testData());
