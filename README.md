# Gekko Schaff Trend Cycle
Schaff Trend Cycle Indicator for Gekko

# Install
copy the file(s) from /strategies/ into the strategies folder of your gekko install
copy the file(s) from /toml/ into the /config/strategies/ folder of your gekko install

# Usage / Configuration

Install the modules in your gekko folder:
`npm install mathjs`

config.tradingAdvisor = {
  enabled: true,
  method: 'SchaffTrendCycle',
  candleSize: 15,
  historySize: 10,
}
config.SchaffTrendCycle = {
  length: 10,
  fastLength: 23,
  slowLength: 50,
  factor: 0.5,
  threshold_high: 80,
  threshold_low: 20
}


If this strategy is useful for you and generates profits. Buy me a coffee, or two:
 
ETH 0xeb969152217062760104b2e17545647e05f1673b

BTC 16k9vwf4vDfF9ufnuu91WDjheVokPjh2X4

NANO xrb_3boer7rzaewcn583jrfid687znn5ncagp7tqi97pjnupxpr8ep6aor1dqrzy