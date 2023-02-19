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

                main {
                    height: 90vh;
                    overflow-x: clip;
                }

                app-card:hover {
                    cursor: pointer;
                }

                sl-card::part(footer) {
                    display: flex;
                    justify-content: flex-end;
                }

                .column {
                    padding-left: 4vw;
                    width: 100vw;
                    display: flex;
                    scroll-behavior: smooth;
                    overflow-x: scroll;
                    height: 90vh;
                    display: flex;
                    align-items: center;
                }

                footer a {
                    color: black;
                    text-decoration: none;
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
                    <div class="column">
                        <app-card
                            title="Deep Focus Dive"
                            bgimage="assets/covers/underwater.jpg"
                            audio="assets/audio/Underwater.mp3"
                        ></app-card>
                        <app-card
                            title="Cave Curiosity"
                            bgimage="assets/covers/cave.jpg"
                            audio="assets/audio/water_drips.mp3"
                        ></app-card>
                        <app-card
                            title="Longing for Life"
                            bgimage="assets/covers/balloon-ride.jpg"
                            audio="assets/audio/The-Distance-Between-Me-And-You.wav"
                        ></app-card>
                        <app-card
                            title="Ocean Waves Wind down"
                            bgimage="assets/covers/island-sunset.jpg"
                            audio="assets/audio/ocean_waves.mp3"
                        ></app-card>
                        <app-card
                            title="Babbling Brook"
                            bgimage="assets/covers/bach.jpg"
                            audio="assets/audio/delightful_river.mp3"
                        ></app-card>
                        <app-card
                            title="Flutes Floods"
                            bgimage="assets/covers/starry-night.jpg"
                            audio="assets/audio/peaceful-flutes.oga"
                        ></app-card>
                        <app-card
                            title="Peaceful Slumber"
                            bgimage="assets/covers/moonshine.jpg"
                            audio="assets/audio/peaceful-slumber.oga"
                        ></app-card>
                    </div>
                </div>
            </main>
            <footer>
                <a
                    href="${(import.meta as any).env.BASE_URL}about"
                    variant="primary"
                >
                    <p>Navigate to About</p>
                </a>
            </footer>
        `
    }
}
