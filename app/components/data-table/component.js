import Ember from 'ember';

export default Ember.Component.extend({
  ajaxPath: null,
  info: false,
  lengthChange: false,
  pageLength: 10,
  paging: false,
  searching: false,
  ordering: false,
  initOrderCol: 0,
  initOrderDir: 'asc',

  didInsertElement() {
    var initAttrs = {};

    if(this.get('ordering')) {
      initAttrs.order = [[this.get('initOrderCol'), this.get('initOrderDir')]];
    }

    this.$(".ui-datatable").DataTable(initAttrs);
  }
});
