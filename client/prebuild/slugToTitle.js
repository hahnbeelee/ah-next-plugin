export const slugToTitle = (slug) => {
  const slugArr = slug.split('/');
  let defaultTitle = slugArr[slugArr.length - 1].split('-').join(' '); //replace all dashes
  defaultTitle = defaultTitle.split('_').join(' '); //replace all underscores
  defaultTitle = defaultTitle.charAt(0).toUpperCase() + defaultTitle.slice(1); //capitalize first letter
  return defaultTitle;
};
