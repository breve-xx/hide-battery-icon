import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import { API } from './lib/API.js';

export default class HideBatteryIcon extends Extension {

    #api = null;

    enable() {
        this.#api = new API({ Main }, parseFloat(Config.PACKAGE_VERSION));
        this.#api.open();
        this.#api.batteryIconHide();
    }

    disable() {
        this.#api?.batteryIconShow();
        this.#api?.close();
        this.#api = null;
    }
}