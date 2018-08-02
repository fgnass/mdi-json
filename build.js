const util = require('@mdi/util');
const icons = util.getMeta(true);
util.write("icons.json", JSON.stringify(icons, null, 2));
