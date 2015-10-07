
exports.forLib = function (LIB) {

    const MAPPER = require("../../../../../cores/data/for/ccjson.record.mapper/0-common.api").forLib(LIB);

    var exports = {};

    exports.spin = function (context) {

        return {
            configPaths: {
                "Deployment": "./Deployment.0.1.ccjson",
                "Developer": "./Developer.0.1.ccjson",
                "Environment": "./Environment.0.1.ccjson",
                "DeploymentPointer": "./DeploymentPointer.0.1.ccjson",
                "Profile": "./Profile.0.1.ccjson",
                "Stack": "./Stack.0.1.ccjson"
            },
            makeCollection: function (name, config) {

                return new (MAPPER.spin(context).Collection)({
                    _modulePrefix: context.collectionPrefix,
                    _moduleLoaderPath: __filename,
                    _moduleConfig: config,
            		name: context.collectionPrefix + name,
            		record: config._meta.record || {}
                });
            }
        };
    }

    return exports;
}
