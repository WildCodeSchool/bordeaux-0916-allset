module.exports = {
    token : process.env.SECRET_TOKEN || 'secretToken',
    db : process.env.MONGODB_URI || 'mongodb://localhost:27017/allset',
    GMAIL_USER : process.env.GMAIL_USER,
    GMAIL_PASS : process.env.GMAIL_PASS
}
