import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image_url_1: DS.attr(),
  image_url_2: DS.attr(),
  votes_image_1: DS.attr(),
  votes_image_2: DS.attr()
});
