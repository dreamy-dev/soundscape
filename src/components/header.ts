import { LitElement, css, html } from 'lit'
import { property, customElement } from 'lit/decorators.js'

import '@shoelace-style/shoelace/dist/components/button/button.js'
@customElement('app-header')
export class AppHeader extends LitElement {
    @property({ type: String }) title = 'Soundscape'

    @property({ type: Boolean }) enableBack: boolean = false

    static get styles() {
        return css`
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--app-color-primary);
                color: white;
                height: 4em;
                padding: 12px 4vw 0;

                /* position: fixed;
                left: env(titlebar-area-x, 0);
                top: env(titlebar-area-y, 0);
                height: env(titlebar-area-height, 50px);
                width: env(titlebar-area-width, 100%);
                -webkit-app-region: drag; */
            }

            header h1 {
                margin-top: 0;
                margin-bottom: 0;
                font-size: 20px;
                font-weight: bold;
            }

            nav a {
                margin-left: 10px;
            }

            #back-button-block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 12em;
            }

            .logo {
                display: flex;
                flex-direction: column;
            }

            .logo h1 {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 10px;
                line-height: 12px;
                text-transform: uppercase;
                letter-spacing: 0.3em;
                padding-top: 4px;
            }
            .placeholder {
                width: 12em;
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
            <header>
                <div id="back-button-block">
                    ${this.enableBack
                        ? html`<sl-button
                              href="${(import.meta as any).env.BASE_URL}"
                          >
                              Back
                          </sl-button> `
                        : null}
                </div>
                <div class="logo">
                    <img src="/assets/logo.svg" height="30" />
                    ${this.enableBack ? null : html`<h1>${this.title}</h1>`}
                </div>
                <div class="placeholder"></div>
            </header>
        `
    }
}
