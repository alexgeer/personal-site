
import awsconfig from "../aws-exports";


function getAmplify () 
{
    return import(/* webpackChunkName: "@aws-amp" */ '@aws-amplify/core').then(async function(mod) {
        return mod.default
    })
}

function getAPI () {
    return import(/* webpackChunkName: "@aws-api" */ '@aws-amplify/api').then((async ({ default: API }) => {
        let Amplify = await getAmplify()
        Amplify.configure(awsconfig)
        return API
    }))
}

export default getAPI
