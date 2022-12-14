import { LitElement, css, html } from 'lit'
import { property, customElement } from 'lit/decorators.js'

import '@shoelace-style/shoelace/dist/components/button/button.js'
@customElement('app-card')
export class AppCard extends LitElement {
    @property({ type: String }) title = 'Example Title'

    @property({ type: String }) bgimage = 'assets/covers/balloon-ride.jpg'

    @property({ type: String }) audio = 'assets/audio/water_drips.mp3'

    @property({ type: Boolean }) enableBack: boolean = false

    @property({ type: Boolean, reflect: true })
    active: boolean = false

    /* active: boolean = false */

    static get styles() {
        return css`
            nav a {
                margin-left: 10px;
            }

            .card {
                width: 300px;
                height: 400px;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 15px;
                padding: 20px;
                box-sizing: border-box;
                margin-right: 20px;
            }

            .modal {
                display: none;
            }

            @media (prefers-color-scheme: light) {
                header {
                    color: black;
                }

                nav a {
                    color: initial;
                }
            }

            :host {
                display: block;
            }

            :host([active]) {
                display: block;
            }

            :host([active]) .modal {
                display: block;
            }
        `
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <div>
                <div
                    class="card"
                    style="background-image: url('${this.bgimage}')"
                    @click="${() => (this.active = !this.active)}"
                >
                    <h3>${this.title}</h3>
                </div>

                <app-modal
                    class="modal"
                    audio="${this.audio}"
                    @click="${() => (this.active = !this.active)}"
                    title="${this.title}"
                    bgimage="${this.bgimage}"
                ></app-modal>
            </div>
        `
    }
}
