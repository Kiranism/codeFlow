import Code from "./Code";
import CodeCanvasToolBox from "./CodeCanvasToolBox";
import RemotioPlayer from "./RemotioPlayer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

export default function ResizableSec() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[calc(60vh)]  border"
    >
      <ResizablePanel
        defaultSize={41}
        minSize={30}
        maxSize={60}
        className="w-[500px]"
      >
        <div>
          <Code />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={59}>
        <div>
          <CodeCanvasToolBox />
          <RemotioPlayer mode="canvas" autoPlay={false} controls={true} />
          {/* <RenderControls
            text={text}
            setText={setText}
            inputProps={inputProps}
          ></RenderControls>
          <Spacing></Spacing>
          <Spacing></Spacing>
          <Spacing></Spacing>
          <Spacing></Spacing>
          <Tips></Tips> */}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
