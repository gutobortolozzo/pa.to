const isProduction = process.env.NODE_ENV == "production";
const IncomingWebhook = require('@slack/client').IncomingWebhook;

const url = process.env.SLACK_WEBHOOK_URL || '';

const webhook = new IncomingWebhook(url);

module.exports.shortened = (url, key, shortenedUrl) => {

    if(!isProduction) return;

    const message = {
        "text": "Shortened",
        "attachments": [
            {
                "title": "URL",
                "text": `${url}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            },
            {
                "title": "Key",
                "text": `${key}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            },
            {
                "title": "Shortened URL",
                "text": `${shortenedUrl}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            }
        ]
    };

    webhook.send(message, (err) => {
        if (err) {
            console.log('Error:', err);
        }
    });
};

module.exports.accessed = (key, city, country, platform) => {

    if(!isProduction) return;

    const message = {
        "text": "Accessed",
        "attachments": [
            {
                "title": "Key",
                "text": `${key}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            },
            {
                "title": "Country",
                "text": `${country}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            },
            {
                "title": "City",
                "text": `${city}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            },
            {
                "title": "Platform",
                "text": `${platform}`,
                "mrkdwn_in": [
                    "text",
                    "pretext"
                ]
            }
        ]
    };

    webhook.send(message, (err) => {
        if (err) {
            console.log('Error:', err);
        }
    });
};