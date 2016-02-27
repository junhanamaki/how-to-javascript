import _ from 'lodash';

export default class Popup {
  constructor(config = {}) {
    this.capitalize = !!config.capitalize;
  }

  alert(text) {
    const output = this.capitalize ? _.capitalize(text) : text;

    window.alert(output); // eslint-disable-line no-alert
  }
}
