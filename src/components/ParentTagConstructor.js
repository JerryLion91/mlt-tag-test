import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TagContructorPage from './pages/TagConstructorPage';
import TagSumaryPage from './pages/TagSumaryPage';

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

  const handleChangeTAGs = (TAGs) => {
    console.log(TAGs);
  };

  return (
    <Switch>
      <Route path="/tag-constructor/sumary">
        <TagSumaryPage TAGs={TAGs} onChange={handleChangeTAGs} />
      </Route>
      <Route path="/tag-constructor">
        <TagContructorPage TAGs={TAGs} onAddTag={handleAddTag} />
      </Route>
    </Switch>
  );
}
