import { Controller } from '@hotwired/stimulus'
console.log('test loading')
export default class extends Controller {
  static targets = ['element']

  connect() {
    console.log('test_controller')
    // console.log(this.elementTarget)
  }
}
