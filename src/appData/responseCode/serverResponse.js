module.exports.serverResponse = {
    server : {
        success: 200,
        created: 201,
        accepted: 202,
        nonAuthInfo: 203,
        noContent: 204,
        resetContent: 205,
        movedPermanently: 301,
        temporaryRedirect: 307,
        permanentRedirect: 308,
        internalServerError: 500,
        notImplemented: 501,
        serviceUnavailable: 503,
    },
    client: {
        badRequest: 400,
        unAuthorized: 401,
        PaymentRequired: 402,
        forbidden: 403,
        notFound: 404,
        requestTimeout: 408
    }
}