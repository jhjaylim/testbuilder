/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
//var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/




describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it("has a prefix of 51 and a length of 16", function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it("has a prefix of 52 and a length of 16", function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it("has a prefix of 53 and a length of 16", function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  it("has a prefix of 54 and a length of 16", function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
  it("has a prefix of 55 and a length of 16", function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  /*var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 */
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
 
    var expect = chai.expect;
    it("has a prefix of 6011 and a length of 16", function() {
      expect(detectNetwork('6011345678901234')).to.equal('Discover');
    });
    it("has a prefix of 644 and a length of 16", function() {
      expect(detectNetwork('6441345678901234')).to.equal('Discover');
    });
    it("has a prefix of 645 and a length of 16", function() {
      expect(detectNetwork('6451345678901234')).to.equal('Discover');
    });
    it("has a prefix of 646 and a length of 16", function() {
      expect(detectNetwork('6461345678901234')).to.equal('Discover');
    });
    it("has a prefix of 647 and a length of 16", function() {
      expect(detectNetwork('6471345678901234')).to.equal('Discover');
    });
    it("has a prefix of 648 and a length of 16", function() {
      expect(detectNetwork('6481345678901234')).to.equal('Discover');
    });
    it("has a prefix of 649 and a length of 16", function() {
      expect(detectNetwork('6491345678901234')).to.equal('Discover');
    });
    it("has a prefix of 65 and a length of 16", function() {
      expect(detectNetwork('6591345678901234')).to.equal('Discover');
    });

    it("has a prefix of 6011 and a length of 19", function() {
      expect(detectNetwork('6011345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 644 and a length of 19", function() {
      expect(detectNetwork('6441345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 645 and a length of 19", function() {
      expect(detectNetwork('6451345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 646 and a length of 19", function() {
      expect(detectNetwork('6461345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 647 and a length of 19", function() {
      expect(detectNetwork('6471345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 648 and a length of 19", function() {
      expect(detectNetwork('6481345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 649 and a length of 19", function() {
      expect(detectNetwork('6491345678901234123')).to.equal('Discover');
    });
    it("has a prefix of 65 and a length of 19", function() {
      expect(detectNetwork('6591345678901234123')).to.equal('Discover');
    });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  
  it("has a prefix of 5018 and a length of 12", function() {
    expect(detectNetwork('501834567892')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 13", function() {
    expect(detectNetwork('5018345678923')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 14", function() {
    expect(detectNetwork('50183456789234')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 15", function() {
    expect(detectNetwork('501834567892345')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 16", function() {
    expect(detectNetwork('5018345678923456')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 17", function() {
    expect(detectNetwork('50183456789234567')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 18", function() {
    expect(detectNetwork('501834567892345678')).to.equal('Maestro');
  });
  it("has a prefix of 5018 and a length of 19", function() {
    expect(detectNetwork('5018345678923456789')).to.equal('Maestro');
  });

  it("has a prefix of 5020 and a length of 12", function() {
    expect(detectNetwork('502034567892')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 13", function() {
    expect(detectNetwork('5020345678923')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 14", function() {
    expect(detectNetwork('50203456789234')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 15", function() {
    expect(detectNetwork('502034567892345')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 16", function() {
    expect(detectNetwork('5020345678923456')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 17", function() {
    expect(detectNetwork('50203456789234567')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 18", function() {
    expect(detectNetwork('502034567892345678')).to.equal('Maestro');
  });
  it("has a prefix of 5020 and a length of 19", function() {
    expect(detectNetwork('5020345678923456789')).to.equal('Maestro');
  });

  it("has a prefix of 5038 and a length of 12", function() {
    expect(detectNetwork('503834567892')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 13", function() {
    expect(detectNetwork('5038345678923')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 14", function() {
    expect(detectNetwork('50383456789234')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 15", function() {
    expect(detectNetwork('503834567892345')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 16", function() {
    expect(detectNetwork('5038345678923456')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 17", function() {
    expect(detectNetwork('50383456789234567')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 18", function() {
    expect(detectNetwork('503834567892345678')).to.equal('Maestro');
  });
  it("has a prefix of 5038 and a length of 19", function() {
    expect(detectNetwork('5038345678923456789')).to.equal('Maestro');
  });

  it("has a prefix of 6304 and a length of 12", function() {
    expect(detectNetwork('630434567892')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 13", function() {
    expect(detectNetwork('6304345678923')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 14", function() {
    expect(detectNetwork('63043456789234')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 15", function() {
    expect(detectNetwork('630434567892345')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 16", function() {
    expect(detectNetwork('6304345678923456')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 17", function() {
    expect(detectNetwork('63043456789234567')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 18", function() {
    expect(detectNetwork('630434567892345678')).to.equal('Maestro');
  });
  it("has a prefix of 6304 and a length of 19", function() {
    expect(detectNetwork('6304345678923456789')).to.equal('Maestro');
  });

});

/*
China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
*/

/*IIFE

for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16');
    it('has a prefix of ' + prefix + ' and a length of 19');
  })(prefix)
}
*/

describe('China UnionPay', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;
  

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '7890123456')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '78901234567')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '789012345678')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '7890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  };
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '4567890123456')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '45678901234567')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '456789012345678')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '4567890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  };
    for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '567890123456')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '5678901234567')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '56789012345678')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '567890123456789')).to.equal('China UnionPay');
      });
    })(prefix)
  };



});

/*
China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
*/


describe('Switch', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;

  it("has a prefix of 4903 and a length of 16", function() {
    expect(detectNetwork('4903567890123456')).to.equal('Switch');
  });
  it("has a prefix of 4903 and a length of 18", function() {
    expect(detectNetwork('490356789012345678')).to.equal('Switch');
  });
  it("has a prefix of 4903 and a length of 19", function() {
    expect(detectNetwork('4903567890123456789')).to.equal('Switch');
  });

  it("has a prefix of 4905 and a length of 16", function() {
    expect(detectNetwork('4905567890123456')).to.equal('Switch');
  });
  it("has a prefix of 4905 and a length of 18", function() {
    expect(detectNetwork('490556789012345678')).to.equal('Switch');
  });
  it("has a prefix of 4905 and a length of 19", function() {
    expect(detectNetwork('4905567890123456789')).to.equal('Switch');
  });

  it("has a prefix of 4911 and a length of 16", function() {
    expect(detectNetwork('4911567890123456')).to.equal('Switch');
  });
  it("has a prefix of 4911 and a length of 18", function() {
    expect(detectNetwork('491156789012345678')).to.equal('Switch');
  });
  it("has a prefix of 4911 and a length of 19", function() {
    expect(detectNetwork('4911567890123456789')).to.equal('Switch');
  });

  it("has a prefix of 4936 and a length of 16", function() {
    expect(detectNetwork('4936567890123456')).to.equal('Switch');
  });
  it("has a prefix of 4936 and a length of 18", function() {
    expect(detectNetwork('493656789012345678')).to.equal('Switch');
  });
  it("has a prefix of 4936 and a length of 19", function() {
    expect(detectNetwork('4936567890123456789')).to.equal('Switch');
  });

  it("has a prefix of 564182 and a length of 16", function() {
    expect(detectNetwork('5641827890123456')).to.equal('Switch');
  });
  it("has a prefix of 564182 and a length of 18", function() {
    expect(detectNetwork('564182789012345678')).to.equal('Switch');
  });
  it("has a prefix of 564182 and a length of 19", function() {
    expect(detectNetwork('5641827890123456789')).to.equal('Switch');
  });

  it("has a prefix of 633110 and a length of 16", function() {
    expect(detectNetwork('6331107890123456')).to.equal('Switch');
  });
  it("has a prefix of 633110 and a length of 18", function() {
    expect(detectNetwork('633110789012345678')).to.equal('Switch');
  });
  it("has a prefix of 633110 and a length of 19", function() {
    expect(detectNetwork('6331107890123456789')).to.equal('Switch');
  });

  it("has a prefix of 6333 and a length of 16", function() {
    expect(detectNetwork('6333567890123456')).to.equal('Switch');
  });
  it("has a prefix of 6333 and a length of 18", function() {
    expect(detectNetwork('633356789012345678')).to.equal('Switch');
  });
  it("has a prefix of 6333 and a length of 19", function() {
    expect(detectNetwork('6333567890123456789')).to.equal('Switch');
  });
    it("has a prefix of 6759 and a length of 16", function() {
    expect(detectNetwork('6759567890123456')).to.equal('Switch');
  });
  it("has a prefix of 6759 and a length of 18", function() {
    expect(detectNetwork('675956789012345678')).to.equal('Switch');
  });
  it("has a prefix of 6759 and a length of 19", function() {
    expect(detectNetwork('6759567890123456789')).to.equal('Switch');
  });




});













