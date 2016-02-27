import _ from 'lodash';

class Popup {
  constructor(config = {}) {
    this.capitalize = !!config.capitalize;
  }

  alert(text) {
    const output = this.capitalize ? _.capitalize(text) : text;

    window.alert(output); // eslint-disable-line no-alert
  }
}

const popup = new Popup({ capitalize: true });

popup.alert('hello universe!');
