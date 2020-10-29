// ref - https://www.apollographql.com/docs/apollo-server/getting-started/
const {ApolloServer, gql} = require('apollo-server');
const fs = require('fs');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    scalar Date

    # This "Book" type defines the queryable fields for every book in our data source.
    type File {
        name:String,
        size:Int,
        createTime:Date,
        modifyTime: Date,
        isDirectory: Boolean,
        isFile:Boolean,
        isSymbolicLink: Boolean,
    }

    # Query 定義
    type Query {
        "取得資料夾檔案內容"
        files(directory: String): [File]
    }

    # Mutation 定義
    type Mutation {
        "新增檔案"
        addFile(filePath: String,base64String: String): String
    }
`;

const {listFileInTargetDirectory} = require('./utils/fileUtils');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        files: (root, args, context) => {

            const {directory} = args;

            console.log(directory);
            return listFileInTargetDirectory(directory);
        },
    },
    Mutation: {
        addFile: (root, args, context) => {

            const {filePath, base64String} = args;

            // Remove header
            let data = base64String.split(';base64,').pop();

            fs.writeFileSync(filePath, data, {encoding: 'base64'});

            return 'success'
        },
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
