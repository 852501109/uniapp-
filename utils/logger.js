
const log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;

const logger = {
  debug() {
    if (!log) return;
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    log.debug.apply(log, arguments);
  },
  info() {
    if (!log) return;
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    log.info.apply(log, arguments);
  },
  warn() {
    if (!log) return;
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    log.warn.apply(log, arguments);
  },
  error() {
    if (!log) return;
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    log.error.apply(log, arguments);
  },
  setFilterMsg(msg) {
    // 从基础库2.7.3开始支持
    if (!log || !log.setFilterMsg) return;
    if (typeof msg !== 'string') return;
    log.setFilterMsg(msg);
  },
  addFilterMsg(msg) {
    // 从基础库2.8.1开始支持
    if (!log || !log.addFilterMsg) return;
    if (typeof msg !== 'string') return;
    log.addFilterMsg(msg);
  }
};

export default logger;
