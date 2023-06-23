import { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-github';

function InteractiveEditor() {
  const [value, setValue] = useState('');

  function onChange(newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <AceEditor
        mode="jsx"
        theme="github"
        onChange={onChange}
        value={value}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      {/* Code execution and display result components should go here */}
    </div>
  );
}

export default InteractiveEditor;
