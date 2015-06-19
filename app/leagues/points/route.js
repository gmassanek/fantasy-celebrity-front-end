import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      pointSubmissions: [
        {
          date: "2015-01-01",
          player: "Chad Ocho Cinco",
          category: "Legal",
          action: "Domestic Abuse",
          points: 15,
          status: "approved",
          proof: "http://gmail.com"
        }, {
          date: "2015-01-01",
          player: "Alan Iverson",
          category: "Legal",
          action: "Domestic Abuse",
          points: 15,
          status: "approved",
          proof: "http://gmail.com"
        }, {
          date: "2015-03-10",
          player: "Lil Wayne",
          category: "Marital",
          action: "Divorse",
          points: 5,
          status: "submitted",
          proof: "http://gmail.com"
        }, {
          date: "2015-04-01",
          player: "Gretchen Rossi",
          category: "Legal",
          action: "Domestic Abuse",
          points: 25,
          status: "submitted",
          proof: "http://gmail.com"
        }, {
          date: "2015-10-01",
          player: "Donald Trump",
          category: "Legal",
          action: "Domestic Abuse",
          points: 15,
          status: "approved",
          proof: "http://gmail.com"
        }
      ]
    };
  }
});
