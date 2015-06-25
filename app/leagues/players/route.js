import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      players: [
        {
          position: 'Reality Star',
          name: 'Paula Abdul',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Actor',
          name: 'Jack Nicholson',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Actor',
          name: 'Mel Gibson',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Musician',
          name: 'Whitney Houston',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Athlete',
          name: 'Chad Ocho Cinco',
          points: {
            legal: 15,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 15
          }
        }, {
          position: 'Other',
          name: 'Pants on the Ground Guy',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Politician',
          name: 'Mitt Romney',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Other',
          name: 'Gretchen Rossi',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }, {
          position: 'Dead People',
          name: 'King Tut',
          points: {
            legal: 0,
            fighting: 0,
            career: 0,
            marital: 0,
            health: 0,
            other: 0,
            total: 0
          }
        }
      ]
    };
  }
});
