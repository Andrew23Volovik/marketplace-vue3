const createChips = (obj) => {
  const arrChips = [obj.date, obj.series];
  if (obj.technicalDetails.screen.hdr) {
    arrChips.push('HDR');
  }

  obj.technicalDetails.features.features.forEach((el) => arrChips.push(el));

  return arrChips;
};

const createShortDetails = (obj) => {
  return {
    screen: `${obj.technicalDetails.screen.displaySize}", ${obj.technicalDetails.screen.resolution}`,
    'the matrix': obj.technicalDetails.screen.panelType,
    functions: obj.technicalDetails.features.features.join(', '),
    connection: obj.technicalDetails.connectors.connections.join(', '),
  };
};

const capitalizeFirstLetter = (str) => {
  const split = str.replace(/([A-Z])/g, ' $1').toLowerCase();
  return split.charAt(0).toUpperCase() + split.slice(1);
};

const checkArray = (item) => {
  if (Array.isArray(item)) return item.join(', ');
  return item;
};

export { createChips, createShortDetails, capitalizeFirstLetter, checkArray };
