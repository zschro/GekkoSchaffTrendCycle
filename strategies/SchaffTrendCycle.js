var log = require('../core/log.js');
var config = require ('../core/util.js').getConfig();

var strategy = {
  
  init : function() {
    this.name = 'Schaff Trend Cycle With StopLoss';
    this.settings.threshold_high ? this.threshold_high = this.settings.threshold_high : this.threshold_high = 80;
    this.settings.threshold_low ? this.threshold_low = this.settings.threshold_low : this.threshold_low = 20;
    this.settings.threshold_adjustment ? this.threshold_adjustment = this.settings.threshold_adjustment : this.threshold_adjustment = 5;
    this.addIndicator('zTrailingStop', 'zTrailingStop', this.settings.stoploss_threshold);
    this.addIndicator('STC', 'STC', this.settings);
  },
  update : function(candle)
  {
  },
  log:  function() {
  },

  check : function(candle) {

    if(this.indicators.zTrailingStop.shouldSell)
    {
      this.indicators.zTrailingStop.short(candle.close);
      return this.advice('short');
    }

    const result = this.indicators.STC.result;
    const previousResult = this.indicators.STC.previousResult;
    //up from 25 to indicate a long or turns down from 75 to indicate a short.
    const longConditions = [
      this.trend !== 'long',
      result >= this.threshold_low,
      previousResult < this.threshold_low,
      result > this.threshold_high + this.threshold_adjustment
      ].reduce((total, long) => long && total, true);

    const shortConditions = [
      this.trend !== 'short',
      result <= this.threshold_high,
      previousResult > this.threshold_high,
      result < this.threshold_low - this.threshold_adjustment
      ].reduce((total, short) => short && total, true);

    if(longConditions){
      this.trend = 'long';
      this.indicators.zTrailingStop.long(candle.close);
      this.advice('long');
    }
    else if(shortConditions){
      this.trend = 'short';
      this.indicators.zTrailingStop.short(candle.close);
      this.advice('short');
    }

  },

  end : function() {
    log.debug("Stoploss triggered: " + this.indicators.zTrailingStop.timesStopped + " times.")
  }
};

module.exports = strategy;
