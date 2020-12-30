const visit = require("unist-util-visit");
module.exports = addClasses;
function addClasses() {
  return (tree) => {
    visit(tree, "element", function (node) {
      node.children.forEach((child, index) => {
        const elClass = child?.value?.match(/\[@(.*?)\]/); //finds the class
        if (elClass) {
          //merges old classes with the new class
          const existingClassNames = node.properties.className || [];
          node.properties.className = [...existingClassNames, elClass[1]];

          node.children[index].value = node.children[index].value.replace(
            elClass[0],
            ""
          ); // removes the syntax from the the child
        }
      });
    });
  };
}
