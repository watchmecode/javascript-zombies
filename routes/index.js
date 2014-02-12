exports.index = function(req, res){
  res.render('index');
};

exports.viewDemo = function(req, res){
  var pageName = req.params.pageName;
  res.render("demos/" + pageName, {
    pageName: pageName,
    jsFile: pageName
  });
};

exports.viewSubDemo = function(req, res){
  var pageName = req.params.pageName;
  var subPage = req.params.subPage;

  res.render("demos/" + pageName + "/" + subPage, {
    pageName: pageName,
    jsFile: subPage
  });
};
