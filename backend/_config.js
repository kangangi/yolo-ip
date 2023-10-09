var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://kangangi:adminpass@cluster0.jsqhtza.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://kangangi:adminpass@cluster0.jsqhtza.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://kangangi:adminpass@cluster0.jsqhtza.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
