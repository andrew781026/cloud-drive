// 參考資料 : https://apollo.vuejs.org/guide/installation.html#_1-apollo-client

// use apollo-boost generate an apolloClient
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

// Install the plugin into Vue
import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo);

// The provider holds the Apollo client instances that can then be used by all the child components.
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

export default apolloProvider;