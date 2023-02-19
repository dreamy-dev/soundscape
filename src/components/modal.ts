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
                position: fixed;
                top: 0;
                left: 0px;
                z-index: 3;
                background-color: white;
                background-size: cover;
            }

            .player-zone {
                width: 100vw;
                height: 100vh;
                margin: auto;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(40px);
            }

            .cover-image {
                width: 300px;
                height: 300px;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 50%;
                padding: 20px;
                box-sizing: border-box;
            }

            h3 {
                margin: 50px 0;
                color: white;
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
            <div
                class="modal"
                style="background-image: url('${this.bgimage}');"
            >
                <div class="player-zone">
                    ${this.enableBack
                        ? html`<sl-button
                              href="${(import.meta as any).env.BASE_URL}"
                          >
                              Back
                          </sl-button>`
                        : null}
                    <div
                        class="cover-image"
                        style="background-image: url('${this.bgimage}');"
                    ></div>
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
