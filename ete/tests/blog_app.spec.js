const { test, expect, describe, beforeEach } = require('@playwright/test')
const { loginWith } = require('./helper')

describe('Blog app', () => {
    beforeEach(async ({ page, request }) => {
        await request.post('http://localhost:3003/api/testing/reset')
        await request.post('http://localhost:3003/api/users', {
            data: {
                name: 'Dilly Dilly',
                username: 'dillydilly',
                password: 'dillydilly'
            }
        })

        await page.goto('http://localhost:5173')
    })

    test('Login form is shown', async ({ page }) => {
        const locator = await page.getByText('Log in to application')
        await expect(locator).toBeVisible()
    })

    describe('login', () => {

        test('succeeds with correct credentials', async ({ page }) => {
            await loginWith(page, 'dillydilly', 'dillydilly')
            await expect(page.getByText('Dilly Dilly is logged in')).toBeVisible()
        })

        test('fails with incorrect credentials', async ({ page }) => {
            await loginWith(page, 'dillydilly', 'meep')
            await expect(page.getByText('Wrong username and/or password')).toBeVisible()
        })
    })

})