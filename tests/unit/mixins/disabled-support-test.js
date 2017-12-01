import Ember from 'ember';
import DisabledSupportMixin from 'ember-cli-simple-datepicker/mixins/disabled-support';
import { module, test } from 'qunit';

module('Unit | Mixin | disabled support');

// Replace this with your real tests.
test('it works', function(assert) {
  let DisabledSupportObject = Ember.Object.extend(DisabledSupportMixin);
  let subject = DisabledSupportObject.create();
  assert.ok(subject);
});
