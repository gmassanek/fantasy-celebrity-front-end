import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      pointCategories: [
        { category: "Legal", name: "DUI", points: 20 },
        { category: "Legal", name: "Drug Posession", points: 20 },
        { category: "Legal", name: "Disorderly Conduct", points: 45 },
        { category: "Career", name: "Leaked Sex Tape", points: 30 },
        { category: "Career", name: "Leaked Nude Pics", points: 25 }
      ]
    }
  }
});
