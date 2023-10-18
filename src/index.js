import Preview from "./components/preview.js";

const preview = new Preview();
const root = document.getElementById("root");

root.append(preview.element);

// NOTE: enable esbuild live-reload: https://esbuild.github.io/api/#live-reload
new EventSource("/esbuild").addEventListener("change", () => location.reload());
