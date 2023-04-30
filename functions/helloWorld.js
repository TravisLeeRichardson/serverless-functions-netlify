/*
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!'
        })
    }
}*/
exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" })
        };
    }

    try {
        const requestBody = JSON.parse(event.body);
        const message = requestBody.message;

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Your message is: ${message}!`
            })
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
