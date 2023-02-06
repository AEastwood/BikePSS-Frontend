import React from "react";

export default class WebSockets extends React.Component {
    events = {
        close: {
            get() {
                console.log("[WebSockets] closed.");
            },
            set(callback) {
                if (typeof callback !== 'function') return;
                this.events.close = callback();
            }
        },
        error: {
            get() {
                console.log("[WebSockets] Error: ");
            },
            set(callback) {
                if (typeof callback !== 'function') return;
                this.events.error = callback();
            }
        },
        message: {
            get() {
                console.log("[WebSockets] Message: ");
            },
            set(callback) {
                if (typeof callback !== 'function') return;
                this.events.message = callback();
            }
        },
        open: {
            get() {
                console.log("[WebSockets] opened.");
            },
            set(callback) {
                if (typeof callback !== 'function') return;
                this.events.error = callback();
            }
        },
    }

    persistence = {
        enabled: false,
        timeout: null
    };
    ws = null;

    close = () => this.ws.close();
    get = () => this.ws;
    getState = () => this.ws.readyState;
    open = (settings) => {
        try {
            this.ws = new WebSocket(
                `${(settings.secure) ? 'wss' : 'ws'}://${settings.ip}:${settings.port}${settings.path}`
            );

            if (
                settings.hasOwnProperty('persistence') &&
                settings.persistence.hasOwnProperty('reconnectOnFailure')
            ) {
                this.persistence.enabled = settings.persistence.reconnectOnFailure;
                this.persistence.timeout = (this.persistence.enabled)
                    ? setTimeout(() => this.open(), settings.persistence.timeoutDelay)
                    : null;
            }

            this.ws.addEventListener('close', (c) => this.setEvent('close', () => console.log('close')));
            this.ws.addEventListener('error', (c) => this.setEvent('error', () => console.log('error')));
            this.ws.addEventListener('message', (c) => this.setEvent('message', () => console.log('message')));
            this.ws.addEventListener('open', (c) => this.setEvent('open', () => console.log('open')));
        }
        catch (e) {}
    };
    send = (data) => this.ws.send(data);
    setEvent = (event, callback) => this.events[event] = callback;
}
