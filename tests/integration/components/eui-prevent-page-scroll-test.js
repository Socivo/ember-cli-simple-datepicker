import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eui-prevent-page-scroll', 'Integration | Component | eui prevent page scroll', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{eui-prevent-page-scroll}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#eui-prevent-page-scroll}}
      template block text
    {{/eui-prevent-page-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
