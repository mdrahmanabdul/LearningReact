
import { ConditionalRendering } from './Conditional';
import { Customer, Groceries, RenderMobiles } from './Props';

function App() {
  return (
    <div>
        <Customer/>
        <Groceries/>
        <RenderMobiles/>
        <ConditionalRendering/>
    </div>
  );
}

export default App;
