import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TagContructorPage from '../pages/TagConstructorPage';
import TagSumaryPage from '../pages/TagSumaryPage';

export default function TagConstructorParent() {
  const [TAGs, setTAGs] = React.useState([]);

  const handleAddTag = (tag) => {
    let currentIndex = 0;
    if (TAGs.length > 0) {
      currentIndex = TAGs[0].currentIndex + 1;
    }
    setTAGs((prevState) => [
      { currentIndex: currentIndex, ...tag },
      ...prevState,
    ]);
  };

  const handleChangeTag = (index, newTag) => {
    setTAGs((prevState) => {
      prevState[index] = newTag;
      return [...prevState];
    });
  };

  const handleRemoveTag = (index) => {
    setTAGs((prevState) => {
      const newTAGs = prevState.filter((_, i) => {
        return i !== index;
      });
      return newTAGs;
    });
  };

  return (
    <Switch>
      <Route path="/tag-constructor/sumary">
        {TAGs.length > 0 ? (
          <TagSumaryPage
            TAGs={TAGs}
            onChange={handleChangeTag}
            onRemove={handleRemoveTag}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/tag-constructor',
            }}
          />
        )}
      </Route>
      <Route path="/tag-constructor">
        <TagContructorPage TAGs={TAGs} onAddTag={handleAddTag} />
      </Route>
    </Switch>
  );
}
