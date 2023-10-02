module.exports = {
    env: 'dev',
    port: {
        dev: 8080
    },
    database: {
        dev: {
            connectionURL: 'mongodb://localhost:27017/groceries-corner'
        },
        prod: {
            connectionURL: 'mongodb://localhost:27017/groceries-corner'
        }
    },
    JWT_SECRET_KEY: 'groceries_corner_secret_key',
    errors: {
        somethingWrong: 'Something went wrong !',
        userExist: 'Mobile Number already exist !',
        userNotFound: 'User not found !',
        incorrectPassword: 'Incorrect Password !'
    }
}