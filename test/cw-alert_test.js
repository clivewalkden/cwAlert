(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('CWAlert', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();

      this.elems.CWAlert({
        beforeMessage: function(){
        },
        messageTrue: function(){

        },
        messageFalse: function(){

        }
      });
    }
  });

  test('Default message check', function() {
    //expect(1);


    this.spy(this.elems.CWAlert, "beforeMessage");
    
    this.elems.eq(0).trigger('click');

    ok(this.elems.CWAlert.beforeMessage.calledOnce);
    
  });

}(jQuery));
