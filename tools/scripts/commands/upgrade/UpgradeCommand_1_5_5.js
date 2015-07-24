/// <reference path="../../lib/types.d.ts" />
var params = require("../../ParamsParser");
var UpgradeCommand_1_5_5 = (function () {
    function UpgradeCommand_1_5_5() {
    }
    UpgradeCommand_1_5_5.prototype.execute = function () {
        this.upgradeTo_1_5_5();
        return 0;
    };
    UpgradeCommand_1_5_5.prototype.upgradeTo_1_5_5 = function () {
        var projectDir = params.getProjectRoot();
        try {
            var modify = require("./upgrade/ModifyProperties");
            var properties = modify.getProperties();
            var hasRes = false;
            for (var key in properties.modules) {
                var module = properties.modules[key];
                if (module.name == "res") {
                    hasRes = true;
                    break;
                }
            }
            if (!hasRes) {
                properties.modules.splice(1, 0, { "name": "res" });
            }
            modify.save();
        }
        catch (e) {
        }
    };
    return UpgradeCommand_1_5_5;
})();
module.exports = UpgradeCommand_1_5_5;
