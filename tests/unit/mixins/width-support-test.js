import Ember from 'ember';
import WidthSupportMixin from 'ember-cli-simple-datepicker/mixins/width-support';
import { module, test } from 'qunit';

module('Unit | Mixin | width support');

// Replace this with your real tests.
test('it works', function(assert) {
  let WidthSupportObject = Ember.Object.extend(WidthSupportMixin);
  let subject = WidthSupportObject.create();
  assert.ok(subject);
});
