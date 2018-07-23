const fs = require('fs');

module.exports = {
  urlIsRelative: (str) => {
    return !str.match(/^https?:\/\//);
  },
  // This part is synchronous and probably doesn't need to be
  uploadmap: function() {
    var _uploadmap = JSON.parse(fs.readFileSync('./build/uploadmap.json', 'utf8'));
    if(_uploadmap == '' || _uploadmap == null) {
      throw new Error("No uploadmap found, image paths will not be substituted. Run `gulp push:files` to generate uploadmap.");
    }
    return _uploadmap;
  }()
}