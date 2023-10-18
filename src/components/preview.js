// Preview...
//
// 	const output = await bundle(input);
// 	setCode(output.code);
//     setErr(output.err);
// }, 1000);
//
export default class Preview {
  constructor() {
    this.render();
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `<div>
      <h1>Hello Preview</h1>
    </div>`;

    this.element = wrapper.firstElementChild;
  }
}
