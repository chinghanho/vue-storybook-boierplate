import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

// check out the official introduction for more detail:
// https://git.io/vxcR5
setOptions({
  name: 'Storybook Boilerplate for Vue',
  url: '/',
  addonPanelInRight: true
})

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
