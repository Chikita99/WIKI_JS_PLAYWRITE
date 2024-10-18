import { token, userBot } from '../fixture/apiFixture'

export async function loginWithApi(page) {
    const response = await page.request.get(
        'https://www.mediawiki.org/w/api.php',
        {
            params: {
                action: token.action,
                meta: token.meta,
                type: token.type,
                format: token.format,
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
                action: userBot.action,
                lgname: userBot.lgname,
                lgpassword: userBot.lgpassword,
                lgtoken: loginToken,
                format: userBot.format,
            },
        }
    )

    const loginData = await loginResponse.json()

    if (loginData.login?.result !== 'Success') {
        throw new Error('Unable to log in: ' + loginData.login?.result)
    }

    return loginData
}
