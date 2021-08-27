function getChildren(t) {
  //   console.log(t.child.length);
  if (t.child === undefined) {
    return;
  }
  t.child.forEach((child) => {
    console.log(child.name);
   return getChildren(child);
  });
}

const tree = {
  name: "ola",
  child: [
    {
      name: "lola",
      child: [
        { name: "ola", child: [] },
        { name: "ola2", child: [{ name: "ola3", geting: 1 }] },
      ],
    },
    { name: "lola2", child: [{ name: "lola3", geting: 1 }] },
  ],
};

getChildren(tree);
