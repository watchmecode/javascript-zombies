exports.index = function(req, res){
  res.render('index');
};

exports.viewDemo = function(req, res){
  var pageName = req.params.pageName;
  res.render("demos/" + pageName);
};
