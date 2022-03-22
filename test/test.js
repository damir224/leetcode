const queryObjectify = (data) => {
  const rootObject = {};
  for (let i = 0; i < data.length; i++) {
    let indicator = rootObject;
    const array = data[i].node.relativeDirectory.split('/')
    for (let k = 0; k < array.length; k++) {
      if (!indicator[array[k]]) {
        indicator[array[k]] = {};
        if(k === array.length-1){
          if(!Array.isArray(indicator[array[k]])) {
            indicator[array[k]] = []
          }
          indicator[array[k]].push(data[i].node.name)
        }
      } else if(k === array.length-1) {
        if(!Array.isArray(indicator[array[k]])) {
          indicator[array[k]] = []
        }
        indicator[array[k]].push(data[i].node.name)
      }
      indicator = indicator[array[k]]; 
    }   
  }

  return rootObject
};

const data = [
  {
    node: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/png;base64,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',
          },
          images: {
            fallback: {
              src: '/static/f63cbedb7919febd1964d5d766599999/fc4a5/akim-ava.png',
              srcSet:
                '/static/f63cbedb7919febd1964d5d766599999/c27bc/akim-ava.png 11w,\n/static/f63cbedb7919febd1964d5d766599999/4b259/akim-ava.png 21w,\n/static/f63cbedb7919febd1964d5d766599999/fc4a5/akim-ava.png 42w',
              sizes: '(min-width: 42px) 42px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/f63cbedb7919febd1964d5d766599999/32806/akim-ava.webp 11w,\n/static/f63cbedb7919febd1964d5d766599999/8bc71/akim-ava.webp 21w,\n/static/f63cbedb7919febd1964d5d766599999/544ae/akim-ava.webp 42w',
                type: 'image/webp',
                sizes: '(min-width: 42px) 42px, 100vw',
              },
            ],
          },
          width: 42,
          height: 42,
        },
      },
      relativeDirectory: 'onlineNew/stories',
      name: 'akim-ava',
    },
  },
  {
    node: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeElEQVQ4y1XUC0xTVxgH8LOHM9sUnU4Ey6uFAtpSeVTtkAIylThlTibxRcx0PnDqhkuIOHUEUSdDmUx8DB9MBzJFKWUCYxVWwPIQBSV0iFOJAcQVFbAUCr33+y+302w7yXdv7jnn++U7+U4uA8CE4HmeDQ5a2Ivv1wAohqzW5Nr6+ivHjx2vMtTUXmu7d+9ia2trPADX+LjNL/f+L+wPImI2m+0l7A9AYzKZsHvXTki9xHB3E8FfIbOHOiQYGq1mGEAmAGchx2J+wnheMEgAyQ4KCxzHLQVA3d3d+HzTRl4uFZPKX0aRahXFRi+khWEqUgX4kcxXyp07dxYAugGECrkjA1bGcf8BX2CcZWCAS92TzAf5+mDp3FCqPJtOPfW/oOf6FbTrcmhPXCyFzQoiifsUrrxCRwDMPEfBdtT275G9iIQ1cA31dTR31kxEzFJS6pcbYGszoPdWBfpvVaCvqQKNF49j9aL5NNXTEyuXL+H/MpmEvLtPe/sncAJIRK8T0SVh1mIx84f270X4DCV9NCcEujPpQGczrH/ewPD9Rgy21mLIWImMHZsRHDid/Lw9caOhwSaUYrVx8famEJEvEVkA8F0dHRQ9P4LeCwrAssgIlJw8jLv6IvQZ69HXUodbxXm4WZSDSxkpWKBWwVM0hU4cOUwWyxDP8ejiR7gxAvgF/hlUW12F8EA5QpRBWKRWYfuaWGRs34IHvxeiXa9FZuJmpGxZj1PJCVgcocZUsQfWropBV0cnb7MJVdrCBDBf0KxWK2WmHaAFISqEKAMQHT4bB+PjUJSRgo7qQjwoz0fZsQM4vWcndFmp2BQTBbmnB1ZEhlNDjYGGrDYMDY/sEECDAD7v76Nt69ZgXrAK4UEB2Lk+FreL82AsycOjuhLcr8hHY8GPaCz6Ge2VhTjyVTwCfaVYOX8OCvJy6fnAIKzDtn0CWCaAfb1PKGZeKFTTFVisVuPSt8nAw2Y8aSjDs0YdumqK0VmtxWCrARZjNXSnDyN0ugxKmTfSUpKot9cM6wj/jQDm2vt+p5VUUyWknOaDJeGzUXY0FZyxDj3XCtF+NRctRdl4WJYLc1M5HtcWQ599CCsiVHB1HE9rY5eRyfQMIyOIF+7hRgHUlZXRVFdnkklcERooQ+mJNDy7XozOqnx06DVou/ITjNrT6NRfRNc1LbL3JyIsUI7J48dg7epVvMn0VGD8BNCR5/nhs2dOcgpvMdycHcnHTYTcg1+jp1aLlvyTaMs9h+asY7h+NgPtFXnoayrH1tgYiCZNJKdxYyj7VBbf++z5bQCjmTAGLObMlKSdkEvFnJfIGQ5j3qLPVkXD3FiGzqsX8LA4F/e02Wj/9Ry6DRroz5+AOkBGThMc4Pru2OFirQb9/YNRleWljIneHMUKLuRMjo58/65c7Ao/dxfunXEO8HJ3oZy0XXh++yosLVUYaKlEZ/Vl3NZkIXHNx6QQO8PXVTTi5y5C+v69JUJ1pVoNY4cPJbHv079jcrFLsJ/YzayQuGDyhAk2FydHSk3YgO66IrqjO4+7ulyquZBBNwoyacen0TRdIhpWSDwQ6CMp+XBOiNNMua/9tGz5ggX2d+QMfxboKVZ6uznrx419G+4iR+6HfQl8v1FPnfXF1FGjpVbdebpfdZkyEtfzfh7OkLo4XwgOkk9avTTabiQlJjD2gTKYKaXebNRoxlwnTWQz5F7jGGPbIkMCuppLs9FrrEafsRpPmvXoqC/Fg2saFB5PbpirnLaYMfaGAAk/hah54WzLuk8Ymx0mZV5TnNg0iYjNkLiw0a++woDHLDs1wcHU/Juqt9Ww1dxWl9r3h2H3o6byuAcGreJm/tE3hHbKJCK2OkrN5F7uTCF1Z4G+EvY3m9r1QQe3ECMAAAAASUVORK5CYII=',
          },
          images: {
            fallback: {
              src: '/static/5f638ace729a3849f749f9d729602065/4b259/gayane-ava.png',
              srcSet:
                '/static/5f638ace729a3849f749f9d729602065/549c4/gayane-ava.png 5w,\n/static/5f638ace729a3849f749f9d729602065/c27bc/gayane-ava.png 11w,\n/static/5f638ace729a3849f749f9d729602065/4b259/gayane-ava.png 21w',
              sizes: '(min-width: 21px) 21px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/5f638ace729a3849f749f9d729602065/fadb2/gayane-ava.webp 5w,\n/static/5f638ace729a3849f749f9d729602065/32806/gayane-ava.webp 11w,\n/static/5f638ace729a3849f749f9d729602065/8bc71/gayane-ava.webp 21w',
                type: 'image/webp',
                sizes: '(min-width: 21px) 21px, 100vw',
              },
            ],
          },
          width: 21,
          height: 21,
        },
      },
      relativeDirectory: 'onlineNew/stories',
      name: 'gayane-ava',
    },
  },
  {
    node: {
      childImageSharp: null,
      relativeDirectory: 'onlineNew/logos',
      name: 'mail',
    },
  },
  {
    node: {
      childImageSharp: null,
      relativeDirectory: 'onlineNew/logos',
      name: 'alfa',
    },
  },
  {
    node: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          placeholder: {
            fallback:
              'data:image/png;base64,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',
          },
          images: {
            fallback: {
              src: '/static/185fed0852d462613761b3107c836d03/875ac/nikitin.png',
              srcSet:
                '/static/185fed0852d462613761b3107c836d03/d3986/nikitin.png 78w,\n/static/185fed0852d462613761b3107c836d03/b3992/nikitin.png 155w,\n/static/185fed0852d462613761b3107c836d03/875ac/nikitin.png 310w',
              sizes: '(min-width: 310px) 310px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/185fed0852d462613761b3107c836d03/8e8b0/nikitin.webp 78w,\n/static/185fed0852d462613761b3107c836d03/b2d9a/nikitin.webp 155w,\n/static/185fed0852d462613761b3107c836d03/2f73c/nikitin.webp 310w',
                type: 'image/webp',
                sizes: '(min-width: 310px) 310px, 100vw',
              },
            ],
          },
          width: 310,
          height: 558,
        },
      },
      relativeDirectory: 'onlineNew/stories',
      name: 'nikitin',
    },
  },
  {
    node: {
      childImageSharp: null,
      relativeDirectory: 'onlineNew/logos',
      name: 'sber',
    },
  },
];
console.log('queryObjectify(data)', queryObjectify(data))
