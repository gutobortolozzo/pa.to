const regexValidLink = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

const regexValidFtp = /^(ftp|http|https):\/\/[^ "]+$/;

const regexValidMagnetLink = /magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i;

module.exports.isValidLink = (link) => {
    return regexValidLink.test(link) || regexValidFtp.test(link) || regexValidMagnetLink.test(link);
};