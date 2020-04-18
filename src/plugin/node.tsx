import Plugin from 'award-plugin';

const handleInclude = (include: any, filePath: string) => {
  if (typeof include === 'function') {
    // console.log('fun');
    return include(filePath);
  }
  if (typeof include === 'string') {
    // console.log('string');
    return filePath === include;
  }
  if (include instanceof RegExp) {
    // console.log('regexp');
    return include.test(filePath);
  }
  return false;
};

export default class extends Plugin.Node {
  public apply() {
    const include = this.options.include;
    this.build((hooks) => {
      hooks.babelInclude(function (filePath) {
        if (include) {
          if (Array.isArray(include)) {
            let needInclude = false;
            for (let i = 0; i < include.length; i++) {
              const item = include[i];
              if (handleInclude(item, filePath)) {
                needInclude = true;
                break;
              }
            }
            return needInclude;
          } else {
            return handleInclude(include, filePath);
          }
        }
        return false;
      });
    });
  }
}
