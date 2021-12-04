const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name_en) {
        data.slug = slugify(data.name_en, {lower: true});
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name_en) {
        data.slug = slugify(data.name_en, { lower: true });
      }
    },
  },
};

