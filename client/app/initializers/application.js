export function initialize(container, application) {
   application.inject('component', 'application', 'controller:application');
}

export default {
  name: 'application',
  initialize: initialize
};
