class Log {
  static config(type, value) {
    const types = {
      'error'  : 'background-color: #D32F2F;',
      'success': 'background-color: #4CAF50;',
      'debug'  : 'background-color: #5C6BC0;',
      'warn'   : 'background-color: #FFA726;'
    }
    
    const style = 'color: white; line-height: 2; padding: 4px 8px; font-size: 13px; border-radius: 3px'

    let err = new Error().stack.split('\n')[3].trim().split(' ')[1].split(':')
    
    err = `${err[0]}:${err[1]-7}`
    
    console.log(`%c${err}`, `${types[type]}${style}`, value)
  }
  
  static error(value = '') {
    Log.config('error', value)
  }
  
  static success(value = '') {
    Log.config('success', value)
  }
  
  static debug(value = '') {
    Log.config('debug', value)
  }
  
  static warn(value = '') {
    Log.config('warn', value)
  }
}

module.exports = Log
