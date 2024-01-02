import { langs } from "@uiw/codemirror-extensions-langs";

const js = [langs.javascript({ jsx: true })];
const python = [langs.python()];
const css = [langs.css()];
const html = [
  langs.html({
    autoCloseTags: true,
    matchClosingTags: true,
    selfClosingTags: true,
  }),
];

export const langOptions = [
  { value: "js", label: "Javascript", extensions: js },
  { value: "html", label: "Html", extensions: html },
  { value: "python", label: "Python", extensions: python },
  { value: "css", label: "css", extensions: css },
];
