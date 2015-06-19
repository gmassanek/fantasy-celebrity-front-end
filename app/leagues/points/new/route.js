import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      players: [
        { name: 'Paula Abdul', id: 1 },
        { name: 'Jack Nicholson', id: 2 },
        { name: 'Mel Gibson', id: 3 },
        { name: 'Whitney Houston', id: 4 },
        { name: 'Chad Ocho Cinco', id: 5 },
        { name: 'Pants on the Ground Guy', id: 6 },
        { name: 'Mitt Romney', id: 7 }
      ],
      pointCategories: [
        { name: 'Legal - Arrest', id: 1 },
        { name: 'Legal - Domestic Abuse', id: 2 },
        { name: 'Legal - DUI', id: 3 }
      ]
    };
  }
});
