import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles'

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js'

@customElement('app-detail')
export class AppDetail extends LitElement {
    static styles = [sharedStyles, styles]

    constructor() {
        super()
    }

    @property()
    greeting = 'Hello'

    render() {
        return html`
            <app-header ?enableBack="${true}"></app-header>

            <main>
                <h2>Detail Page ${this.greeting}</h2>

                <h2>Song</h2>
            </main>
        `
    }
}
