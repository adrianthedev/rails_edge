import TestController from 'controllers/test_controller'

// Hook into the stimulus instance provided by Avo
const application = window.Stimulus
application.register('test', TestController)

// eslint-disable-next-line no-console
console.log('Hi from Avo custom JS 👋')
