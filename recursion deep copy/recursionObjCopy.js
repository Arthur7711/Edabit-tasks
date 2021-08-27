const tree = {
  name: "ola",
  child: {
    name: "lola",
    child: {
      name: "ola",
      child: { name: "ola2", child: { name: "ola3", child: {} } },
    },
  },
};

function checkTree(obj) {
  if (typeof obj.child === "object") {
    console.log(obj.name);
    return checkTree(obj.child);
  }
}

checkTree(tree);
