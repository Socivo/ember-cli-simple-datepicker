import Ember from 'ember';
import ErrorSupportMixin from 'ember-cli-simple-datepicker/mixins/error-support';
import { module, test } from 'qunit';

module('Unit | Mixin | error support');

// Replace this with your real tests.
test('it works', function(assert) {
  let ErrorSupportObject = Ember.Object.extend(ErrorSupportMixin);
  let subject = ErrorSupportObject.create();
  assert.ok(subject);
});
