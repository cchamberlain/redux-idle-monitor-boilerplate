import { getDevTool } from './devtool'
import { getTarget } from './target'
import { getEntry } from './entry'
import { getOutput } from './output'
import { getResolve, getResolveLoader } from './resolve'
import { getLoaders, getPostLoaders } from './loaders'
import { getExternals } from './externals'
import { getPlugins } from './plugins'
import { getPostcss } from './postcss'

function make(name) {
  if(typeof name !== 'string')
    throw new Error('Name is required.')
  let target = getTarget(name)
  return  { name
          , target
          , devtool: getDevTool(name)
          , cache: true
          , context: __dirname
          , entry:  getEntry(name)
          , output: getOutput(name)
          , resolve: getResolve(name)
          , resolveLoader: getResolveLoader(name)
          , module: { loaders: getLoaders(name)
                    , postLoaders: getPostLoaders(name)
                    , noParse:  [ require.resolve('../src/app/external/jquery/jquery-git')
                                , require.resolve('../src/app/external/jquery/jquery-migrate-git')
                                , require.resolve('../src/app/external/jquery/jquery-ui')
                                //, require.resolve('../src/app/external/jquery/jquery-placeholder')
                                ]
                    }
          , externals: getExternals(name)
          , plugins: getPlugins(name)
          , node: target === 'web' ? { fs: 'empty', 'graceful-fs': 'empty' } : {}
          , postcss: getPostcss(name)
          }
}

module.exports = make
module.exports['default'] = make
