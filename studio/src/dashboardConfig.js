export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3b1d4abd26fa69a61ac4b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1r7yygs6',
                  apiId: '7b2867d5-8823-471c-8b6d-0e2517fd545e'
                },
                {
                  buildHookId: '5f3b1d4a534d5d897185d07b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1882hr3o',
                  apiId: 'e948e6e6-6d76-45e2-acee-ed57d10a89d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brob/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1882hr3o.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
