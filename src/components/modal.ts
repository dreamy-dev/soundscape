import { LitElement, css, html } from 'lit'
import { property, customElement } from 'lit/decorators.js'

import '@shoelace-style/shoelace/dist/components/button/button.js'
@customElement('app-modal')
export class Modal extends LitElement {
    @property({ type: String }) title = 'Example Title'

    @property({ type: String }) audio = 'assets/audio/water_drips.mp3'

    @property({ type: String }) bgimage = 'assets/covers/balloon-ride.jpg'

    @property({ type: Boolean }) enableBack: boolean = false

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

            @media (prefers-color-scheme: light) {
                header {
                    color: black;
                }

                nav a {
                    color: initial;
                }
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
                    ${this.enableBack
                        ? html`<sl-button
                              href="${(import.meta as any).env.BASE_URL}"
                          >
                              Back
                          </sl-button>`
                        : null}
                    <h3>${this.title}</h3>
                    <audio controls>
                        <source src="${this.audio}" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `
    }
}
