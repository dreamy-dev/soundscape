import { LitElement, css, html } from 'lit'
import { property, customElement } from 'lit/decorators.js'

import '@shoelace-style/shoelace/dist/components/button/button.js'
@customElement('app-card')
export class AppCard extends LitElement {
    @property({ type: String }) title = 'Example Title'

    @property({ type: String }) bgimage = 'assets/covers/balloon-ride.jpg'

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
                width: 600px;
                height: 400px;
                background-size: cover;
                background-repeat: no-repeat;
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
                >
                    <h3 @click="${() => (this.active = !this.active)}">
                        ${this.title} ${this.active}
                    </h3>
                </div>

                <app-modal class="modal"></app-modal>
            </div>
        `
    }
}
