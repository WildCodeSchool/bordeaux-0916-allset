module.exports = {
    token : process.env.SECRET_TOKEN || 'secretToken',
    db : process.env.MONGODB_URI || 'mongodb://localhost:27017/allset',
    sendgrid_api_key : process.env.SENDGRID_API_KEY || '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'
}
