import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  data: z.union([
    z.string(),
    z.array(
      z.object({
        id: z.string().optional(),
        code: z.string().optional(),
        language: z.string().optional(),
      })
    ),
  ]),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  data: `
  <CodeMirror
  editable={false}
  value={title}
  theme={"dark"}
  height="300px"
  minHeight="600px"
  style={titleStyle}
  extensions={[javascript({ jsx: true })]}
  basicSetup={{
    lineNumbers: false,
    highlightActiveLine: false,
    highlightActiveLineGutter: false,
  }}
/>`,
};

export const DURATION_IN_FRAMES = 100;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;
