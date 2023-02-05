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
                box-sizing: border-box;
                margin-right: 20px;
                display: flex;
                align-items: end;
                transition: box-shadow 0.1s, height 0.1s;
                transition-timing-function: ease-in-out;
            }

            .card:hover {
                box-shadow: rgb(47 35 84 / 30%) 0px 20px 80px,
                    rgb(0 0 0 / 15%) 0px 20px 40px;
                height: 440px;
            }

            .card span {
                padding: 20px;
                width: 100%;
            }

            .card h3 {
                color: white;
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
                    <span><h3>${this.title}</h3></span>
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
