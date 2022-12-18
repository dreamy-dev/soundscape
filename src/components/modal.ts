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

            .modal {
                width: 100vw;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0px;
                z-index: 3;
            }

            .player-zone {
                width: 50vw;
                height: 100vh;
                margin: auto;
                background-size: cover;
                background-repeat: no-repeat;
            }

            h3 {
                margin: 0;
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
            <div class="modal">
                <div
                    class="player-zone"
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
