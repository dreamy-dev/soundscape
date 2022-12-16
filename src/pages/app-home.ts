import { LitElement, css, html } from 'lit'
import { property, customElement } from 'lit/decorators.js'

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall'

import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'

import { styles } from '../styles/shared-styles'

@customElement('app-home')
export class AppHome extends LitElement {
    // For more information on using properties and state in lit
    // check out this link https://lit.dev/docs/components/properties/
    @property() message = 'Welcome!'

    static get styles() {
        return [
            styles,
            css`
                #welcomeBar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                #welcomeCard,
                #infoCard {
                    padding: 18px;
                    padding-top: 0px;
                }

                pwa-install {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }

                sl-card::part(footer) {
                    display: flex;
                    justify-content: flex-end;
                }

                @media (min-width: 750px) {
                    sl-card {
                        width: 70vw;
                    }
                }

                @media (horizontal-viewport-segments: 2) {
                    #welcomeBar {
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: space-between;
                    }

                    #welcomeCard {
                        margin-right: 64px;
                    }
                }
            `,
        ]
    }

    constructor() {
        super()
    }

    async firstUpdated() {
        // this method is a lifecycle even in lit
        // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
        console.log('This is your home page')
    }

    share() {
        if ((navigator as any).share) {
            ;(navigator as any).share({
                title: 'PWABuilder pwa-starter',
                text: 'Check out the PWABuilder pwa-starter!',
                url: 'https://github.com/pwa-builder/pwa-starter',
            })
        }
    }

    render() {
        return html`
            <app-header></app-header>

            <main>
                <pwa-install>Install Soundscape</pwa-install>
                <div id="welcomeBar">
                    <sl-card id="welcomeCard">
                        <div slot="header">
                            <h2>${this.message}</h2>
                        </div>

                        <div>
                            <p>Ember</p>
                            <audio controls>
                                <source
                                    src="assets/audio/ember.mp3"
                                    type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <div>
                            <p>Ocean Waves</p>
                            <audio controls>
                                <source
                                    src="assets/audio/ocean_waves.mp3"
                                    type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <div>
                            <p>Delightful River</p>
                            <audio controls>
                                <source
                                    src="assets/audio/delightful_river.mp3"
                                    type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        <div>
                            <p>Water Drips</p>
                            <audio controls>
                                <source
                                    src="assets/audio/water_drips.mp3"
                                    type="audio/mpeg"
                                />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                        ${'share' in navigator
                            ? html`<sl-button
                                  slot="footer"
                                  variant="primary"
                                  @click="${this.share}"
                                  >Share this Starter!</sl-button
                              >`
                            : null}
                    </sl-card>

                    <div>
                        <h3>Hello</h3>
                        <app-card
                            title="Ballonfahrt"
                            bg-image=""
                            audio="assets/audio/delightful_river.mp3"
                        ></app-card>
                    </div>

                    <sl-button
                        href="${(import.meta as any).env.BASE_URL}about"
                        variant="primary"
                        >Navigate to About</sl-button
                    >
                    <sl-button
                        href="${(import.meta as any).env.BASE_URL}detail"
                        variant="primary"
                        >Navigate to Detail</sl-button
                    >
                </div>
            </main>
        `
    }
}
