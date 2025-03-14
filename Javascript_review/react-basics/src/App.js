import { ConditionalRendering } from './Conditional';
import ThemeProvider from './Context/ThemeProvider';
import { Customer, Groceries, RenderMobiles } from './Props';
import ThemedButton from './ThemedButton';

function App() {

  
  return (
    <div>
        {/* <Customer/>
        <Groceries/>
        <RenderMobiles/>
        <ConditionalRendering/> */}
        <ThemeProvider>
          <div>

        <ThemedButton/>
          </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
