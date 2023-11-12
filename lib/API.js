export class API {

    #shellVersion = null;

    constructor(dependencies, shellVersion) {
        this._main = dependencies['Main'] || null;
        this.#shellVersion = shellVersion;
    }

    open() {
        this.#UIStyleClassAdd(this.#getAPIClassname('shell-version'));
    }

    close() {
        this.#UIStyleClassRemove(this.#getAPIClassname('shell-version'));
    }

    batteryIconHide() {
        this.#UIStyleClassAdd(this.#getAPIClassname('no-icon'));
    }

    batteryIconShow() {
        this.#UIStyleClassRemove(this.#getAPIClassname('no-icon'));
    }

    #UIStyleClassAdd(classname) {
        this._main.layoutManager.uiGroup.add_style_class_name(classname);
    }

    #UIStyleClassRemove(classname) {
        this._main.layoutManager.uiGroup.remove_style_class_name(classname);
    }

    #getAPIClassname(type) {
        let starter = 'hide-battery-icon-extension-';

        if (type === 'shell-version') {
            let shellVerMajor = Math.trunc(this.#shellVersion);
            return `${starter}gnome${shellVerMajor}`;
        }

        return `${starter}${type}`;
    }
}