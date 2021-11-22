const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  if (trash === "waste") {
    bins.waste += 1;
  }
  if (trash === "recycling") {
    bins.recycling += 1;
  }
  if (trash === "compost") {
    bins.compost += 1;
  }
  return bins
};



console.log(smartGarbage('recycling', { waste: 10, recycling: 10, compost: 10 }));