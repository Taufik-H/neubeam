const componentsContext = require.context("@/ui/", true, /\.jsx$/);

export const getComponentsData = () => {
  const categories = {};

  componentsContext.keys().forEach((filePath) => {
    // Process only paths that start with './'
    if (filePath.startsWith("./")) {
      const category = filePath.split("/")[1];

      if (!categories[category]) {
        categories[category] = 0;
      }

      categories[category]++;
    }
  });

  return Object.entries(categories).map(([label, count]) => ({ label, count }));
};
