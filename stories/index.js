import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { withReadme, withDocs }  from 'storybook-readme'

import HelloWorld from '../components/hello-world/hello-world.vue'

storiesOf('Hello world', module)
  .add('with slot', () => {
    return {
      components: { HelloWorld },
      template: `<hello-world>Vue Storybook</hello-world>`
    }
  })
