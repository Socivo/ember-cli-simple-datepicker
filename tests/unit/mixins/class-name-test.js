import Ember from 'ember';
import ClassNameMixin from 'ember-cli-simple-datepicker/mixins/class-name';
import { module, test } from 'qunit';

module('Unit | Mixin | class name');

// Replace this with your real tests.
test('it works', function(assert) {
  let ClassNameObject = Ember.Object.extend(ClassNameMixin);
  let subject = ClassNameObject.create();
  assert.ok(subject);
});
