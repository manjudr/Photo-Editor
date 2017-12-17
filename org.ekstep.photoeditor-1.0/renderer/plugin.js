Plugin.extend({
    _type: "photoeditor",
    initialize: function() {
        var templatePath = org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id, this._manifest.ver, "renderer/templates/editor.html");
        var jsPath = org.ekstep.pluginframework.pluginManager.resolvePluginResource(this._manifest.id, this._manifest.ver, "renderer/js/imageEditor.js");
        org.ekstep.service.controller.loadNgModules(templatePath, jsPath);
    },
    initPlugin: function(data) {
        
    }
});
//# sourceURL=photoEditor.js