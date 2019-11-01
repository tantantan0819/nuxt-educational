import crypto from 'crypto';

export function md5(str) {
  var md5Sum = crypto.createHash('md5')
  md5Sum.update(str)
  return md5Sum.digest('hex');
}
