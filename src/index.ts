import BaseExtension from "wehub";

export default class Wxalice extends BaseExtension {
  activate() {
    console.log("Activated ", this.extensionName);
    setInterval(() => {
      this.dispatchEvent("helloBob", { message: "Hello Bob" });
    }, 500000000);
  }
}
