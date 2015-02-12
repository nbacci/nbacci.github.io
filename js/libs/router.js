App.Router.map(function() {
  this.resource('resume');

  this.resource('projects', function(){
    this.route('show', {path: '/:project_id'});
  });
});
