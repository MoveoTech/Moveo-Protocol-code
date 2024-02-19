import { CODE_FOR_EXAMPLE } from './resources/resources';
import { Button } from './shared/components/Button/Button.component';
import Example from './shared/components/Example';

function App() {
  return (
    <div>
      <Example code={CODE_FOR_EXAMPLE.TEXT} />
      <Button
        onClickFunc={() => {
          console.log('button clicked');
        }}
        label="Example Button"
      />
    </div>
  );
}

export default App;
