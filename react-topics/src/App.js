import './App.css';

// import ClsCmp from './ClsCmp'
import Parent from "./MethodAsProps";
import ConditionalRendering from "./ConditionalRendering";
import PersonList from "./ListInReact";
import CssStyleSheet from './CssStyleSheet'
import InlineStyling from "./InlineStyling";
import CssModuleStyling from "./CssModuleStyling";
import LifeCycleA from './componentLifeCycles/MountingLifeCycleMethods/LifeCycleA';
import LifeCycleC from './componentLifeCycles/UpdatingLifeCycleMethods/LifeCycleC';
import ParentComponent from './PureComponents/ParentComponent';
import RefDemo from './Ref/RefDemo';
import RefInClassComponent from './Ref/RefInClassComponent';
import ForwardingRef from './Ref/ForwardingRef';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import UseEffectAfterRender from './Hooks/UseEffectAfterRender';
import ConditonallyRenderUseEffect from './Hooks/ConditonallyRenderUseEffect';
import RunEffectsOnlyOnce from './Hooks/RunEffectsOnlyOnce';
import MouseContainer from './Hooks/MouseContainer';
import FectchingDataUsingUseEffect from './Hooks/FectchingDataUsingUseEffect';





function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <Parent />
      <ConditionalRendering />
      {/* <PersonList /> */}
      {/* <CssStyleSheet primary={true}/> */}
      {/* <InlineStyling /> */}
      <CssModuleStyling />
      {/* <LifeCycleA /> */}
      {/* <LifeCycleC /> */}
      {/* <ParentComponent /> */}
      {/* <RefDemo /> */}
      {/* <RefInClassComponent /> */}
      <ForwardingRef />

      {/* <ClickCounter name = 'syed'/>
      <HoverCounter name = 'rahul'/> */}

      {/* <UseEffectAfterRender /> */}
      {/* <ConditonallyRenderUseEffect /> */}
      {/* <RunEffectsOnlyOnce /> */}
      <MouseContainer />

      <FectchingDataUsingUseEffect />
      
    </div>
  );
}

export default App;

