export default [
  {
    url: '/api-dev/user/list',
    method: 'get',
    response: (req) => {
      return {
        code: 0,
        data: [
          { id: 1, name: 'coboy' },
          { id: 2, name: 'cobyte' },
        ],
      }
    },
  },
]
