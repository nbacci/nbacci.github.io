App.ProjectsRoute = Ember.Route.extend({
  model: function(){
    return[
      {id: 1, name: "Project 1", description: "Something awesome!", date: "1/15/2015"},
      {id: 2, name: "Project 2", description: "Something cooler!", date: "1/25/2015"},
      {id: 3, name: "Project 3", description: "Something even better than cooler!", date: "2/11/2015"}
    ];
  }
});
