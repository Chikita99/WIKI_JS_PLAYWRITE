export async function loginWithApi(page) {
    const response = await page.request.get(
        'https://www.mediawiki.org/w/api.php',
        {
            params: {
                action: 'query',
                meta: 'tokens',
                type: 'login',
                format: 'json',
            },
        }
    )
    const data = await response.json()

    if (!data.query?.tokens?.logintoken) {
        throw new Error('Unable to get token')
    }
    const loginToken = data.query.tokens.logintoken

    const loginResponse = await page.request.post(
        'https://www.mediawiki.org/w/api.php',
        {
            form: {
                action: 'login',
                lgname: 'Chikitas99@BotChikita99',
                lgpassword: 'q5mfe8e17t2s35v2stqntouqt05v0tf7',
                lgtoken: loginToken,
                format: 'json',
            },
        }
    )

    const loginData = await loginResponse.json()

    if (loginData.login?.result !== 'Success') {
        throw new Error('Unable to log in: ' + loginData.login?.result)
    }

    return loginData
}
