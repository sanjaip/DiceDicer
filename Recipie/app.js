var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $timeout) {
  $scope.name = 'World';
  $scope.w = window.innerWidth;
  $scope.h = window.innerHeight - 20;

  $scope.procedureSet = [{
    code: 1,
    desc: '',
    shortDesc: 'adding ingredient',
    shortCode: 'ADDING',
    params: null,
    functionSignature: null
  }, {
    code: 2,
    desc: '',
    shortDesc: 'adding temp',
    shortCode: 'ADDING',
    params: null,
    functionSignature: null
  }, {
    code: 3,
    desc: '',
    shortDesc: 'reduce temp',
    shortCode: 'ADDING',
    params: null,
    functionSignature: null
  }, {
    code: 4,
    desc: '',
    shortDesc: 'wait ti',
    shortCode: 'ADDING',
    params: null,
    functionSignature: null
  }];

  $scope.ingredients = [{
    "name": "Veggie",
    "cat": "data:image/png;base64,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",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }, {
    "name": "meat",
    "cat": "data:image/png;base64,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",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }, {
    "name": "fridge",
    "cat": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATLSURBVGhD7ZvbbyJVHMf7ZHxRE198M+pfpL74pm8mBqhtTL3sRqs2bl0LFKi9cJuBBcql0MHWFihbYHvbpRcUTdfadi92dbu76rP64s/zm54ZYBgaYZhZNjm/5Btyfufy+36YS+lw6GPRRjgtoWft7/hf0VuXh3zP0JLGhqM/+KLVxDnHTPyJzcyDURozi/UcWJ9a0TdsJn6AgP6Nxe39AZgaToF7dBE8l5dE+a3LwFszmhWwZyHkyIkK2pbBOyLAeH+QgnN/WU28hVrSJ6xm/hIWGx+4AiHfGiwUjmFp426DCju/wdreqWZtVR9C5eDPBm1XH0B6tgyOwdAZtIn/glrrbljN3BtYwDU0C/NL+02QkvSElbS2dQcm3p+lpzb3OrXYnRh+i3+aLHxiswQglf5BFVKSEbCoYvEI7MQP8fXL8HDiKWpVe9hMgdfwXfR+tawKWC+jYFEh14p4dMnl9Sq1qj3IDcGNi8YTe6qA9TISNp/dp7DcNLWqPciCWVw0nTtQBayXkbCb2/ck2Ay1qj3Iguu4qNrdVykjYfHujL7QH7WqPRhsCzHYDsRgFWKwWqMVbDy2C5HgVoMEoapqvl31FKyQvSkVatIq6VcDaEe9dWTX70I0UoaQ91qD5ucqqubbFbtmFeo92N1TmI/uADe2BN5Li03CPPbjuPp5TyRszLcuGTpXMf9Gw7zHDuv6IAquD2PnauKjOHxdJ3x04xzg4Pa1Cfi94mwS5rEfx8nzLiQgTf7DQqC1jdvg/jQFkxcTsgLWDOz99Ie+sJ3KNcjDoz0n/HNrvEkPSR7768fbLUFIhm+IsKXSMTjfCzf0ez4XoHJTZ9hOTuPwdKHBaCvhuPp5T+gN6j7E+Q3wjKRhZjjVJMzH+U1xXP089qdHIUNh54TvIRbdbhB+qMjkDlQB2lFPwQqZ1h8X7f1BKJV/VYX4v+qtI7t+ByKBTeAnCw0Ku0uQnttTBWhH7JpViMFqDQbbQgy2AzFYhRis1mCwLcRgOxCDVYjBag0G20IMtgMxWIV0hfWN1bYGLa4eiVv54vFdOYff/cx8JkDpxj3ZNEfm1D8Az+Z/Fh+0ZfOHcg77cZzUxvnuEQEyC1UZbGV5X9zSV66eyrmwM68fLEoCw+dP2OacK3LOSwxjLnf1DKR4/URsT32clEGS5A3BHL5KOezHHI7HNs7HdtiVl8Fi7tLZmMKhnMM2lQ6wloAMlkxXxUJ+Rw0WjzzmZNjy2dad6U9qsKnItpjDVymH/ZjD8diWYCNqsMUjOUd3uKG6DxuYXJXBFkvH4i5UPMJSLpGsAGfLQmmn9gw4MlOEVLQGtlK6BZx1GfLkVcphP46T2jg/6MjB1fyBDIZHFHeo7vxYu5bn/PL3SN2DtZr4NVx0YfVQBmslI29Q5e/ui7Doj1rVHmRBLy6Kp6lyW4FSCXItJmd3NEuI7cK3qcq5wtMcfaE/alV7jJmvvEzevQd04Z4S+hp/l3+JWu1O2Aa9z9vMgTdtJm4Ui3gu+OF6bMpwYV0RVPRB/BBf1GL3A/fnY7HoqE/1K0i9hXWxviG/E/jybfdzVjP37+QQB9+4PIYL62J9/NUJtaRvkOtkQjyVHpMI7Di1Ykw4+r0vqP3+Rm9hXWqBRevo6/sPc1Q1tZ/9eOAAAAAASUVORK5CYII=",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }, {
    "name": "spices",
    "cat": "data:image/png;base64,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",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }, {
    "name": "oil",
    "cat": "data:image/png;base64,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",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }, {
    "name": "cereal",
    "cat": "data:image/png;base64,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",
    "contents": [{
      'name': 'Artichoke',
      'color': 'green',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Arugula',
      'color': 'yellow',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Asparagus',
      'color': 'red',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Avocado',
      'color': 'orange',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bamboo Shoots',
      'color': 'rose',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Bean Sprouts',
      'color': 'blue',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }, {
      'name': 'Beans-see Bean List',
      'color': 'brown',
      'facts': 'he',
      'disclaimer': 's',
      'calories': '',
      'fat': ''
    }]
  }];

  $scope.currContent = $scope.ingredients[0].contents;
  $scope.getContents = function(cont) {
    $scope.currContent = cont;
  }
  $scope.dropIngredient = function(img) {
    //img='red';
    fallingSnow(img);
    var constructData = angular.copy($scope.procedureSet[1]);
    constructData.params = img;
    constructData.functionSignature = $scope.dropIngredient;
    $scope.procedure.addProcedure(constructData);
  }


  $scope.Wait = {
    color: {
      run: "green",
      idle: "red"
    },
    onCountout: function() {
      $scope.Wait.currState.color = $scope.Wait.color.idle;
    },
    onTimeout: function() {
      if ($scope.Wait.currState.time > 0) {
        $scope.Wait.currState.color = $scope.Wait.color.run;
        $scope.Wait.currState.time--;
        $scope.Wait.start();
      } else {
        $scope.Wait.onCountout();
      }
    },
    currState: {
      time: null,
      color: null
    },
    start: function() {
      return $timeout($scope.Wait.onTimeout, 1000);
    },
    dec: function() {
      $scope.Wait.currState.time--;
    },
    inc: function() {
      $scope.Wait.currState.time++;
    },
    init: function() {
      $scope.Wait.currState.time = 10;
      $scope.Wait.currState.color = $scope.Wait.color.idle;
      $scope.Wait.start();
    }
  }
  $scope.Wait.init();

  $scope.stir = function() {
    var parent = $("#snowZone");
    var divs = parent.children();
    while (divs.length) {
      var randomNumber1 = Math.floor(Math.random() * (divs.length - 0 + 1) + 0);
      var select1 = divs[randomNumber1];
      var randomNumber2 = Math.floor(Math.random() * (divs.length - 0 + 1) + 0);
      var select2 = divs[randomNumber2];
      var tempTop = select1.style.top;
      var tempLeft = select1.style.left;
      select1.style.top = select2.style.top;
      select1.style.left = select2.style.left;
      select2.style.top = tempTop;
      select2.style.left = tempLeft;
    }
  }

  $scope.Temp = {
    currTemp: 10,
    dec: function() {
      $scope.Temp.currTemp--;
    },
    inc: function() {
      $scope.Temp.currTemp++;
    }
  }


  var animationStack = 90;
  //jquery animation
  // Snow Falling
  function fallingSnow(img) {
    var $snowflakes = $(),
      qt = 25;
    for (var i = 0; i < qt; ++i) {
      var $snowflake = $('<div class="snowflakes" style="background:' + img + '"></div>');
      $snowflake.css({
        'left': (Math.random() * $('#site').width()) + 'px',
        'top': (-Math.random() * $('#site').height()) + 'px'
      });
      // add this snowflake to the set of snowflakes
      $snowflakes = $snowflakes.add($snowflake);

    }
    $('#snowZone').prepend($snowflakes);
    $snowflakes.animate({
      top: animationStack,
      opacity: "1",
    }, Math.random() + 1000, function() {

      //$('#cooker').append('<div style="background-color:red;height=1px"></div>');

      //  $(this).remove();
      // run again when all 20 snowflakes hit the floor
      //if (--qt < 1) {
      //  fallingSnow();
      //}
    });
    animationStack = animationStack - 10;
  }


  $scope.water = "data:image/png;base64,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";
  $scope.fire = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASiSURBVGhD7VlbbFRVFN0thQqVh4BKU96vhLkzU7AQqaKEYAMK4ZHQaowJGALhw6gxfkiCGgKx0URRY0zk0w9NCCFRhA9CeCQk/tiPonzQzkxbeRTRKKiQUqHHte/si2fO7Blb5sE0mZWszOTec/Za+57H3WeGyiijjDLuGefrqS4epq9jYXpOLg1P9EToISRihCc7FtAiuTW80BGikJWIwcjcwef7PzTQSGkyPBAL0WY7kYAxj76Ph2i6NCt9xD06qiXCRDK/47NJmpYuYDKKqTRgm1d4KxGmFulSejBEFTB5wjGtEiNzGwnvkK6lBRh7VTOdjQmP3pTupYHYApqHp3xDM5uNPA1LZmQuNdAYJHFWMzoYyjS7vy9PXhcwcVAzOCR6dC0epfkStvhAEu+qxu6BGJn2jrlULaGLh0SEmnmOa6ZsdkUr1esakcyHEr44wFRYMpjF3V0/wvStq/M/tfsu8WDugItFprDwq1uPLmhGXPYuHWPM87NN/4ZppnvhIJNBKYO1VylyhYFpphEQOqUZ0Pj3s4/6iTBvbZg66GnG01YkCwMksUsT1nhxSbUxLckkAt5cUwuTFWr7FHrUJpL5R2eYGiHwjyrskNdE/8ZpKUkE/HPVw2oflxiVp0U6fzi5nKqQxI+aoEt+4vzktSQCXl02Vu2bQo++EPn8AUG3qmIOE+GKlHWRiQPNs8zPj41UY1j8La+LXqrac46Iyr9WP6Ia13hzba0awyafNsVG7kDAqCugcShJBLzSWKPGChiL0BaxkTuwU72uidi83jRZNfp/5A0hHtFjMrkEEhu5AwH3uQI2f10+TjXpc/NMY97LPlKXHx+txvXp0adiI3fgqexXRcALDaPMQMss1aDPd6YYcxrvk9bMyfCU1GIzWVts5A4E/NgVCHhjDYwq5nxuwWgcQYnCiZwCd+tt+UFkekkikY/ERu5AwDdcASbXTpoxny9hlA48mEwi4IkHjHllqtr+4uLqtPhMrM/XxEbuQMAmV4DZ25gsCNP4IpL4cnxqEgEPIbkX0vtk3L0i9IzYyB29UarBout3RX55EqYcQz73T9CTCPh2+lufY7nxwT4+RouN/ABz9bArxLuNa8hfB5p5m1+NTet3eWn6zgXNb0Q+f8CIrHWFehZWpRriKXMUyWnmbfLC5+ln9dXOKokQrRP5/ALBz7hifevr/jO0bbpuXOMOtJV+HMONi0XezqWRSOcX8RAtcwWvPmVNk+1DSISTln5uJYwpNdDp0QqRLQwg9IEtyuQzuW+Kp9ZheW9k47c1d3euDKPRKnKFgxx1v7OFuRy/vWlGMpmd2JF4DWgJMPneW8ldi/v0LKpKTQKbCmuIXGERb6DxSOaYbYBLlbsnQi5LjiuLnq/xPbThttzHjuHHRGyRKQ7kxPiJbYR/WPhj5cRk7cXlyV4csD6fmOQefEcByfe4jfIjxL6ijYQG2ZZTDl1d9ZXmyhM15trKSX5ByOTvfI3v2W0xlXo6I7Rewt1f8HEUhl5GUm22yaxEWxyatv8UolESprTQ4dEcvMi2IbHPYJb/guN3zxn+Lte2chtpXkYZZZQxFBD9C9OvkiUPv+/vAAAAAElFTkSuQmCC";
  $scope.stove = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPHSURBVHhe7Zu7q1RXFIdvfGBEiRFJYamFBBM7MYUWInYiIgYLTZlokSZpTMBS1EItfKBi46PwH/CBRq2ukEcXQiCpRBEJKURMaXz8vrl7ybneM+PMcfZW2b8PPjhnnb1m77vmzp4z+5wzYYwxxhhjjDHGGGOMMcYYY4wxxhhjjDHGmOH5ONmF2nKLcCrZhdpys7NaPk2yPQq15WbnAzkpnyfZJjYMteUWYbuMwYXEhqG23Ox8KO9KBvVPkm1iHBtEbblF2CsZEH6TjH2ODaK23OwslA8lg/ldzk6yTYxjtGmjttwi7JEMBLcSSLAdcdq0UVtudubLB5JB/CGbZxlsE+MYbWjbpLbcInwtGQDuIPAKxOI4bZvUlluE25LO78k5BF6BGMdow3l6k9pys/ORfCbp/BCBxJJkcFjShrbkQG25RWCpgI5xC4HE0WTAsWgXywu15RZhlYyOdxIQy+WT5DIC4isZ7T4jIGrLLcI8+UjS8XUC4qSMwRwnIH6S7NN2LgFRW24xTsgY0AEZX2jINrHYPyab1JZbBL7MYk1nkHdk84sPasstxgr5t2wbGP4ladNGbbnF4Ffp9/IX+Tj5s/xOvu4Xa225xpi3xqfyW/mDnSY1oTbFWCDPy1hKsDOlNtSIWmWFZebLsm0QdqaXZHOZfuxsltHZTblSZu3wPYNasGRCbaJOm2Q2zko64VRvEQHTymL5n6RW1Cwb1ySd/NrbM4P4TVIrapaN05JOWDwrut7/nsHsEYuR1CwbX8g4u7oll0ozHWpCbagRtaJmWdkv6QyvEkiskxFnu40fZbQZlmh/sLfXjRz99vt7r8iIU6vsrJXR4W4CCb8hU+ySEadW2eGSJZ39Lz8hkPAbMgU14Soi8ebl3SzMkvclnXGu3aQ5wH7/GVEYbuEfFtqSs6+3140c/Q76e29I4tSKmmWj33QFnFn8mez3G4UvuH/lxd7ecNCWnDW9vW7k6HfQ31ts2uo3XZnpUBtqRK2yTVuDpiszk+zTVnO64iNpBpN92vJ0NRpZpy1PV93INm15uupGtmnL01U3skxb/aarL+W2qc2XODYzFherxjJtcX/qEckLYkxXn8uIxU3FjrXHmtMWjyu80T2/F2S8GMaaTduvVMfaY80lFjwnO7FBxovwsfP18260XWdfL0fmjCTZ18/HQ/M6e6eriHHVi/tWzXigltSU2o7MpCSZx3032rEYj05T25GJN8SOX78h75id3hCeIm372Nk3t+gTusYYY4wxxhhjjDHGGGOMMcYYY4wxxpiCTEy8ACsVyUVIwV3vAAAAAElFTkSuQmCC"
  $scope.timer = "data:image/png;base64,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"
  $scope.plus = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ0SURBVGhD7ZpLqFVVGMdvapZSKFr4QiM1SiMHiTTSHAkJig4sbaJCFCSkiQ4LEitBo0gUDcpJGJkDIy0lQtGc+QAhfIAJvqLMDIUSM/X3W7Dgsu+5Z59z9lrnyuX+4TdYe+/zrf3t9frWt05Hn3qxxsES+AwOwGW4DnfhNvwFp2AXfACzYDDcFxoGb8NR8IWb5R/4Cl6CB6DtegzWww2IL3UFdsAymAmj4WGIGgLPwDxYCz+DLRV/fwJehrY4ZCWvw1Ww8jtgV5kDD0Kz0tmV8CtEh+yWkyCbbIXdECv8Fp6DFBoAi+ESaPtf8IMl12Q4D1byG9gCOfQIbARb2ro+B51MomkQu9JPMBJyy3F0DazzOxgIlWTX+QM06OxS2WATmgJO4da9E/pDS3JMxO70JfSDdmsixA/5kRealbPTHtDAfmhnSxT1ArjeOG7meqEZOWPohAN7hBdalB9gPDjNVtEb4PvYOsO90Igehz/BH1adnRxj2jkUStUUp/4todSAXLH9getEVaV0xJZ1fTEaeMoL9WTsZNhhf0yx2KV0RH0K2nN9qasVkKo1VGpHxsJ/YMsM9UJ3OgZWnGrlTu2IcoHUZrchzBPgAw70VgLAWsrhyCLQ5vehVENuinzg61BKoxyOOP3+D27aan7wrWCl7idSKYcjyr2Ldp8PpYIOgjdfDKU0yuXIdtCu3ayLLoI3x4RSGuVyZA1o951QKigmCgaFUvcy7JjaIK+ANo93ulaGgWKZ3gLtbgilgrzhICqT2RKfzYWhSJmWgs9uDqWCXGi8WSY3Vkca5BfQptFCrfu1+ATKFIPITaFUUNyRme1IpVxjZBVo98NQKugkeNP9eSrlcsRW0+7yUCrI+MqbTW9e6iiXI3HTNzuUCnofvGnyLJVyOOLuNW5/nXi6yFysNw+HUhrlcCTaPBtKNWRC2b2xG5dRXkigHI64CGqz7k7RlI8POSukUGpH7FZnQJt1Qymz4j5kLjZFhi+1Iw5u7Z2Duslub8bI0rC+qlI74vjV3puhVKIF4MMGkY96oYJSOvIqaOsClMWDQbaKqX1/ZEK5ip6EH+HjUGpdZj1j+nShFxrVs+AGv6XsXmL5YeMCuM8LzSoGZn+DXaSnZDzle9giLWc9t4FG7JdPe6HN8jTL+l3fKu1cTeXHGMywwLOSdsjutA6s1wU6Sfd+CL4BjWY7EusksyQxz2t98yGZbBm3lfFIzIomQGo5xcbZyZOA6ZBFHol5DG1F9ltzsTUj0CZlRBEXO9kL2Y/4THSbA4tn5LfA6dH53fm+ETkGnAkNAE9DdMBTXRMWbZWp/S/gJsQXMXlhiGPw+R6Y7XgNHFerwZ3dD/A7xN+IsZOJwc5/MGi73OP7orZK539ClOF+wpadAT1xPllXRsymMc0AvgseGvmyZjucTj22cDx4PNCnXqyOjnsRq2eI0lNNzwAAAABJRU5ErkJggg==";
  $scope.minus = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPiSURBVGhD7ZpbyE5ZGMc/hzHIRIaGEYqRU1yQ5srhSlHEhePNjBJFOUzjkiIz1IwSEVO4ETlcjDDDhUjcGRduHAo1DDmLQg7D77dq1df2fe/7ve+39/5W8q/fxVp7v3s9e6/T8zzrbfisT1gD4Ef4A87AHXgG7+EtPIYr8Cf8CpOhKyShnrAS/gENrpUXsB+mQDsoXb3gN3gO0agHcBCWwiT4FjpDVHcYBjNgPZwDeyr+/hLMhlJeyEYWwSOw8f/BoTINvoBa5cv+BDcgvpDDcjgUJnvhGMQGj8AoyEMd4Qf4D3z2S/CD5a4R8C/YyF2wB4pQN9gK9rRt7QJfMheNgziUTkEfKFrOoydgm0ehE7RKDp374ANdXVr9wBo0GlzCbfswdIC65JyIw2kvtIey9R3ED7nJilrl6nQcfMBpKLMnsvoe3G+cN9OtqEWuGL6EE/sbK9pYi0F77J2vrWiJesND8IdFrU71KC79O0KpBXLH9gfuEylpELi/6A0MsaKS9J10OxyPeW12eWoL+JHdXypqBaTYG1H94Q3YMz2saE4XIbW5kZUbpDY268IMBG9wotfjAJaleaCdf4VSEzIo8oYDoZSuXH7fgUFbkx98J/gixhOpy9hFW8eEUkZnwYsTQylt7QNtdZh9pNvgxX6hlLbWgbauDqWMYqKgSyg1L/2usQWio1hNy0Bbfw+ljLzgJKomsyXeWxS6ItW0ALx3eyhl5EbjxWoysLpQIJuhmqITuS2UMooRmdmO1PUzaOuGUMroMnjR+Dx12WvaujyUMtK/8mLNwUsbKAZ9U0Mpo1/AiybPUpbRawx/XXg+krlYL54PpXRleKGd10OpCZlQNjY2cOlrRaJyE/RFKkaKpny8yVUhRTmsroE2VnSlzIp7k7nY3DJ8OcrJrX03oWKy24vRs9StT03OX21bEkpVNAu8WSfyKysS0XzQrltQzR8MsldM7fsjE8opyKxnTJ/OtaKlGgkG+HVl93KWHzZugCetqFXRMXsKbZka0p/SDnuk7qznHvAhjsuhVpQsT7Ns3/2tVZGrqfzog+kWeFZShhxOG8F23aBzGd5fwiHwoYUdiTWSWZKY57W9mZCb7BnDyngkZkODIW+5xMbVyZOA8VCIPBLzGNqGHLfmYpv0QGuUHkXc7OQEFH7EZ6LbHFg8I38NLo+u7673LZFzwJVQB/AqxBfwVHcOlCpT+7vhFURDTF7o4uh8rgWzHQvBebUKjOz+hnsQfyP6TiYGG//BoHQZ42uovdL4nxDVMJ6wZydAW5xPVpQes2lMM4BrwEMjjTXb4XLqsYXzweOBz/qE1dDwAXtLPUDbheyDAAAAAElFTkSuQmCC";
  $scope.pan = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANsSURBVHhe7Z07rwxxGIfXrRC3iKBA7xI0QqKhcBeN4CsgSBSCRhSI8wE0EiEatygklL6E6HSIColbULj9HnteZk/Gnj12ZvfNzu9JnuTs/8zszLy/+c/sbjFvyxhjjDHGGJORlfKYPDOJLMOypibmyJvyh/zZoyzLOqxrKmSafCTLit6LDyXvYSpin4ziPparZbcC8781kmVjvb3SVMQNSVE/yAUM9MhC+VGyLu/RKCgUZ/JJWXaT7cdnkqK+LIz1KuuwLu9R9v9+5Fg55vkyDUvlNflFcuBNlGO/KpfIobJFvpZlO9lEqQU1GQqbZcwKPl7ektsl1+2mwLHukLdlfBz/LDfJgTJXxrWZG+1O2XR2yU+SmryQ1GhgnJcxM9gR02aPjJlyjoG6mS5XyZgd92SRFeMWadrYfUltqBE/3VCzWjggmYpsLCzODnaMewrGTjZtDHbLYo2ey/2yUg7JmIohr+fJoNedHuUxoCZlteKEroQZ8pXkjd/Iw3Kb3Conwo4tb//5h6aNAbWhRkflW0ntuIRVcvlaLyNpwjBT44iM+q1joF/WynjDyqZdgzgoo34bGeiXWTJ+oHsi+ZRleoNfpZ9Kasf3tdmyEk7LSNn+n6dkZXAzuiS/y7KN2X9LzS7IWr6PLJN3ZGxszJYa9XkgqVmtnJWxQVNO1Ofy71c140Amx4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4Ekw4EkI20gM+WVcXncLIzKWDfSBrJBxrL8DaMy1o1YNl0gnE0Tz6xRGetG1IdnLdbOCRkbXMSA6WCxjPocZ6Buih3TaGZiOqGXStRnIJ3haFTyVbJBOsuYTmjhQW3otDOwpi7XJRvlqf+eJX+hfUd0RqBR2sCgK8A7yYbfS3fZafcNoRbUhNqUdU2oFe4l32TMFB6wzPWTm1pT4Fg5Ge/KmBnUZGhdRdlwnBW2XYuht3jl8uXGku0a1P5Y8alAi2zODr6nXJRlz0QfJTlGjpVjdntwY4wxxhhjjDHGGNMwWq1fSgMa5Mgc/aUAAAAASUVORK5CYII=";



  $scope.procedure = {
    current: [],
    getRandomId: function() {
      return Date.now() + Math.random();
    },
    addProcedure: function(procedure) {
      procedure.id = $scope.procedure.current.length + 1;
      $scope.procedure.current.push(procedure);
    },
    deleteProcedure: function() {

    },
    saveProcedure: function(name) {},
    loadProcedure: function(name) {},
    animateProcedure: function() {
      console.log($scope.procedure.current);
      var currProcedure = angular.copy($scope.procedure.current);
      $scope.procedure.current =[];
      for (var i = 0, len = currProcedure.length; i < len; i++) {
        var current = currProcedure[i];
        var params = current.params;
        console.log(current);
        current.functionSignature(params);
      }
    }
  }


});

/*
Notes:
https://icons8.com/icon/set/stove/all
https://tympanus.net/codrops/2011/09/12/elastislide-responsive-carousel/
http://v4-alpha.getbootstrap.com/layout/grid/#nesting
https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-list-groups.php
*/