export const queryParse = (queryStr = '?') => {
  let queryObj = {};
  const spaceRegex = /(%20)|(\+)/g;
  if (queryStr.slice(1)) {
    const queryArr = queryStr.slice(1).split('&');
    queryArr.forEach(q => {
      const key = q.split('=')[0].toLowerCase();
      let value;
      if (q.split('=').length === 1) {
        value = true;
      } else {
        value = q.split('=')[1].replace(spaceRegex, ' ');
      };
      queryObj = { ...queryObj, [key]: value };
    });
  };
  return queryObj;
};

export const queryStringify = (queryObj = {}) => {
  let queryStr = '';
  if (Object.keys(queryObj).length) {
    for (let q in queryObj) {
      if (!queryStr) {
        queryStr = `?${q}=${queryObj[q]}`;
      } else {
        queryStr = `${queryStr}&${q}=${queryObj[q]}`;
      };
    };
  };
  return queryStr;
};
