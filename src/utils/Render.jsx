import React from 'react';
import CustomMenuItem from '../components/CustomMenuItem';

export let renderCategoryTree = (categoryTreeComponent, valueSoFar) => {
  let menuItems = [];
  let count = 0;
  for (let key in categoryTreeComponent) {
    if (key === 'isLeaf') {
      continue;
    }
    let isLeaf = 'isLeaf' in categoryTreeComponent;
    if (valueSoFar !== '') {
      valueSoFar += '->';
    }
    valueSoFar += key;
    menuItems.push(
      <CustomMenuItem
        key={count}
        isLeaf={isLeaf}
        text={key}
        value={valueSoFar}
        toRender={categoryTreeComponent[key]}
      />
    );
    count++;
  }
  return menuItems;
};
