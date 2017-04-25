var assert = require("assert"),
    fs = require('fs'),
    using = require('jasmine-data-provider'),
    yaml = require('js-yaml'),
    vm = require('vm');

function validateZipValidator(zipValidator) {

    // Get document, or throw exception on error
    try {

        // TODO get from moonazul-data
        var doc = yaml.safeLoad(fs.readFileSync('/Users/facundo/dev/hydra/test/zip.yaml', 'utf8'));
        console.log(doc);
        var list = [];

        for (var prop in doc) {
            if (!doc.hasOwnProperty(prop)) {
                //The current property is not a direct property of p
                continue;
            }
            //Do your logic with the property here
            list.push({"value": prop, "expected": doc[prop]});
        }

        describe('Validating zip code validator', function () {
            using(list, function (data) {
                it('Zip test ' + data.value, function () {
                    var result = zipValidator(data.value);
                    var message = data.expected ? " fails validation incorrectly" : " passes validation incorrectly";
                    assert.equal(data.expected, result, data.value + message);
                });
            });
        });
    } catch (e) {
        console.log(e);
    }
}

exports(validateZipValidator);
