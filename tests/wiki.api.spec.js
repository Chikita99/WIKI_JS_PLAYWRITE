import { test } from '../fixture/baseFixture'
import { expect } from '@playwright/test'
import { loginWithApi } from '../api/loginApi'

test('Login check', async ({ page }) => {
    const loginData = await loginWithApi(page)
    expect(loginData.login.lgusername).toBe('Chikitas99')
})
