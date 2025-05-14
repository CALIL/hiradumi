import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('test', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.useFakeTimers()
        // vi.spyOn(global, 'setTimeout')
    })

    it('test', async () => {
        expect(true).toBe(true)
    })
})