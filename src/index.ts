import BaseExtension from "wehub";

export default class Wxalice extends BaseExtension {
    activate() {
        console.log("Activated ", this.extensionName);
    }
}