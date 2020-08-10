'use strict';

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          title: '',
          level: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
