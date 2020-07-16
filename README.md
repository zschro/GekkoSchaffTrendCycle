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
