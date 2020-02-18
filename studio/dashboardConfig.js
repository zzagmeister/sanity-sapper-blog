export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4b5960a943050703772123',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-kiu4cmpe',
                  apiId: '01fb41f7-6353-42b0-b954-f8b73e75198e'
                },
                {
                  buildHookId: '5e4b5960e4396790cdc4f973',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pgvzv86w',
                  apiId: '9037fa8b-3544-451a-bb58-788472283c46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zzagmeister/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pgvzv86w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
