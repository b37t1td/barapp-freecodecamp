define('client/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('client/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('client/tests/components/user-info.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/user-info.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-info.js should pass jshint.');
  });
});
define('client/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('client/tests/controllers/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass jshint.\ncontrollers/home.js: line 57, col 13, \'item\' is defined but never used.\ncontrollers/home.js: line 40, col 5, \'$\' is not defined.\ncontrollers/home.js: line 60, col 7, \'$\' is not defined.\n\n3 errors');
  });
});
define('client/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('client/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'client/tests/helpers/start-app', 'client/tests/helpers/destroy-app'], function (exports, _qunit, _clientTestsHelpersStartApp, _clientTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _clientTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _clientTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('client/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('client/tests/helpers/resolver', ['exports', 'ember/resolver', 'client/config/environment'], function (exports, _emberResolver, _clientConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _clientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _clientConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('client/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('client/tests/helpers/start-app', ['exports', 'ember', 'client/app', 'client/config/environment'], function (exports, _ember, _clientApp, _clientConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _clientConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _clientApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('client/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('client/tests/initializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/application.js should pass jshint.');
  });
});
define('client/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('client/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 4, col 10, \'$\' is not defined.\nroutes/application.js: line 8, col 10, \'$\' is not defined.\n\n2 errors');
  });
});
define('client/tests/test-helper', ['exports', 'client/tests/helpers/resolver', 'ember-qunit'], function (exports, _clientTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_clientTestsHelpersResolver['default']);
});
define('client/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map